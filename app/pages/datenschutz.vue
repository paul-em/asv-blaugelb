<script setup lang="ts">
import { club, contact } from '~/data/site'

useHead({ title: `Datenschutzerklärung – ${club.name}` })

// Stand der Erklärung – bei inhaltlichen Änderungen mitpflegen.
const stand = '11.08.2026'
</script>

<template>
  <PageHero
    title="Datenschutzerklärung"
    subtitle="Gemäß Datenschutz-Grundverordnung (EU 2016/679) und österreichischem Datenschutzgesetz."
  />

  <section class="mx-auto max-w-3xl px-4 py-16 text-slate-700">
    <p class="leading-relaxed">
      Diese Erklärung betrifft den Besuch dieser Website. Für Mitglieder gilt die
      Datenschutzerklärung des Vereins – sie regelt Mitgliederverwaltung,
      Beiträge, Freibadnutzung, WhatsApp-Gruppe und Wettkampfnennungen und steht
      im Bereich
      <NuxtLink to="/dokumente" class="text-blau-700 hover:underline"
        >Dokumente</NuxtLink
      >
      zum Download.
    </p>

    <h2 class="mt-10 text-xl font-extrabold text-blau-900">
      1. Verantwortlicher
    </h2>
    <p class="mt-2 leading-relaxed">
      {{ club.officialName
      }}<template v-if="contact.street">, {{ contact.street }}</template
      >, {{ contact.zip }} {{ contact.city }}, {{ contact.country }} · ZVR-Zahl
      {{ contact.zvr }} ·
      <a :href="`mailto:${contact.email}`" class="text-blau-700 hover:underline">{{
        contact.email
      }}</a>
    </p>
    <p class="mt-2 leading-relaxed">
      Vertretungsbefugtes Organ: {{ contact.representative }}.
    </p>

    <h2 class="mt-10 text-xl font-extrabold text-blau-900">
      2. Diese Website ist statisch
    </h2>
    <p class="mt-2 leading-relaxed">
      Keine Datenbank, keine Anmeldung, keine Formulare, keine Cookies, keine
      Analyse- oder Tracking-Werkzeuge. Es werden auch keine Schriften, Karten
      oder Videos von Drittanbietern nachgeladen – die Seite verwendet
      ausschließlich die auf deinem Gerät vorhandenen Systemschriften. Ein
      Cookie-Banner ist deshalb nicht erforderlich. Die Links zu OpenStreetMap
      und WhatsApp führen bewusst erst nach deinem Klick zum jeweiligen Anbieter.
    </p>
    <p class="mt-2 leading-relaxed">
      Durch den bloßen Besuch erhebt der Verein selbst
      <strong>keine personenbezogenen Daten</strong>.
    </p>

    <h2 class="mt-10 text-xl font-extrabold text-blau-900">
      3. Server-Logdaten
    </h2>
    <p class="mt-2 leading-relaxed">
      Die Seite wird über GitHub Pages (GitHub Inc., USA) bereitgestellt. Beim
      Aufruf verarbeitet der Anbieter technische Verbindungsdaten – IP-Adresse,
      Zeitpunkt, aufgerufene Seite, Browsertyp – in Server-Logfiles; dabei können
      Daten in die USA übermittelt werden. Der Verein hat auf diese Logfiles
      keinen auswertbaren Zugriff und verknüpft sie nicht mit anderen Daten.
    </p>
    <p class="mt-2 leading-relaxed">
      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (sicherer und
      störungsfreier Betrieb). <strong>Speicherdauer:</strong> nach den Fristen
      des Anbieters.
    </p>

    <h2 class="mt-10 text-xl font-extrabold text-blau-900">
      4. Kontakt per E-Mail
    </h2>
    <p class="mt-2 leading-relaxed">
      Wenn du uns schreibst, verarbeiten wir Name, E-Mail-Adresse und Inhalt der
      Nachricht, um deine Anfrage zu beantworten. Eine Weitergabe an Dritte
      erfolgt nicht.
    </p>
    <p class="mt-2 leading-relaxed">
      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
      (Vertragsanbahnung) bzw. lit. f (Beantwortung von Anfragen).
      <strong>Speicherdauer:</strong> bis die Anfrage erledigt ist, darüber
      hinaus nur im Rahmen gesetzlicher Aufbewahrungsfristen.
    </p>

    <h2 class="mt-10 text-xl font-extrabold text-blau-900">
      5. Foto- und Videoaufnahmen
    </h2>
    <p class="mt-2 leading-relaxed">
      Bei Vereinsveranstaltungen entstehen Foto- und Videoaufnahmen, die wir für
      die Öffentlichkeitsarbeit verwenden – auf dieser Website, in unseren
      Social-Media-Kanälen, in Presseberichten und in der Vereinschronik. Bei
      Veröffentlichungen in sozialen Medien lässt sich eine Verarbeitung durch
      die Plattformbetreiber außerhalb der EU bzw. des EWR nicht ausschließen.
    </p>
    <p class="mt-2 leading-relaxed">
      Aufnahmen, auf denen einzelne Personen erkennbar im Vordergrund stehen,
      veröffentlichen wir nur mit gesonderter Einwilligung. Sie ist freiwillig
      und kann jederzeit mit Wirkung für die Zukunft widerrufen werden – eine
      kurze E-Mail an
      <a :href="`mailto:${contact.email}`" class="text-blau-700 hover:underline">{{
        contact.email
      }}</a>
      genügt. Online-Veröffentlichungen entfernen wir dann nach Möglichkeit,
      bereits erschienene Druckwerke bleiben unberührt. Aufnahmen mit
      dokumentarischem Wert bewahren wir in der Vereinschronik dauerhaft auf.
    </p>
    <p class="mt-2 leading-relaxed">
      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
      Interesse an der Öffentlichkeitsarbeit) bzw. lit. a (Einwilligung bei
      Einzelabbildungen).
    </p>

    <h2 class="mt-10 text-xl font-extrabold text-blau-900">6. Deine Rechte</h2>
    <p class="mt-2 leading-relaxed">
      Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16),
      Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
      Datenübertragbarkeit (Art. 20) und Widerspruch gegen Verarbeitungen auf
      Grundlage berechtigter Interessen (Art. 21). Eine erteilte Einwilligung
      kannst du jederzeit mit Wirkung für die Zukunft widerrufen. Wende dich
      dafür an
      <a :href="`mailto:${contact.email}`" class="text-blau-700 hover:underline">{{
        contact.email
      }}</a
      >.
    </p>
    <p class="mt-2 leading-relaxed">
      Wenn du der Ansicht bist, dass die Verarbeitung gegen die DSGVO verstößt,
      kannst du dich bei der Österreichischen Datenschutzbehörde beschweren:
      Barichgasse 40–42, 1030 Wien ·
      <a href="mailto:dsb@dsb.gv.at" class="text-blau-700 hover:underline"
        >dsb@dsb.gv.at</a
      >
      ·
      <a
        href="https://www.dsb.gv.at"
        target="_blank"
        rel="noopener"
        class="text-blau-700 hover:underline"
        >www.dsb.gv.at</a
      >
    </p>

    <h2 class="mt-10 text-xl font-extrabold text-blau-900">7. Änderungen</h2>
    <p class="mt-2 leading-relaxed">
      Wir passen diese Erklärung an, wenn sich die Datenverarbeitung oder die
      Rechtslage ändert. Es gilt jeweils die hier veröffentlichte Fassung.
    </p>

    <p class="mt-6 text-sm text-slate-500">Stand: {{ stand }}</p>
  </section>
</template>
