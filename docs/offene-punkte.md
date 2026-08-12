# Offene Punkte vor dem Go-live

Stand: 11.08.2026. Alles, was für die Website noch fehlt oder bestätigt werden
muss. Belegte Daten stehen in [vereinsdaten.md](vereinsdaten.md),
[angebot.md](angebot.md), [freibad.md](freibad.md) und
[historie.md](historie.md).

## Erledigt

- [x] **Freibad-Kooperation ist in Kraft** – `freibad.aktiv = true`, die Zeiten
      werden ausgespielt.
- [x] **Vereinsanschrift** bestätigt: Bachstätten 4, 4625 Offenhausen.
- [x] **Inhaltlich verantwortlich**: Franz Emathinger, Paul Emathinger.
- [x] **Datenschutz**: Die Seite ist rein statisch, erhebt keine Daten, setzt
      keine Cookies und lädt nichts von Drittanbietern nach – geprüft am
      gebauten Output. Eigene Seite `/datenschutz`.
- [x] **Impressum-Pflichtangaben**: ZVR 904297698, Sitz, vertretungsbefugte
      Person (Obmann Martin Muckenhuber), Vereinszweck, Blattlinie. Seit
      11.08.2026 zusätzlich die nach § 5 ECG verlangte **Aufsichtsbehörde**
      (Bezirkshauptmannschaft Wels-Land als Vereinsbehörde) und die
      anwendbaren Rechtsvorschriften (Vereinsgesetz 2002).
      Zu bestätigen: dass die BH Wels-Land für 4625 Offenhausen tatsächlich
      die zuständige Vereinsbehörde ist (Bezirkszuordnung).
- [x] **Logo**: Vereinsmarke als SVG in `app/components/LogoMark.vue`
      (Varianten tile / invers / plain) und reduziert in `public/favicon.svg`.
- [x] **Namensführung**: „ASV" entfällt, der Auftritt lautet
      „blaugelb Offenhausen".
- [x] **Saisonprogramm** (Turnen, e-MTB, Schwimmen, Anlassbezogen) mit Zeiten
      und Orten – Quelle siehe [angebot.md](angebot.md).
- [x] **Mitgliedsbeiträge**: 25 € pauschal für ordentliche Mitglieder,
      außerordentliche Mitglieder (Förderer) frei wählbar über 25 €.
      Familienstaffel und Kinder-Gratismitgliedschaft entfallen (Entscheidung
      E2, 10.08.2026).
- [x] **Bankverbindung** für den Mitgliedsbeitrag steht auf `/mitgliedschaft`
      (Raiffeisenbank Eberschwang, auf Vereinsangabe vom 10.08.2026). Das Konto
      bei der Sparkasse Lambach ist seither nicht mehr angeführt.
- [x] **WhatsApp-Kontakt**: `https://wa.me/436502114679` – die Nachrichten
      gehen an Obmann Martin Muckenhuber (bestätigt 10.08.2026). Die Nummer ist
      im Link sichtbar; sie steht bewusst nur als WhatsApp-Kontakt auf der
      Seite, nicht als Telefonnummer.

## Inhalte, die noch fehlen

- [x] **Beitrittserklärung als Microsoft Form – zurückgestellt.** Microsoft
      Forms wird derzeit nicht verwendet, es bleibt einstweilen beim
      PDF-Formular (Vereinsangabe 11.08.2026). `membershipForm.url` bleibt
      deshalb leer, der Beitritts-Ablauf auf `/mitgliedschaft` führt zum
      Download unter `/dokumente` (Statuten § 5 Abs. 1).
      Falls das Online-Formular später doch kommt, sind vorher zu klären:
      **Auftragsverarbeitervertrag** mit Microsoft bzw. welches Konto das
      Formular hostet, welche Felder es abfragt (Datenminimierung) und ein
      eigener Absatz zur Verarbeitung durch Microsoft – die
      Website-Datenschutzerklärung betrifft seit 11.08.2026 nur noch den
      Besuch der Seite.
- [x] **Gründungsdatum**: 8. April 2013 (Vereinsangabe 11.08.2026, bestätigt
      nach Rückfrage – die zunächst genannte Jahreszahl 2023 war ein
      Tippfehler). Deckt sich mit der ersten dokumentierten Veranstaltung 2013
      und dem ersten Website-Beitrag vom 15.10.2013. Steht in `club.founded`
      bzw. `club.foundedDate`.
- [x] **Vorstand vollständig.** Alle sechs Funktionen sind besetzt
      (Vereinsangabe 10.08.2026), siehe [vereinsdaten.md](vereinsdaten.md).
- [x] **Entgelt für die Zutrittsverwaltung.** Die Website nennt es als
      Voraussetzung, ohne Betrag – dafür verlinken `/angebot` und das Schaubild
      auf `/mitgliedschaft` seit 11.08.2026 die Freibadseite der Marktgemeinde
      (`freibad.url`), wo die jeweils gültigen Tarife stehen.
- [x] **Lauftreff.** Für Laufen gibt es derzeit keinen fixen Termin
      (bestätigt 11.08.2026). Die Seite formuliert das entsprechend offen. Falls
      sich das ändert: Tag, Uhrzeit, Treffpunkt, Ansprechperson nachreichen.
- [x] **Kommende Veranstaltungen.** Derzeit sind keine ausgeschrieben
      (Vereinsangabe 11.08.2026). `events` bleibt leer, der Terminabschnitt auf
      Startseite und `/angebot` blendet sich aus. Sobald ein Termin feststeht,
      dort eintragen – er erscheint dann automatisch.
- [x] **Telefonnummer für die Website.** Es gibt keine Vereinstelefonnummer
      (Vereinsangabe 11.08.2026). Die Mobilnummer von Martin Muckenhuber aus
      der Ausschreibung 2017 ist eine Privatnummer und wird nicht geführt.
      `contact.phone` bleibt leer, Kontakt läuft über E-Mail und WhatsApp.
- [x] **Social Media.** Wird derzeit nicht aktiv bespielt (Vereinsangabe
      11.08.2026). Außer einem alten Facebook-Auftritt gibt es keine
      Vereinsprofile; er wird bewusst nicht verlinkt, solange er nicht gepflegt
      wird. Alle Felder in `social` bleiben leer, der Block auf `/kontakt`
      blendet sich aus.

## Rechtliches

- [ ] **Datenschutzerklärung prüfen lassen.** `/datenschutz` betrifft seit
      11.08.2026 nur noch den Besuch der Website (Server-Logs, E-Mail-Kontakt,
      Foto- und Videoaufnahmen). Mitgliederverwaltung, Beiträge,
      Freibad-Zutrittsdaten, WhatsApp und Wettkampfnennungen stehen in der
      Datenschutzerklärung des Vereins, die unter `/dokumente` zum Download
      bereitsteht. Vor dem Go-live von einer rechtskundigen Person freigeben
      lassen – beide Dokumente gemeinsam, damit sie deckungsgleich bleiben.
- [x] **Hosting-Anbieter benennen**: Der Abschnitt zu den Server-Logdaten nennt
      seit 11.08.2026 GitHub Pages (GitHub Inc., USA) samt Hinweis auf mögliche
      Übermittlung in die USA.

## Vereinsintern (kein Website-Blocker)

- [ ] **Statutenergänzung § 3 Abs. 2 lit. g/h** beschließen lassen
      (Generalversammlung, Zweidrittelmehrheit, danach Anzeige an die
      Vereinsbehörde). Sie verankert die Nutzung fremder Sportstätten
      ausdrücklich als ideelles Mittel. Die Kooperation läuft bereits; der
      Vereinszweck der gültigen Fassung 2017 nennt Schwimmen ohnehin.
- [ ] **Vereinszweck und gelebtes Angebot.** Die Statuten nennen Laufen,
      Radfahren und Schwimmen; tatsächlich turnen wir im Winter und spielen
      Hockey. Bei einer ohnehin anstehenden Statutenänderung mitbedenken –
      siehe [angebot.md](angebot.md).

## Bild- und Markenrechte

- [x] **Von der alten Homepage wird nichts übernommen** (Entscheidung
      11.08.2026). Damit erübrigt sich die Freigabe für das Material auf dem
      alten Server, dessen Urheberrechte ungeklärt sind (teils Herwig Füreder,
      teils Ernst Teubenbacher). Bilder auf der neuen Seite kommen
      ausschließlich vom Verein selbst – derzeit die Startaufstellung im
      Rückblick auf `/verein` (Bildnachweis „Foto: blaugelb Offenhausen").
- [ ] **Personenfotos und Namensnennungen** brauchen das Einverständnis der
      Abgebildeten bzw. Genannten. Das bisher eingesetzte Foto ist bewusst eine
      Übersichtsaufnahme von hinten, auf der keine Einzelperson erkennbar im
      Vordergrund steht (Datenschutzerklärung Punkt 5).

## Technisches

- [ ] **Domain.** Die neue Seite soll `blaugelb.offenhausen.at` ersetzen. Wer
      verwaltet die Domain, und wohin zeigt sie nach dem Umstieg? Aktuell läuft
      dort noch eine defekte WordPress-Installation (nur die Startseite
      antwortet, alle Unterseiten 404).
- [ ] **Deployment festlegen.** Das Projekt enthält sowohl einen
      GitHub-Pages-Workflow als auch eine `vercel.json`; `nitro.preset` ist fest
      auf `github_pages` gesetzt. Einen Weg wählen.
- [ ] **301-Weiterleitungen der alten WordPress-Pfade** einrichten, sobald das
      Deployment feststeht (Syntax je nach Host: `_redirects`, `vercel.json`
      oder `.htaccess`):

      | alt | neu |
      | --- | --- |
      | `/infos/` | `/` |
      | `/strecke/` | `/` |
      | `/cz/` | `/` |
      | `/2016/*`, `/2017/*`, `/2018/*` | `/` |
      | `/wp-admin/*`, `/wp-login.php`, `/xmlrpc.php`, `/wp-content/*` | `/` |

- [ ] **Alte Inhalte sichern**, bevor der alte Server abgedreht wird –
      insbesondere Renn-Fotos und die Ausschreibungs-PDFs. Für die neue Website
      wird davon nichts übernommen (siehe Bild- und Markenrechte); es geht rein
      um die Archivierung im Verein. Das Original-Logo ist bereits als SVG
      nachgebaut.
