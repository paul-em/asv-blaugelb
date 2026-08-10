<script setup lang="ts">
import { club, contact, membershipForm } from '~/data/site'

useHead({ title: `Datenschutzerklärung – ${club.name}` })

// Stand der Erklärung – bei inhaltlichen Änderungen mitpflegen.
const stand = 'August 2026'
</script>

<template>
  <PageHero
    title="Datenschutzerklärung"
    subtitle="Gemäß Datenschutz-Grundverordnung (EU 2016/679) und österreichischem Datenschutzgesetz."
  />

  <section class="mx-auto max-w-3xl px-4 py-16 text-slate-700">
    <h2 class="text-xl font-extrabold text-blau-900">1. Verantwortlicher</h2>
    <p class="mt-2 leading-relaxed">
      {{ club.officialName }}<br />
      <template v-if="contact.street">{{ contact.street }}<br /></template>
      {{ contact.zip }} {{ contact.city }}, {{ contact.country }}<br />
      ZVR-Zahl: {{ contact.zvr }}<br />
      E-Mail:
      <a :href="`mailto:${contact.email}`" class="text-blau-700 hover:underline">{{
        contact.email
      }}</a>
    </p>
    <p class="mt-2 leading-relaxed">
      Vertretungsbefugtes Organ: {{ contact.representative }}.
    </p>

    <h2 class="mt-10 text-xl font-extrabold text-blau-900">
      2. Allgemeines zur Datenverarbeitung
    </h2>
    <p class="mt-2 leading-relaxed">
      Der Schutz deiner personenbezogenen Daten ist uns wichtig. Wir verarbeiten
      personenbezogene Daten ausschließlich im Rahmen der
      Datenschutz-Grundverordnung (DSGVO) und des österreichischen
      Datenschutzgesetzes (DSG).
    </p>
    <p class="mt-2 leading-relaxed">
      Diese Website ist eine rein statische Seite ohne Datenbank, ohne
      Anmeldung, ohne Formulare und ohne Analyse-Werkzeuge. Durch den bloßen
      Besuch werden vom Verein <strong>keine personenbezogenen Daten</strong>
      erhoben oder gespeichert.
    </p>

    <h2 class="mt-10 text-xl font-extrabold text-blau-900">
      3. Welche Daten wir verarbeiten und warum
    </h2>

    <h3 class="mt-6 font-bold text-slate-900">3.1 Kontaktaufnahme per E-Mail</h3>
    <p class="mt-2 leading-relaxed">
      Wenn du uns eine E-Mail schreibst, verarbeiten wir die von dir
      mitgeteilten Daten (Name, E-Mail-Adresse, Inhalt der Nachricht), um deine
      Anfrage zu beantworten. Ohne deine Einwilligung geben wir diese Daten
      nicht an Dritte weiter.
    </p>
    <p class="mt-2 leading-relaxed">
      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
      (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
      Interesse an der Beantwortung von Anfragen).
    </p>

    <h3 class="mt-6 font-bold text-slate-900">3.2 Mitgliedschaft</h3>
    <p class="mt-2 leading-relaxed">
      Für die Mitgliederverwaltung verarbeiten wir die beim Beitritt bekannt
      gegebenen Daten (Name, Adresse, Geburtsdatum, E-Mail-Adresse, bei
      Beitragszahlungen die Kontoverbindung). Sie werden ausschließlich für die
      Mitgliederverwaltung und die Erfüllung des Vereinszwecks verwendet – etwa
      für Einladungen zur Generalversammlung oder die Verrechnung der
      Mitgliedsbeiträge.
    </p>
    <p class="mt-2 leading-relaxed">
      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
      (Mitgliedschaftsverhältnis) und Art. 6 Abs. 1 lit. c DSGVO (rechtliche
      Verpflichtungen, etwa nach dem Vereinsgesetz und den
      Aufzeichnungspflichten).
    </p>
    <p class="mt-2 leading-relaxed">
      <strong>Speicherdauer:</strong> für die Dauer der Mitgliedschaft, danach
      im Rahmen der gesetzlichen Aufbewahrungsfristen (in der Regel sieben Jahre
      für abgabenrechtlich relevante Unterlagen).
    </p>
    <template v-if="membershipForm.url">
      <p class="mt-2 leading-relaxed">
        Die Beitrittserklärung kann über ein Online-Formular abgegeben werden,
        das über <strong>{{ membershipForm.provider }}</strong> (Microsoft
        Ireland Operations Ltd.) bereitgestellt wird. Die dort eingegebenen
        Daten werden von Microsoft im Auftrag des Vereins verarbeitet und
        anschließend in die Mitgliederverwaltung übernommen. Das Formular liegt
        nicht auf dieser Website – es wird erst durch deinen Klick auf den Link
        aufgerufen. Für die Verarbeitung durch Microsoft gelten zusätzlich
        deren
        <a
          href="https://privacy.microsoft.com/de-de/privacystatement"
          target="_blank"
          rel="noopener"
          class="text-blau-700 hover:underline"
          >Datenschutzbestimmungen</a
        >.
      </p>
      <p class="mt-2 leading-relaxed">
        Wer das Online-Formular nicht nutzen möchte, kann die Beitrittserklärung
        als Dokument ausfüllen und per E-Mail oder schriftlich beim Vorstand
        einreichen.
      </p>
    </template>

    <h3 class="mt-6 font-bold text-slate-900">
      3.3 Nutzung des Freibades außerhalb der Öffnungszeiten
    </h3>
    <p class="mt-2 leading-relaxed">
      Für den Zutritt zum Sportbecken des Freibades Offenhausen außerhalb der
      Öffnungszeiten übermitteln wir die dafür nötigen Daten der berechtigten
      Mitglieder an die Marktgemeinde Offenhausen, die die Zutrittsberechtigung
      verwaltet und freischaltet.
    </p>
    <p class="mt-2 leading-relaxed">
      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Erfüllung
      der Nutzungsordnung Freibad) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung
      durch die freiwillige Anmeldung zur Freibadnutzung).
    </p>

    <h3 class="mt-6 font-bold text-slate-900">3.4 Kommunikation über WhatsApp</h3>
    <p class="mt-2 leading-relaxed">
      Der Verein nutzt WhatsApp (Meta Platforms Ireland Ltd.) als laufenden
      Kommunikationskanal für Mitglieder. Die Teilnahme ist
      <strong>freiwillig</strong>: Wer nicht in der Gruppe sein möchte, erhält
      alle wichtigen Informationen auf Wunsch per E-Mail.
    </p>
    <p class="mt-2 leading-relaxed">
      Bei der Nutzung von WhatsApp verarbeitet Meta Daten nach den eigenen
      Datenschutzbestimmungen, auf die der Verein keinen Einfluss hat. Details
      stehen in der
      <a
        href="https://www.whatsapp.com/legal/privacy-policy"
        target="_blank"
        rel="noopener"
        class="text-blau-700 hover:underline"
        >Datenschutzrichtlinie von WhatsApp</a
      >.
    </p>
    <p class="mt-2 leading-relaxed">
      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
      (Einwilligung durch die freiwillige Nutzung des Messengers).
    </p>

    <h3 class="mt-6 font-bold text-slate-900">3.5 Server-Logdaten</h3>
    <p class="mt-2 leading-relaxed">
      Beim Aufruf dieser Website speichert der Hosting-Anbieter automatisch
      technische Verbindungsdaten (IP-Adresse, Zeitpunkt, aufgerufene Seite,
      Browsertyp) in Server-Logfiles. Diese Daten sind für den Verein nicht
      auswertbar zugänglich, werden nicht mit anderen Datenquellen verknüpft und
      nach der üblichen Frist des Anbieters gelöscht.
    </p>
    <p class="mt-2 leading-relaxed">
      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
      Interesse an einem sicheren und störungsfreien Betrieb der Website).
    </p>

    <h2 class="mt-10 text-xl font-extrabold text-blau-900">
      4. Cookies und Tracking
    </h2>
    <p class="mt-2 leading-relaxed">
      Diese Website setzt <strong>keine Cookies</strong> und verwendet keine
      Tracking- oder Analysedienste. Ein Cookie-Banner ist daher nicht
      erforderlich. Es werden auch keine Schriften, Karten, Videos oder
      sonstigen Inhalte von Drittanbietern nachgeladen – die Seite verwendet
      ausschließlich die auf deinem Gerät vorhandenen Systemschriften. Ein Klick
      auf den Kartenlink der Kontaktseite führt bewusst erst nach deiner
      Entscheidung zu OpenStreetMap.
    </p>

    <h2 class="mt-10 text-xl font-extrabold text-blau-900">
      5. Weitergabe von Daten
    </h2>
    <p class="mt-2 leading-relaxed">
      Personenbezogene Daten geben wir nur weiter, wenn es gesetzlich
      vorgeschrieben oder erlaubt ist, wenn du ausdrücklich zugestimmt hast oder
      wenn es zur Erfüllung des Vereinszwecks notwendig ist – etwa an die
      Marktgemeinde Offenhausen für die Freibad-Zutrittsverwaltung (siehe 3.3)
      oder an Veranstalter, wenn du über den Verein bei einem Bewerb genannt
      wirst.
    </p>

    <h2 class="mt-10 text-xl font-extrabold text-blau-900">6. Deine Rechte</h2>
    <ul class="mt-3 space-y-2">
      <li class="flex items-start gap-3">
        <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blau-700" />
        <span
          ><strong>Auskunft</strong> (Art. 15 DSGVO) über die zu deiner Person
          verarbeiteten Daten</span
        >
      </li>
      <li class="flex items-start gap-3">
        <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blau-700" />
        <span><strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blau-700" />
        <span><strong>Löschung</strong> (Art. 17 DSGVO)</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blau-700" />
        <span
          ><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</span
        >
      </li>
      <li class="flex items-start gap-3">
        <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blau-700" />
        <span><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blau-700" />
        <span
          ><strong>Widerspruch</strong> gegen Verarbeitungen, die auf einem
          berechtigten Interesse beruhen (Art. 21 DSGVO)</span
        >
      </li>
      <li class="flex items-start gap-3">
        <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blau-700" />
        <span
          ><strong>Widerruf</strong> einer erteilten Einwilligung mit Wirkung für
          die Zukunft</span
        >
      </li>
    </ul>
    <p class="mt-3 leading-relaxed">
      Wende dich dafür einfach an
      <a :href="`mailto:${contact.email}`" class="text-blau-700 hover:underline">{{
        contact.email
      }}</a
      >.
    </p>

    <h2 class="mt-10 text-xl font-extrabold text-blau-900">
      7. Beschwerderecht
    </h2>
    <p class="mt-2 leading-relaxed">
      Wenn du der Ansicht bist, dass die Verarbeitung deiner Daten gegen die
      DSGVO verstößt, kannst du dich bei der Aufsichtsbehörde beschweren:
    </p>
    <p class="mt-2 leading-relaxed">
      Österreichische Datenschutzbehörde<br />
      Barichgasse 40–42, 1030 Wien<br />
      Telefon: +43 1 52 152-0<br />
      E-Mail:
      <a href="mailto:dsb@dsb.gv.at" class="text-blau-700 hover:underline"
        >dsb@dsb.gv.at</a
      ><br />
      <a
        href="https://www.dsb.gv.at"
        target="_blank"
        rel="noopener"
        class="text-blau-700 hover:underline"
        >www.dsb.gv.at</a
      >
    </p>

    <h2 class="mt-10 text-xl font-extrabold text-blau-900">
      8. Änderungen dieser Erklärung
    </h2>
    <p class="mt-2 leading-relaxed">
      Wir passen diese Datenschutzerklärung an, wenn sich unsere
      Datenverarbeitung oder die Rechtslage ändert. Es gilt jeweils die hier
      veröffentlichte Fassung.
    </p>
    <p class="mt-6 text-sm text-slate-500">Stand: {{ stand }}</p>
  </section>
</template>
