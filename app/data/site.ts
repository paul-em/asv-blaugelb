/*
  Zentrale Inhalts- und Konfigurationsdatei.
  --------------------------------------------------------------------
  Hier stehen alle Texte und Daten der Vereinsseite an einem Ort, damit
  sie ohne Programmierkenntnisse angepasst werden können.

  Mit "TODO" markierte Felder konnten nicht automatisch ermittelt werden
  (die alte Seite blaugelb.offenhausen.at war nicht abrufbar). Bitte
  prüfen / ergänzen – siehe die Frageliste am Ende des Auftrags.
*/

export const club = {
  name: 'ASV blaugelb Offenhausen',
  shortName: 'ASV blaugelb',
  tagline: 'Ausdauersportverein',
  claim: 'Gemeinsam laufen. Gemeinsam radeln. Gemeinsam ankommen.',
  intro:
    'Der ASV blaugelb Offenhausen ist der Ausdauersportverein der Marktgemeinde Offenhausen im oberösterreichischen Hausruckviertel. Bei uns stehen Laufen und Radfahren im Mittelpunkt – vom lockeren Lauftreff bis zum Wettkampf. Ob Einsteiger:in oder ambitionierte:r Sportler:in: Bei uns findest du Gleichgesinnte, gemeinsame Trainings und ein paar der schönsten Strecken der Region.',
  founded: '', // TODO: Gründungsjahr
}

export const contact = {
  // TODO: Vollständige Vereinsadresse ergänzen
  street: '',
  zip: '4625',
  city: 'Offenhausen',
  country: 'Österreich',
  email: '', // TODO: Vereins-E-Mail
  phone: '', // TODO: Telefonnummer (optional)
  // TODO: Vereinsregister / ZVR-Nummer (in Österreich Pflichtangabe im Impressum)
  zvr: '',
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

// Sportangebote / Sektionen
export const sports = [
  {
    icon: 'run',
    title: 'Laufen',
    text: 'Vom gemeinsamen Lauftreff über Bahn- und Crosstraining bis zum Wettkampf. Für jedes Tempo und jede Distanz die passende Gruppe.',
  },
  {
    icon: 'bike',
    title: 'Radsport',
    text: 'Ausfahrten auf Rennrad und MTB sowie gemeinsame Trainingsrunden durch das Hausruck- und Traunviertel.',
  },
  {
    icon: 'group',
    title: 'Gemeinschaft',
    text: 'Trainingslager, Vereinsausflüge und gesellige Stunden nach dem Sport – der Verein lebt von seinen Mitgliedern.',
  },
]

// Trainingszeiten – TODO: tatsächliche Zeiten/Treffpunkte ergänzen
export const trainings = [
  {
    day: 'Dienstag',
    time: '', // TODO
    title: 'Lauftreff',
    place: 'Treffpunkt: Mehrzweckhalle Offenhausen', // TODO prüfen
    note: 'Gemeinsamer Lauf in mehreren Tempogruppen – Einsteiger:innen willkommen.',
  },
  {
    day: 'Donnerstag',
    time: '', // TODO
    title: 'Intervall- / Bahntraining',
    place: '', // TODO
    note: 'Tempotraining für alle, die schneller werden wollen.',
  },
  {
    day: 'Sonntag',
    time: '', // TODO
    title: 'Lange Einheit / Radausfahrt',
    place: '', // TODO
    note: 'Lange Läufe oder gemeinsame Radausfahrt – Strecke je nach Gruppe.',
  },
]

// Veranstaltungen / eigene Events des Vereins
export const events = [
  {
    name: 'Offenhausener Sparkasse Marktlauf',
    when: '', // TODO: Datum
    where: 'Mehrzweckhalle Offenhausen',
    text: 'Das Laufevent des Vereins für die ganze Region – mit Kinderläufen und Hauptlauf. Lauf durch den Ortskern von Offenhausen.',
    highlight: true,
  },
  {
    name: '2-Brücken Cross Challenge',
    when: '', // TODO: Datum
    where: 'Offenhausen',
    text: 'Crosslauf-Bewerb des ASV blaugelb.',
    highlight: false,
  },
  {
    name: 'K.O. Kriterium',
    when: '', // TODO: Datum
    where: 'Offenhausen',
    text: 'Spannender Ausscheidungsbewerb im K.-o.-Modus.',
    highlight: false,
  },
]

// Vorstand – TODO: echte Namen/Funktionen ergänzen
export const board = [
  { role: 'Obmann / Obfrau', name: '' },
  { role: 'Obmann-Stellvertretung', name: '' },
  { role: 'Schriftführung', name: '' },
  { role: 'Kassier:in', name: '' },
  { role: 'Sportliche Leitung', name: '' },
]

// Mitgliedsbeiträge – TODO: echte Beiträge ergänzen
export const fees = [
  { type: 'Erwachsene', price: '' },
  { type: 'Jugend / Schüler:innen', price: '' },
  { type: 'Familie', price: '' },
]
