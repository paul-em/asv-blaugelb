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
  // Suchbegriff für den Kartenlink auf /kontakt. OpenStreetMap findet
  // "Bachstätten 4" nur unter Pennewang, nicht unter Offenhausen – die
  // angezeigte Anschrift bleibt davon unberührt. Leer lassen, um stattdessen
  // Straße, PLZ und Ort zu verwenden.
  mapQuery: 'Bachstätten 4 4625 Pennewang',
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

/*
  Hinweis auf der Startseite zwischen Hero und "Was wir anbieten".
  `active: false` blendet ihn aus, ohne den Text zu verlieren.

  Der Beitrag im zweiten Absatz muss zu `fees` weiter unten passen – bei einer
  Beitragsänderung hier mitziehen.
*/
export const homeHighlight = {
  active: true,
  date: 'August 2026',
  title: 'Neu ab dieser Saison: Schwimmen außerhalb der Öffnungszeiten',
  text: [
    'Gemeinsam mit der Marktgemeinde Offenhausen starten wir in den Probebetrieb – unsere volljährigen Mitglieder können das Sportbecken des Freibades ab sofort früh vor der Öffnung und abends nach dem Badeschluss nutzen.',
    'Weil die Badesaison heuer schon weit fortgeschritten ist: Wer jetzt beitritt, ist mit dem Mitgliedsbeitrag von 25 € bis Ende 2027 dabei – die nächste volle Saison also inklusive.',
  ],
}

export const nav = [
  { label: 'Verein', to: '/verein' },
  { label: 'Angebot', to: '/angebot' },
  { label: 'Mitgliedschaft', to: '/mitgliedschaft' },
  { label: 'Dokumente', to: '/dokumente' },
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
  // Seite der Marktgemeinde zum Freibad – dort stehen auch die jeweils
  // gültigen Tarife (Saisonkarte, Entgelt für die Zutrittsverwaltung).
  url: 'https://www.offenhausen.at/Freibad_Offenhausen',
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
  Schaubild auf /mitgliedschaft: was zusammenkommen muss, damit die
  Marktgemeinde den erweiterten Freibadzugang freischaltet. Kurzfassung der
  Voraussetzungen aus `freibad.requirements` – bei Änderungen dort mitziehen.
*/
export const freibadAccess = {
  steps: [
    {
      icon: 'group',
      title: 'Volljähriges Vereinsmitglied',
      text: 'Ordentliche Mitgliedschaft, Mitgliedsbeitrag entrichtet, mindestens 18 Jahre alt.',
    },
    {
      icon: 'calendar',
      title: 'Saisonkarte & Schlüsselgebühr',
      text: 'Gültige Saisonkarte des Freibades für die laufende Saison, dazu die jährliche Gebühr für die Zutrittsverwaltung an die Marktgemeinde.',
      link: 'Aktuelle Tarife beim Freibad Offenhausen',
    },
    {
      icon: 'check',
      title: 'Unterschrift Nutzungsordnung',
      text: 'Nutzungsordnung Freibad samt Selbstverantwortungs- und Belehrungserklärung unterfertigt.',
    },
  ],
  result: {
    icon: 'phone',
    title: 'Freischaltung am Smartphone',
    text: 'Die Marktgemeinde schaltet den Zutritt frei – das Sportbecken lässt sich dann außerhalb der Öffnungszeiten per Mobiltelefon aufsperren.',
  },
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
  Vollständig laut Vereinsangabe vom 10.08.2026.
*/
export const board = [
  { role: 'Obmann', name: 'Martin Muckenhuber' },
  { role: 'Obmann-Stellvertretung', name: 'Dieter Reinthaller' },
  { role: 'Schriftführer', name: 'Franz Emathinger' },
  { role: 'Schriftführer-Stellvertretung', name: 'Horst Berger' },
  { role: 'Kassier', name: 'Dominik Hager' },
  { role: 'Kassier-Stellvertretung', name: 'Michael Aschl' },
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

  Auf Vereinsangabe vom 10.08.2026 wird der Mitgliedsbeitrag über das Konto bei
  der Raiffeisenbank Eberschwang eingehoben; das Konto bei der Sparkasse Lambach
  ist deshalb nicht mehr auf der Seite angeführt.
*/
export const bankAccounts = [
  { bank: 'Raiffeisenbank Eberschwang', iban: 'AT70 3408 1000 0005 1565' },
]

export const paymentReference = 'Mitgliedsbeitrag + Vor- und Nachname'

/*
  Beitrittserklärung als Online-Formular (Microsoft Forms).
  TODO: Link eintragen, sobald das Formular fertig ist.

  Solange `url` leer ist, verweist die Seite auf die Beitrittserklärung zum
  Download unter /dokumente (Statuten § 5 Abs. 1). Sobald ein Link hinterlegt
  ist, erscheinen zusätzlich der
  Hinweis auf Microsoft als Anbieter und der entsprechende Absatz in der
  Datenschutzerklärung.
*/
export const membershipForm = {
  url: '',
  label: 'Beitrittserklärung ausfüllen',
  provider: 'Microsoft Forms',
}

/*
  Dokumente zum Download unter /dokumente, gruppiert nach Anlass.

  `file` ist der Pfad im Ordner `public/` – ohne führenden Schrägstrich, weil
  die Seite auf GitHub Pages unter einem Unterpfad liegt und die baseURL beim
  Rendern davorgesetzt wird. `size` ist die Dateigröße zur Anzeige neben dem
  Link. Solange `file` leer ist, erscheint der Eintrag ohne Download-Link mit
  dem Hinweis "folgt in Kürze" – so entstehen keine toten Links, wenn ein
  Dokument noch nicht abgelegt ist.

  Neue Fassungen mit neuem Datumspräfix ablegen (Dateinamen ohne Umlaute) und
  `file`, `size` und `stand` hier gemeinsam aktualisieren.

  TODO: Statuten erst nach Beschluss und Behördenanzeige ergänzen – in der
  beschlossenen Reinfassung, ohne Änderungsmarkierungen und ohne den Abschnitt
  "Hinweis zu den Änderungen". Der vorbereitete Block steht in
  app/pages/dokumente.vue auskommentiert.
*/
export const documentGroups = [
  {
    title: 'Für den Beitritt',
    items: [
      {
        title: 'Beitrittserklärung',
        text: 'Das Formular für die Aufnahme in den Verein – mit Mitgliedsdaten, SEPA-Mandat und den freiwilligen Einwilligungen für Foto- und Videoaufnahmen sowie die WhatsApp-Gruppe.',
        file: 'assets/dokumente/20260811_Beitrittserklaerung_ASV_blaugelb.pdf',
        size: '152 KB',
        stand: '11.08.2026',
      },
      {
        title: 'Datenschutzerklärung des Vereins',
        text: 'Wie wir mit den Daten unserer Mitglieder umgehen. Ergänzt die Datenschutzerklärung für diese Website.',
        file: 'assets/dokumente/20260811_Datenschutzerklaerung_ASV_blaugelb.pdf',
        size: '131 KB',
        stand: '11.08.2026',
      },
    ],
  },
  {
    title: 'Für die Freibadnutzung',
    items: [
      {
        title: 'Nutzungsordnung Freibad',
        text: 'Regeln für die Nutzung des Sportbeckens außerhalb der Öffnungszeiten, samt Selbstverantwortungs- und Belehrungserklärung. Nur für volljährige ordentliche Mitglieder mit Saisonkarte.',
        file: 'assets/dokumente/20260811_Nutzungsordnung_Freibad_Mitglieder_Offenhausen_ab18.pdf',
        size: '156 KB',
        stand: '11.08.2026',
      },
    ],
  },
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
  join: 'Der Aufnahmeantrag wird beim Vorstand eingereicht; dafür gibt es die Beitrittserklärung. Über die Aufnahme entscheidet der Vorstand.',
  leave:
    'Der Austritt ist jederzeit ohne Angabe von Gründen möglich – schriftlich per Post oder E-Mail an den Vorstand. Langt die Erklärung bis zum 31. März ein, endet die Mitgliedschaft sofort und ein noch nicht bezahlter Beitrag entfällt. Danach endet sie mit 31. Dezember des laufenden Jahres; der Beitrag für dieses Jahr bleibt geschuldet. Bereits bezahlte Beiträge werden nicht rückerstattet.',
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
      text: 'Schwimmen im Sportbecken außerhalb der Öffnungszeiten – für volljährige ordentliche Mitglieder mit Saisonkarte, nach Freischaltung durch die Marktgemeinde.',
    },
    {
      icon: 'check',
      title: 'Niedrige Hürde',
      text: 'Kein Leistungsdruck, kein hoher Beitrag – 25 € im Jahr für alle.',
    },
  ],
}
