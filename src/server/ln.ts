import { type LnPayment } from 'wasp/entities';
import { HttpError } from 'wasp/server';
import {
  type DecodeInvoice,
  type UpdateLnPayment,
  type MilliSatsToCents,
} from 'wasp/server/operations';
import bolt11 from 'bolt11';
import axios from 'axios';

export type LightningInvoice = {
  status: string;
  successAction: {
    tag: string;
    message: string;
  };
  verify: string;
  pr: string;
};

export const decodeInvoice: DecodeInvoice<string, LightningInvoice & bolt11.PaymentRequestObject & { tagsObject: bolt11.TagsObject }> = async (pr, _context) => {
  const invoice = bolt11.decode(pr);
  return invoice as any;
};

export const updateLnPayment: UpdateLnPayment<LightningInvoice, LnPayment> = async (invoice, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  const updatedInvoice = await context.entities.LnPayment.upsert({
    where: {
      pr: invoice.pr,
    },
    create: {
      pr: invoice.pr,
      status: invoice.status,
      userId: context.user.id,
    },
    update: {
      status: invoice.status,
    },
  });

  return updatedInvoice;
};

const getBitcoinPrice = async () => {
  let response = null;

  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY!,
      },
    });
  } catch (error: any) {
    console.log('error calling coinmarket cap api: ', error.message);
    return null;
  }
  if (response) {
    const json = response.data.data[0].quote.USD.price;
    console.log(json);
    return json;
  }
};

export const milliSatsToCents: MilliSatsToCents<{ milliSats: number }, number> = async ({ milliSats }, _context) => {
  const bitcoinPrice = await getBitcoinPrice();
  if (bitcoinPrice === null) return 0;

  const dollarsPerSat = bitcoinPrice / 100_000_000; //
  const centsPerDollar = (milliSats / 1000) * dollarsPerSat;
  return centsPerDollar;
};

export function parseLightningAddress(callback: string): string {
  if (!callback) return '';
  const matches = callback.match(/lnurlp\/(.+)\/callback/);
  if (matches && matches.length > 1) {
    const [username, host] = matches[1].split('@');
    if (username && host) {
      return `${username}@${host}`;
    }
  }
  return '';
}
