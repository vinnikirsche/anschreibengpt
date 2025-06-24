import BorderBox from '../components/BorderBox';
import { useEffect } from 'react';
import LegalSection from './components/legalSection';
import { 
  Heading, 
  Text, 
  VStack, 
  UnorderedList, 
  ListItem, 
  Link,
  Box
} from '@chakra-ui/react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BorderBox>
      <VStack maxW='4xl' mx='auto' p={6} spacing={6} align='flex-start'>
        <Heading as='h1' size='xl' mb={6}>Nutzungsbedingungen</Heading>
        <Text fontSize='sm' color='gray.600' mb={6}>Last updated: {new Date().toLocaleDateString()}</Text>

        <LegalSection title='1. Unternehmensangaben (Impressum)'>
          <Text>
           GbR
            <br />
            Deutschland
            <br />
            E-Mail: @gmail.com
            <br />
             GbR
          </Text>
        </LegalSection>

        <LegalSection title='2. Leistungsbeschreibung'>
          <Text>
            CoverLetterGPT ist eine SaaS-Anwendung, die KI-Technologie nutzt, um Nutzern Beispielanschreiben auf Basis ihres Lebenslaufs und von Stellenbeschreibungen zu erstellen. Der Dienst wird in Deutschland betrieben und unterliegt deutschem Recht.
          </Text>
        </LegalSection>

        <LegalSection title='3. Vertragsschluss'>
          <Text>Mit Ihrer Registrierung kommt unter deutschem Recht ein verbindlicher Vertrag mit der Canger & Shahab Crimpin GbR zustande. Der Vertrag gilt als geschlossen, sobald wir Ihre Anmeldung per E-Mail bestätigen.</Text>
        </LegalSection>

        <LegalSection title='4. Nutzerkonto und Datenschutz'>
          <Text>Zur Nutzung von CoverLetterGPT ist ein Benutzerkonto erforderlich. Sie müssen hierbei korrekte und vollständige Angaben machen und sind für die Geheimhaltung Ihrer Zugangsdaten verantwortlich.</Text>
        </LegalSection>

        <LegalSection title='5. Preise und Zahlungsbedingungen'>
          <Text>
            Die Preise werden, soweit möglich, in Ihrer lokalen Währung angezeigt, unsere Basiswährung ist jedoch EUR.
            Sämtliche Preise verstehen sich inklusive der gesetzlichen Steuern (z.B. Mehrwertsteuer für EU-Kunden).
            Die Abrechnung unserer Leistungen erfolgt monatlich. Ihr Abonnement verlängert sich automatisch,
            sofern es nicht mindestens einen Tag vor dem Verlängerungsdatum gekündigt wird.
          </Text>
          <UnorderedList mt={2} spacing={2} pl={5}>
            <ListItem>
              Angezeigte Preise werden anhand aktueller Wechselkurse in Ihre Währung umgerechnet
            </ListItem>
            <ListItem>
              Der endgültige Betrag kann aufgrund von Wechselkursschwankungen und Umrechnungsgebühren geringfügig abweichen
            </ListItem>
            <ListItem>
              Für EU-Kunden enthalten die Preise die gesetzliche Mehrwertsteuer
            </ListItem>
            <ListItem>
              Für Kunden außerhalb der EU können je nach lokalen Vorschriften weitere Steuern anfallen
            </ListItem>
          </UnorderedList>
        </LegalSection>

        <LegalSection title='6. Widerrufsrecht und Muster-Widerrufsformular'>
          <VStack spacing={6} align='stretch'>
            <Box>
              <Text>
                Als Verbraucher innerhalb der EU haben Sie das Recht, diesen Vertrag innerhalb von
                14 Tagen ohne Angabe von Gründen zu widerrufen. Die Widerrufsfrist endet 14 Tage nach
                dem Tag des Vertragsschlusses.
              </Text>
              
              <Text mt={4}>
                Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung
                (z.B. ein Brief per Post oder E-Mail) über Ihren Entschluss informieren. Sie können dafür
                das nachstehende Muster-Widerrufsformular verwenden, was jedoch nicht vorgeschrieben ist.
              </Text>

              <Text mt={4}>
                Zur Wahrung der Frist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts
                vor Ablauf der Widerrufsfrist absenden.
              </Text>

              <Text mt={4}>
                Folgen des Widerrufs: Wenn Sie diesen Vertrag widerrufen, erstatten wir Ihnen alle Zahlungen,
                einschließlich der Lieferkosten (mit Ausnahme zusätzlicher Kosten, die sich daraus ergeben,
                dass Sie eine andere Art der Lieferung als die von uns angebotene günstigste Standardlieferung
                gewählt haben), unverzüglich und spätestens binnen 14 Tagen ab dem Tag, an dem die Mitteilung
                über Ihren Widerruf bei uns eingegangen ist.
              </Text>
            </Box>

            <Box p={4} borderWidth={1} borderRadius='lg' bg='bg-contrast-sm'>
              <Text fontWeight='semibold' mb={4}>Muster-Widerrufsformular</Text>
              <Text mb={4}>
                (Bitte senden Sie dieses Formular nur zurück, wenn Sie den Vertrag widerrufen möchten)
              </Text>
              <VStack align='stretch' spacing={4} color='text-contrast-lg'>
                <Box>
                  <Text fontWeight='medium'>An:</Text>
                  <Text>CGbR</Text>
                  <Text> Deutschland</Text>
                  <Text>gmail.com</Text>
                </Box>

                <Text>
                  Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung: CoverLetterGPT-Abonnement.
                </Text>

                <UnorderedList spacing={2} pl={4}>
                  <ListItem>Bestellt am (*)/erhalten am (*)</ListItem>
                  <ListItem>Name des/der Verbraucher(s)</ListItem>
                  <ListItem>Anschrift des/der Verbraucher(s)</ListItem>
                  <ListItem>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</ListItem>
                  <ListItem>Datum</ListItem>
                </UnorderedList>

                <Text fontSize='sm' fontStyle='italic'>(*) Unzutreffendes streichen.</Text>
              </VStack>
            </Box>

            <Text fontSize='sm' color='gray.600'>
              Zur Ausübung Ihres Widerrufsrechts können Sie das oben stehende Muster verwenden, dies ist jedoch nicht verpflichtend. Sie können uns Ihren Widerruf auch in anderer Form per E-Mail oder über unser Kontaktformular zukommen lassen.
            </Text>
          </VStack>
        </LegalSection>

        <LegalSection title='7. Streitbeilegung'>
          <Text>
            Die Europäische Kommission stellt unter https://ec.europa.eu/consumers/odr/ eine Plattform zur Online-Streitbeilegung bereit. Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </Text>
        </LegalSection>

        <LegalSection title='8. Anwendbares Recht'>
          <Text>Diese Bedingungen unterliegen deutschem Recht. Die Anwendung des UN-Kaufrechts ist ausgeschlossen.</Text>
        </LegalSection>

        <LegalSection title='9. Nutzung des Dienstes und Einschränkungen'>
          <Text>
            CoverLetterGPT bietet KI-gestützte Unterstützung bei der Erstellung von Anschreiben. Nutzer erkennen die folgenden Nutzungsbedingungen an:
          </Text>
          <UnorderedList spacing={2} pl={5}>
            <ListItem>
              Der Dienst dient ausschließlich zu Beispiel- und Lernzwecken. Die generierten Anschreiben sind lediglich Vorlagen.
            </ListItem>
            <ListItem>
              Nutzer sollten die AI-generierten Anschreiben nicht unverändert für Bewerbungen verwenden, sondern sie sorgfältig anpassen und prüfen.
            </ListItem>
            <ListItem>
              Wir behalten uns vor, den Zugang zum Dienst einzuschränken oder zu sperren, wenn Missbrauch oder Verstöße gegen diese Bedingungen festgestellt werden.
            </ListItem>
            <ListItem>
              Nutzer sind dafür verantwortlich, ihre Zugangsdaten geheim zu halten und ihr Konto nicht mit Dritten zu teilen.
            </ListItem>
          </UnorderedList>
        </LegalSection>

        <LegalSection title='10. Haftungsausschluss'>
          <Text>
            Soweit gesetzlich zulässig, gilt Folgendes:
          </Text>
          <UnorderedList spacing={2} pl={5}>
            <ListItem>
              Die von unserem Dienst erzeugten Anschreiben werden ohne Gewähr bereitgestellt.
            </ListItem>
            <ListItem>
              Wir übernehmen keine Haftung für Inhalt, Richtigkeit oder Eignung der generierten Anschreiben für einen bestimmten Zweck, insbesondere nicht für Bewerbungen.
            </ListItem>
            <ListItem>
              Die Verwendung, Anpassung oder Einreichung der Anschreiben erfolgt auf eigene Verantwortung der Nutzer.
            </ListItem>
            <ListItem>
              Wir haften nicht für direkte oder indirekte Folgen der Nutzung unseres Dienstes, insbesondere nicht für:
              <UnorderedList mt={2} pl={5}>
                <ListItem>verpasste Jobchancen</ListItem>
                <ListItem>abgelehnte Bewerbungen</ListItem>
                <ListItem>Beeinträchtigung des beruflichen Rufs</ListItem>
                <ListItem>entgangene Einnahmen</ListItem>
                <ListItem>etwaige Falschdarstellungen in den generierten Inhalten</ListItem>
                <ListItem>technische Fehler oder Serviceunterbrechungen</ListItem>
                <ListItem>Datenverlust oder Sicherheitsverletzungen</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Trotz größter Sorgfalt kann AI-generierter Inhalt Fehler oder unangemessene Passagen enthalten. Prüfen und bearbeiten Sie daher alle Texte vor einer Verwendung sorgfältig.
            </ListItem>
            <ListItem>
              Wir garantieren nicht, dass unser Dienst Ihre individuellen Anforderungen erfüllt oder mit speziellen Bewerbungsanforderungen kompatibel ist.
            </ListItem>
            <ListItem>
              Unsere Haftung ist, soweit gesetzlich zulässig, auf den Betrag beschränkt, den Sie im Monat vor dem Vorfall für den Dienst gezahlt haben.
            </ListItem>
            <ListItem>
              In einigen Rechtsordnungen sind bestimmte Haftungsbeschränkungen nicht zulässig; gegebenenfalls gelten die vorstehenden Ausschlüsse daher für Sie nicht.
            </ListItem>
          </UnorderedList>
          <Text mt={4} fontWeight='semibold'>
            Durch die Nutzung unseres Dienstes erkennen Sie diese Beschränkungen und Haftungsausschlüsse ausdrücklich an.
          </Text>
        </LegalSection>

        <LegalSection title='11. Geistiges Eigentum'>
          <UnorderedList spacing={2} pl={5}>
            <ListItem>
              Der Dienst einschließlich aller Software, Algorithmen und Oberflächen bleibt ausschließliches Eigentum der Canger & Shahab Crimpin GbR.
            </ListItem>
            <ListItem>
              Nutzer behalten die Rechte an ihren eigenen Daten und bearbeiteten Anschreiben; die von der KI generierten Vorlagen werden jedoch nur für die persönliche Nutzung unter einer einfachen Lizenz bereitgestellt.
            </ListItem>
            <ListItem>
              Eine Vervielfältigung, Verbreitung oder kommerzielle Nutzung des Dienstes oder seiner Ergebnisse ist ohne ausdrückliche schriftliche Genehmigung untersagt.
            </ListItem>
          </UnorderedList>
        </LegalSection>

        <LegalSection title="12. Sicherheit">
          <Text>
            CoverLetterGPT verarbeitet keine Zahlungen direkt auf der Website. Alle Zahlungen erfolgen sicher über Stripe als externen Zahlungsanbieter. Bei der Abwicklung gelten folgende Punkte:
          </Text>
          <UnorderedList spacing={2} pl={5}>
            <ListItem>
              Ihre Zahlungsinformationen werden nie auf unseren Servern gespeichert
            </ListItem>
            <ListItem>
              Sämtliche Transaktionen werden verschlüsselt und sicher von Stripe durchgeführt
            </ListItem>
            <ListItem>
              Stripe ist als PCI Service Provider Level 1 zertifiziert und erfüllt damit höchste Sicherheitsstandards
            </ListItem>
            <ListItem>
              Weitere Informationen zu den Sicherheitsmaßnahmen von Stripe finden Sie unter
              <Link
                href="https://stripe.com/docs/security"
                target="_blank"
                rel="noopener noreferrer"
                color="purple.600"
                _hover={{ color: 'purple.800' }}
                ml={1}
              >
                Stripes Sicherheitsdokumentation
              </Link>
            </ListItem>
          </UnorderedList>
        </LegalSection>
      </VStack>
    </BorderBox>
  );
};

export default TermsOfService;
