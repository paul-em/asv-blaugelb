# Offene Punkte vor dem Go-live

Stand: 09.08.2026. Alles, was für die Website noch fehlt oder bestätigt werden
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
      Person (Obmann Martin Muckenhuber), Vereinszweck, Blattlinie.
- [x] **Logo**: Vereinsmarke als SVG in `app/components/LogoMark.vue`
      (Varianten tile / invers / plain) und reduziert in `public/favicon.svg`.
- [x] **Namensführung**: „ASV" entfällt, der Auftritt lautet
      „blaugelb Offenhausen".
- [x] **Saisonprogramm** (Turnen, e-MTB, Schwimmen, Anlassbezogen) mit Zeiten
      und Orten – Quelle siehe [angebot.md](angebot.md).
- [x] **Mitgliedsbeiträge**: 25 € Einzelmitglied, 20 € je weiteres
      Familienmitglied im Haushalt, Kinder bis 15 Jahre frei.
- [x] **Bankverbindung** für den Mitgliedsbeitrag steht auf `/mitgliedschaft`
      (Sparkasse Lambach). Das Konto bei der Raiffeisenbank Eberschwang wird
      aufgelöst und ist seit 10.08.2026 nicht mehr angeführt.
- [x] **WhatsApp-Kontakt**: `https://wa.me/436502114679` – die Nachrichten
      gehen an Obmann Martin Muckenhuber (bestätigt 10.08.2026). Die Nummer ist
      im Link sichtbar; sie steht bewusst nur als WhatsApp-Kontakt auf der
      Seite, nicht als Telefonnummer.

## Inhalte, die noch fehlen

- [ ] **Beitrittserklärung als Microsoft Form.** Sobald der Link feststeht, in
      `membershipForm.url` (`app/data/site.ts`) eintragen. Dann führt der
      Beitritts-Ablauf auf `/mitgliedschaft` zum Online-Formular, und in der
      Datenschutzerklärung erscheint automatisch der Absatz zur Verarbeitung
      durch Microsoft. Solange das Feld leer ist, weist die Seite auf den
      formlosen Beitritt per E-Mail hin (Statuten § 5).
      Zu klären: **Auftragsverarbeitervertrag** mit Microsoft bzw. welches
      Konto das Formular hostet, und welche Felder das Formular abfragt
      (Datenminimierung) – das Formular braucht eine eigene
      DSGVO-Einwilligung.
- [ ] **Gründungsjahr.** Erster Website-Beitrag stammt vom 15.10.2013, die
      erste dokumentierte Veranstaltung ebenfalls 2013 – das Gründungsjahr
      selbst ist damit nicht belegt.
- [ ] **Vorstand vollständig.** Vier von sechs Funktionen sind unbesetzt:
      Obmann-Stv., Schriftführer-Stv., Kassier, Kassier-Stv.
- [ ] **Entgelt für die Zutrittsverwaltung.** Die Website nennt es als
      Voraussetzung, ohne Betrag. Falls die Höhe feststeht: ergänzen oder auf
      die Freibadtarife der Gemeinde verlinken.
- [ ] **Lauftreff.** Für Laufen gibt es derzeit keinen fixen Termin. Falls doch:
      Tag, Uhrzeit, Treffpunkt, Ansprechperson.
- [ ] **Kommende Veranstaltungen.** Für 2026/2027 ist nichts dokumentiert. Ist
      eine Neuauflage der Cross Challenge geplant? Termine landen in `events`
      und erscheinen dann automatisch auf Startseite und `/angebot`.
- [ ] **Telefonnummer für die Website.** Bekannt ist nur die Mobilnummer von
      Martin Muckenhuber aus der Ausschreibung 2017 – eine Privatnummer von vor
      neun Jahren und deshalb nicht auf der Seite.
- [ ] **Social Media.** Facebook, Instagram, Strava – vorhanden?

## Rechtliches

- [ ] **Datenschutzerklärung prüfen lassen.** `/datenschutz` ist als Vorlage
      formuliert und deckt E-Mail-Kontakt, Mitgliederverwaltung,
      Freibad-Zutrittsdaten, WhatsApp und Server-Logs ab. Vor dem Go-live von
      einer rechtskundigen Person freigeben lassen.
- [ ] **Hosting-Anbieter benennen**, sobald das Deployment feststeht – der
      Abschnitt zu den Server-Logdaten spricht derzeit allgemein vom
      „Hosting-Anbieter".

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

- [ ] **Renn-Fotos.** Das Material auf dem alten Server ist gut, die
      Urheberrechte sind aber ungeklärt (teils Herwig Füreder, teils Ernst
      Teubenbacher). Vor Verwendung Freigabe einholen.
- [ ] **Personenfotos und Namensnennungen** brauchen das Einverständnis der
      Abgebildeten bzw. Genannten.

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
      insbesondere Renn-Fotos und die Ausschreibungs-PDFs. Das Original-Logo
      ist bereits als SVG nachgebaut.
