/*
  Zentrale Inhalts- und Konfigurationsdatei.
  --------------------------------------------------------------------
  Hier stehen alle Texte und Daten der Vereinsseite an einem Ort, damit
  sie ohne Programmierkenntnisse angepasst werden können.

  Belegte Daten stammen aus den Vereinsdokumenten und sind in docs/
  dokumentiert:
    docs/vereinsdaten.md   Stammdaten, Vorstand, Beiträge, Statuten (2017)
    docs/angebot.md        Saisonprogramm, Quelle der Trainingszeiten
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
  claim: 'Bewegung, Gemeinschaft und Geselligkeit – das ganze Jahr über.',
  intro:
    'Der Ausdauersportverein blaugelb Offenhausen ist ein gemeinnütziger Sportverein aus der Marktgemeinde Offenhausen im oberösterreichischen Hausruckviertel. Wir turnen im Winter, fahren im Frühjahr mit dem e-Mountainbike und schwimmen im Sommer im Freibad – offen für alle, die Bewegung und Gemeinschaft verbinden wollen.',
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
  // Nutzungsordnung Freibad nennt abweichend "Herrenstraße 44" – veraltet.
  street: 'Bachstätten 4',
  zip: '4625',
  city: 'Offenhausen',
  country: 'Österreich',
  email: 'blaugelb@outlook.com',
  // TODO: Vereinstelefonnummer. Bekannt ist nur eine Privat-Mobilnummer
  // aus der Ausschreibung 2017 – bewusst nicht übernommen.
  phone: '',
  // WhatsApp ist der wichtigste Kanal zu den Mitgliedern. Die Nachrichten
  // landen bei Obmann Martin Muckenhuber (+43 650 2114679), bestätigt am
  // 10.08.2026. Solange das Feld leer ist, werden alle WhatsApp-Schaltflächen
  // ausgeblendet.
  whatsapp: 'https://wa.me/436502114679',
  whatsappName: 'Martin Muckenhuber, Obmann',
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
  { label: 'Angebot', to: '/angebot' },
  { label: 'Mitgliedschaft', to: '/mitgliedschaft' },
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
    text: 'Heute gemeinsame e-MTB-Ausfahrten rund um Offenhausen, früher Mountainbike- und Querfeldein-Rennen auf den Rundkursen in Bachstätten.',
  },
  {
    icon: 'swim',
    title: 'Schwimmen',
    text: 'Ausdauertraining im Sportbecken des Freibades Offenhausen, gemeinsam mit der Marktgemeinde auch außerhalb der regulären Öffnungszeiten.',
  },
]

/*
  Das Angebot nach Saison – der Kern der Seite.
  Zeiten und Orte laut Vereinsangabe, siehe docs/angebot.md.
  `freibad: true` verknüpft die Sommersaison mit den Regeln der
  Freibad-Kooperation weiter unten.
*/
export type Season = {
  id: string
  icon: string
  season: string
  title: string
  when: string
  place: string
  summary: string
  text: string[]
  points: string[]
  /** Zusatzhinweis unter den Stichpunkten */
  note?: string
  /** blendet Zeiten, Voraussetzungen und Regeln der Freibad-Kooperation ein */
  freibad?: boolean
}

export const seasons: Season[] = [
  {
    id: 'winter',
    icon: 'snow',
    season: 'Wintersaison',
    title: 'Turnen & Hockey',
    when: 'Montag, 19:00 Uhr',
    place: 'Turnhalle Offenhausen',
    summary:
      'Kräftigungs- und Ausdauerübungen in der Halle, zum Abschluss Hockey.',
    text: [
      'Im Winter treffen wir uns wöchentlich in der Turnhalle Offenhausen. Wechselnde Vorturnerinnen und Vorturner gestalten das Programm – so bleibt jede Einheit abwechslungsreich.',
      'Das Niveau ist bunt gemischt: Einsteigerinnen und Einsteiger sind genauso willkommen wie Geübte. Im Vordergrund stehen Bewegung, Freude und Gemeinschaft.',
    ],
    points: [
      'Abwechslungsreiches Programm durch wechselnde Vorturner',
      'Kräftigungs- und Ausdauereinheiten',
      'Hockey zum Abschluss',
    ],
  },
  {
    id: 'uebergang',
    icon: 'bike',
    season: 'Übergangssaison',
    title: 'e-MTB-Ausfahrten',
    when: 'Donnerstag, 18:00 Uhr',
    place: 'Rund um Offenhausen',
    summary: 'Gemeinsame Ausfahrten auf Forstwegen und Güterwegen der Umgebung.',
    text: [
      'Mit dem Frühjahr starten die gemeinsamen e-Mountainbike-Ausfahrten. Donnerstagabends fahren wir rund um Offenhausen – die Landschaft des Hausruckviertels gibt die Kulisse dafür ab.',
      'Durch die elektrische Unterstützung kommen unterschiedliche Fitnesslevels gut miteinander zurecht. Nach der Tour bleibt meistens Zeit für einen gemütlichen Ausklang.',
    ],
    points: [
      'Gemeinsame Gruppenausfahrten für alle Fitnessstufen',
      'Strecken rund um Offenhausen',
      'e-MTB (elektrisch unterstützt) – auch für Einsteiger geeignet',
    ],
    note: 'Der genaue Treffpunkt wird kurzfristig in der Vereinsgruppe bekanntgegeben.',
  },
  {
    id: 'sommer',
    icon: 'swim',
    season: 'Sommersaison',
    title: 'Schwimmen im Freibad',
    when: 'Täglich außerhalb der Öffnungszeiten',
    place: 'Freibad Offenhausen – Sportbecken',
    summary:
      'Schwimmtraining im Sportbecken, früh vor der Öffnung und abends nach dem Badeschluss.',
    text: [
      'Gemeinsam mit der Marktgemeinde Offenhausen können unsere Mitglieder das Sportbecken des Freibades außerhalb der regulären Öffnungszeiten nutzen – in Ruhe und ohne Betrieb.',
      'Schwimmen ist die gelenkschonendste unserer Sportarten und der ideale Ausgleich zu Turnen und Radfahren. Für den Zugang gelten die Regeln der Nutzungsordnung Freibad.',
    ],
    points: [
      'Ausdauerschwimmen im Sportbecken',
      'Frühschwimmen ab 05:00 Uhr, Abendschwimmen bis 22:00 Uhr',
      'Nur für Mitglieder mit freigeschaltetem Zutritt',
    ],
    freibad: true,
  },
  {
    id: 'anlassbezogen',
    icon: 'group',
    season: 'Anlassbezogen',
    title: 'Gemeinsame Veranstaltungen',
    when: 'Nach Ankündigung',
    place: 'Offenhausen und Umgebung',
    summary:
      'Teilnahme an Gemeinde- und Sportveranstaltungen – weil Sport im Team am schönsten ist.',
    text: [
      'Neben dem regulären Trainingsbetrieb nimmt der Verein an ausgewählten Gemeinde- und Sportveranstaltungen teil und tritt dort gemeinsam als blaugelb Offenhausen auf.',
      'Diese Anlässe sind ein wichtiger Teil unserer Vereinskultur: Sport verbindet – und wir sind gerne Teil der Gemeinschaft in Offenhausen.',
    ],
    points: [
      'Teilnahme an Veranstaltungen der Marktgemeinde',
      'Sportliche Bewerbe und Volksläufe nach Möglichkeit',
      'Gesellige Vereinsveranstaltungen',
    ],
  },
]

/*
  Laufen und Radfahren außerhalb der fixen Termine.
  TODO: Gibt es einen regelmäßigen Lauftreff? Tag, Uhrzeit, Treffpunkt.
*/
export const individualSports = {
  title: 'Laufen & Radfahren abseits der fixen Termine',
  text: 'Laufen und Radfahren gehören seit der Gründung zum Verein – über Jahre hinweg haben wir eigene Crossläufe und Mountainbike-Rennen in Bachstätten ausgetragen. Feste wöchentliche Lauftreffs gibt es derzeit nicht. Wenn du mitlaufen oder mitfahren möchtest, melde dich einfach – wir bringen dich mit den passenden Leuten zusammen.',
}

/*
  Freibad-Kooperation mit der Marktgemeinde Offenhausen.
  Seit 09.08.2026 in Kraft – die Details werden in der Sommersaison
  ausgespielt. Quellen: docs/freibad.md
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
    'Die erweiterte Nutzung ist persönlich; die Mitnahme nicht zutrittsberechtigter Personen – auch eigener Kinder – ist nicht zulässig',
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
  Schwimmzeiten im Freibad – nur sichtbar, solange `freibad.aktiv` true ist.
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
  Generalversammlung fest. Beträge laut Vereinsangabe, siehe
  docs/vereinsdaten.md.
*/
export const fees = [
  { type: 'Ordentliches Mitglied', price: '25 €' },
  { type: 'Außerordentliches Mitglied (Förderer)', price: 'frei wählbar, über 25 €' },
]

export const feeNote =
  'Der Beitrag gilt pro Vereinsjahr und wird von der Generalversammlung festgesetzt (§ 10 der Statuten). Außerordentliche Mitglieder – Förderer – unterstützen den Verein mit einem selbst gewählten höheren Beitrag.'

/*
  Bankverbindung für den Mitgliedsbeitrag.
  BIC ist bewusst nicht angeführt – für Überweisungen innerhalb des SEPA-Raums
  genügt die IBAN.

  Das zweite Konto (Raiffeisenbank Eberschwang) wird aufgelöst und ist deshalb
  nicht mehr auf der Seite angeführt.
*/
export const bankAccounts = [
  { bank: 'Sparkasse Lambach', iban: 'AT95 2031 7077 0108 4571' },
]

export const paymentReference = 'Mitgliedsbeitrag + Vor- und Nachname'

/*
  Beitrittserklärung als Online-Formular (Microsoft Forms).
  TODO: Link eintragen, sobald das Formular fertig ist.

  Solange `url` leer ist, weist die Seite auf den formlosen Beitritt per E-Mail
  hin (Statuten § 5). Sobald ein Link hinterlegt ist, erscheinen zusätzlich der
  Hinweis auf Microsoft als Anbieter und der entsprechende Absatz in der
  Datenschutzerklärung.
*/
export const membershipForm = {
  url: '',
  label: 'Beitrittserklärung ausfüllen',
  provider: 'Microsoft Forms',
}

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
  benefits: [
    {
      icon: 'run',
      title: 'Sport in jeder Saison',
      text: 'Turnen, Hockey, e-MTB und Schwimmen – das ganze Jahr über ist etwas dabei.',
    },
    {
      icon: 'group',
      title: 'Gemeinschaft',
      text: 'Ein kleiner Verein, in dem man einander kennt und die Geselligkeit ihren Platz hat.',
    },
    {
      icon: 'swim',
      title: 'Zugang zum Freibad',
      text: 'Schwimmen im Sportbecken außerhalb der Öffnungszeiten – nach Freischaltung durch die Marktgemeinde.',
    },
    {
      icon: 'check',
      title: 'Niedrige Hürde',
      text: 'Kein Leistungsdruck, kein hoher Beitrag – 25 € im Jahr für alle.',
    },
  ],
}
