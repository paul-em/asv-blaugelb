# Offene Punkte vor dem Go-live

Stand: 09.08.2026. Alles, was für die Website noch fehlt oder bestätigt werden
muss. Belegte Daten stehen in [vereinsdaten.md](vereinsdaten.md),
[freibad.md](freibad.md) und [historie.md](historie.md).

## Erledigt

- [x] **Freibad-Kooperation ist in Kraft** – `freibad.aktiv = true`, die Zeiten
      werden ausgespielt.
- [x] **Vereinsanschrift** bestätigt: Bachstätten 4, 4625 Offenhausen.
- [x] **Inhaltlich verantwortlich**: Franz Emathinger, Paul Emathinger.
- [x] **Datenschutz**: Die Seite ist rein statisch, erhebt keine Daten, setzt
      keine Cookies und lädt nichts von Drittanbietern nach – geprüft am
      gebauten Output. Ein entsprechender Abschnitt steht im Impressum.
- [x] **Impressum-Pflichtangaben**: ZVR 904297698, Sitz, vertretungsbefugte
      Person (Obmann Martin Muckenhuber), Vereinszweck, Blattlinie.
- [x] **Logo**: Vereinsmarke als SVG in `app/components/LogoMark.vue`
      (Varianten tile / invers / plain) und reduziert in `public/favicon.svg`.
- [x] **Namensführung**: „ASV" entfällt, der Auftritt lautet
      „blaugelb Offenhausen".

## Inhalte, die noch fehlen

- [ ] **Gründungsjahr.** Erster Website-Beitrag stammt vom 15.10.2013, die
      erste dokumentierte Veranstaltung ebenfalls 2013 – das Gründungsjahr
      selbst ist damit nicht belegt.
- [ ] **Vorstand vollständig.** Vier von sechs Funktionen sind unbesetzt:
      Obmann-Stv., Schriftführer-Stv., Kassier, Kassier-Stv.
- [ ] **Mitgliedsbeiträge.** Beitrittsgebühr und Jahresbeiträge für ordentliche
      und außerordentliche Mitglieder. **Dringend**, weil bereits Anfragen für
      Mitgliedschaften eingehen und die Seite aktuell „auf Anfrage" ausweist.
- [ ] **Entgelt für die Zutrittsverwaltung.** Die Website nennt es als
      Voraussetzung, ohne Betrag. Falls die Höhe feststeht: ergänzen oder auf
      die Freibadtarife der Gemeinde verlinken.
- [ ] **Aktuelle Lauf- und Radtreffs.** Gibt es neben dem Schwimmtraining
      regelmäßige Termine? Falls ja: Tag, Uhrzeit, Treffpunkt, Ansprechperson.
- [ ] **Kommende Veranstaltungen.** Für 2026/2027 ist nichts dokumentiert. Ist
      eine Neuauflage der Cross Challenge geplant?
- [ ] **Telefonnummer für die Website.** Bekannt ist nur die Mobilnummer von
      Martin Muckenhuber aus der Ausschreibung 2017 – eine Privatnummer von vor
      neun Jahren und deshalb nicht auf der Seite.
- [ ] **Social Media.** Facebook, Instagram, Strava – vorhanden?

## Vereinsintern (kein Website-Blocker)

- [ ] **Statutenergänzung § 3 Abs. 2 lit. g/h** beschließen lassen
      (Generalversammlung, Zweidrittelmehrheit, danach Anzeige an die
      Vereinsbehörde). Sie verankert die Nutzung fremder Sportstätten
      ausdrücklich als ideelles Mittel. Die Kooperation läuft bereits; der
      Vereinszweck der gültigen Fassung 2017 nennt Schwimmen ohnehin.

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
- [ ] **Hosting-Anbieter im Datenschutz benennen**, sobald das Deployment
      feststeht – der Abschnitt spricht derzeit allgemein vom
      „Hosting-Anbieter".
- [ ] **Alte Inhalte sichern**, bevor der alte Server abgedreht wird –
      insbesondere Renn-Fotos und die Ausschreibungs-PDFs. Das Original-Logo
      ist bereits als SVG nachgebaut.
