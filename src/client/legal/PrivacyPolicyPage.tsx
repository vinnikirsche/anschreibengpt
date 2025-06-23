import BorderBox from '../components/BorderBox';
import { useEffect } from 'react';
import LegalSection from './components/legalSection';
import { 
  Heading, 
  Text, 
  VStack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BorderBox>
      <VStack maxW='4xl' mx='auto' p={6} spacing={6} align='flex-start'>
        <Heading as='h1' size='xl' mb={6}>Datenschutzerklärung</Heading>
        <Text fontSize='sm' color='gray.600' mb={6}>Last updated: {new Date().toLocaleDateString()}</Text>

        <LegalSection title='1. Einleitung'>
          <Text>
            Canger & Shahab Crimpin GbR ("wir" oder "uns") betreibt CoverLetterGPT.
            Diese Seite informiert Sie über unsere Richtlinien zur Erhebung,
            Nutzung und Offenlegung personenbezogener Daten, wenn Sie unseren Dienst
            nutzen, sowie über Ihre Wahlmöglichkeiten in Bezug auf diese Daten.
          </Text>
        </LegalSection>

        <LegalSection title='2. Verantwortlicher'>
          <Text>
            Verantwortlich für Ihre personenbezogenen Daten ist:
            <br />
            Canger & Shahab Crimpin GbR
            <br />
            Zum Steinberg 12, 69121 Heidelberg, Deutschland
            <br />
            E-Mail: info.crimpin@gmail.com
          </Text>
        </LegalSection>

        <LegalSection title='3. Welche Daten wir erheben'>
          <Text mb={4}>Wir erfassen unterschiedliche Kategorien personenbezogener Daten für verschiedene Zwecke:</Text>
          <UnorderedList spacing={4}>
            <ListItem>
              <Text fontWeight='semibold'>Kontodaten:</Text>
              <UnorderedList ml={6} mt={2} spacing={2}>
                <ListItem>E-Mail-Adresse</ListItem>
                <ListItem>Name</ListItem>
                <ListItem>Passwort (verschlüsselt)</ListItem>
                <ListItem>Profilinformationen</ListItem>
                <ListItem>Kontoeinstellungen</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text fontWeight='semibold'>Nutzungsdaten:</Text>
              <UnorderedList ml={6} mt={2} spacing={2}>
                <ListItem>Zugriffszeiten und -daten</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text fontWeight='semibold'>Inhaltsdaten:</Text>
              <UnorderedList ml={6} mt={2} spacing={2}>
                <ListItem>Von Ihnen bereitgestellte Lebenslaufdaten</ListItem>
                <ListItem>Von Ihnen eingegebene Stellenbeschreibungen</ListItem>
                <ListItem>Generierte Beispielanschreiben</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text fontWeight='semibold'>Zahlungsdaten:</Text>
              <UnorderedList ml={6} mt={2} spacing={2}>
                <ListItem>Zahlungshistorie</ListItem>
                <ListItem>Abonnementstatus</ListItem>
                <ListItem>Hinweis: Die Zahlungsabwicklung erfolgt über Stripe</ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </LegalSection>

        <LegalSection title='4. Wie wir Ihre Daten verwenden'>
          <UnorderedList spacing={4}>
            <ListItem>
              <Text fontWeight='semibold'>Zur Bereitstellung unseres Dienstes:</Text>
              <UnorderedList ml={6} mt={2} spacing={2}>
                <ListItem>Personalisierte Anschreiben generieren</ListItem>
                <ListItem>Ihr Konto verwalten</ListItem>
                <ListItem>Ihre Zahlungen abwickeln</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text fontWeight='semibold'>Zur Verbesserung unseres Dienstes:</Text>
              <UnorderedList ml={6} mt={2} spacing={2}>
                <ListItem>Nutzungsmuster analysieren</ListItem>
                <ListItem>Technische Probleme beheben</ListItem>
                <ListItem>Benutzererfahrung verbessern</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text fontWeight='semibold'>Zur Kommunikation mit Ihnen:</Text>
              <UnorderedList ml={6} mt={2} spacing={2}>
                <ListItem>Service-Updates versenden</ListItem>
                <ListItem>Auf Ihre Anfragen reagieren</ListItem>
                <ListItem>Kundensupport bieten</ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </LegalSection>

        <LegalSection title='5. Rechtsgrundlagen der Verarbeitung'>
          <UnorderedList spacing={4}>
            <ListItem>
              <Text fontWeight='semibold' as='span'>Vertragserfüllung: </Text>
              Verarbeitung, die für die Erfüllung unseres Vertrags mit Ihnen erforderlich ist
            </ListItem>
            <ListItem>
              <Text fontWeight='semibold' as='span'>Gesetzliche Verpflichtungen: </Text>
              Verarbeitung, die zur Einhaltung gesetzlicher Pflichten notwendig ist
            </ListItem>
            <ListItem>
              <Text fontWeight='semibold' as='span'>Berechtigte Interessen: </Text>
              Verarbeitung aufgrund unserer berechtigten Interessen an der Verbesserung und Vermarktung unserer Dienste
            </ListItem>
            <ListItem>
              <Text fontWeight='semibold' as='span'>Einwilligung: </Text>
              Verarbeitung auf Grundlage Ihrer ausdrücklichen Einwilligung, sofern erforderlich
            </ListItem>
          </UnorderedList>
        </LegalSection>

        <LegalSection title='6. Speicherdauer'>
          <Text mb={4}>
            Wir bewahren Ihre personenbezogenen Daten nur so lange auf, wie dies zur Erfüllung
            der Zwecke erforderlich ist, für die wir sie erhoben haben:
          </Text>
          <UnorderedList spacing={2}>
            <ListItem>Kontodaten: solange Ihr Konto aktiv ist</ListItem>
            <ListItem>Generierte Inhalte: solange notwendig zur Bereitstellung unserer Dienste oder bis zur Löschung Ihres Kontos</ListItem>
            <ListItem>Zahlungsnachweise: gemäß steuerrechtlichen Vorgaben (in Deutschland meist 10 Jahre)</ListItem>
          </UnorderedList>
        </LegalSection>

        <LegalSection title='7. Ihre Datenschutzrechte'>
          <Text mb={4}>Nach der DSGVO stehen Ihnen insbesondere folgende Rechte zu:</Text>
          <UnorderedList spacing={2} mb={4}>
            <ListItem>Auskunft über Ihre gespeicherten personenbezogenen Daten</ListItem>
            <ListItem>Berichtigung unrichtiger Daten</ListItem>
            <ListItem>Löschung Ihrer Daten ("Recht auf Vergessenwerden")</ListItem>
            <ListItem>Einschränkung der Verarbeitung</ListItem>
            <ListItem>Datenübertragbarkeit</ListItem>
            <ListItem>Widerspruch gegen die Verarbeitung</ListItem>
            <ListItem>Widerruf erteilter Einwilligungen</ListItem>
          </UnorderedList>
          <Text>
            Zur Ausübung dieser Rechte kontaktieren Sie uns bitte unter info.crimpin@gmail.com
          </Text>
        </LegalSection>

        <LegalSection title='8. Weitergabe von Daten an Dritte'>
          <Text mb={4}>Wir geben Ihre Daten an folgende Drittanbieter weiter:</Text>
          <UnorderedList spacing={4} mb={4}>
            <ListItem>
              <Text fontWeight='semibold' as='span'>Stripe: </Text>
              Zur Zahlungsabwicklung
            </ListItem>
            <ListItem>
              <Text fontWeight='semibold' as='span'>OpenAI: </Text>
              Für die KI-gestützte Inhaltserstellung
            </ListItem>
          </UnorderedList>
          <Text>
            Alle Dritten sind vertraglich verpflichtet, Ihre Daten zu schützen und
            sie nur zu den angegebenen Zwecken zu verwenden.
          </Text>
        </LegalSection>

        <LegalSection title='9. Internationale Datenübermittlungen'>
          <Text mb={4}>
            Ihre Daten können in Länder außerhalb der EU übermittelt und dort verarbeitet werden.
            Dabei stellen wir geeignete Schutzmaßnahmen sicher durch:
          </Text>
          <UnorderedList spacing={2}>
            <ListItem>EU-Standardvertragsklauseln</ListItem>
            <ListItem>Angemessenheitsbeschlüsse der Europäischen Kommission</ListItem>
            <ListItem>Andere gesetzlich anerkannte Übermittlungsmechanismen</ListItem>
          </UnorderedList>
        </LegalSection>

        <LegalSection title='10. Cookies und Tracking'>
          <Text mb={4}>
            Unser Dienst verwendet keine Cookies oder Tracking-Technologien. Wir legen großen Wert auf Ihre Privatsphäre
            und haben den Service so gestaltet, dass er ohne Cookies oder ähnliche Mechanismen funktioniert.
          </Text>
          <Text>
            Notwendige Sitzungen werden sicher über standardisierte Authentifizierungs-Token verwaltet,
            die automatisch gelöscht werden, wenn Sie sich abmelden oder den Browser schließen.
          </Text>
        </LegalSection>

        <LegalSection title='11. Datensicherheit'>
          <Text mb={4}>
            Wir ergreifen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Daten, darunter:
          </Text>
          <UnorderedList spacing={2}>
            <ListItem>Regelmäßige Sicherheitsüberprüfungen</ListItem>
            <ListItem>Zugangskontrollen und Authentifizierung</ListItem>
            <ListItem>Regelmäßige Backups</ListItem>
            <ListItem>Schulung unserer Mitarbeitenden zum Datenschutz</ListItem>
          </UnorderedList>
        </LegalSection>

        <LegalSection title='12. Änderungen dieser Datenschutzerklärung'>
          <Text mb={4}>
            Wir können diese Datenschutzerklärung gelegentlich anpassen. Über Änderungen informieren wir,
            indem wir die neue Fassung auf dieser Seite veröffentlichen und das Datum der letzten Aktualisierung anpassen.
          </Text>
          <Text>
            Bitte prüfen Sie diese Seite regelmäßig. Änderungen treten in Kraft, sobald sie hier veröffentlicht werden.
          </Text>
        </LegalSection>

        <LegalSection title='13. Kontakt'>
          <Text mb={4}>
            Wenn Sie Fragen zu dieser Datenschutzerklärung oder unseren Datenschutzpraktiken haben,
            kontaktieren Sie uns bitte:
          </Text>
          <UnorderedList spacing={2} mb={4}>
            <ListItem>Per E-Mail: info.crimpin@gmail.com</ListItem>
            <ListItem>Per Post: Canger & Shahab Crimpin GbR, Zum Steinberg 12, 69121 Heidelberg, Deutschland</ListItem>
          </UnorderedList>
          <Text>
            Sie haben zudem das Recht, sich bei einer Aufsichtsbehörde zu beschweren,
            falls Sie der Ansicht sind, dass wir Ihre Daten nicht datenschutzkonform verarbeiten.
          </Text>
        </LegalSection>
      </VStack>
    </BorderBox>
  );
};

export default PrivacyPolicy;
