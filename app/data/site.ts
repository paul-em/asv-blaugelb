/*
  Zentrale Inhalts- und Konfigurationsdatei.
  --------------------------------------------------------------------
  Hier stehen alle Texte und Daten der Vereinsseite an einem Ort, damit
  sie ohne Programmierkenntnisse angepasst werden können.

  Belegte Daten stammen aus den Vereinsdokumenten und sind in docs/
  dokumentiert:
    docs/vereinsdaten.md   Stammdaten, Vorstand, Statuten (Fassung 2017)
    docs/freibad.md        Freibad-Kooperation mit der Marktgemeinde
    docs/historie.md       Veranstaltungen 2013–2017, alte Website
    docs/offene-punkte.md  was noch fehlt

  Mit "TODO" markierte Felder sind weiterhin offen.
*/

export const club = {
  // Auftritt wie auf der bisherigen Website: "blaugelb Offenhausen" mit
  // "Ausdauersportverein" als Zusatz. Die Abkürzung "ASV" kommt in keinem
  // Vereinsdokument vor und wird deshalb nicht verwendet.
  name: 'blaugelb Offenhausen',
  // Vollständiger Name laut Statuten § 1 Abs. 1 – für Impressum und Verträge.
  officialName: 'Ausdauersportverein blaugelb Offenhausen',
  shortName: 'blaugelb',
  tagline: 'Ausdauersportverein',
  claim: 'Laufen. Radfahren. Schwimmen. Gemeinsam ankommen.',
  intro:
    'Der Ausdauersportverein blaugelb Offenhausen ist ein gemeinnütziger Sportverein aus der Marktgemeinde Offenhausen im oberösterreichischen Hausruckviertel. Vereinszweck ist die körperliche Ertüchtigung unserer Mitglieder durch Ausdauersport – Laufen, Radfahren und Schwimmen. Bekannt geworden sind wir durch unsere Cross- und Mountainbike-Rennen auf den Wiesenrundkursen in Bachstätten.',
  // Wortlaut aus § 2 der Statuten (Fassung 03.12.2017).
  purpose:
    'Der Verein bezweckt die körperliche Ertüchtigung seiner Mitglieder durch sportliche Betätigung, insbesondere die Pflege von Ausdauersportarten (Laufen, Radfahren, Schwimmen).',
  nonprofit:
    'Der Verein ist gemeinnützig im Sinne der Bundesabgabenordnung und nicht auf Gewinn ausgerichtet. Er erfüllt seinen Zweck frei von politischen und weltanschaulichen Einflüssen.',
  scope: 'Sitz in 4625 Offenhausen, Tätigkeitsbereich ganz Österreich.',
  founded: '', // TODO: Gründungsjahr – erste belegte Aktivität 2013
}

export const contact = {
  // Vereinsanschrift, bestätigt am 09.08.2026. Der Briefkopf der
  // Nutzungsvereinbarung nennt abweichend "Herrenstraße 44" – veraltet.
  street: 'Bachstätten 4',
  zip: '4625',
  city: 'Offenhausen',
  country: 'Österreich',
  email: 'blaugelb@outlook.com',
  // TODO: Vereinstelefonnummer. Bekannt ist nur eine Privat-Mobilnummer
  // aus der Ausschreibung 2017 – bewusst nicht übernommen.
  phone: '',
  zvr: '904297698',
  // Vertretung nach außen laut Statuten § 13 Abs. 2.
  representative: 'Martin Muckenhuber, Obmann',
  // Verantwortlich für den Inhalt der Website.
  contentResponsible: 'Franz Emathinger und Paul Emathinger',
}

export const social = {
  // TODO: Links eintragen oder leer lassen (werden dann ausgeblendet)
  facebook: '',
  instagram: '',
  strava: '',
  website: 'https://blaugelb.offenhausen.at',
}

export const nav = [
  { label: 'Verein', to: '/verein' },
  { label: 'Training', to: '/training' },
  { label: 'Termine', to: '/termine' },
  { label: 'Mitglied werden', to: '/mitglied' },
  { label: 'Kontakt', to: '/kontakt' },
]

// Sportarten laut Vereinszweck (Statuten § 2)
export const sports = [
  {
    icon: 'run',
    title: 'Laufen',
    text: 'Von der Wiesenrunde bis zum Crosslauf. Der Verein hat jahrelang eigene Crossläufe ausgetragen – vom Kinderlauf bis zum Hauptlauf über 6,9 km.',
  },
  {
    icon: 'bike',
    title: 'Radfahren',
    text: 'Mountainbike und Querfeldein auf den Rundkursen in Bachstätten – hügelig, technisch und mit Rennen bis hinauf zur Landesmeisterschaft.',
  },
  {
    icon: 'swim',
    title: 'Schwimmen',
    text: 'Ausdauertraining im Sportbecken des Freibades Offenhausen, gemeinsam mit der Marktgemeinde auch außerhalb der regulären Öffnungszeiten.',
  },
]

/*
  Freibad-Kooperation mit der Marktgemeinde Offenhausen.
  Seit 09.08.2026 in Kraft – die Zeiten werden auf Startseite und
  Trainingsseite ausgespielt. Details und Quellen: docs/freibad.md
*/
export const freibad = {
  aktiv: true,
  statusNote:
    'Das Schwimmtraining im Freibad ist in Vorbereitung. Die Vereinbarung mit der Marktgemeinde und die dafür nötige Statutenänderung sind noch nicht beschlossen.',
  place: 'Freibad Offenhausen – Sportbecken',
  season: 'Während der von der Marktgemeinde festgesetzten Badesaison.',
  requirements: [
    'Ordentliche Mitgliedschaft mit entrichtetem Mitgliedsbeitrag',
    'Gültige Saisonkarte des Freibades Offenhausen',
    'Jährliches Entgelt für die Zutrittsverwaltung an die Marktgemeinde',
    'Mindestalter 18 Jahre',
    'Unterfertigte Selbstverantwortungs- und Belehrungserklärung',
    'Freischaltung des Zutritts durch die Marktgemeinde',
  ],
  rules: [
    'Es ist keine Badeaufsicht anwesend – die Nutzung erfolgt auf eigenes Risiko.',
    'Kein Alleinschwimmen: mindestens ein weiteres Vereinsmitglied muss anwesend sein.',
    'Schwimmkundigkeit vorausgesetzt – mindestens 400 m am Stück (16 Längen).',
    'Freigegeben ist ausschließlich das Sportbecken, dazu Außenduschen und WC.',
    'Die Zugangsberechtigung ist persönlich und darf nicht weitergegeben werden.',
    'Kein Schwimmen, solange sich der Poolroboter im Becken befindet.',
  ],
  emergency:
    'Notruf 144 (Rettung) bzw. 122/112, danach den Vereinsvorstand verständigen. Im Freibad selbst ist kein Defibrillator vorhanden – die nächsten Geräte stehen beim Marktgemeindeamt und beim Raiffeisenbank-Standort Offenhausen.',
}

/*
  Trainingszeiten.
  Aktuell ist das geplante Schwimmtraining im Freibad das einzige belegte
  regelmäßige Angebot – es wird nur angezeigt, wenn `freibad.aktiv` true ist.
  TODO: Gibt es regelmäßige Lauf- oder Radtreffs? Tag, Uhrzeit, Treffpunkt.
*/
export const trainings = [
  {
    day: 'Mo–So',
    time: 'ab 05:00',
    title: 'Frühschwimmen',
    place: 'Freibad Offenhausen – Sportbecken',
    note: 'Von 5:00 Uhr bis zur offiziellen Öffnung des Freibades. Nur für freigeschaltete Mitglieder.',
    freibad: true,
  },
  {
    day: 'Mo–So',
    time: 'bis 22:00',
    title: 'Abendschwimmen',
    place: 'Freibad Offenhausen – Sportbecken',
    note: 'Nach dem offiziellen Badeschluss bis 22:00 Uhr. Nur für freigeschaltete Mitglieder.',
    freibad: true,
  },
]

/*
  Kommende Veranstaltungen.
  TODO: Seit 2017 ist keine Veranstaltung dokumentiert. Sobald ein Termin
  feststeht, hier eintragen – Aufbau siehe `history`.
*/
export const events: {
  name: string
  when?: string
  where?: string
  text: string
  highlight?: boolean
}[] = []

// Bisherige eigene Veranstaltungen (siehe docs/historie.md)
export const history = [
  {
    name: '2-Brücken Cross Challenge',
    when: '7. Oktober 2017',
    where: 'Bachstätten, Offenhausen',
    text: 'Querfeldein-Rennen, Crosslauf und MTB-Rennen an einem Tag – inklusive Duathlon-Staffel aus Läufer:innen und Bikern. Kinderrennen gratis und ohne Wertung.',
    highlight: true,
  },
  {
    name: '500 € K.O. Cross-Kriterium',
    when: '6. Oktober 2017',
    where: 'Bachstätten, Offenhausen',
    text: 'Cross-Kriterium im K.-o.-Modus am Vorabend der Cross Challenge: 60 Minuten auf einem knapp einen Kilometer langen Wiesenkurs, freie Radwahl, keine Lizenz nötig.',
    highlight: false,
  },
  {
    name: 'Querfeldein-Landesmeisterschaft',
    when: '2016',
    where: 'Bachstätten, Offenhausen',
    text: 'Landesmeisterschaft im Querfeldein-Rennen auf der vereinseigenen Strecke.',
    highlight: false,
  },
  {
    name: 'CROSS / MTB & QUER Challenge',
    when: '17. Oktober 2015',
    where: 'Bachstätten, Offenhausen',
    text: 'Crosslauf, MTB- und erstmals Querfeldein-Rennen, dazu Kinder- und Jugend-Benefizrennen. Der Erlös ging gemeinsam mit dem Kindergartenverein an ein schwer beeinträchtigtes Kind.',
    highlight: false,
  },
  {
    name: 'MTB-Meisterschaft mit Crosslauf',
    when: '27. September 2014',
    where: 'Bachstätten, Offenhausen',
    text: 'Mountainbike-Rennen kombiniert mit Crosslauf und einer Duathlon-Wertung für Einzelstarter:innen und Mixed-Teams.',
    highlight: false,
  },
  {
    name: 'MTB-Meisterschaft',
    when: '2013',
    where: 'Bachstätten, Offenhausen',
    text: 'Das erste Rennen des Vereins auf der Strecke in Bachstätten – Auftakt einer Reihe, die bis 2017 jährlich fortgesetzt wurde.',
    highlight: false,
  },
]

/*
  Vorstand – sechs Funktionen laut Statuten § 11 Abs. 1.
  TODO: vier Funktionen sind noch offen.
*/
export const board = [
  { role: 'Obmann', name: 'Martin Muckenhuber' },
  { role: 'Obmann-Stellvertretung', name: '' },
  { role: 'Schriftführer', name: 'Mag. Franz Emathinger, BSc' },
  { role: 'Schriftführer-Stellvertretung', name: '' },
  { role: 'Kassier', name: '' },
  { role: 'Kassier-Stellvertretung', name: '' },
]

/*
  Mitgliedsbeiträge – die Höhe setzt laut Statuten § 10 lit. f die
  Generalversammlung fest.
  TODO: aktuelle Beträge eintragen.
*/
export const fees = [
  { type: 'Beitrittsgebühr', price: '' },
  { type: 'Ordentliche Mitglieder', price: '' },
  { type: 'Außerordentliche Mitglieder (Förderer)', price: '' },
]

// Mitgliedschaft nach den Statuten (Fassung 03.12.2017)
export const membership = {
  types: [
    {
      title: 'Ordentliche Mitglieder',
      text: 'Beteiligen sich voll am Vereinsleben und haben Stimmrecht in der Generalversammlung.',
    },
    {
      title: 'Außerordentliche Mitglieder',
      text: 'Fördern den Verein vor allem durch einen erhöhten Mitgliedsbeitrag.',
    },
    {
      title: 'Ehrenmitglieder',
      text: 'Werden von der Generalversammlung wegen besonderer Verdienste um den Verein ernannt.',
    },
  ],
  join: 'Ein formloser Antrag beim Vorstand genügt – per E-Mail, mündlich oder schriftlich. Über die Aufnahme entscheidet der Vorstand.',
  leave:
    'Der Austritt ist zum Ende eines Kalenderjahres möglich. Die schriftliche Abmeldung muss bis zum 1. Oktober beim Vorstand eintreffen.',
}
