/* @ds-bundle: {"format":4,"namespace":"KenosUI","components":[{"name":"Button"},{"name":"IconButton"},{"name":"Icon"},{"name":"Input"},{"name":"Field"},{"name":"Textarea"},{"name":"Select"},{"name":"Combobox"},{"name":"InputGroup"},{"name":"Checkbox"},{"name":"RadioGroup"},{"name":"SegmentGroup"},{"name":"Switch"},{"name":"FileUpload"},{"name":"Badge"},{"name":"Tag"},{"name":"Card"},{"name":"DataList"},{"name":"Accordion"},{"name":"Alert"},{"name":"Spinner"},{"name":"Skeleton"},{"name":"EmptyState"},{"name":"Toast"},{"name":"Status"},{"name":"Progress"},{"name":"Stat"},{"name":"Table"},{"name":"ActionBar"},{"name":"LineChart"},{"name":"BarChart"},{"name":"Sparkline"},{"name":"Container"},{"name":"Stack"},{"name":"Grid"},{"name":"PageHeader"},{"name":"Tabs"},{"name":"Breadcrumb"},{"name":"Pagination"},{"name":"Steps"},{"name":"Nav"},{"name":"AppShell"},{"name":"Dialog"},{"name":"Drawer"},{"name":"Menu"},{"name":"Tooltip"},{"name":"Avatar"},{"name":"Popover"},{"name":"CommandPalette"},{"name":"NumberInput"},{"name":"Slider"},{"name":"ProgressCircle"},{"name":"RelativeTime"},{"name":"Timeline"},{"name":"UptimeBar"},{"name":"KeyValueEditor"},{"name":"TreeView"},{"name":"ThemeToggle"},{"name":"Navbar"},{"name":"Hero"},{"name":"FeatureGrid"},{"name":"Footer"},{"name":"Banner"},{"name":"SkipLink"},{"name":"Heading"},{"name":"Link"},{"name":"Code"},{"name":"Kbd"},{"name":"Blockquote"},{"name":"Separator"},{"name":"List"},{"name":"CodeBlock"},{"name":"Terminal"},{"name":"Prose"}]} */
/* KenosUI — React 18 components. Icons: Lucide (ISC), see components/icons-LICENSE.txt. */
(function () {
  var React = window.React, h = React.createElement;
  var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef, useMemo = React.useMemo, useId = React.useId;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(" "); }

  /* ---------------- i18n ---------------- English by default; KenosUI.setLocale("de") switches every built-in text. */
  var MESSAGES = {
    en: { copy: "Copy", copied: "Copied", console: "Console", remove: "Remove", close: "Close", cancel: "Cancel", "delete": "Delete", confirm: "Confirm", actions: "Actions",
      loading: "Loading …", value: "Value", key: "Key", time: "Time", today: "today", increment: "Increment", decrement: "Decrement", skip: "Skip to content",
      "upload.label": "Drop a file here or click to browse", "table.empty": "No entries", "table.selectRow": "Select row", "table.selectAll": "Select all",
      "actionbar.label": "Selection actions", "actionbar.count": "{n} selected", "actionbar.clear": "Clear selection",
      "pagination.label": "Pagination", "pagination.range": "{range} of {total}", "pagination.prev": "Previous page", "pagination.next": "Next page",
      "nav.main": "Main navigation", "nav.open": "Open navigation", "menu.open": "Open menu", "menu.close": "Close menu",
      "combobox.clear": "Clear selection", "combobox.open": "Open list", "combobox.close": "Close list", "combobox.empty": "No matches", "combobox.more": "{n} more – refine your search",
      "chart.asTable": "Show as table", "chart.asChart": "Show as chart", "chart.line": "Line chart", "chart.bar": "Bar chart", "chart.column": "Column chart",
      "theme.label": "Color scheme", "theme.light": "Light", "theme.dark": "Dark", "theme.system": "System", "theme.toDark": "Switch to dark theme", "theme.toLight": "Switch to light theme",
      "confirm.typeBefore": "Type ", "confirm.typeAfter": " to confirm", "cmdk.placeholder": "Search commands or pages …", "cmdk.empty": "Nothing found", "cmdk.navigate": "navigate", "cmdk.run": "run",
      "time.now": "just now", "uptime.up": "Operational", "uptime.degraded": "Degraded", "uptime.down": "Outage", "uptime.none": "No data", "uptime.days": "{n} days ago",
      "kv.add": "Add entry", "kv.removeRow": "Remove row", "kv.hint": "Tip: paste several KEY=value lines (.env) into a key field", "banner.label": "Announcement",
      "status.online": "Online", "status.offline": "Offline", "status.degraded": "Degraded", "status.maintenance": "Maintenance", "status.unknown": "Unknown", "status.stopped": "Stopped",
      "status.running": "Running", "status.frozen": "Frozen", "status.error": "Error", "status.starting": "Starting", "status.stopping": "Stopping",
      "progress.label": "Progress", "alert.note": "Note", "alert.tip": "Tip", "alert.important": "Important", "alert.warning": "Warning", "alert.caution": "Caution" },
    de: { copy: "Kopieren", copied: "Kopiert", console: "Konsole", remove: "Entfernen", close: "Schliessen", cancel: "Abbrechen", "delete": "Löschen", confirm: "Bestätigen", actions: "Aktionen",
      loading: "Lädt …", value: "Wert", key: "Schlüssel", time: "Zeit", today: "heute", increment: "Erhöhen", decrement: "Verringern", skip: "Zum Inhalt springen",
      "upload.label": "Datei hierher ziehen oder klicken", "table.empty": "Keine Einträge", "table.selectRow": "Zeile auswählen", "table.selectAll": "Alle auswählen",
      "actionbar.label": "Auswahl-Aktionen", "actionbar.count": "{n} ausgewählt", "actionbar.clear": "Auswahl aufheben",
      "pagination.label": "Seiten", "pagination.range": "{range} von {total}", "pagination.prev": "Vorherige Seite", "pagination.next": "Nächste Seite",
      "nav.main": "Hauptnavigation", "nav.open": "Navigation öffnen", "menu.open": "Menü öffnen", "menu.close": "Menü schliessen",
      "combobox.clear": "Auswahl leeren", "combobox.open": "Liste öffnen", "combobox.close": "Liste schliessen", "combobox.empty": "Keine Treffer", "combobox.more": "{n} weitere – Suche verfeinern",
      "chart.asTable": "Als Tabelle", "chart.asChart": "Als Diagramm", "chart.line": "Liniendiagramm", "chart.bar": "Balkendiagramm", "chart.column": "Säulendiagramm",
      "theme.label": "Farbschema", "theme.light": "Hell", "theme.dark": "Dunkel", "theme.system": "System", "theme.toDark": "Zu dunklem Design wechseln", "theme.toLight": "Zu hellem Design wechseln",
      "confirm.typeBefore": "Zum Bestätigen ", "confirm.typeAfter": " eingeben", "cmdk.placeholder": "Befehl oder Seite suchen …", "cmdk.empty": "Nichts gefunden", "cmdk.navigate": "wählen", "cmdk.run": "ausführen",
      "time.now": "gerade eben", "uptime.up": "OK", "uptime.degraded": "Eingeschränkt", "uptime.down": "Ausfall", "uptime.none": "Keine Daten", "uptime.days": "vor {n} Tagen",
      "kv.add": "Eintrag hinzufügen", "kv.removeRow": "Zeile entfernen", "kv.hint": "Tipp: mehrere KEY=value-Zeilen (.env) in ein Schlüsselfeld einfügen", "banner.label": "Hinweis",
      "status.online": "Online", "status.offline": "Offline", "status.degraded": "Eingeschränkt", "status.maintenance": "Wartung", "status.unknown": "Unbekannt", "status.stopped": "Gestoppt",
      "status.running": "Läuft", "status.frozen": "Eingefroren", "status.error": "Fehler", "status.starting": "Startet", "status.stopping": "Stoppt",
      "progress.label": "Fortschritt", "alert.note": "Hinweis", "alert.tip": "Tipp", "alert.important": "Wichtig", "alert.warning": "Warnung", "alert.caution": "Achtung" }
  };
  var INTL = { en: "en-GB", de: "de-CH" };
  var I18N = { lang: "en", intl: "en-GB", msgs: MESSAGES.en, cache: {} };
  function tr(k, vars) { var m = I18N.msgs[k]; if (m == null) m = MESSAGES.en[k]; if (m == null) m = k;
    return vars ? m.replace(/\{(\w+)\}/g, function (_, v) { return vars[v] != null ? vars[v] : ""; }) : m; }
  function intl(kind, make, fallback) {
    if (typeof Intl === "undefined") return fallback;
    var key = kind + ":" + I18N.intl; if (!I18N.cache[key]) { try { I18N.cache[key] = make(I18N.intl); } catch (e) { I18N.cache[key] = null; } }
    var f = I18N.cache[key]; return f ? (f.format ? function (a, b) { return f.format(a, b); } : f) : fallback;
  }
  /* setLocale("en" | "de" | any code, { messages?, intl? }) — call once before rendering. Unknown keys fall back to English. */
  function setLocale(lang, opts) {
    opts = opts || {};
    I18N.lang = lang; I18N.intl = opts.intl || INTL[lang] || lang; I18N.cache = {};
    I18N.msgs = Object.assign({}, MESSAGES[lang] || MESSAGES.en, opts.messages || {});
  }
  function rest(props, omit) { var o = {}; for (var k in props) if (omit.indexOf(k) < 0) o[k] = props[k]; return o; }
  function useControlled(value, defaultValue, onChange) {
    var st = useState(defaultValue), isC = value !== undefined;
    return [isC ? value : st[0], function (v) { if (!isC) st[1](v); if (onChange) onChange(v); }];
  }

  /* ---------------- Icon ---------------- */
  var ICON_DATA = {"play":[["path",{"d":"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]],"square":[["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}]],"rotate-cw":[["path",{"d":"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{"d":"M21 3v5h-5"}]],"rotate-ccw":[["path",{"d":"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{"d":"M3 3v5h5"}]],"pause":[["rect",{"x":"14","y":"3","width":"5","height":"18","rx":"1"}],["rect",{"x":"5","y":"3","width":"5","height":"18","rx":"1"}]],"snowflake":[["path",{"d":"m10 20-1.25-2.5L6 18"}],["path",{"d":"M10 4 8.75 6.5 6 6"}],["path",{"d":"m14 20 1.25-2.5L18 18"}],["path",{"d":"m14 4 1.25 2.5L18 6"}],["path",{"d":"m17 21-3-6h-4"}],["path",{"d":"m17 3-3 6 1.5 3"}],["path",{"d":"M2 12h6.5L10 9"}],["path",{"d":"m20 10-1.5 2 1.5 2"}],["path",{"d":"M22 12h-6.5L14 15"}],["path",{"d":"m4 10 1.5 2L4 14"}],["path",{"d":"m7 21 3-6-1.5-3"}],["path",{"d":"m7 3 3 6h4"}]],"trash":[["path",{"d":"M10 11v6"}],["path",{"d":"M14 11v6"}],["path",{"d":"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{"d":"M3 6h18"}],["path",{"d":"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]],"pencil":[["path",{"d":"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{"d":"m15 5 4 4"}]],"copy":[["rect",{"width":"14","height":"14","x":"8","y":"8","rx":"2","ry":"2"}],["path",{"d":"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]],"check":[["path",{"d":"M20 6 9 17l-5-5"}]],"x":[["path",{"d":"M18 6 6 18"}],["path",{"d":"m6 6 12 12"}]],"plus":[["path",{"d":"M5 12h14"}],["path",{"d":"M12 5v14"}]],"minus":[["path",{"d":"M5 12h14"}]],"chevron-down":[["path",{"d":"m6 9 6 6 6-6"}]],"chevron-right":[["path",{"d":"m9 18 6-6-6-6"}]],"chevron-left":[["path",{"d":"m15 18-6-6 6-6"}]],"chevron-up":[["path",{"d":"m18 15-6-6-6 6"}]],"chevrons-up-down":[["path",{"d":"m7 15 5 5 5-5"}],["path",{"d":"m7 9 5-5 5 5"}]],"arrow-up":[["path",{"d":"m5 12 7-7 7 7"}],["path",{"d":"M12 19V5"}]],"arrow-down":[["path",{"d":"M12 5v14"}],["path",{"d":"m19 12-7 7-7-7"}]],"search":[["path",{"d":"m21 21-4.34-4.34"}],["circle",{"cx":"11","cy":"11","r":"8"}]],"settings":[["path",{"d":"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{"cx":"12","cy":"12","r":"3"}]],"terminal":[["path",{"d":"M12 19h8"}],["path",{"d":"m4 17 6-6-6-6"}]],"file-text":[["path",{"d":"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{"d":"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{"d":"M10 9H8"}],["path",{"d":"M16 13H8"}],["path",{"d":"M16 17H8"}]],"camera":[["path",{"d":"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{"cx":"12","cy":"13","r":"3"}]],"hard-drive":[["path",{"d":"M10 16h.01"}],["path",{"d":"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{"d":"M21.946 12.013H2.054"}],["path",{"d":"M6 16h.01"}]],"network":[["rect",{"x":"16","y":"16","width":"6","height":"6","rx":"1"}],["rect",{"x":"2","y":"16","width":"6","height":"6","rx":"1"}],["rect",{"x":"9","y":"2","width":"6","height":"6","rx":"1"}],["path",{"d":"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{"d":"M12 12V8"}]],"server":[["rect",{"width":"20","height":"8","x":"2","y":"2","rx":"2","ry":"2"}],["rect",{"width":"20","height":"8","x":"2","y":"14","rx":"2","ry":"2"}],["line",{"x1":"6","x2":"6.01","y1":"6","y2":"6"}],["line",{"x1":"6","x2":"6.01","y1":"18","y2":"18"}]],"box":[["path",{"d":"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{"d":"m3.3 7 8.7 5 8.7-5"}],["path",{"d":"M12 22V12"}]],"monitor":[["rect",{"width":"20","height":"14","x":"2","y":"3","rx":"2"}],["line",{"x1":"8","x2":"16","y1":"21","y2":"21"}],["line",{"x1":"12","x2":"12","y1":"17","y2":"21"}]],"cpu":[["path",{"d":"M12 20v2"}],["path",{"d":"M12 2v2"}],["path",{"d":"M17 20v2"}],["path",{"d":"M17 2v2"}],["path",{"d":"M2 12h2"}],["path",{"d":"M2 17h2"}],["path",{"d":"M2 7h2"}],["path",{"d":"M20 12h2"}],["path",{"d":"M20 17h2"}],["path",{"d":"M20 7h2"}],["path",{"d":"M7 20v2"}],["path",{"d":"M7 2v2"}],["rect",{"x":"4","y":"4","width":"16","height":"16","rx":"2"}],["rect",{"x":"8","y":"8","width":"8","height":"8","rx":"1"}]],"memory-stick":[["path",{"d":"M12 12v-2"}],["path",{"d":"M12 18v-2"}],["path",{"d":"M16 12v-2"}],["path",{"d":"M16 18v-2"}],["path",{"d":"M2 11h1.5"}],["path",{"d":"M20 18v-2"}],["path",{"d":"M20.5 11H22"}],["path",{"d":"M4 18v-2"}],["path",{"d":"M8 12v-2"}],["path",{"d":"M8 18v-2"}],["rect",{"x":"2","y":"6","width":"20","height":"10","rx":"2"}]],"layers":[["path",{"d":"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{"d":"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{"d":"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]],"folder":[["path",{"d":"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]],"upload":[["path",{"d":"M12 3v12"}],["path",{"d":"m17 8-5-5-5 5"}],["path",{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]],"download":[["path",{"d":"M12 15V3"}],["path",{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{"d":"m7 10 5 5 5-5"}]],"refresh-cw":[["path",{"d":"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{"d":"M21 3v5h-5"}],["path",{"d":"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{"d":"M8 16H3v5"}]],"ellipsis":[["circle",{"cx":"12","cy":"12","r":"1"}],["circle",{"cx":"19","cy":"12","r":"1"}],["circle",{"cx":"5","cy":"12","r":"1"}]],"ellipsis-vertical":[["circle",{"cx":"12","cy":"12","r":"1"}],["circle",{"cx":"12","cy":"5","r":"1"}],["circle",{"cx":"12","cy":"19","r":"1"}]],"log-out":[["path",{"d":"m16 17 5-5-5-5"}],["path",{"d":"M21 12H9"}],["path",{"d":"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]],"user":[["path",{"d":"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{"cx":"12","cy":"7","r":"4"}]],"shield":[["path",{"d":"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]],"info":[["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M12 16v-4"}],["path",{"d":"M12 8h.01"}]],"circle-alert":[["circle",{"cx":"12","cy":"12","r":"10"}],["line",{"x1":"12","x2":"12","y1":"8","y2":"12"}],["line",{"x1":"12","x2":"12.01","y1":"16","y2":"16"}]],"triangle-alert":[["path",{"d":"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{"d":"M12 9v4"}],["path",{"d":"M12 17h.01"}]],"circle-check":[["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m16 9-5.5 5.5L8 12"}]],"circle-x":[["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m15 9-6 6"}],["path",{"d":"m9 9 6 6"}]],"external-link":[["path",{"d":"M15 3h6v6"}],["path",{"d":"M10 14 21 3"}],["path",{"d":"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]],"key":[["path",{"d":"m2 21 9.6-9.6"}],["path",{"d":"m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19"}],["circle",{"cx":"15.5","cy":"7.5","r":"5.5"}]],"lock":[["rect",{"width":"18","height":"11","x":"3","y":"11","rx":"2","ry":"2"}],["path",{"d":"M7 11V7a5 5 0 0 1 10 0v4"}]],"globe":[["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{"d":"M2 12h20"}]],"database":[["ellipse",{"cx":"12","cy":"5","rx":"9","ry":"3"}],["path",{"d":"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{"d":"M3 12A9 3 0 0 0 21 12"}]],"cloud":[["path",{"d":"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]],"sun":[["circle",{"cx":"12","cy":"12","r":"4"}],["path",{"d":"M12 2v2"}],["path",{"d":"M12 20v2"}],["path",{"d":"m4.93 4.93 1.41 1.41"}],["path",{"d":"m17.66 17.66 1.41 1.41"}],["path",{"d":"M2 12h2"}],["path",{"d":"M20 12h2"}],["path",{"d":"m6.34 17.66-1.41 1.41"}],["path",{"d":"m19.07 4.93-1.41 1.41"}]],"moon":[["path",{"d":"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]],"funnel":[["path",{"d":"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]],"list":[["path",{"d":"M3 5h.01"}],["path",{"d":"M3 12h.01"}],["path",{"d":"M3 19h.01"}],["path",{"d":"M8 5h13"}],["path",{"d":"M8 12h13"}],["path",{"d":"M8 19h13"}]],"layout-grid":[["rect",{"width":"7","height":"7","x":"3","y":"3","rx":"1"}],["rect",{"width":"7","height":"7","x":"14","y":"3","rx":"1"}],["rect",{"width":"7","height":"7","x":"14","y":"14","rx":"1"}],["rect",{"width":"7","height":"7","x":"3","y":"14","rx":"1"}]],"activity":[["path",{"d":"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]],"clock":[["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M12 6v6l4 2"}]],"tag":[["path",{"d":"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{"cx":"7.5","cy":"7.5","r":".5","fill":"currentColor"}]],"power":[["path",{"d":"M12 2v10"}],["path",{"d":"M18.4 6.6a9 9 0 1 1-12.77.04"}]],"eye":[["path",{"d":"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{"cx":"12","cy":"12","r":"3"}]],"eye-off":[["path",{"d":"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{"d":"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{"d":"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{"d":"m2 2 20 20"}]],"link":[["path",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]],"menu":[["path",{"d":"M4 5h16"}],["path",{"d":"M4 12h16"}],["path",{"d":"M4 19h16"}]],"house":[["path",{"d":"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{"d":"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]],"folder-kanban":[["path",{"d":"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{"d":"M8 10v4"}],["path",{"d":"M12 10v2"}],["path",{"d":"M16 10v6"}]],"cable":[["path",{"d":"M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"}],["path",{"d":"M17 21v-2"}],["path",{"d":"M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"}],["path",{"d":"M21 21v-2"}],["path",{"d":"M3 5V3"}],["path",{"d":"M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"}],["path",{"d":"M7 5V3"}]],"panel-left":[["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M9 3v18"}]]};
  function Icon(p) {
    var nodes = ICON_DATA[p.name];
    if (!nodes) return null;
    return h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
        strokeWidth: p.strokeWidth || 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": p["aria-label"] ? undefined : "true",
        role: p["aria-label"] ? "img" : undefined, focusable: "false" },
      rest(p, ["name", "strokeWidth", "className", "size"]),
      { className: cx("kui-icon", p.className), style: p.size ? Object.assign({ width: p.size, height: p.size }, p.style) : p.style }),
      nodes.map(function (n, i) { return h(n[0], Object.assign({ key: i }, n[1])); }));
  }
  Icon.names = Object.keys(ICON_DATA);
  function iconOf(x) { return typeof x === "string" ? h(Icon, { name: x }) : x; }

  /* ---------------- Actions ---------------- */
  var Button = React.forwardRef(function Button(p, ref) {
    var variant = p.variant || "solid", size = p.size || "md", palette = p.palette || "primary";
    var busy = !!p.loading;
    var kids = [p.startIcon && h(React.Fragment, { key: "s" }, iconOf(p.startIcon)),
      p.children != null && h(React.Fragment, { key: "c" }, busy && p.loadingText ? p.loadingText : p.children),
      p.endIcon && h(React.Fragment, { key: "e" }, iconOf(p.endIcon))];
    if (busy && !p.loadingText) kids = [h("span", { key: "sp", className: "kui-btn__spinner" }, h(Spinner, { size: "sm" })), h("span", { key: "w", className: "kui-btn__label" }, kids)];
    else if (busy) kids.unshift(h(Spinner, { key: "sp", size: "sm" }));
    return h(p.as || "button", Object.assign({ ref: ref, type: p.as ? undefined : (p.type || "button") },
      rest(p, ["variant", "size", "palette", "className", "iconOnly", "as", "type", "loading", "loadingText", "startIcon", "endIcon", "children"]),
      { disabled: p.disabled || busy || undefined, "aria-busy": busy || undefined,
        className: cx("kui-ui", "kui-btn", "kui-p-" + palette, "kui-btn--" + variant, "kui-btn--" + size, p.iconOnly && "kui-btn--icon", busy && !p.loadingText && "kui-btn--loading", p.className) }), kids);
  });
  var IconButton = React.forwardRef(function IconButton(p, ref) {
    return h(Button, Object.assign({ ref: ref, variant: "ghost" }, rest(p, ["icon"]), { iconOnly: true, title: p.title || p["aria-label"] }), iconOf(p.icon));
  });

  /* ---------------- Typography ---------------- */
  function Heading(p) {
    var size = p.size || "xl";
    var tag = p.as || ({ "4xl": "h1", "3xl": "h2", "2xl": "h3", xl: "h4", lg: "h5" }[size] || "h6");
    return h(tag, Object.assign({}, rest(p, ["size", "as", "className"]), { className: cx("kui-ui", "kui-heading", "kui-heading--" + size, p.className) }));
  }
  var Link = React.forwardRef(function Link(p, ref) {
    var ext = p.external;
    return h("a", Object.assign({ ref: ref, target: ext ? "_blank" : undefined, rel: ext ? "noreferrer noopener" : undefined },
      rest(p, ["variant", "external", "className", "children"]),
      { className: cx("kui-ui", "kui-link", p.variant === "plain" && "kui-link--plain", p.className) }),
      p.children, ext && h(Icon, { name: "external-link", style: { width: ".85em", height: ".85em", marginLeft: ".25em" } }));
  });
  function Code(p) { return h("code", Object.assign({}, rest(p, ["className"]), { className: cx("kui-ui", "kui-code", p.className) })); }
  function Kbd(p) { return h("kbd", Object.assign({}, rest(p, ["className"]), { className: cx("kui-ui", "kui-kbd", p.className) })); }
  function Blockquote(p) {
    return h("blockquote", Object.assign({}, rest(p, ["className", "cite", "children"]), { className: cx("kui-ui", "kui-blockquote", p.className) }),
      p.children, p.cite && h("footer", { style: { marginTop: "var(--space-2)", fontSize: ".875rem" } }, "— ", p.cite));
  }
  function Separator(p) {
    var v = p.orientation === "vertical";
    return h(v ? "div" : "hr", Object.assign({ role: v ? "separator" : undefined, "aria-orientation": v ? "vertical" : undefined },
      rest(p, ["orientation", "variant", "className"]),
      { className: cx("kui-ui", "kui-separator", v && "kui-separator--vertical", p.variant === "dashed" && "kui-separator--dashed", p.className) }));
  }
  function List(p) {
    return h(p.ordered ? "ol" : "ul", Object.assign({}, rest(p, ["ordered", "className", "items", "children"]), { className: cx("kui-ui", "kui-list", p.className) }),
      p.items ? p.items.map(function (it, i) { return h("li", { key: i }, it); }) : p.children);
  }

  /* ---------------- Syntax highlighting (no dependencies, line-based) ----------------
     Types → CSS classes kui-tok-<type>: comment keyword string number key fn var attr punct prompt
     error warn info add del meta. Unknown languages render as plain text. */
  var HL_STR = /"(?:[^"\\]|\\.)*"?|'(?:[^'\\]|\\.)*'?/y;
  var HL_NUM = /-?(?:0x[\da-fA-F]+|\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?)(?![\w.])/y;
  function hlWords(list, type, flags) { return [type, new RegExp("\\b(?:" + list.split(" ").join("|") + ")\\b", "y" + (flags || ""))]; }
  var HL_LANGS = {
    yaml: [["comment", /(?<=^|\s)#.*/y], ["punct", /^\s*-(?=\s|$)/y], ["key", /(?<=^\s*(?:-\s+)?)(?:"[^"]*"|'[^']*'|[^\s:#][^:#]*?)(?=\s*:(?:\s|$))/y],
      ["string", HL_STR], hlWords("true false null yes no on off True False Null", "keyword"), ["number", /(?<![\w.-])-?\d+(?:\.\d+)?(?:[KMGT]i?B)?(?![\w.])/y],
      ["var", /[&*][\w-]+/y], ["punct", /[:[\]{},|>]/y]],
    json: [["key", /"(?:[^"\\]|\\.)*"(?=\s*:)/y], ["string", HL_STR], hlWords("true false null", "keyword"), ["number", HL_NUM], ["punct", /[{}[\],:]/y]],
    bash: [["prompt", /^\s*\$(?= )/y], ["comment", /(?<=^|\s)#.*/y], ["string", /"(?:[^"\\]|\\.)*"?/y], ["string", /'[^']*'?/y],
      ["var", /\$\{[^}]*\}?|\$\(|\$[A-Za-z_]\w*|\$[@*#?$!0-9-]/y],
      hlWords("if then else elif fi for in do done while until case esac function return export local readonly unset sudo exit", "keyword"),
      ["fn", /(?<=(?:^\s*(?:\$\s+)?|[|;&(]\s*|\bsudo\s+))[\w./-]+/y], ["attr", /(?<=\s)--?[\w-]+(?==?)/y], ["number", /(?<![\w.-])\d+(?![\w.])/y], ["punct", /[|&;<>()=]+/y]],
    ini: [["comment", /^\s*[#;].*|(?<=\s)[#;].*/y], ["keyword", /^\s*\[[^\]]*\]/y], ["key", /^\s*[\w.\-"]+(?=\s*=)/y], ["string", HL_STR], hlWords("true false on off yes no", "keyword"), ["number", HL_NUM], ["punct", /[=[\]{},]/y]],
    js: [["comment", /\/\/.*|\/\*.*?(?:\*\/|$)/y], ["string", /`(?:[^`\\]|\\.)*`?/y], ["string", HL_STR],
      hlWords("const let var function return if else for while do switch case break continue new class extends import from export default async await try catch finally throw typeof instanceof in of this null undefined true false interface type enum implements", "keyword"),
      ["number", HL_NUM], ["fn", /[A-Za-z_$][\w$]*(?=\s*\()/y], ["punct", /[{}()[\];,.=<>+\-*/!?:&|]+/y]],
    python: [["comment", /#.*/y], ["string", /[rbfu]{0,2}(?:"""[^]*?(?:"""|$)|'''[^]*?(?:'''|$)|"(?:[^"\\]|\\.)*"?|'(?:[^'\\]|\\.)*'?)/iy], ["var", /@[\w.]+/y],
      hlWords("def class return if elif else for while in not and or is import from as with try except finally raise pass break continue lambda yield async await None True False self", "keyword"),
      ["number", HL_NUM], ["fn", /[A-Za-z_]\w*(?=\s*\()/y], ["punct", /[{}()[\];,.=<>+\-*/%!:]+/y]],
    dockerfile: [["comment", /^\s*#.*/y], hlWords("FROM RUN CMD ENTRYPOINT COPY ADD ENV ARG EXPOSE WORKDIR USER VOLUME LABEL HEALTHCHECK SHELL AS ONBUILD STOPSIGNAL", "keyword", "i"),
      ["string", HL_STR], ["var", /\$\{?\w+\}?/y], ["attr", /(?<=\s)--?[\w-]+/y], ["punct", /[[\],=&|\\]+/y]],
    nix: [["comment", /#.*|\/\*.*?(?:\*\/|$)/y], ["string", /''[^]*?(?:''|$)/y], ["string", /"(?:[^"\\]|\\.)*"?/y], ["string", /\.{0,2}\/[\w./-]+|<[\w./-]+>/y],
      hlWords("let in with rec inherit if then else import assert or", "keyword"), hlWords("true false null", "keyword"),
      ["key", /[\w.\-"]+(?=\s*=[^=])/y], ["var", /\$\{/y], ["number", HL_NUM], ["punct", /[{}()[\];:,.=?@]+/y]],
    log: [["comment", /^\S*\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}(?::\d{2}(?:[.,]\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?\S*|^\w{3} +\d+ \d{2}:\d{2}:\d{2}/y],
      ["error", /\b(?:ERROR|ERR|FATAL|CRIT(?:ICAL)?|PANIC|FAIL(?:ED)?)\b/y], ["warn", /\b(?:WARN(?:ING)?)\b/y], ["info", /\b(?:INFO|NOTICE)\b/y], ["comment", /\b(?:DEBUG|TRACE)\b/y],
      ["key", /\b[\w.-]+(?==)/y], ["string", /"(?:[^"\\]|\\.)*"?/y], ["number", /(?<![\w.-])\d+(?:\.\d+)?(?![\w.])/y]],
    sql: [["comment", /--.*/y], ["string", /'(?:[^']|'')*'?/y], hlWords("select from where and or not insert into values update set delete create table index drop alter join left right inner outer on group by order limit as null is primary key default", "keyword", "i"), ["number", HL_NUM], ["punct", /[(),;=<>*.]+/y]]
  };
  var HL_ALIAS = { yml: "yaml", sh: "bash", shell: "bash", zsh: "bash", console: "bash", terminal: "bash", toml: "ini", conf: "ini", cfg: "ini", env: "ini", properties: "ini",
    javascript: "js", jsx: "js", ts: "js", typescript: "js", tsx: "js", mjs: "js", py: "python", docker: "dockerfile", containerfile: "dockerfile", logs: "log", text: null, txt: null, plain: null };
  function hlLang(lang) { if (!lang) return null; lang = String(lang).toLowerCase(); if (lang in HL_ALIAS) lang = HL_ALIAS[lang]; return lang === "diff" || lang === "patch" ? "diff" : HL_LANGS[lang] ? lang : null; }
  /* → array of lines; each line = { cls, toks: [[type|null, text], …] } */
  function highlight(code, lang) {
    var L = hlLang(lang), rules = L && L !== "diff" ? HL_LANGS[L] : null, big = code.length > 200000;
    /* shell sessions: when some lines start with a prompt ($ or #), the other lines are output → plain */
    var session = L === "bash" && /^\s*\$ \S/m.test(code);
    return String(code).split("\n").map(function (line) {
      if (session && !/^\s*\$ /.test(line)) return { toks: [[null, line]] };
      if (L === "diff") {
        var t = /^\+(?!\+\+ )/.test(line) ? "add" : /^-(?!-- )/.test(line) ? "del" : /^@@/.test(line) ? "keyword" : /^(?:diff |index |\+\+\+ |--- )/.test(line) ? "meta" : null;
        return { cls: t === "add" || t === "del" ? "kui-code-line--" + t : null, toks: [[t, line]] };
      }
      if (!rules || big) return { toks: [[null, line]] };
      var out = [], i = 0, plain = "";
      while (i < line.length) {
        var hit = null;
        for (var r = 0; r < rules.length; r++) {
          var re = rules[r][1]; re.lastIndex = i; var m = re.exec(line);
          if (m && m[0].length) { hit = [rules[r][0], m[0]]; break; }
        }
        if (hit) { if (plain) { out.push([null, plain]); plain = ""; } out.push(hit); i += hit[1].length; }
        else { plain += line[i]; i++; }
      }
      if (plain) out.push([null, plain]);
      return { toks: out };
    });
  }
  function escHtml(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  /* For non-React renderers (marked, markdown-it): escaped HTML with the same classes CodeBlock uses. */
  function highlightHtml(code, lang) {
    return highlight(code, lang).map(function (ln) {
      return '<span class="kui-code-line' + (ln.cls ? " " + ln.cls : "") + '">' + ln.toks.map(function (t) {
        return t[0] ? '<span class="kui-tok-' + t[0] + '">' + escHtml(t[1]) + "</span>" : escHtml(t[1]);
      }).join("") + "</span>";
    }).join("");
  }
  function renderHighlighted(code, lang, opt) {
    var lines = highlight(code, lang), hl = opt.highlightLines || [];
    return lines.map(function (ln, i) {
      return h("span", { key: i, className: cx("kui-code-line", ln.cls, hl.indexOf(i + 1) >= 0 && "kui-code-line--hl") },
        ln.toks.map(function (t, j) { return t[0] ? h("span", { key: j, className: "kui-tok-" + t[0] }, t[1]) : t[1]; }));
    });
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    var ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); } finally { document.body.removeChild(ta); }
    return Promise.resolve();
  }
  function CopyButton(p) {
    var st = useState(false);
    return h(IconButton, { size: "xs", icon: st[0] ? "check" : "copy", "aria-label": st[0] ? tr("copied") : (p.label || tr("copy")),
      onClick: function () { copyText(typeof p.value === "function" ? p.value() : p.value).then(function () { st[1](true); setTimeout(function () { st[1](false); }, 1500); }); } });
  }
  function CodeBlock(p) {
    var code = p.code != null ? String(p.code) : (typeof p.children === "string" ? p.children : "");
    var header = p.title || p.language || p.copyable !== false, isStr = p.code != null || typeof p.children === "string";
    var body = isStr && p.highlight !== false ? renderHighlighted(code, p.language, p) : isStr ? code : p.children;
    return h("div", Object.assign({}, rest(p, ["code", "language", "title", "copyable", "variant", "maxHeight", "className", "children", "actions", "highlight", "lineNumbers", "highlightLines", "wrap"]),
      { className: cx("kui-ui", "kui-codeblock", p.variant === "terminal" && "kui-codeblock--terminal", p.lineNumbers && "kui-codeblock--numbers", p.wrap && "kui-codeblock--wrap", p.className) }),
      header && h("div", { className: "kui-codeblock__header" },
        h("span", { className: "kui-codeblock__title" }, p.title || (p.language && h("span", { className: "kui-codeblock__lang" }, p.language))),
        p.title && p.language && h("span", { className: "kui-codeblock__lang" }, p.language),
        p.actions, p.copyable !== false && h(CopyButton, { value: code })),
      h("pre", { className: "kui-codeblock__pre", style: p.maxHeight ? { "--code-max-h": typeof p.maxHeight === "number" ? p.maxHeight + "px" : p.maxHeight } : undefined, tabIndex: 0 },
        h("code", { className: p.language ? "language-" + p.language : undefined }, body)));
  }
  var Terminal = React.forwardRef(function Terminal(p, ref) {
    return h("div", Object.assign({}, rest(p, ["title", "status", "actions", "height", "className", "children"]),
      { className: cx("kui-ui", "kui-codeblock", "kui-codeblock--terminal", p.className) }),
      h("div", { className: "kui-codeblock__header" },
        h("span", { className: "kui-codeblock__title", style: { display: "flex", alignItems: "center", gap: 8 } }, h(Icon, { name: "terminal" }), p.title || tr("console")),
        p.status, p.actions),
      h("div", { ref: ref, className: "kui-terminal__body", style: p.height ? { "--terminal-h": typeof p.height === "number" ? p.height + "px" : p.height } : undefined }, p.children));
  });

  /* ---------------- Forms ---------------- */
  var Input = React.forwardRef(function Input(p, ref) {
    var variant = p.variant || "outline", size = p.size || "md";
    var auto = useId(), id = p.id || auto;
    var input = h("input", Object.assign({ ref: ref, id: id, "aria-invalid": p.invalid ? "true" : undefined },
      rest(p, ["variant", "size", "className", "label", "helperText", "errorText", "invalid", "id", "required"]),
      { required: p.required, className: cx("kui-ui", "kui-input", "kui-input--" + variant, "kui-input--" + size, p.className) }));
    if (!p.label && !p.helperText && !p.errorText) return input;
    return h(Field, { label: p.label, helperText: p.helperText, errorText: p.errorText, invalid: p.invalid, required: p.required, id: id }, input);
  });
  function Field(p) {
    var auto = useId(), id = p.id || auto;
    var child = p.children;
    if (React.isValidElement(child) && !child.props.id) child = React.cloneElement(child, { id: id });
    return h("div", { className: cx("kui-ui", "kui-field", p.orientation === "horizontal" && "kui-field--horizontal", p.className), style: p.style },
      p.label && h("label", { className: "kui-field__label", htmlFor: id }, p.label, p.required && h("span", { className: "kui-field__req", "aria-hidden": "true" }, "*")),
      child,
      p.invalid && p.errorText ? h("span", { className: "kui-field__error", role: "alert" }, p.errorText)
        : p.helperText && h("span", { className: "kui-field__help" }, p.helperText));
  }
  var Textarea = React.forwardRef(function Textarea(p, ref) {
    var variant = p.variant || "outline", size = p.size || "md";
    return h("textarea", Object.assign({ ref: ref, rows: p.rows || 4, "aria-invalid": p.invalid ? "true" : undefined, spellCheck: p.mono ? false : undefined },
      rest(p, ["variant", "size", "className", "invalid", "mono", "rows"]),
      { className: cx("kui-ui", "kui-input", "kui-textarea", "kui-input--" + variant, "kui-input--" + size, p.mono && "kui-textarea--mono", p.className) }));
  });
  var Select = React.forwardRef(function Select(p, ref) {
    var variant = p.variant || "outline", size = p.size || "md";
    return h("div", { className: cx("kui-ui", "kui-select", p.className), style: p.style },
      h("select", Object.assign({ ref: ref, "aria-invalid": p.invalid ? "true" : undefined },
        rest(p, ["variant", "size", "className", "invalid", "options", "placeholder", "style", "children"]),
        { className: cx("kui-input", "kui-input--" + variant, "kui-input--" + size) }),
        p.placeholder && h("option", { value: "", disabled: true }, p.placeholder),
        p.options ? p.options.map(function (o) { o = typeof o === "string" ? { value: o, label: o } : o;
          return h("option", { key: o.value, value: o.value, disabled: o.disabled }, o.label); }) : p.children),
      h("span", { className: "kui-select__icon", "aria-hidden": "true" }, h(Icon, { name: "chevron-down" })));
  });
  function InputGroup(p) {
    return h("div", { className: cx("kui-ui", "kui-input-group", p.startElement && "kui-input-group--start", p.endElement && "kui-input-group--end", p.className), style: p.style },
      p.startAddon && h("span", { className: "kui-input-addon kui-input-addon--start" }, p.startAddon),
      p.startElement && h("span", { className: "kui-input-group__el kui-input-group__el--start" }, iconOf(p.startElement)),
      p.children,
      p.endElement && h("span", { className: cx("kui-input-group__el kui-input-group__el--end", typeof p.endElement !== "string" && "kui-input-group__el--interactive") }, iconOf(p.endElement)),
      p.endAddon && h("span", { className: "kui-input-addon kui-input-addon--end" }, p.endAddon));
  }
  var Checkbox = React.forwardRef(function Checkbox(p, ref) {
    var inner = useRef(null), size = p.size || "md", palette = p.palette || "primary";
    useEffect(function () { if (inner.current) inner.current.indeterminate = !!p.indeterminate; }, [p.indeterminate]);
    function setRef(el) { inner.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; }
    var input = h("input", Object.assign({ ref: setRef, type: "checkbox", "aria-invalid": p.invalid ? "true" : undefined },
      rest(p, ["size", "palette", "className", "label", "description", "indeterminate", "invalid", "children", "style"]),
      { className: "kui-checkbox__input" }));
    var label = p.label || p.children;
    return h("label", { className: cx("kui-ui", "kui-checkbox", "kui-p-" + palette, "kui-checkbox--" + size, p.className), style: p.style }, input,
      label && h("span", { className: "kui-checkbox__label" }, label, p.description && h("span", { className: "kui-checkbox__desc" }, p.description)));
  });
  function RadioGroup(p) {
    var auto = useId(), name = p.name || auto, size = p.size || "md", palette = p.palette || "primary";
    var c = useControlled(p.value, p.defaultValue, p.onChange);
    return h("fieldset", { className: cx("kui-ui", "kui-radio-group", p.orientation === "horizontal" && "kui-radio-group--horizontal", p.className), disabled: p.disabled },
      p.label && h("legend", { className: "kui-radio-group__legend" }, p.label),
      (p.options || []).map(function (o) {
        o = typeof o === "string" ? { value: o, label: o } : o;
        return h("label", { key: o.value, className: cx("kui-radio", "kui-p-" + palette, "kui-radio--" + size) },
          h("input", { type: "radio", className: "kui-radio__input", name: name, value: o.value, checked: c[0] === o.value, disabled: o.disabled,
            onChange: function () { c[1](o.value); } }),
          h("span", { className: "kui-radio__label" }, o.label, o.description && h("span", { className: "kui-checkbox__desc" }, o.description)));
      }));
  }
  function SegmentGroup(p) {
    var auto = useId(), name = p.name || auto, size = p.size || "md";
    var c = useControlled(p.value, p.defaultValue, p.onChange);
    return h("div", { role: "radiogroup", "aria-label": p["aria-label"], className: cx("kui-ui", "kui-segment", "kui-segment--" + size, p.className) },
      (p.options || []).map(function (o) {
        o = typeof o === "string" ? { value: o, label: o } : o;
        return h("label", { key: o.value, className: "kui-segment__item" },
          h("input", { type: "radio", name: name, value: o.value, checked: c[0] === o.value, disabled: o.disabled, onChange: function () { c[1](o.value); } }),
          o.icon && iconOf(o.icon), o.label, o.count != null && h("span", { className: "kui-segment__count" }, o.count));
      }));
  }
  function FileUpload(p) {
    var st = useState([]), drag = useState(false), inputRef = useRef(null);
    function take(list) { var files = Array.prototype.slice.call(list || []); st[1](files); if (p.onFiles) p.onFiles(files); }
    return h("label", { className: cx("kui-ui", "kui-upload", "kui-p-primary", drag[0] && "kui-upload--drag", p.className),
        onDragOver: function (e) { e.preventDefault(); drag[1](true); }, onDragLeave: function () { drag[1](false); },
        onDrop: function (e) { e.preventDefault(); drag[1](false); take(e.dataTransfer.files); } },
      h("input", { ref: inputRef, type: "file", accept: p.accept, multiple: p.multiple, disabled: p.disabled, onChange: function (e) { take(e.target.files); } }),
      h("span", { className: "kui-upload__icon" }, h(Icon, { name: "upload" })),
      h("span", { className: "kui-upload__title" }, p.label || tr("upload.label")),
      p.description && h("span", { className: "kui-upload__desc" }, p.description),
      st[0].length > 0 && h("ul", { className: "kui-upload__files" }, st[0].map(function (f, i) {
        return h("li", { key: i, className: "kui-upload__file" }, h("span", null, f.name), h("span", { className: "kui-mono" }, formatBytes(f.size)));
      })));
  }
  function formatBytes(b) { var u = ["B", "KB", "MB", "GB", "TB"], i = 0; while (b >= 1024 && i < u.length - 1) { b /= 1024; i++; } return (i ? b.toFixed(1) : b) + " " + u[i]; }

  var Switch = React.forwardRef(function Switch(p, ref) {
    var size = p.size || "md", palette = p.palette || "primary";
    return h("label", { className: cx("kui-ui", "kui-switch", "kui-p-" + palette, "kui-switch--" + size, p.className) },
      h("input", Object.assign({ ref: ref, type: "checkbox", role: "switch" }, rest(p, ["size", "palette", "className", "children", "label"]))),
      h("span", { className: "kui-switch__control", "aria-hidden": "true" }, h("span", { className: "kui-switch__thumb" })),
      (p.label || p.children) && h("span", { className: "kui-switch__label" }, p.label || p.children));
  });

  /* ---------------- Display ---------------- */
  function Badge(p) {
    var variant = p.variant || "subtle", size = p.size || "sm", palette = p.palette || "primary";
    return h("span", Object.assign({}, rest(p, ["variant", "size", "palette", "className"]),
      { className: cx("kui-ui", "kui-badge", "kui-p-" + palette, "kui-badge--" + variant, "kui-badge--" + size, p.className) }));
  }
  function Tag(p) {
    var variant = p.variant || "subtle", size = p.size || "md", palette = p.palette || "primary";
    return h("span", Object.assign({}, rest(p, ["variant", "size", "palette", "className", "icon", "onClose", "children", "closeLabel"]),
      { className: cx("kui-ui", "kui-tag", "kui-p-" + palette, "kui-tag--" + variant, "kui-tag--" + size, p.className) }),
      p.icon && iconOf(p.icon), h("span", { className: "kui-tag__label" }, p.children),
      p.onClose && h("button", { type: "button", className: "kui-tag__close", "aria-label": p.closeLabel || tr("remove"), onClick: p.onClose }, h(Icon, { name: "x" })));
  }
  function Card(p) {
    var variant = p.variant || "outline", size = p.size || "md";
    return h("div", Object.assign({}, rest(p, ["variant", "size", "className", "title", "description", "footer", "children", "actions"]),
      { className: cx("kui-ui", "kui-card", "kui-card--" + variant, "kui-card--" + size, p.className) }),
      (p.title || p.description || p.actions) && h("div", { className: "kui-card__header", style: p.actions ? { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" } : undefined },
        h("div", { style: { display: "flex", flexDirection: "column", gap: "var(--space-1\\.5)", minWidth: 0 } },
          p.title && h("h3", { className: "kui-card__title" }, p.title),
          p.description && h("p", { className: "kui-card__desc" }, p.description)),
        p.actions && h("div", { style: { display: "flex", gap: "var(--space-2)", flexShrink: 0 } }, p.actions)),
      p.children != null && h("div", { className: "kui-card__body" }, p.children),
      p.footer && h("div", { className: "kui-card__footer" }, p.footer));
  }
  function DataList(p) {
    var size = p.size || "md";
    return h("dl", { className: cx("kui-ui", "kui-datalist", "kui-datalist--" + size, p.orientation === "horizontal" && "kui-datalist--horizontal", p.divided && "kui-datalist--divided", p.className), style: p.style },
      (p.items || []).map(function (it, i) {
        return h("div", { key: it.label + i, className: "kui-datalist__item" }, h("dt", null, it.label),
          h("dd", { className: it.mono ? "kui-mono" : undefined }, it.value, it.copy && h(CopyButton, { value: String(it.copy === true ? it.value : it.copy) })));
      }));
  }
  function Accordion(p) {
    var auto = useId(), size = p.size || "md", variant = p.variant || "outline";
    var open = [].concat(p.defaultValue || []);
    return h("div", { className: cx("kui-ui", "kui-accordion", "kui-accordion--" + size, "kui-accordion--" + variant, p.className) },
      (p.items || []).map(function (it) {
        return h("details", { key: it.value, className: "kui-accordion__item", name: p.multiple ? undefined : auto, open: open.indexOf(it.value) >= 0 || undefined },
          h("summary", { className: "kui-accordion__trigger" }, it.icon && iconOf(it.icon), h("span", { className: "kui-accordion__title" }, it.title),
            h("span", { className: "kui-accordion__ind", "aria-hidden": "true" }, h(Icon, { name: "chevron-down" }))),
          h("div", { className: "kui-accordion__body" }, it.content));
      }));
  }

  var ICONS = {
    info: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z",
    success: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-2 15-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9Z",
    warning: "M1 21h22L12 2 1 21Zm12-3h-2v-2h2v2Zm0-4h-2v-4h2v4Z",
    error: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z",
    neutral: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z"
  };
  function Alert(p) {
    var status = p.status || "info", variant = p.variant || "subtle", size = p.size || "md";
    var palette = status === "neutral" ? "primary" : status;
    return h("div", Object.assign({ role: status === "error" || status === "warning" ? "alert" : "status" },
      rest(p, ["status", "variant", "size", "className", "title", "children", "icon", "action"]),
      { className: cx("kui-ui", "kui-alert", "kui-p-" + palette, "kui-alert--" + variant, "kui-alert--" + size, p.className) }),
      p.icon !== false && h("span", { className: "kui-alert__icon", "aria-hidden": "true" },
        p.icon ? iconOf(p.icon) : h("svg", { viewBox: "0 0 24 24", fill: "currentColor" }, h("path", { d: ICONS[status] }))),
      h("div", { className: "kui-alert__content" },
        p.title && h("div", { className: "kui-alert__title" }, p.title),
        p.children != null && h("div", { className: "kui-alert__desc" }, p.children)),
      p.action && h("div", { style: { alignSelf: "center", flexShrink: 0 } }, p.action));
  }

  /* ---------------- Feedback ---------------- */
  function Spinner(p) {
    return h("span", Object.assign({ role: p.label ? "status" : undefined, "aria-label": p.label, "aria-hidden": p.label ? undefined : "true" },
      rest(p, ["size", "label", "className"]), { className: cx("kui-ui", "kui-spinner", "kui-spinner--" + (p.size || "md"), p.className) }));
  }
  function Skeleton(p) {
    if (p.loading === false) return p.children || null;
    var st = Object.assign({ width: p.width, height: p.height || (p.children ? undefined : "1rem") }, p.style);
    return h("span", { className: cx("kui-ui", "kui-skeleton", p.circle && "kui-skeleton--circle", p.className), style: st, "aria-hidden": "true" }, p.children);
  }
  function SkeletonText(p) {
    var n = p.lines || 3, out = [];
    for (var i = 0; i < n; i++) out.push(h(Skeleton, { key: i }));
    return h("div", { className: cx("kui-ui", "kui-skeleton-text", p.className), style: p.style, "aria-hidden": "true" }, out);
  }
  function EmptyState(p) {
    var size = p.size || "md";
    return h("div", { className: cx("kui-ui", "kui-empty", "kui-empty--" + size, p.className), style: p.style },
      p.icon && h("div", { className: "kui-empty__icon", "aria-hidden": "true" }, iconOf(p.icon)),
      h("div", { className: "kui-empty__text" }, p.title && h("h3", { className: "kui-empty__title" }, p.title),
        p.description && h("p", { className: "kui-empty__desc" }, p.description)),
      p.actions && h("div", { className: "kui-empty__actions" }, p.actions));
  }

  /* ---------------- Homelab / technical ---------------- */
  var STATUS = {
    online: ["success", "Online"], offline: ["error", "Offline"], degraded: ["warning", "Eingeschränkt"],
    maintenance: ["info", "Wartung"], unknown: ["neutral", "Unbekannt"], stopped: ["neutral", "Gestoppt"],
    running: ["success", "Läuft"], frozen: ["info", "Eingefroren"], error: ["error", "Fehler"], starting: ["warning", "Startet"], stopping: ["warning", "Stoppt"]
  };
  function Status(p) {
    var s = STATUS[p.status || "unknown"] || STATUS.unknown, size = p.size || "md";
    return h("span", Object.assign({}, rest(p, ["status", "palette", "size", "pulse", "className", "children"]),
      { className: cx("kui-ui", "kui-status", "kui-p-" + (p.palette || s[0]), "kui-status--" + size, p.pulse && "kui-status--pulse", p.className) }),
      h("span", { className: "kui-status__dot", "aria-hidden": "true" }), p.children != null ? p.children : tr("status." + (STATUS[p.status] ? p.status : "unknown")));
  }
  function Progress(p) {
    var max = p.max || 100, v = Math.max(0, Math.min(max, +p.value || 0)), pct = (v / max) * 100, size = p.size || "sm";
    var palette = p.palette;
    if (!palette) {
      var t = p.thresholds === false ? null : (p.thresholds || [75, 90]);
      palette = t && pct >= t[1] ? "error" : t && pct >= t[0] ? "warning" : "primary";
    }
    var text = p.valueText != null ? p.valueText : Math.round(pct) + " %";
    return h("div", Object.assign({}, rest(p, ["value", "max", "label", "valueText", "palette", "thresholds", "size", "shape", "className"]),
      { className: cx("kui-ui", "kui-progress", "kui-p-" + palette, "kui-progress--" + size, p.shape === "full" && "kui-progress--full", p.className) }),
      (p.label != null || p.valueText !== false) && h("div", { className: "kui-progress__head" },
        h("span", { className: "kui-progress__label" }, p.label), p.valueText !== false && h("span", { className: "kui-progress__value" }, text)),
      h("div", { className: "kui-progress__track", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": max, "aria-valuenow": v,
        "aria-label": typeof p.label === "string" ? p.label : (p["aria-label"] || tr("progress.label")) },
        h("div", { className: "kui-progress__range", style: { width: pct + "%" } })));
  }
  function Stat(p) {
    var size = p.size || "md", tr = p.trend;
    return h("div", Object.assign({}, rest(p, ["label", "value", "unit", "help", "trend", "size", "className", "sparkline"]),
      { className: cx("kui-ui", "kui-stat", "kui-stat--" + size, p.className) }),
      h("span", { className: "kui-stat__label" }, p.label),
      h("span", { className: "kui-stat__value" }, p.value, p.unit && h("span", { className: "kui-stat__unit" }, p.unit)),
      (p.help || tr) && h("span", { className: "kui-stat__help" },
        tr && h("span", { className: cx("kui-stat__trend", "kui-stat__trend--" + (tr.direction || "up")) }, (tr.direction === "down" ? "↓ " : "↑ ") + tr.value),
        p.help),
      p.sparkline && h(Sparkline, { data: p.sparkline, label: typeof p.label === "string" ? p.label : undefined, unit: typeof p.unit === "string" ? p.unit : undefined, style: { marginTop: "var(--space-1)" } }));
  }

  function cmp(a, b) {
    if (a == null) return b == null ? 0 : 1; if (b == null) return -1;
    if (typeof a === "number" && typeof b === "number") return a - b;
    return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: "base" });
  }
  function Table(p) {
    var size = p.size || "sm", variant = p.variant || "line", cols = p.columns, rows = p.rows;
    var sortC = useControlled(p.sort, p.defaultSort || null, p.onSortChange);
    var selC = useControlled(p.selected, p.defaultSelected || [], p.onSelectedChange);
    var headRef = useRef(null);
    var keyOf = function (r, i) { return p.rowKey ? r[p.rowKey] : i; };
    var sorted = useMemo(function () {
      if (!rows || !sortC[0] || p.manualSort) return rows;
      var s = sortC[0], col = (cols || []).filter(function (c) { return c.key === s.key; })[0];
      var get = col && col.sortValue ? col.sortValue : function (r) { return r[s.key]; };
      return rows.slice().sort(function (a, b) { var r = cmp(get(a), get(b)); return s.dir === "desc" ? -r : r; });
    }, [rows, sortC[0], cols, p.manualSort]);
    var keys = (sorted || []).map(keyOf), sel = selC[0];
    var allOn = keys.length > 0 && keys.every(function (k) { return sel.indexOf(k) >= 0; });
    var someOn = !allOn && keys.some(function (k) { return sel.indexOf(k) >= 0; });
    useEffect(function () { if (headRef.current) headRef.current.indeterminate = someOn; }, [someOn]);
    function toggle(k) { selC[1](sel.indexOf(k) >= 0 ? sel.filter(function (x) { return x !== k; }) : sel.concat([k])); }
    function sortBy(c) {
      var s = sortC[0];
      sortC[1](!s || s.key !== c.key ? { key: c.key, dir: "asc" } : s.dir === "asc" ? { key: c.key, dir: "desc" } : null);
    }
    var cls = cx("kui-ui", "kui-table", "kui-table--" + size, "kui-table--" + variant, p.striped && "kui-table--striped",
      p.interactive && "kui-table--interactive", p.stickyHeader && "kui-table--sticky", cols && rows && p.responsive !== "scroll" && "kui-table--cards", p.className);
    var own = rest(p, ["columns", "rows", "rowKey", "size", "variant", "striped", "interactive", "stickyHeader", "className", "caption", "children",
      "onRowClick", "selectable", "selected", "defaultSelected", "onSelectedChange", "sort", "defaultSort", "onSortChange", "manualSort", "emptyText", "loading", "rowActions", "responsive"]);
    var body = p.children;
    if (cols && rows) {
      var ncol = cols.length + (p.selectable ? 1 : 0) + (p.rowActions ? 1 : 0);
      var bodyRows;
      if (p.loading) {
        bodyRows = [0, 1, 2].map(function (i) { return h("tr", { key: "sk" + i }, h("td", { colSpan: ncol }, h(Skeleton, { height: "1rem" }))); });
      } else if (!sorted.length) {
        bodyRows = [h("tr", { key: "empty" }, h("td", { colSpan: ncol, className: "kui-table__empty" }, p.emptyText || tr("table.empty")))];
      } else {
        bodyRows = sorted.map(function (r, i) {
          var k = keyOf(r, i), on = sel.indexOf(k) >= 0;
          return h("tr", { key: k, "aria-selected": p.selectable ? on : undefined, onClick: p.onRowClick ? function (e) { if (!e.target.closest("button, a, input, label")) p.onRowClick(r); } : undefined,
              style: p.onRowClick ? { cursor: "pointer" } : undefined },
            p.selectable && h("td", { className: "kui-table__check" }, h("input", { type: "checkbox", className: "kui-checkbox__input", checked: on, onChange: function () { toggle(k); }, "aria-label": tr("table.selectRow") })),
            cols.map(function (c, ci) {
              var v = c.render ? c.render(r[c.key], r) : r[c.key];
              return h("td", { key: c.key, "data-label": c.mobileLabel != null ? c.mobileLabel : typeof c.label === "string" ? c.label : undefined,
                className: cx(c.align === "end" && "kui-num", c.mono && "kui-mono", ci === 0 && "kui-table__title", c.hideOnMobile && "kui-table__hide-mobile") }, v);
            }),
            p.rowActions && h("td", { className: "kui-table__actions" }, p.rowActions(r)));
        });
      }
      body = [
        p.caption && h("caption", { key: "c", style: { textAlign: "start", fontWeight: 500, fontSize: ".75rem", padding: "0 0 8px" } }, p.caption),
        h("thead", { key: "h" }, h("tr", { className: "kui-p-primary" },
          p.selectable && h("th", { className: "kui-table__check" }, h("input", { ref: headRef, type: "checkbox", className: "kui-checkbox__input", checked: allOn, "aria-label": tr("table.selectAll"),
            onChange: function () { selC[1](allOn ? [] : keys.slice()); } })),
          cols.map(function (c) {
            var s = sortC[0], active = s && s.key === c.key;
            var label = c.sortable ? h("button", { type: "button", className: "kui-table__sort", onClick: function () { sortBy(c); } },
              c.label, h(Icon, { name: active ? (s.dir === "asc" ? "arrow-up" : "arrow-down") : "chevrons-up-down" })) : c.label;
            return h("th", { key: c.key, className: cx(c.align === "end" && "kui-num", c.sortable && "kui-table__th--sortable", c.hideOnMobile && "kui-table__hide-mobile"), style: c.width ? { width: c.width } : undefined, "aria-sort": active ? (s.dir === "asc" ? "ascending" : "descending") : undefined }, label);
          }),
          p.rowActions && h("th", { className: "kui-table__actions" }, h("span", { className: "kui-sr-only" }, tr("actions"))))),
        h("tbody", { key: "b", className: p.selectable ? "kui-p-primary" : undefined }, bodyRows)
      ];
    }
    return h("div", { className: "kui-table-wrap" }, h("table", Object.assign({}, own, { className: cls }), body));
  }
  function ActionBar(p) {
    if (p.open === false) return null;
    return h("div", { role: "toolbar", "aria-label": p["aria-label"] || tr("actionbar.label"), className: cx("kui-ui", "kui-actionbar", p.inline && "kui-actionbar--inline", p.className) },
      p.count != null && h("span", { className: "kui-actionbar__count" }, tr("actionbar.count", { n: p.count })),
      p.count != null && h("span", { className: "kui-actionbar__sep" }),
      p.children,
      p.onClear && h(IconButton, { size: "sm", icon: "x", "aria-label": tr("actionbar.clear"), onClick: p.onClear }));
  }

  /* ---------------- Navigation ---------------- */
  function Tabs(p) {
    var items = p.items || [], size = p.size || "md", variant = p.variant || "line", palette = p.palette || "primary";
    var c = useControlled(p.value, p.defaultValue != null ? p.defaultValue : (items[0] && items[0].value), p.onChange);
    var base = useId(), listRef = useRef(null);
    function onKey(e) {
      var en = items.filter(function (i) { return !i.disabled; }), idx = en.map(function (i) { return i.value; }).indexOf(c[0]);
      var next = e.key === "ArrowRight" ? idx + 1 : e.key === "ArrowLeft" ? idx - 1 : e.key === "Home" ? 0 : e.key === "End" ? en.length - 1 : null;
      if (next == null) return;
      e.preventDefault(); next = (next + en.length) % en.length; c[1](en[next].value);
      var btn = listRef.current && listRef.current.querySelector('[data-value="' + en[next].value + '"]'); if (btn) btn.focus();
    }
    var cur = items.filter(function (i) { return i.value === c[0]; })[0];
    return h("div", { className: cx("kui-ui", "kui-tabs", "kui-p-" + palette, "kui-tabs--" + size, "kui-tabs--" + variant, p.fitted && "kui-tabs--fitted", p.className), style: p.style },
      h("div", { ref: listRef, role: "tablist", "aria-label": p["aria-label"], className: "kui-tabs__list", onKeyDown: onKey },
        items.map(function (it) {
          var on = it.value === c[0];
          return h("button", { key: it.value, type: "button", role: "tab", id: base + "-t-" + it.value, "aria-controls": on && it.content !== undefined ? base + "-p-" + it.value : undefined, "aria-selected": on,
              tabIndex: on ? 0 : -1, disabled: it.disabled, "data-value": it.value, className: "kui-tabs__trigger", onClick: function () { c[1](it.value); } },
            it.icon && iconOf(it.icon), it.label, it.count != null && h("span", { className: "kui-tabs__count" }, it.count));
        })),
      cur && cur.content !== undefined && h("div", { role: "tabpanel", id: base + "-p-" + cur.value, "aria-labelledby": base + "-t-" + cur.value, tabIndex: 0, className: "kui-tabs__panel" }, cur.content));
  }
  function Breadcrumb(p) {
    var items = p.items || [];
    return h("nav", { "aria-label": p["aria-label"] || "Breadcrumb", className: cx("kui-ui", "kui-breadcrumb", p.size === "sm" && "kui-breadcrumb--sm", p.className) },
      h("ol", null, items.map(function (it, i) {
        var last = i === items.length - 1;
        return h("li", { key: i },
          last ? h("span", { "aria-current": "page" }, iconOf(it.icon), h("span", { className: "kui-breadcrumb__label" }, it.label)) : h("a", { href: it.href || "#", onClick: it.onClick }, iconOf(it.icon), h("span", { className: "kui-breadcrumb__label" }, it.label)),
          !last && h("span", { className: "kui-breadcrumb__sep", "aria-hidden": "true" }, h(Icon, { name: "chevron-right" })));
      })));
  }
  function Pagination(p) {
    var size = p.size || "sm", pages = Math.max(1, Math.ceil((p.count || 0) / (p.pageSize || 10))), sib = p.siblingCount != null ? p.siblingCount : 1;
    var c = useControlled(p.page, p.defaultPage || 1, p.onPageChange), cur = Math.min(Math.max(1, c[0]), pages);
    var list = [], lo = Math.max(2, cur - sib), hi = Math.min(pages - 1, cur + sib);
    list.push(1); if (lo > 2) list.push("…l"); for (var i = lo; i <= hi; i++) list.push(i); if (hi < pages - 1) list.push("…r"); if (pages > 1) list.push(pages);
    var from = (cur - 1) * (p.pageSize || 10) + 1, to = Math.min(p.count || 0, cur * (p.pageSize || 10));
    return h("nav", { "aria-label": tr("pagination.label"), className: cx("kui-ui", "kui-pagination", p.align && "kui-pagination--" + p.align, p.className), style: p.style },
      p.showText !== false && p.count != null && h("span", { className: "kui-pagination__text" }, tr("pagination.range", { range: p.count ? from + "–" + to : 0, total: p.count })),
      h(IconButton, { size: size, icon: "chevron-left", "aria-label": tr("pagination.prev"), disabled: cur <= 1, onClick: function () { c[1](cur - 1); } }),
      list.map(function (n) {
        return typeof n === "string" ? h("span", { key: n, className: "kui-pagination__ellipsis" }, "…")
          : h(Button, { key: n, size: size, iconOnly: true, className: "kui-pagination__page", variant: n === cur ? "outline" : "ghost", "aria-current": n === cur ? "page" : undefined, onClick: function () { c[1](n); } }, n);
      }),
      h("span", { className: "kui-pagination__compact", "aria-hidden": "true" }, cur + " / " + pages),
      h(IconButton, { size: size, icon: "chevron-right", "aria-label": tr("pagination.next"), disabled: cur >= pages, onClick: function () { c[1](cur + 1); } }));
  }
  function Steps(p) {
    var items = p.items || [], cur = p.current || 0, size = p.size || "md";
    return h("ol", { className: cx("kui-ui", "kui-steps", "kui-p-" + (p.palette || "primary"), "kui-steps--" + size, p.orientation === "vertical" && "kui-steps--vertical", p.orientation === "horizontal" && "kui-steps--horizontal", p.className) },
      items.map(function (it, i) {
        var state = i < cur ? "complete" : i === cur ? "current" : "incomplete";
        return h("li", { key: i, className: cx("kui-steps__item", "kui-steps__item--" + state), "aria-current": state === "current" ? "step" : undefined },
          h("span", { className: "kui-steps__ind" }, state === "complete" ? h(Icon, { name: "check" }) : i + 1),
          h("span", { className: "kui-steps__text" }, h("span", { className: "kui-steps__title" }, it.title), it.description && h("span", { className: "kui-steps__desc" }, it.description)),
          i < items.length - 1 && h("span", { className: "kui-steps__sep", "aria-hidden": "true" }));
      }));
  }
  function Nav(p) {
    return h("nav", { "aria-label": p["aria-label"] || tr("nav.main"), className: cx("kui-ui", "kui-nav", p.className) },
      (p.sections || []).map(function (s, si) {
        return h("div", { key: si, className: "kui-nav__section" },
          s.title && h("div", { className: "kui-nav__title" }, s.title),
          s.items.map(function (it, ii) {
            var inner = [it.icon && h(React.Fragment, { key: "i" }, iconOf(it.icon)), h("span", { key: "l", className: "kui-nav__label" }, it.label),
              it.badge != null && h("span", { key: "b", className: "kui-nav__badge" }, it.badge)];
            return it.href ? h("a", { key: ii, href: it.href, onClick: it.onClick, className: "kui-nav__item", "aria-current": it.active ? "page" : undefined }, inner)
              : h("button", { key: ii, type: "button", onClick: it.onClick, className: "kui-nav__item", "aria-current": it.active ? "page" : undefined }, inner);
          }));
      }));
  }
  function AppShell(p) {
    var st = useState(false);
    return h("div", { className: cx("kui-ui", "kui-shell", st[0] && "kui-shell--open", p.className), style: p.style },
      h("aside", { className: "kui-shell__side" },
        p.brand && h("div", { className: "kui-shell__brand" }, p.brand),
        h("div", { className: "kui-shell__nav", onClick: function (e) { if (e.target.closest("a, button")) st[1](false); } }, p.sidebar),
        p.sidebarFooter && h("div", { className: "kui-shell__sidefoot" }, p.sidebarFooter)),
      h("div", { className: "kui-shell__backdrop", onClick: function () { st[1](false); } }),
      h("header", { className: "kui-shell__head" },
        h(IconButton, { className: "kui-shell__menu", icon: "menu", "aria-label": tr("nav.open"), onClick: function () { st[1](true); } }),
        p.header),
      h("main", { className: "kui-shell__main" }, p.children));
  }


  /* ---------------- Layout ---------------- */
  var SPACE = function (v) { return v == null ? undefined : typeof v === "number" ? "var(--space-" + String(v).replace(".", "\\.") + ")" : v; };
  function Container(p) {
    return h(p.as || "div", Object.assign({}, rest(p, ["as", "size", "className"]), { className: cx("kui-ui", "kui-container", "kui-container--" + (p.size || "lg"), p.className) }));
  }
  function Stack(p) {
    var st = Object.assign({ flexDirection: p.direction === "row" ? "row" : "column", gap: SPACE(p.gap != null ? p.gap : 3), alignItems: p.align, justifyContent: p.justify, flexWrap: p.wrap === false ? "nowrap" : p.direction === "row" ? "wrap" : undefined }, p.style);
    return h(p.as || "div", Object.assign({}, rest(p, ["as", "direction", "gap", "align", "justify", "wrap", "className", "style"]), { className: cx("kui-ui", "kui-stack", p.className), style: st }));
  }
  function Grid(p) {
    var min = p.minChildWidth || "16rem";
    var cols = p.columns ? "repeat(" + p.columns + ", minmax(0, 1fr))" : "repeat(auto-fit, minmax(min(" + min + ", 100%), 1fr))";
    var st = Object.assign({ gridTemplateColumns: cols, gap: SPACE(p.gap != null ? p.gap : 3) }, p.style);
    return h(p.as || "div", Object.assign({}, rest(p, ["as", "minChildWidth", "columns", "gap", "className", "style"]), { className: cx("kui-ui", "kui-grid", p.columns && "kui-grid--fixed", p.className), style: st }));
  }
  function PageHeader(p) {
    return h("div", { className: cx("kui-ui", "kui-page-header", p.className), style: p.style },
      h("div", { className: "kui-page-header__text" },
        p.breadcrumb, p.title && h(Heading, { size: p.size || "2xl", as: "h1" }, p.title),
        p.description && h("p", { className: "kui-page-header__desc" }, p.description)),
      p.actions && h("div", { className: "kui-page-header__actions" }, p.actions));
  }

  /* ---------------- Overlays ---------------- */
  function useDialog(open, onOpenChange) {
    var ref = useRef(null);
    useEffect(function () {
      var d = ref.current; if (!d) return;
      if (open && !d.open) { d.showModal(); var f = d.querySelector("[autofocus], [data-autofocus], input:not([type=hidden]):not([type=checkbox]):not([type=radio]):not(:disabled), textarea:not(:disabled)"); if (f) f.focus(); }
      else if (!open && d.open) d.close();
    }, [open]);
    return {
      ref: ref,
      onClose: function () { if (open && onOpenChange) onOpenChange(false); },
      onCancel: function (e) { if (onOpenChange) { e.preventDefault(); onOpenChange(false); } },
      onMouseDown: function (e) { if (e.target === ref.current) { var r = ref.current.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onOpenChange && onOpenChange(false); } }
    };
  }
  function Overlay(kind, p) {
    var d = useDialog(!!p.open, p.onOpenChange), auto = useId();
    var closeable = p.closeOnBackdrop !== false;
    return h("dialog", { ref: d.ref, onClose: d.onClose, onCancel: d.onCancel, onMouseDown: closeable ? d.onMouseDown : undefined, "aria-labelledby": p.title ? auto : undefined,
        role: p.role, className: cx("kui-ui", "kui-" + kind, "kui-" + kind + "--" + (p.size || "md"), kind === "dialog" && p.placement === "center" && "kui-dialog--center",
          kind === "drawer" && p.placement === "start" && "kui-drawer--start", p.className) },
      (p.title || p.description) && h("div", { className: "kui-" + kind + "__header" },
        p.title && h("h2", { id: auto, className: "kui-" + kind + "__title" }, p.title),
        p.description && h("p", { className: "kui-" + kind + "__desc" }, p.description)),
      p.open && h("div", { className: "kui-" + kind + "__body" }, p.children),
      p.footer && h("div", { className: "kui-" + kind + "__footer" }, p.footer),
      p.hideClose !== true && h(IconButton, { className: "kui-" + kind + "__close", size: "sm", icon: "x", "aria-label": tr("close"), onClick: function () { p.onOpenChange && p.onOpenChange(false); } }));
  }
  function Dialog(p) { return Overlay("dialog", p); }
  function Drawer(p) { return Overlay("drawer", p); }

  /* ---------------- Floating layer ----------------
     Menus, tooltips and combobox lists render in the browser's top layer (Popover API) with fixed
     coordinates, so no `overflow: hidden`, scroll container or open <dialog> can clip or cover them.
     Browsers without the Popover API still get fixed positioning. */
  var HAS_POPOVER = typeof HTMLElement !== "undefined" && typeof HTMLElement.prototype.showPopover === "function";
  var useLayout = typeof window !== "undefined" && typeof document !== "undefined" ? React.useLayoutEffect : useEffect;
  function placeFloat(anchor, el, placement, matchWidth, gap) {
    if (!anchor || !el) return;
    var r = anchor.getBoundingClientRect(), vw = document.documentElement.clientWidth, vh = window.innerHeight, pad = 8;
    if (matchWidth) el.style.minWidth = r.width + "px";
    var w = el.offsetWidth, hgt = el.offsetHeight, side = (placement || "bottom").split("-")[0], align = (placement || "").split("-")[1];
    if (side === "bottom" && r.bottom + gap + hgt > vh - pad && r.top - gap - hgt > pad) side = "top";
    else if (side === "top" && r.top - gap - hgt < pad && r.bottom + gap + hgt < vh - pad) side = "bottom";
    var top = side === "top" ? r.top - gap - hgt : r.bottom + gap;
    var left = align === "start" ? r.left : align === "end" ? r.right - w : r.left + r.width / 2 - w / 2;
    left = Math.max(pad, Math.min(left, vw - w - pad));
    top = Math.max(pad, Math.min(top, vh - hgt - pad));
    el.style.top = Math.round(top) + "px"; el.style.left = Math.round(left) + "px";
    el.setAttribute("data-side", side);
  }
  function isOpenPopover(el) { try { return el.matches(":popover-open"); } catch (e) { return false; } }
  function useFloat(open, anchorRef, floatRef, opts) {
    opts = opts || {};
    useLayout(function () {
      var el = floatRef.current; if (!el) return;
      if (!open) { if (HAS_POPOVER && isOpenPopover(el)) el.hidePopover(); el.removeAttribute("data-open"); return; }
      if (HAS_POPOVER && !isOpenPopover(el)) { try { el.showPopover(); } catch (e) {} }
      el.setAttribute("data-open", "");
      function place() { placeFloat(anchorRef.current, el, opts.placement, opts.matchWidth, opts.gap != null ? opts.gap : 4); }
      place();
      var raf = 0; function schedule() { cancelAnimationFrame(raf); raf = requestAnimationFrame(place); }
      window.addEventListener("resize", schedule); window.addEventListener("scroll", schedule, true);
      var ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(schedule) : null; if (ro) ro.observe(el);
      return function () { cancelAnimationFrame(raf); window.removeEventListener("resize", schedule); window.removeEventListener("scroll", schedule, true); if (ro) ro.disconnect(); };
    });
  }
  function floatProps(extra) { return Object.assign({ popover: HAS_POPOVER ? "manual" : undefined }, extra); }

  function Tooltip(p) {
    var st = useState(!!p.defaultOpen), open = st[0], auto = useId(), anchor = useRef(null), tip = useRef(null), timer = useRef(0);
    useFloat(open, anchor, tip, { placement: p.placement || "top", gap: 6 });
    useEffect(function () { return function () { clearTimeout(timer.current); }; }, []);
    function show(delay) { clearTimeout(timer.current); timer.current = setTimeout(function () { st[1](true); }, delay); }
    function hide() { clearTimeout(timer.current); st[1](false); }
    useEffect(function () {
      if (!open) return;
      function esc(e) { if (e.key === "Escape") hide(); }
      document.addEventListener("keydown", esc); return function () { document.removeEventListener("keydown", esc); };
    }, [open]);
    var child = React.isValidElement(p.children) ? React.cloneElement(p.children, { "aria-describedby": auto }) : p.children;
    return h("span", { ref: anchor, className: cx("kui-ui", "kui-tooltip", p.className),
        onPointerEnter: function (e) { if (e.pointerType !== "touch") show(p.openDelay != null ? p.openDelay : 300); }, onPointerLeave: hide,
        onFocus: function (e) { if (e.target.matches && e.target.matches(":focus-visible")) show(0); }, onBlur: hide },
      child,
      h("span", floatProps({ ref: tip, id: auto, role: "tooltip", className: "kui-float kui-tooltip__content" }), p.content));
  }

  function Menu(p) {
    var st = useState(!!p.defaultOpen), open = st[0], trig = useRef(null), menu = useRef(null), auto = useId();
    useFloat(open, trig, menu, { placement: p.placement || "bottom-start" });
    useEffect(function () {
      if (!open) return;
      function down(e) { if (menu.current && !menu.current.contains(e.target) && trig.current && !trig.current.contains(e.target)) st[1](false); }
      document.addEventListener("mousedown", down);
      if (!p.defaultOpen) { var f = menu.current && menu.current.querySelector(".kui-menu__item:not(:disabled)"); if (f) f.focus({ preventScroll: true }); }
      return function () { document.removeEventListener("mousedown", down); };
    }, [open]);
    function focusTrigger() { var b = trig.current && trig.current.querySelector("button, a"); if (b) b.focus(); }
    function onKey(e) {
      var items = Array.prototype.slice.call(menu.current.querySelectorAll(".kui-menu__item:not(:disabled)")), i = items.indexOf(document.activeElement);
      if (e.key === "Escape") { e.stopPropagation(); e.preventDefault(); st[1](false); focusTrigger(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); items[(i + 1) % items.length].focus(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
      else if (e.key === "Home") { e.preventDefault(); items[0].focus(); }
      else if (e.key === "End") { e.preventDefault(); items[items.length - 1].focus(); }
      else if (e.key === "Tab") st[1](false);
    }
    var trigger = React.isValidElement(p.trigger) ? React.cloneElement(p.trigger, { "aria-haspopup": "menu", "aria-expanded": open, "aria-controls": auto,
      onClick: function (e) { if (p.trigger.props.onClick) p.trigger.props.onClick(e); st[1](!open); },
      onKeyDown: function (e) { if (e.key === "ArrowDown" && !open) { e.preventDefault(); st[1](true); } } }) : p.trigger;
    return h("span", { ref: trig, style: { display: "inline-flex" } }, trigger,
      open && h("div", floatProps({ ref: menu, id: auto, role: "menu", className: "kui-ui kui-float kui-menu", onKeyDown: onKey }),
        (p.items || []).map(function (it, i) {
          if (it.separator) return h("div", { key: i, className: "kui-menu__sep", role: "separator" });
          if (it.group) return h("div", { key: i, className: "kui-menu__group" }, it.group);
          var props = { key: i, role: "menuitem", tabIndex: -1, className: cx("kui-menu__item", it.danger && "kui-menu__item--danger"), disabled: it.disabled,
            onClick: function () { st[1](false); if (it.onSelect) it.onSelect(); } };
          var inner = [it.icon && h(React.Fragment, { key: "i" }, iconOf(it.icon)), h("span", { key: "t", className: "kui-menu__text" }, it.label),
            it.command && h("span", { key: "c", className: "kui-menu__cmd" }, it.command)];
          return it.href ? h("a", Object.assign(props, { href: it.href }), inner) : h("button", Object.assign(props, { type: "button" }), inner);
        })));
  }

  /* ---------------- Combobox (searchable select) ---------------- */
  function normalize(s) { return String(s == null ? "" : s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function markMatch(label, q) {
    if (!q || typeof label !== "string") return label;
    var i = normalize(label).indexOf(normalize(q));
    return i < 0 ? label : [label.slice(0, i), h("mark", { key: "m", className: "kui-combobox__match" }, label.slice(i, i + q.length)), label.slice(i + q.length)];
  }
  var Combobox = React.forwardRef(function Combobox(p, ref) {
    var size = p.size || "md", variant = p.variant || "outline", multiple = !!p.multiple, max = p.maxResults || 100;
    var opts = useMemo(function () { return (p.options || []).map(function (o) { return typeof o === "string" ? { value: o, label: o } : o; }); }, [p.options]);
    var val = useControlled(p.value, p.defaultValue != null ? p.defaultValue : (multiple ? [] : null), p.onChange);
    var qs = useState(""), q = qs[0], openS = useState(!!p.defaultOpen), open = openS[0], act = useState(0), auto = useId();
    var ctrl = useRef(null), list = useRef(null), input = useRef(null);
    useFloat(open, ctrl, list, { placement: "bottom-start", matchWidth: true });
    function setRef(el) { input.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; }
    var selected = multiple ? (val[0] || []) : (val[0] == null ? [] : [val[0]]);
    var byVal = useMemo(function () { var m = {}; opts.forEach(function (o) { m[o.value] = o; }); return m; }, [opts]);
    var matches = useMemo(function () {
      if (p.filter === false || !q) return opts;
      var nq = normalize(q), starts = [], inc = [];
      opts.forEach(function (o) {
        var hay = normalize((typeof o.label === "string" ? o.label : o.value) + " " + (o.description || "") + " " + (o.keywords || []).join(" "));
        var lab = normalize(typeof o.label === "string" ? o.label : o.value);
        if (lab.indexOf(nq) === 0) starts.push(o); else if (hay.indexOf(nq) >= 0) inc.push(o);
      });
      return starts.concat(inc);
    }, [opts, q, p.filter]);
    var shown = matches.slice(0, max), more = matches.length - shown.length;
    var enabled = shown.filter(function (o) { return !o.disabled; });
    useEffect(function () { act[1](0); }, [q, open]);
    useEffect(function () {
      if (!open) return;
      function down(e) { if (list.current && !list.current.contains(e.target) && ctrl.current && !ctrl.current.contains(e.target)) close(); }
      document.addEventListener("mousedown", down); return function () { document.removeEventListener("mousedown", down); };
    }, [open]);
    useEffect(function () { var el = list.current && list.current.querySelector('[data-active="true"]'); if (el) el.scrollIntoView({ block: "nearest" }); }, [act[0], open]);
    function close() { openS[1](false); qs[1](""); }
    function setQuery(v) { qs[1](v); if (p.onInputChange) p.onInputChange(v); if (!open) openS[1](true); }
    function pick(o) {
      if (!o || o.disabled) return;
      if (multiple) { var cur = selected.slice(), i = cur.indexOf(o.value); if (i >= 0) cur.splice(i, 1); else cur.push(o.value); val[1](cur); qs[1](""); }
      else { val[1](o.value); close(); }
    }
    function onKey(e) {
      var k = e.key, a = act[0];
      if (k === "ArrowDown") { e.preventDefault(); if (!open) openS[1](true); else act[1](Math.min(a + 1, enabled.length - 1)); }
      else if (k === "ArrowUp") { e.preventDefault(); act[1](Math.max(a - 1, 0)); }
      else if (k === "Enter") { if (open && enabled[a]) { e.preventDefault(); pick(enabled[a]); } }
      else if (k === "Escape") { if (open) { e.preventDefault(); e.stopPropagation(); close(); } else if (p.clearable && selected.length) { val[1](multiple ? [] : null); } }
      else if (k === "Backspace" && multiple && !q && selected.length) { val[1](selected.slice(0, -1)); }
      else if (k === "Tab") close();
    }
    var single = !multiple && selected.length ? byVal[selected[0]] : null;
    var activeId = open && enabled[act[0]] ? auto + "-o-" + opts.indexOf(enabled[act[0]]) : undefined;
    var groups = [], lastG = {};
    shown.forEach(function (o) { var g = o.group || ""; if (lastG.g !== g || !groups.length) { groups.push({ g: g, items: [] }); lastG.g = g; } groups[groups.length - 1].items.push(o); });
    return h("div", { className: cx("kui-ui", "kui-combobox", p.className), style: p.style },
      h("div", { ref: ctrl, className: cx("kui-input", "kui-input--" + variant, "kui-input--" + size, "kui-combobox__control", p.disabled && "kui-combobox__control--disabled"),
          "aria-invalid": p.invalid ? "true" : undefined, onMouseDown: function (e) { if (e.target === ctrl.current) { e.preventDefault(); input.current && input.current.focus(); openS[1](true); } } },
        p.startElement && h("span", { className: "kui-combobox__start" }, iconOf(p.startElement)),
        multiple && selected.map(function (v) { var o = byVal[v] || { label: v };
          return h(Tag, { key: v, size: size === "sm" || size === "xs" ? "sm" : "md", icon: o.icon, onClose: p.disabled ? undefined : function () { pick(o.value ? o : { value: v }); }, closeLabel: tr("remove") + ": " + (typeof o.label === "string" ? o.label : v) }, o.label); }),
        h("input", { ref: setRef, id: p.id, type: "text", role: "combobox", autoComplete: "off", spellCheck: false, disabled: p.disabled,
          "aria-expanded": open, "aria-controls": auto + "-list", "aria-autocomplete": "list", "aria-activedescendant": activeId, "aria-label": p["aria-label"], "aria-invalid": p.invalid ? "true" : undefined,
          className: "kui-combobox__input", placeholder: multiple && selected.length ? "" : (single ? (typeof single.label === "string" ? single.label : String(single.value)) : p.placeholder),
          "data-has-value": single ? "true" : undefined,
          value: open || !single ? q : (typeof single.label === "string" ? single.label : String(single.value)),
          onChange: function (e) { setQuery(e.target.value); }, onFocus: function () { if (p.openOnFocus) openS[1](true); }, onClick: function () { openS[1](true); }, onKeyDown: onKey }),
        p.loading && h(Spinner, { size: "sm", className: "kui-combobox__spinner" }),
        p.clearable && selected.length > 0 && !p.disabled && h("button", { type: "button", className: "kui-combobox__btn", "aria-label": tr("combobox.clear"), tabIndex: -1,
          onMouseDown: function (e) { e.preventDefault(); }, onClick: function () { val[1](multiple ? [] : null); input.current && input.current.focus(); } }, h(Icon, { name: "x" })),
        h("button", { type: "button", className: "kui-combobox__btn", tabIndex: -1, "aria-label": open ? tr("combobox.close") : tr("combobox.open"), disabled: p.disabled,
          onMouseDown: function (e) { e.preventDefault(); }, onClick: function () { if (open) close(); else { openS[1](true); input.current && input.current.focus(); } } }, h(Icon, { name: "chevron-down" }))),
      open && h("div", floatProps({ ref: list, id: auto + "-list", role: "listbox", "aria-multiselectable": multiple || undefined, className: "kui-ui kui-float kui-menu kui-combobox__list",
          onMouseDown: function (e) { e.preventDefault(); } }),
        p.loading && !shown.length ? h("div", { className: "kui-combobox__empty" }, h(Spinner, { size: "sm" }), " " + tr("loading"))
          : !shown.length ? h("div", { className: "kui-combobox__empty" }, p.emptyText || tr("combobox.empty"))
          : groups.map(function (g, gi) {
            return h("div", { key: gi, role: g.g ? "group" : undefined, "aria-label": g.g || undefined },
              g.g && h("div", { className: "kui-menu__group" }, g.g),
              g.items.map(function (o) {
                var on = selected.indexOf(o.value) >= 0, isAct = enabled[act[0]] === o;
                return h("div", { key: o.value, id: auto + "-o-" + opts.indexOf(o), role: "option", "aria-selected": on, "aria-disabled": o.disabled || undefined, "data-active": isAct ? "true" : undefined,
                    className: cx("kui-menu__item", "kui-combobox__option"), onMouseMove: function () { if (!isAct && !o.disabled) act[1](enabled.indexOf(o)); }, onClick: function () { pick(o); } },
                  o.icon && iconOf(o.icon),
                  h("span", { className: "kui-menu__text" }, h("span", { className: "kui-combobox__label" }, markMatch(o.label, q)), o.description && h("span", { className: "kui-combobox__desc" }, o.description)),
                  on && h(Icon, { name: "check", className: "kui-combobox__check" }));
              }));
          }),
        more > 0 && h("div", { className: "kui-combobox__more" }, tr("combobox.more", { n: more }))));
  });

  /* Toasts: KenosUI.toast({ title, description, status, duration, action }) → id; toast.update(id, patch); toast.dismiss(id) */
  var toastState = { list: [], subs: [], n: 0 };
  function emit() { toastState.subs.forEach(function (f) { f(toastState.list.slice()); }); }
  function schedule(t) {
    clearTimeout(t._timer);
    var d = t.duration != null ? t.duration : (t.status === "loading" ? 0 : t.status === "error" ? 8000 : 5000);
    if (d > 0) t._timer = setTimeout(function () { toast.dismiss(t.id); }, d);
  }
  function toast(opts) { var t = Object.assign({ id: "t" + (++toastState.n) }, typeof opts === "string" ? { title: opts } : opts); toastState.list.push(t); schedule(t); emit(); return t.id; }
  toast.update = function (id, patch) { toastState.list = toastState.list.map(function (t) { if (t.id !== id) return t; var n = Object.assign({}, t, patch); schedule(n); return n; }); emit(); };
  toast.dismiss = function (id) { toastState.list = toastState.list.filter(function (t) { if (t.id === id || id == null) { clearTimeout(t._timer); return false; } return true; }); emit(); };
  ["success", "error", "warning", "info", "loading"].forEach(function (s) { toast[s] = function (o) { return toast(Object.assign(typeof o === "string" ? { title: o } : o, { status: s })); }; });
  toast.promise = function (pr, msgs) {
    var id = toast.loading(msgs.loading);
    pr.then(function (v) { toast.update(id, Object.assign({ status: "success", duration: undefined }, typeof msgs.success === "function" ? msgs.success(v) : { title: msgs.success })); },
      function (e) { toast.update(id, Object.assign({ status: "error", duration: undefined }, typeof msgs.error === "function" ? msgs.error(e) : { title: msgs.error })); });
    return pr;
  };
  var TOAST_ICON = { success: "circle-check", error: "circle-alert", warning: "triangle-alert", info: "info" };
  function Toast(p) {
    var s = p.status;
    return h("div", { role: s === "error" ? "alert" : "status", className: cx("kui-ui", "kui-toast", s && "kui-toast--" + s, p.className) },
      s && h("span", { className: "kui-toast__icon" }, s === "loading" ? h(Spinner, { size: "sm" }) : h(Icon, { name: TOAST_ICON[s] })),
      h("div", { className: "kui-toast__content" }, p.title && h("div", { className: "kui-toast__title" }, p.title), p.description && h("div", { className: "kui-toast__desc" }, p.description)),
      p.action && h("button", { type: "button", className: "kui-toast__action", onClick: function () { p.action.onClick && p.action.onClick(); p.onClose && p.onClose(); } }, p.action.label),
      p.onClose && h("button", { type: "button", className: "kui-toast__close", "aria-label": tr("close"), onClick: p.onClose }, h(Icon, { name: "x", style: { width: 16, height: 16 } })));
  }
  function Toaster(p) {
    var st = useState(toastState.list.slice());
    useEffect(function () { toastState.subs.push(st[1]); return function () { toastState.subs = toastState.subs.filter(function (f) { return f !== st[1]; }); }; }, []);
    return h("div", { className: cx("kui-ui", "kui-toaster", p.placement === "top" && "kui-toaster--top"), "aria-live": "polite" },
      st[0].map(function (t) { return h(Toast, Object.assign({ key: t.id }, t, { onClose: function () { toast.dismiss(t.id); } })); }));
  }

  /* ---------------- Charts (SVG, no dependencies) ----------------
     Palette (validated with the dataviz validator, CVD-safe on bg-panel in both themes):
     single series → --chart-ink; 2–4 series → --chart-1 blue, --chart-2 teal, --chart-3 purple, --chart-4 pink (fixed order);
     more → --chart-other. Red (--accent-solid) only for thresholds or one highlighted mark. */
  function useWidth(ref) {
    var st = useState(0);
    useLayout(function () {
      var el = ref.current; if (!el) return;
      st[1](el.clientWidth);
      if (typeof ResizeObserver === "undefined") return;
      var ro = new ResizeObserver(function (en) { var w = Math.round(en[0].contentRect.width); st[1](function (o) { return o === w ? o : w; }); });
      ro.observe(el); return function () { ro.disconnect(); };
    }, []);
    return st[0];
  }
  function niceTicks(min, max, count) {
    if (max === min) max = min + 1;
    var span = max - min, step = Math.pow(10, Math.floor(Math.log10(span / count))), err = span / count / step;
    step *= err >= 7.5 ? 10 : err >= 3.5 ? 5 : err >= 1.5 ? 2 : 1;
    var lo = Math.floor(min / step) * step, hi = Math.ceil(max / step) * step, out = [];
    for (var v = lo; v <= hi + step / 2; v += step) out.push(+v.toFixed(10));
    return out;
  }
  function seriesColor(c, i, n) {
    if (c === "ink" || (!c && n === 1)) return "var(--chart-ink)";
    if (c === "accent") return "var(--accent-solid)";
    if (c === "other") return "var(--chart-other)";
    if (typeof c === "number" || /^[1-4]$/.test(c || "")) return "var(--chart-" + c + ")";
    if (c) return c;
    return i < 4 ? "var(--chart-" + (i + 1) + ")" : "var(--chart-other)";
  }
  var nf = { format: function (v) { return intl("nf", function (l) { return new Intl.NumberFormat(l, { maximumFractionDigits: 1 }); }, String)(v); } };
  function fmtNum(v) { return v == null || isNaN(v) ? "—" : nf.format(v); }
  function isTime(v) { return v instanceof Date || (typeof v === "number" && v > 1e11); }
  function fmtTime(v, span) {
    var d = v instanceof Date ? v : new Date(v), p = function (n) { return (n < 10 ? "0" : "") + n; };
    return span > 2 * 864e5 ? p(d.getDate()) + "." + p(d.getMonth() + 1) + "." : p(d.getHours()) + ":" + p(d.getMinutes());
  }
  function ChartTable(p) {
    return h(Table, { size: "sm", variant: "outline", columns: p.columns, rows: p.rows, rowKey: "_k" });
  }
  function ChartFrame(p) {
    return h("figure", { className: cx("kui-ui", "kui-chart", p.loading && "kui-chart--loading", p.className), style: p.style, "aria-busy": p.loading || undefined },
      (p.title || p.description || p.actions) && h("figcaption", { className: "kui-chart__head" },
        h("div", { style: { minWidth: 0 } }, p.title && h("div", { className: "kui-chart__title" }, p.title), p.description && h("div", { className: "kui-chart__desc" }, p.description)),
        p.actions && h("div", { className: "kui-chart__actions" }, p.actions)),
      p.legend, p.children,
      p.tableToggle && h("div", { className: "kui-chart__foot" }, p.tableToggle));
  }
  function Legend(p) {
    return h("ul", { className: "kui-chart__legend" }, p.items.map(function (it) {
      return h("li", { key: it.key }, h("span", { className: cx("kui-chart__key", p.kind === "rect" && "kui-chart__key--rect"), style: { background: it.color } }), it.label);
    }));
  }
  function TableToggle(p) {
    return h(Button, { size: "xs", variant: "ghost", startIcon: p.on ? "activity" : "list", onClick: p.onClick, "aria-pressed": p.on }, p.on ? tr("chart.asChart") : tr("chart.asTable"));
  }

  function LineChart(p) {
    var wrap = useRef(null), width = useWidth(wrap), compact = !!p.compact;
    var xKey = p.x || "t", data = p.data || [], series = p.series || [{ key: p.y || "value", label: p.label || tr("value") }];
    var n = series.length, hS = useState(null), hi = hS[0], tS = useState(false), asTable = tS[0];
    var height = p.height || (compact ? 32 : 200), fmtV = p.formatValue || fmtNum, unit = p.unit ? " " + p.unit : "";
    var xs = data.map(function (d) { return d[xKey]; }), timeX = xs.length && isTime(xs[0]);
    var xnum = xs.map(function (x, i) { return timeX ? +(x instanceof Date ? x : new Date(x)) : typeof x === "number" ? x : i; });
    var span = xnum.length > 1 ? xnum[xnum.length - 1] - xnum[0] : 0;
    var fmtX = p.formatX || function (x) { return timeX ? fmtTime(x, span) : String(x); };
    var vals = []; data.forEach(function (d) { series.forEach(function (s) { var v = d[s.key]; if (v != null && !isNaN(v)) vals.push(+v); }); });
    (p.thresholds || []).forEach(function (t) { vals.push(t.value); });
    var yMin = p.yMin != null ? p.yMin : compact ? Math.min.apply(null, vals.concat([0])) : Math.min(0, Math.min.apply(null, vals.length ? vals : [0]));
    var yMaxRaw = p.yMax != null ? p.yMax : Math.max.apply(null, vals.length ? vals : [1]);
    var ticks = compact ? [yMin, yMaxRaw === yMin ? yMin + 1 : yMaxRaw] : niceTicks(yMin, yMaxRaw, height < 160 ? 3 : 4);
    if (p.yMax != null && !compact) ticks = ticks.filter(function (t) { return t <= p.yMax; });
    var y0 = ticks[0], y1 = p.yMax != null ? p.yMax : ticks[ticks.length - 1];
    var tickW = compact ? 0 : Math.max.apply(null, ticks.map(function (t) { return (fmtV(t) + unit).length; })) * 6.6 + 10;
    var colors = series.map(function (s, i) { return seriesColor(s.color, i, n); });
    var endLabels = !compact && n >= 2 && n <= 4 && p.endLabels !== false && width >= 480;
    var mT = compact ? 4 : 8, mB = compact ? 4 : 24, mL = compact ? 2 : tickW, mR = compact ? 5 : endLabels ? Math.max.apply(null, series.map(function (s) { return String(s.label).length; })) * 6.6 + 14 : 8;
    var W = Math.max(0, width), pw = Math.max(1, W - mL - mR), ph = Math.max(1, height - mT - mB);
    var x0 = xnum[0], x1 = xnum.length > 1 ? xnum[xnum.length - 1] : x0 + 1;
    function sx(i) { return mL + (xnum.length > 1 ? (xnum[i] - x0) / (x1 - x0) * pw : pw / 2); }
    function sy(v) { return mT + ph - (Math.max(y0, Math.min(y1, v)) - y0) / (y1 - y0 || 1) * ph; }
    function path(key, area) {
      var d = "", started = false, first = null, last = null;
      data.forEach(function (row, i) { var v = row[key];
        if (v == null || isNaN(v)) { started = false; return; }
        var X = sx(i).toFixed(1), Y = sy(+v).toFixed(1); d += (started ? "L" : "M") + X + " " + Y; started = true; if (first == null) first = X; last = X; });
      if (area && first != null) d += "L" + last + " " + sy(Math.max(y0, 0)).toFixed(1) + "L" + first + " " + sy(Math.max(y0, 0)).toFixed(1) + "Z";
      return d;
    }
    function nearest(px) {
      var best = 0, bd = Infinity; for (var i = 0; i < data.length; i++) { var dd = Math.abs(sx(i) - px); if (dd < bd) { bd = dd; best = i; } } return best;
    }
    function onMove(e) { var r = e.currentTarget.getBoundingClientRect(); hS[1](nearest(e.clientX - r.left)); }
    function onKey(e) {
      if (!data.length) return;
      if (e.key === "ArrowRight") { e.preventDefault(); hS[1](hi == null ? data.length - 1 : Math.min(data.length - 1, hi + 1)); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); hS[1](hi == null ? data.length - 1 : Math.max(0, hi - 1)); }
      else if (e.key === "Home") hS[1](0); else if (e.key === "End") hS[1](data.length - 1); else if (e.key === "Escape") hS[1](null);
    }
    var xTickEvery = Math.max(1, Math.ceil(data.length / Math.max(2, Math.floor(pw / 80))));
    var ends = [];
    if (endLabels && data.length) {
      series.forEach(function (s, i) { for (var j = data.length - 1; j >= 0; j--) { var v = data[j][s.key]; if (v != null && !isNaN(v)) { ends.push({ i: i, y: sy(+v), label: s.label }); break; } } });
      ends.sort(function (a, b) { return a.y - b.y; });
      for (var k = 1; k < ends.length; k++) if (ends[k].y - ends[k - 1].y < 14) { ends = []; break; }
    }
    var svg = W > 0 && h("svg", { width: W, height: height, className: "kui-chart__svg", role: "img", tabIndex: compact ? undefined : 0,
        "aria-label": p["aria-label"] || (typeof p.title === "string" ? p.title : tr("chart.line")),
        onPointerMove: onMove, onPointerLeave: function () { hS[1](null); }, onKeyDown: compact ? undefined : onKey, onBlur: function () { hS[1](null); } },
      !compact && ticks.map(function (t) { return h("g", { key: "t" + t },
        h("line", { className: t === Math.max(y0, 0) && y0 <= 0 ? "kui-chart__axis" : "kui-chart__grid", x1: mL, x2: W - mR, y1: sy(t) + .5, y2: sy(t) + .5 }),
        h("text", { className: "kui-chart__tick", x: mL - 8, y: sy(t), dy: "0.32em", textAnchor: "end" }, fmtV(t) + unit)); }),
      !compact && data.map(function (d, i) { return i % xTickEvery === 0 || i === data.length - 1 && (data.length - 1) % xTickEvery > xTickEvery / 2 ?
        h("text", { key: "x" + i, className: "kui-chart__tick", x: sx(i), y: height - 6, textAnchor: i === 0 ? "start" : i === data.length - 1 ? "end" : "middle" }, fmtX(d[xKey])) : null; }),
      (p.thresholds || []).map(function (t, i) { return h("g", { key: "th" + i },
        h("line", { className: "kui-chart__threshold", x1: mL, x2: W - mR, y1: sy(t.value) + .5, y2: sy(t.value) + .5 }),
        !compact && t.label && h("text", { className: "kui-chart__tick", x: W - mR, y: sy(t.value) - 5, textAnchor: "end" }, t.label)); }),
      series.map(function (s, i) { return h("g", { key: s.key },
        (p.area || compact && p.area !== false) && h("path", { d: path(s.key, true), fill: colors[i], fillOpacity: .1, stroke: "none" }),
        h("path", { d: path(s.key, false), fill: "none", stroke: colors[i], strokeWidth: compact ? 1.5 : 2, strokeLinejoin: "round", strokeLinecap: "round" })); }),
      compact && data.length > 0 && hi == null && series.map(function (s, i) { var v = data[data.length - 1][s.key];
        return v == null ? null : h("circle", { key: "e" + i, className: "kui-chart__dot", cx: sx(data.length - 1), cy: sy(+v), r: 2.5, fill: colors[i] }); }),
      ends.map(function (e) { return h("text", { key: "l" + e.i, className: "kui-chart__label", x: W - mR + 8, y: e.y, dy: "0.32em" }, e.label); }),
      hi != null && h("g", null,
        h("line", { className: "kui-chart__cross", x1: sx(hi) + .5, x2: sx(hi) + .5, y1: mT, y2: mT + ph }),
        series.map(function (s, i) { var v = data[hi][s.key]; return v == null || isNaN(v) ? null : h("circle", { key: s.key, className: "kui-chart__dot", cx: sx(hi), cy: sy(+v), r: compact ? 3 : 4, fill: colors[i] }); })),
      h("rect", { x: mL, y: 0, width: pw, height: height, fill: "transparent" }));
    var tip = hi != null && W > 0 && h("div", { className: "kui-chart__tip", role: "status", style: (function () {
        var x = sx(hi), right = x > W * 0.6; return right ? { right: W - x + 12, top: compact ? -8 : mT } : { left: x + 12, top: compact ? -8 : mT }; })() },
      h("div", { className: "kui-chart__tip-x" }, fmtX(data[hi][xKey])),
      series.map(function (s, i) { return h("div", { key: s.key, className: "kui-chart__tip-row" }, h("span", { className: "kui-chart__tip-key", style: { background: colors[i] } }),
        h("strong", null, fmtV(data[hi][s.key]) + unit), n > 1 && h("span", { className: "kui-chart__tip-label" }, s.label)); }));
    var plot = h("div", { ref: wrap, className: "kui-chart__plot", style: { height: height } }, svg, tip);
    if (compact) return h("span", { className: cx("kui-ui", "kui-sparkline", p.className), style: Object.assign({ width: p.width || "100%" }, p.style) }, plot);
    var rows = data.map(function (d, i) { var r = { _k: i, x: fmtX(d[xKey]) }; series.forEach(function (s) { r[s.key] = fmtV(d[s.key]) + unit; }); return r; });
    return h(ChartFrame, { title: p.title, description: p.description, actions: p.actions, loading: p.loading, className: p.className, style: p.style,
        legend: n >= 2 && h(Legend, { kind: p.area ? "rect" : "line", items: series.map(function (s, i) { return { key: s.key, label: s.label, color: colors[i] }; }) }),
        tableToggle: p.table !== false && h(TableToggle, { on: asTable, onClick: function () { tS[1](!asTable); } }) },
      asTable ? h(ChartTable, { columns: [{ key: "x", label: p.xLabel || (timeX ? tr("time") : "") }].concat(series.map(function (s) { return { key: s.key, label: s.label, align: "end" }; })), rows: rows }) : plot);
  }
  function AreaChart(p) { return h(LineChart, Object.assign({}, p, { area: true })); }
  function Sparkline(p) {
    var data = (p.data || []).map(function (v, i) { return typeof v === "object" ? v : { t: i, value: v }; });
    return h(LineChart, { compact: true, data: data, series: [{ key: "value", label: p.label || tr("value"), color: p.color }], height: p.height || 32, width: p.width,
      yMin: p.min, yMax: p.max, area: p.area, unit: p.unit, formatValue: p.formatValue, formatX: p.formatX || function (x) { return typeof x === "number" && x < 1e11 ? "#" + (x + 1) : undefined; },
      "aria-label": p["aria-label"] || p.label, className: p.className, style: p.style, thresholds: p.thresholds });
  }

  function BarChart(p) {
    var wrap = useRef(null), width = useWidth(wrap), data = p.data || [], vertical = p.orientation === "vertical";
    var hS = useState(null), hi = hS[0], tS = useState(false), asTable = tS[0], fmtV = p.formatValue || fmtNum, unit = p.unit ? " " + p.unit : "";
    var max = p.max != null ? p.max : Math.max.apply(null, data.map(function (d) { return +d.value || 0; }).concat([0]));
    var ticks = niceTicks(0, max || 1, 4); if (p.max != null) ticks = ticks.filter(function (t) { return t <= p.max; });
    var top = p.max != null ? p.max : ticks[ticks.length - 1];
    function col(d) { return d.highlight ? "var(--accent-solid)" : seriesColor(d.color || p.color, 0, 1); }
    var W = Math.max(0, width), svg = null, height;
    if (!vertical) {
      var row = p.barHeight || 28, lw = Math.min(W * 0.35, Math.max.apply(null, data.map(function (d) { return String(d.label).length; }).concat([4])) * 7 + 12);
      var vw = Math.max.apply(null, data.map(function (d) { return (fmtV(d.value) + unit).length; }).concat([1])) * 6.6 + 10;
      height = data.length * row + 4; var pw = Math.max(1, W - lw - vw), th = Math.min(20, row - 10);
      svg = W > 0 && h("svg", { width: W, height: height, className: "kui-chart__svg", role: "img", "aria-label": p["aria-label"] || (typeof p.title === "string" ? p.title : tr("chart.bar")) },
        h("line", { className: "kui-chart__axis", x1: lw + .5, x2: lw + .5, y1: 0, y2: height }),
        data.map(function (d, i) {
          var len = Math.max(0, (+d.value || 0) / (top || 1) * pw), y = i * row + (row - th) / 2, r = Math.min(4, len / 2);
          var shape = len > 0 ? "M" + lw + " " + y + "H" + (lw + len - r) + "Q" + (lw + len) + " " + y + " " + (lw + len) + " " + (y + r) + "V" + (y + th - r) + "Q" + (lw + len) + " " + (y + th) + " " + (lw + len - r) + " " + (y + th) + "H" + lw + "Z" : "";
          return h("g", { key: i, className: cx("kui-chart__bar", hi === i && "kui-chart__bar--hover"), tabIndex: 0, role: "graphics-symbol", "aria-label": d.label + ": " + fmtV(d.value) + unit,
              onPointerEnter: function () { hS[1](i); }, onPointerLeave: function () { hS[1](null); }, onFocus: function () { hS[1](i); }, onBlur: function () { hS[1](null); } },
            h("rect", { x: 0, y: i * row, width: W, height: row, fill: "transparent" }),
            h("text", { className: "kui-chart__cat", x: lw - 8, y: i * row + row / 2, dy: "0.32em", textAnchor: "end" }, d.label),
            h("path", { d: shape, fill: col(d) }),
            h("text", { className: "kui-chart__value", x: lw + len + 6, y: i * row + row / 2, dy: "0.32em" }, fmtV(d.value) + unit));
        }));
    } else {
      height = p.height || 200; var mL = Math.max.apply(null, ticks.map(function (t) { return (fmtV(t) + unit).length; })) * 6.6 + 10, mB = 24, mT = 16, ph = height - mT - mB, pw2 = Math.max(1, W - mL - 4);
      var band = pw2 / Math.max(1, data.length), bw = Math.max(2, Math.min(24, band - 2)), every = Math.max(1, Math.ceil(data.length / Math.max(2, Math.floor(pw2 / 64))));
      var syv = function (v) { return mT + ph - Math.min(1, v / (top || 1)) * ph; };
      svg = W > 0 && h("svg", { width: W, height: height, className: "kui-chart__svg", role: "img", "aria-label": p["aria-label"] || (typeof p.title === "string" ? p.title : tr("chart.column")) },
        ticks.map(function (t) { return h("g", { key: t }, h("line", { className: t === 0 ? "kui-chart__axis" : "kui-chart__grid", x1: mL, x2: W - 4, y1: syv(t) + .5, y2: syv(t) + .5 }),
          h("text", { className: "kui-chart__tick", x: mL - 8, y: syv(t), dy: "0.32em", textAnchor: "end" }, fmtV(t) + unit)); }),
        data.map(function (d, i) {
          var v = +d.value || 0, x = mL + i * band + (band - bw) / 2, y = syv(v), base = syv(0), r = Math.min(4, (base - y) / 2, bw / 2);
          var shape = base - y > 0 ? "M" + x + " " + base + "V" + (y + r) + "Q" + x + " " + y + " " + (x + r) + " " + y + "H" + (x + bw - r) + "Q" + (x + bw) + " " + y + " " + (x + bw) + " " + (y + r) + "V" + base + "Z" : "";
          return h("g", { key: i, className: cx("kui-chart__bar", hi === i && "kui-chart__bar--hover"), tabIndex: 0, role: "graphics-symbol", "aria-label": d.label + ": " + fmtV(v) + unit,
              onPointerEnter: function () { hS[1](i); }, onPointerLeave: function () { hS[1](null); }, onFocus: function () { hS[1](i); }, onBlur: function () { hS[1](null); } },
            h("rect", { x: mL + i * band, y: mT, width: band, height: ph, fill: "transparent" }),
            h("path", { d: shape, fill: col(d) }),
            (i % every === 0) && h("text", { className: "kui-chart__tick", x: x + bw / 2, y: height - 6, textAnchor: "middle" }, d.label));
        }));
    }
    var tip = vertical && hi != null && W > 0 && h("div", { className: "kui-chart__tip", role: "status", style: (function () {
        var band = (W - 4) / Math.max(1, data.length), x = hi * band; return x > W * 0.6 ? { right: W - x + 8, top: 0 } : { left: x + band + 8, top: 0 }; })() },
      h("div", { className: "kui-chart__tip-x" }, data[hi].label), h("div", { className: "kui-chart__tip-row" }, h("span", { className: "kui-chart__tip-key", style: { background: col(data[hi]) } }), h("strong", null, fmtV(data[hi].value) + unit)));
    return h(ChartFrame, { title: p.title, description: p.description, actions: p.actions, loading: p.loading, className: p.className, style: p.style,
        tableToggle: p.table !== false && h(TableToggle, { on: asTable, onClick: function () { tS[1](!asTable); } }) },
      asTable ? h(ChartTable, { columns: [{ key: "label", label: p.labelHeader || "" }, { key: "v", label: p.valueHeader || tr("value"), align: "end" }],
          rows: data.map(function (d, i) { return { _k: i, label: d.label, v: fmtV(d.value) + unit }; }) })
        : h("div", { ref: wrap, className: "kui-chart__plot", style: { height: height } }, svg, tip));
  }

  /* ================= Extras (general app & website building blocks) ================= */
  /* ---- Hooks ---- */
  function useMediaQuery(q) {
    var get = function () { return typeof matchMedia !== "undefined" && matchMedia(q).matches; };
    var st = useState(get);
    useEffect(function () { if (typeof matchMedia === "undefined") return; var m = matchMedia(q), f = function () { st[1](m.matches); };
      f(); m.addEventListener("change", f); return function () { m.removeEventListener("change", f); }; }, [q]);
    return st[0];
  }
  function matchHotkey(e, combo) {
    return combo.toLowerCase().split(",").some(function (c) {
      var parts = c.trim().split("+"), key = parts.pop(), mods = { mod: false, ctrl: false, meta: false, shift: false, alt: false };
      parts.forEach(function (m) { mods[m] = true; });
      var mac = /mac|iphone|ipad/i.test(navigator.platform || "");
      var wantCtrl = mods.ctrl || (mods.mod && !mac), wantMeta = mods.meta || (mods.mod && mac);
      return e.key.toLowerCase() === key && !!e.ctrlKey === wantCtrl && !!e.metaKey === wantMeta && !!e.shiftKey === mods.shift && !!e.altKey === mods.alt;
    });
  }
  /* useHotkey("mod+k", fn) — mod = Ctrl (Cmd on macOS). Ignored while typing in fields unless opts.inInputs. */
  function useHotkey(combo, fn, opts) {
    var ref = useRef(fn); ref.current = fn; opts = opts || {};
    useEffect(function () {
      function onKey(e) {
        var t = e.target, typing = t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
        if (typing && !opts.inInputs && !/mod|ctrl|meta/.test(combo)) return;
        if (matchHotkey(e, combo)) { e.preventDefault(); ref.current(e); }
      }
      document.addEventListener("keydown", onKey); return function () { document.removeEventListener("keydown", onKey); };
    }, [combo, opts.inInputs]);
  }
  /* useTheme() → [pref, setPref, resolved]; pref: "system" | "light" | "dark", saved in localStorage "kui-theme", applied to <html data-theme>. */
  var THEME_KEY = "kui-theme";
  function readPref() { try { return localStorage.getItem(THEME_KEY) || "system"; } catch (e) { return "system"; } }
  function applyTheme(pref) {
    var dark = pref === "dark" || (pref === "system" && typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    return dark ? "dark" : "light";
  }
  function storedPref() { try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; } }
  function useTheme() {
    /* Only takes control of <html data-theme> once a choice is stored (or made); until then it respects what the page set. */
    var owned = useRef(!!storedPref()), st = useState(function () { return storedPref() || "system"; }), sysDark = useMediaQuery("(prefers-color-scheme: dark)");
    var pageTheme = typeof document !== "undefined" ? document.documentElement.getAttribute("data-theme") : null;
    var resolved = !owned.current && pageTheme ? pageTheme : st[0] === "system" ? (sysDark ? "dark" : "light") : st[0];
    useLayout(function () { if (owned.current) applyTheme(st[0]); }, [st[0], sysDark]);
    return [st[0], function (p) { owned.current = true; try { localStorage.setItem(THEME_KEY, p); } catch (e) {} st[1](p); }, resolved];
  }
  function ThemeToggle(p) {
    var t = useTheme();
    if (p.variant === "segment") return h(SegmentGroup, { size: p.size || "sm", "aria-label": tr("theme.label"), value: t[0], onChange: t[1],
      options: [{ value: "light", label: tr("theme.light"), icon: "sun" }, { value: "dark", label: tr("theme.dark"), icon: "moon" }, { value: "system", label: tr("theme.system"), icon: "monitor" }] });
    var next = t[2] === "dark" ? "light" : "dark";
    return h(Tooltip, { content: next === "dark" ? tr("theme.toDark") : tr("theme.toLight") },
      h(IconButton, { size: p.size || "sm", icon: t[2] === "dark" ? "sun" : "moon", "aria-label": next === "dark" ? tr("theme.toDark") : tr("theme.toLight"), onClick: function () { t[1](next); } }));
  }

  /* ---- Avatar ---- */
  function initials(name) { var w = String(name || "?").trim().split(/[\s._-]+/).filter(Boolean); return ((w[0] || "?")[0] + (w.length > 1 ? w[w.length - 1][0] : (w[0] || "")[1] || "")).toUpperCase(); }
  function Avatar(p) {
    var err = useState(false), size = p.size || "md";
    return h("span", { className: cx("kui-ui", "kui-avatar", "kui-avatar--" + size, p.shape === "square" && "kui-avatar--square", p.className), style: p.style, title: p.name, role: "img", "aria-label": p.name },
      p.src && !err[0] ? h("img", { src: p.src, alt: "", loading: "lazy", decoding: "async", onError: function () { err[1](true); } }) : h("span", { "aria-hidden": "true" }, initials(p.name)),
      p.status && h("span", { className: cx("kui-avatar__status", "kui-p-" + ((STATUS[p.status] || STATUS.unknown)[0])), "aria-hidden": "true" }));
  }
  function AvatarGroup(p) {
    var list = React.Children.toArray(p.children), max = p.max || list.length, rest = list.length - max;
    return h("span", { className: cx("kui-ui", "kui-avatar-group", p.className) },
      list.slice(0, max).map(function (c) { return React.cloneElement(c, { size: p.size || c.props.size }); }),
      rest > 0 && h("span", { className: cx("kui-avatar", "kui-avatar--" + (p.size || "md"), "kui-avatar--more") }, "+" + rest));
  }

  /* ---- Popover (generic floating panel) ---- */
  function Popover(p) {
    var ctl = useControlled(p.open, !!p.defaultOpen, p.onOpenChange), open = ctl[0], trig = useRef(null), pop = useRef(null), auto = useId();
    useFloat(open, trig, pop, { placement: p.placement || "bottom-start", gap: 6 });
    useEffect(function () {
      if (!open) return;
      function down(e) { if (pop.current && !pop.current.contains(e.target) && trig.current && !trig.current.contains(e.target)) ctl[1](false); }
      function key(e) { if (e.key === "Escape") { e.stopPropagation(); ctl[1](false); var b = trig.current && trig.current.querySelector("button, a, [tabindex]"); if (b) b.focus(); } }
      document.addEventListener("mousedown", down); document.addEventListener("keydown", key, true);
      return function () { document.removeEventListener("mousedown", down); document.removeEventListener("keydown", key, true); };
    }, [open]);
    var trigger = React.isValidElement(p.trigger) ? React.cloneElement(p.trigger, { "aria-haspopup": "dialog", "aria-expanded": open, "aria-controls": auto,
      onClick: function (e) { if (p.trigger.props.onClick) p.trigger.props.onClick(e); ctl[1](!open); } }) : p.trigger;
    return h("span", { ref: trig, style: { display: "inline-flex" } }, trigger,
      open && h("div", floatProps({ ref: pop, id: auto, role: "dialog", "aria-label": typeof p.title === "string" ? p.title : undefined,
          className: cx("kui-ui", "kui-float", "kui-popover", "kui-popover--" + (p.size || "md"), p.className), style: p.width ? { width: p.width } : undefined }),
        p.title && h("div", { className: "kui-popover__title" }, p.title),
        h("div", { className: "kui-popover__body" }, typeof p.children === "function" ? p.children({ close: function () { ctl[1](false); } }) : p.children),
        p.footer && h("div", { className: "kui-popover__footer" }, p.footer)));
  }

  /* ---- confirm() — promise-based confirmation dialog ---- */
  var confirmState = { set: null, queue: [] };
  function confirm(opts) {
    opts = typeof opts === "string" ? { title: opts } : opts || {};
    return new Promise(function (resolve) {
      var item = Object.assign({}, opts, { resolve: resolve });
      if (confirmState.set) confirmState.set(item); else { confirmState.queue.push(item); }
    });
  }
  function ConfirmHost() {
    var st = useState(null), typed = useState(""), cur = st[0];
    useEffect(function () { confirmState.set = function (it) { typed[1](""); st[1](it); }; if (confirmState.queue.length) confirmState.set(confirmState.queue.shift());
      return function () { confirmState.set = null; }; }, []);
    function done(v) { if (cur) cur.resolve(v); st[1](null); }
    var need = cur && cur.confirmText, ok = !need || typed[0] === need;
    return h(Dialog, { open: !!cur, onOpenChange: function (o) { if (!o) done(false); }, size: "sm", role: "alertdialog", title: cur && cur.title, description: cur && cur.description,
        footer: cur && h(React.Fragment, null, h(Button, { variant: "outline", onClick: function () { done(false); } }, cur.cancelLabel || tr("cancel")),
          h(Button, { palette: cur.danger ? "accent" : "primary", disabled: !ok, onClick: function () { done(true); } }, cur.confirmLabel || (cur.danger ? tr("delete") : tr("confirm")))) },
      cur && (need ? h(Field, { label: h("span", null, tr("confirm.typeBefore"), h(Code, null, need), tr("confirm.typeAfter")) }, h(Input, { value: typed[0], autoComplete: "off", onChange: function (e) { typed[1](e.target.value); },
        onKeyDown: function (e) { if (e.key === "Enter" && ok) done(true); } })) : cur.body));
  }

  /* ---- CommandPalette (Ctrl/Cmd+K) ---- */
  function CommandPalette(p) {
    var ctl = useControlled(p.open, false, p.onOpenChange), open = ctl[0], qs = useState(""), act = useState(0), listRef = useRef(null), auto = useId();
    useHotkey(p.hotkey || "mod+k", function () { ctl[1](!open); }, { inInputs: true });
    var q = qs[0], items = p.items || [];
    var shown = useMemo(function () {
      if (!q) return items.slice(0, 50);
      var nq = normalize(q), a = [], b = [];
      items.forEach(function (it) { var l = normalize(it.label), hay = l + " " + normalize((it.keywords || []).join(" ") + " " + (it.group || "") + " " + (it.description || ""));
        if (l.indexOf(nq) === 0) a.push(it); else if (hay.indexOf(nq) >= 0) b.push(it); });
      return a.concat(b).slice(0, 50);
    }, [q, items]);
    useEffect(function () { act[1](0); }, [q, open]);
    useEffect(function () { if (!open) qs[1](""); }, [open]);
    useEffect(function () { var el = listRef.current && listRef.current.querySelector('[data-active="true"]'); if (el) el.scrollIntoView({ block: "nearest" }); }, [act[0]]);
    function run(it) { if (!it) return; ctl[1](false); if (it.onSelect) it.onSelect(); else if (it.href) location.href = it.href; }
    function onKey(e) {
      if (e.key === "ArrowDown") { e.preventDefault(); act[1](Math.min(act[0] + 1, shown.length - 1)); }
      else if (e.key === "ArrowUp") { e.preventDefault(); act[1](Math.max(act[0] - 1, 0)); }
      else if (e.key === "Enter") { e.preventDefault(); run(shown[act[0]]); }
    }
    var groups = [], last = null;
    shown.forEach(function (it, i) { var g = it.group || ""; if (g !== last || !groups.length) { groups.push({ g: g, items: [] }); last = g; } groups[groups.length - 1].items.push([it, i]); });
    return h(Dialog, { open: open, onOpenChange: ctl[1], size: "md", hideClose: true, className: "kui-cmdk" },
      h("div", { className: "kui-cmdk__search" }, h(Icon, { name: "search" }),
        h("input", { autoFocus: true, className: "kui-cmdk__input", placeholder: p.placeholder || tr("cmdk.placeholder"), value: q, role: "combobox", "aria-expanded": true,
          "aria-controls": auto, "aria-activedescendant": shown[act[0]] ? auto + "-" + act[0] : undefined, onChange: function (e) { qs[1](e.target.value); }, onKeyDown: onKey }),
        h(Kbd, null, "Esc")),
      h("div", { ref: listRef, id: auto, role: "listbox", className: "kui-cmdk__list" },
        !shown.length ? h("div", { className: "kui-combobox__empty" }, p.emptyText || tr("cmdk.empty"))
        : groups.map(function (g, gi) { return h("div", { key: gi, role: "group", "aria-label": g.g || undefined }, g.g && h("div", { className: "kui-menu__group" }, g.g),
            g.items.map(function (x) { var it = x[0], i = x[1];
              return h("div", { key: i, id: auto + "-" + i, role: "option", "aria-selected": i === act[0], "data-active": i === act[0] ? "true" : undefined, className: "kui-menu__item kui-combobox__option",
                  onMouseMove: function () { if (act[0] !== i) act[1](i); }, onClick: function () { run(it); } },
                it.icon && iconOf(it.icon), h("span", { className: "kui-menu__text" }, h("span", { className: "kui-combobox__label" }, markMatch(it.label, q)), it.description && h("span", { className: "kui-combobox__desc" }, it.description)),
                it.shortcut && h("span", { className: "kui-menu__cmd" }, it.shortcut)); })); })),
      h("div", { className: "kui-cmdk__foot" }, h("span", null, h(Kbd, null, "↑"), h(Kbd, null, "↓"), " " + tr("cmdk.navigate")), h("span", null, h(Kbd, null, "Enter"), " " + tr("cmdk.run"))));
  }

  /* ---- NumberInput ---- */
  var NumberInput = React.forwardRef(function NumberInput(p, ref) {
    var min = p.min != null ? p.min : -Infinity, max = p.max != null ? p.max : Infinity, step = p.step || 1, size = p.size || "md";
    var c = useControlled(p.value, p.defaultValue != null ? p.defaultValue : "", p.onChange);
    var dec = (String(step).split(".")[1] || "").length;
    function clamp(v) { return Math.min(max, Math.max(min, v)); }
    function bump(d) { var n = parseFloat(c[0]); if (isNaN(n)) n = min > -Infinity ? min : 0; c[1](+clamp(n + d * step).toFixed(dec)); }
    var n = parseFloat(c[0]);
    return h("div", { className: cx("kui-ui", "kui-number", "kui-number--" + size, p.className), style: p.style },
      h("input", Object.assign({ ref: ref, type: "text", inputMode: dec ? "decimal" : "numeric", role: "spinbutton", "aria-valuemin": isFinite(min) ? min : undefined, "aria-valuemax": isFinite(max) ? max : undefined,
          "aria-valuenow": isNaN(n) ? undefined : n, "aria-invalid": p.invalid ? "true" : undefined },
        rest(p, ["value", "defaultValue", "onChange", "min", "max", "step", "size", "className", "style", "invalid", "unit", "variant"]),
        { className: cx("kui-input", "kui-input--" + (p.variant || "outline"), "kui-input--" + size), value: c[0],
          onChange: function (e) { var v = e.target.value.replace(",", "."); if (/^-?\d*\.?\d*$/.test(v)) c[1](v === "" || v === "-" || /\.$/.test(v) ? v : +v); },
          onBlur: function () { var v = parseFloat(c[0]); if (!isNaN(v)) c[1](+clamp(v).toFixed(dec)); },
          onKeyDown: function (e) { if (e.key === "ArrowUp") { e.preventDefault(); bump(e.shiftKey ? 10 : 1); } else if (e.key === "ArrowDown") { e.preventDefault(); bump(e.shiftKey ? -10 : -1); } } })),
      p.unit && h("span", { className: "kui-number__unit", "aria-hidden": "true" }, p.unit),
      h("span", { className: "kui-number__steppers" },
        h("button", { type: "button", tabIndex: -1, "aria-label": tr("increment"), disabled: p.disabled || n >= max, onClick: function () { bump(1); } }, h(Icon, { name: "chevron-up" })),
        h("button", { type: "button", tabIndex: -1, "aria-label": tr("decrement"), disabled: p.disabled || n <= min, onClick: function () { bump(-1); } }, h(Icon, { name: "chevron-down" }))));
  });

  /* ---- Slider (native range, styled) ---- */
  var Slider = React.forwardRef(function Slider(p, ref) {
    var min = p.min != null ? p.min : 0, max = p.max != null ? p.max : 100, c = useControlled(p.value, p.defaultValue != null ? p.defaultValue : min, p.onChange);
    var pct = (c[0] - min) / (max - min || 1) * 100, fmt = p.formatValue || function (v) { return fmtNum(v) + (p.unit ? " " + p.unit : ""); }, auto = useId();
    return h("div", { className: cx("kui-ui", "kui-slider", "kui-p-" + (p.palette || "primary"), "kui-slider--" + (p.size || "md"), p.className), style: p.style },
      (p.label || p.showValue !== false) && h("div", { className: "kui-slider__head" }, p.label && h("label", { htmlFor: auto, className: "kui-field__label" }, p.label),
        p.showValue !== false && h("output", { htmlFor: auto, className: "kui-slider__value" }, fmt(c[0]))),
      h("input", Object.assign({ ref: ref, id: auto, type: "range", min: min, max: max, step: p.step || 1 }, rest(p, ["value", "defaultValue", "onChange", "min", "max", "step", "label", "unit", "formatValue", "showValue", "marks", "palette", "size", "className", "style"]),
        { value: c[0], onChange: function (e) { c[1](+e.target.value); }, style: { "--pct": pct + "%" }, className: "kui-slider__input" })),
      p.marks && h("div", { className: "kui-slider__marks", "aria-hidden": "true" }, p.marks.map(function (m) { var v = typeof m === "object" ? m.value : m;
        return h("span", { key: v, style: { left: ((v - min) / (max - min) * 100) + "%" } }, typeof m === "object" ? m.label : fmt(v)); })));
  });

  /* ---- ProgressCircle / gauge ---- */
  function ProgressCircle(p) {
    var max = p.max || 100, v = Math.max(0, Math.min(max, +p.value || 0)), pct = v / max * 100, sz = { xs: [24, 3], sm: [32, 4], md: [40, 5], lg: [56, 6], xl: [80, 8] }[p.size || "md"];
    var palette = p.palette; if (!palette) { var t = p.thresholds === false ? null : (p.thresholds || [75, 90]); palette = t && pct >= t[1] ? "error" : t && pct >= t[0] ? "warning" : "primary"; }
    var r = (sz[0] - sz[1]) / 2, C = 2 * Math.PI * r;
    return h("span", { className: cx("kui-ui", "kui-pcircle", "kui-p-" + palette, "kui-pcircle--" + (p.size || "md"), p.className), role: "progressbar", "aria-valuemin": 0, "aria-valuemax": max, "aria-valuenow": v, "aria-label": typeof p.label === "string" ? p.label : (p["aria-label"] || tr("progress.label")), style: p.style },
      h("svg", { width: sz[0], height: sz[0], viewBox: "0 0 " + sz[0] + " " + sz[0] },
        h("circle", { className: "kui-pcircle__track", cx: sz[0] / 2, cy: sz[0] / 2, r: r, strokeWidth: sz[1], fill: "none" }),
        h("circle", { className: "kui-pcircle__range", cx: sz[0] / 2, cy: sz[0] / 2, r: r, strokeWidth: sz[1], fill: "none", strokeLinecap: "round",
          strokeDasharray: C, strokeDashoffset: C * (1 - pct / 100), transform: "rotate(-90 " + sz[0] / 2 + " " + sz[0] / 2 + ")" })),
      p.showValue !== false && (p.size === "lg" || p.size === "xl") && h("span", { className: "kui-pcircle__value" }, p.valueText != null ? p.valueText : Math.round(pct) + "%"));
  }

  /* ---- Relative time ---- */
  function rtfFmt(v, u) { return intl("rtf", function (l) { return new Intl.RelativeTimeFormat(l, { numeric: "auto" }); }, function (v, u) { return v + " " + u; })(v, u); }
  function dtfFmt(d) { return intl("dtf", function (l) { return new Intl.DateTimeFormat(l, { dateStyle: "medium", timeStyle: "short" }); }, function (d) { return d.toISOString(); })(d); }
  function relTime(d, now) {
    var s = Math.round((+d - (now || Date.now())) / 1000), a = Math.abs(s);
    var u = a < 45 ? ["second", s] : a < 2700 ? ["minute", Math.round(s / 60)] : a < 79200 ? ["hour", Math.round(s / 3600)] : a < 2160000 ? ["day", Math.round(s / 86400)] : a < 26e6 ? ["month", Math.round(s / 2592000)] : ["year", Math.round(s / 31536000)];
    if (u[0] === "second") return a < 10 ? tr("time.now") : rtfFmt(u[1], "second");
    return rtfFmt(u[1], u[0]);
  }
  function RelativeTime(p) {
    var d = p.date instanceof Date ? p.date : new Date(p.date), tick = useState(0);
    useEffect(function () { var a = Math.abs(Date.now() - d); var iv = setInterval(function () { tick[1](function (n) { return n + 1; }); }, a < 3600e3 ? 30e3 : 600e3); return function () { clearInterval(iv); }; }, [+d]);
    return h("time", { className: cx("kui-ui", "kui-time", p.className), dateTime: isNaN(d) ? undefined : d.toISOString(), title: !isNaN(d) ? dtfFmt(d) : undefined }, isNaN(d) ? "—" : relTime(d));
  }

  /* ---- Timeline / activity feed ---- */
  function Timeline(p) {
    return h("ol", { className: cx("kui-ui", "kui-timeline", p.className), style: p.style }, (p.items || []).map(function (it, i) {
      var pal = it.status ? (STATUS[it.status] || [it.status])[0] : "neutral";
      return h("li", { key: it.key || i, className: "kui-timeline__item" },
        h("span", { className: cx("kui-timeline__ind", "kui-p-" + pal, it.icon && "kui-timeline__ind--icon"), "aria-hidden": "true" }, it.icon ? iconOf(it.icon) : null),
        h("div", { className: "kui-timeline__content" },
          h("div", { className: "kui-timeline__title" }, it.title, it.time && h("span", { className: "kui-timeline__time" }, it.time instanceof Date || typeof it.time === "number" ? h(RelativeTime, { date: it.time }) : it.time)),
          it.description && h("div", { className: "kui-timeline__desc" }, it.description), it.content));
    }));
  }

  /* ---- UptimeBar ---- */
  function UptimeBar(p) {
    var data = p.data || [], hs = useState(null), hi = hs[0], lab = { up: tr("uptime.up"), degraded: tr("uptime.degraded"), down: tr("uptime.down"), none: tr("uptime.none") };
    var ok = data.filter(function (d) { return d.status === "up"; }).length, known = data.filter(function (d) { return d.status !== "none"; }).length;
    return h("div", { className: cx("kui-ui", "kui-uptime", p.className), style: p.style },
      (p.label || p.showPercent !== false) && h("div", { className: "kui-uptime__head" }, h("span", { className: "kui-uptime__label" }, p.label),
        p.showPercent !== false && h("span", { className: "kui-uptime__pct" }, known ? (ok / known * 100).toFixed(2).replace(/\.?0+$/, "") + " %" : "—")),
      h("div", { className: "kui-uptime__bars", role: "list", onPointerLeave: function () { hs[1](null); } }, data.map(function (d, i) {
        return h("span", { key: i, role: "listitem", tabIndex: 0, className: cx("kui-uptime__bar", "kui-uptime__bar--" + d.status), "aria-label": (d.label || "") + ": " + lab[d.status],
          onPointerEnter: function () { hs[1](i); }, onFocus: function () { hs[1](i); }, onBlur: function () { hs[1](null); } });
      })),
      h("div", { className: "kui-uptime__foot" }, hi != null ? h("span", null, h("strong", null, data[hi].label), " · ", lab[data[hi].status], data[hi].note ? " · " + data[hi].note : "")
        : h(React.Fragment, null, h("span", null, p.startLabel || tr("uptime.days", { n: data.length })), h("span", null, p.endLabel || tr("today")))));
  }

  /* ---- KeyValueEditor (env vars, config keys, labels) ---- */
  function KeyValueEditor(p) {
    var c = useControlled(p.value, p.defaultValue || [{ key: "", value: "" }], p.onChange), rows = c[0];
    function set(i, k, v) { var n = rows.map(function (r, j) { return j === i ? Object.assign({}, r, (function () { var o = {}; o[k] = v; return o; })()) : r; }); c[1](n); }
    var keys = rows.map(function (r) { return r.key; });
    return h("div", { className: cx("kui-ui", "kui-kv", p.className), style: p.style },
      h("div", { className: "kui-kv__head", "aria-hidden": "true" }, h("span", null, p.keyLabel || tr("key")), h("span", null, p.valueLabel || tr("value")), h("span")),
      rows.map(function (r, i) {
        var dup = r.key && keys.indexOf(r.key) !== i;
        return h("div", { key: i, className: "kui-kv__row" },
          h(Input, { size: "sm", value: r.key, placeholder: p.keyPlaceholder || "KEY", "aria-label": (p.keyLabel || tr("key")) + " " + (i + 1), invalid: dup, className: "kui-mono", spellCheck: false, onChange: function (e) { set(i, "key", e.target.value); },
            onPaste: function (e) { var t = (e.clipboardData || window.clipboardData).getData("text"); if (!/[\n=]/.test(t)) return; e.preventDefault();
              var parsed = t.split(/\r?\n/).map(function (l) { return l.trim(); }).filter(function (l) { return l && l[0] !== "#"; }).map(function (l) { var k = l.indexOf("=");
                return k < 0 ? { key: l, value: "" } : { key: l.slice(0, k).trim().replace(/^export\s+/, ""), value: l.slice(k + 1).trim().replace(/^(["'])(.*)\1$/, "$2") }; });
              c[1](rows.slice(0, i).concat(parsed, rows.slice(i + 1).filter(function (x) { return x.key || x.value; }))); } }),
          h(Input, { size: "sm", value: r.value, placeholder: p.valuePlaceholder || tr("value"), type: p.secret ? "password" : "text", "aria-label": (p.valueLabel || tr("value")) + " " + (i + 1), className: "kui-mono", spellCheck: false, onChange: function (e) { set(i, "value", e.target.value); } }),
          h(IconButton, { size: "sm", icon: "trash", "aria-label": tr("kv.removeRow"), onClick: function () { var n = rows.filter(function (_, j) { return j !== i; }); c[1](n.length ? n : [{ key: "", value: "" }]); } }));
      }),
      h(Button, { size: "sm", variant: "ghost", startIcon: "plus", onClick: function () { c[1](rows.concat([{ key: "", value: "" }])); } }, p.addLabel || tr("kv.add")),
      p.hint !== false && h("span", { className: "kui-kv__hint" }, tr("kv.hint")));
  }

  /* ---- TreeView (native details) ---- */
  function TreeView(p) {
    function render(nodes, depth) {
      return h("ul", { "aria-label": depth ? undefined : p["aria-label"], className: depth ? "kui-tree__group" : cx("kui-ui", "kui-tree", p.className) },
        nodes.map(function (n) {
          var sel = p.selected === n.id, kids = n.children && n.children.length;
          var row = h("span", { className: cx("kui-tree__row", sel && "kui-tree__row--sel"), "aria-current": sel ? "true" : undefined, onClick: function (e) { if (p.onSelect) p.onSelect(n); } },
            iconOf(n.icon || (kids ? "folder" : "file-text")), h("span", { className: "kui-tree__label" }, n.label), n.meta && h("span", { className: "kui-tree__meta" }, n.meta));
          return h("li", { key: n.id },
            kids ? h("details", { open: (p.defaultExpanded || []).indexOf(n.id) >= 0 || undefined }, h("summary", { className: "kui-tree__summary" }, h(Icon, { name: "chevron-right", className: "kui-tree__chev" }), row), render(n.children, depth + 1))
              : h("div", { className: "kui-tree__leaf", tabIndex: 0, role: p.onSelect ? "button" : undefined, onKeyDown: function (e) { if ((e.key === "Enter" || e.key === " ") && p.onSelect) { e.preventDefault(); p.onSelect(n); } } }, row));
        }));
    }
    return render(p.items || [], 0);
  }

  /* ---- Website blocks ---- */
  function SkipLink(p) { return h("a", { href: p.href || "#main", className: "kui-ui kui-skip" }, p.children || tr("skip")); }
  function Banner(p) {
    var st = useState(true);
    if (!st[0]) return null;
    return h("div", { role: "region", "aria-label": p["aria-label"] || tr("banner.label"), className: cx("kui-ui", "kui-banner", "kui-banner--" + (p.variant || "inverted"), p.className) },
      h("div", { className: "kui-banner__text" }, p.children, p.action), p.dismissible !== false && h("button", { type: "button", className: "kui-banner__close", "aria-label": tr("close"),
        onClick: function () { st[1](false); if (p.onDismiss) p.onDismiss(); } }, h(Icon, { name: "x" })));
  }
  function Navbar(p) {
    var st = useState(false);
    useEffect(function () { if (!st[0]) return; function k(e) { if (e.key === "Escape") st[1](false); } document.addEventListener("keydown", k); return function () { document.removeEventListener("keydown", k); }; }, [st[0]]);
    return h("header", { className: cx("kui-ui", "kui-navbar", p.sticky !== false && "kui-navbar--sticky", st[0] && "kui-navbar--open", p.className) },
      h("div", { className: cx("kui-container", "kui-container--" + (p.size || "lg"), "kui-navbar__inner") },
        h("a", { href: p.brandHref || "/", className: "kui-navbar__brand" }, p.brand),
        h("nav", { className: "kui-navbar__links", "aria-label": tr("nav.main") }, (p.links || []).map(function (l, i) {
          return h("a", { key: i, href: l.href, className: "kui-navbar__link", "aria-current": l.active ? "page" : undefined, onClick: function () { st[1](false); } }, l.label); })),
        h("div", { className: "kui-navbar__actions" }, p.actions,
          h(IconButton, { className: "kui-navbar__toggle", icon: st[0] ? "x" : "menu", "aria-label": st[0] ? tr("menu.close") : tr("menu.open"), "aria-expanded": st[0], onClick: function () { st[1](!st[0]); } }))));
  }
  function Hero(p) {
    return h("section", { className: cx("kui-ui", "kui-hero", p.align === "center" && "kui-hero--center", p.className) },
      h("div", { className: cx("kui-container", "kui-container--" + (p.size || "lg")) },
        p.eyebrow && h("div", { className: "kui-hero__eyebrow" }, p.eyebrow),
        h("h1", { className: "kui-hero__title" }, p.title),
        p.description && h("p", { className: "kui-hero__desc" }, p.description),
        p.actions && h("div", { className: "kui-hero__actions" }, p.actions),
        p.children));
  }
  function FeatureGrid(p) {
    return h(Grid, { minChildWidth: p.minChildWidth || "15rem", gap: p.gap != null ? p.gap : 6, className: cx("kui-features", p.className) }, (p.items || []).map(function (f, i) {
      return h("div", { key: i, className: "kui-feature" }, f.icon && h("span", { className: "kui-feature__icon", "aria-hidden": "true" }, iconOf(f.icon)),
        h("h" + (p.headingLevel || 3), { className: "kui-feature__title" }, f.title), f.description && h("p", { className: "kui-feature__desc" }, f.description), f.link);
    }));
  }
  function Footer(p) {
    return h("footer", { className: cx("kui-ui", "kui-footer", p.className) },
      h("div", { className: cx("kui-container", "kui-container--" + (p.size || "lg")) },
        (p.brand || p.columns) && h("div", { className: "kui-footer__top" },
          p.brand && h("div", { className: "kui-footer__brand" }, p.brand),
          (p.columns || []).map(function (c, i) { return h("nav", { key: i, className: "kui-footer__col", "aria-label": c.title }, h("div", { className: "kui-footer__title" }, c.title),
            h("ul", null, c.links.map(function (l, j) { return h("li", { key: j }, h("a", { href: l.href }, l.label)); }))); })),
        h("div", { className: "kui-footer__bottom" }, h("span", null, p.copyright), p.extra)));
  }

  /* ---------------- Markdown ---------------- */
  function Prose(p) {
    var props = Object.assign({}, rest(p, ["size", "className", "html", "as", "children"]), { className: cx("kui-prose", p.className) });
    if (p.html != null) props.dangerouslySetInnerHTML = { __html: p.html };
    return h(p.as || "div", props, p.html != null ? undefined : p.children);
  }
  var GH_ALERTS = { NOTE: "info", TIP: "success", IMPORTANT: "neutral", WARNING: "warning", CAUTION: "error" };
  var GH_LABELS = { NOTE: "Hinweis", TIP: "Tipp", IMPORTANT: "Wichtig", WARNING: "Warnung", CAUTION: "Achtung" };
  var DIRECTIVES = { alert: 1, card: 1, badge: 1, button: 1, status: 1, tag: 1, kbd: 1 };
  function mdText(n) { return n.value != null ? n.value : (n.children || []).map(mdText).join(""); }
  function remarkKenosUI(options) {
    var labels = Object.assign({ NOTE: tr("alert.note"), TIP: tr("alert.tip"), IMPORTANT: tr("alert.important"), WARNING: tr("alert.warning"), CAUTION: tr("alert.caution") }, (options && options.labels) || {});
    function walk(node) {
      var t = node.type;
      if ((t === "containerDirective" || t === "leafDirective" || t === "textDirective") && DIRECTIVES[node.name]) {
        var d = node.data || (node.data = {}), props = Object.assign({}, node.attributes || {});
        if (t === "containerDirective" && node.children && node.children[0] && node.children[0].data && node.children[0].data.directiveLabel) {
          props.title = mdText(node.children.shift());
        }
        d.hName = "kui-" + node.name; d.hProperties = props;
      } else if (t === "blockquote" && node.children && node.children[0] && node.children[0].type === "paragraph") {
        var para = node.children[0], first = para.children && para.children[0];
        var m = first && first.type === "text" && /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\][ \t]*(\r?\n)?/i.exec(first.value);
        if (m) {
          var kind = m[1].toUpperCase();
          first.value = first.value.slice(m[0].length);
          if (!first.value) para.children.shift();
          if (para.children[0] && para.children[0].type === "break") para.children.shift();
          if (!para.children.length) node.children.shift();
          var bd = node.data || (node.data = {});
          bd.hName = "kui-alert"; bd.hProperties = { status: GH_ALERTS[kind], title: labels[kind] };
        }
      }
      if (node.children) node.children.forEach(walk);
    }
    return function (tree) { walk(tree); };
  }
  function mdProps(p) { return rest(p, ["node", "children"]); }
  function hasKids(c) { return c != null && !(Array.isArray(c) && c.length === 0) && c !== ""; }
  function textOf(c) { return c == null ? "" : typeof c === "string" || typeof c === "number" ? String(c) : Array.isArray(c) ? c.map(textOf).join("") : c.props ? textOf(c.props.children) : ""; }
  var HSIZE = { h1: "4xl", h2: "3xl", h3: "2xl", h4: "xl", h5: "lg", h6: "md" };
  /* react-markdown `components`: every Markdown element renders as the real KenosUI component. */
  var markdownComponents = {
    /* Markdown alerts default to the outline variant (border, no fill); `:::alert{variant=subtle}` overrides. */
    "kui-alert": function (p) { var q = mdProps(p); return h(Alert, { status: q.status || "info", variant: q.variant || "outline", size: q.size, title: q.title }, p.children); },
    "kui-card": function (p) { var q = mdProps(p); return h(Card, { title: q.title, description: q.description, variant: q.variant, size: q.size }, p.children); },
    "kui-badge": function (p) { var q = mdProps(p); return h(Badge, { palette: q.palette, variant: q.variant, size: q.size }, p.children); },
    "kui-tag": function (p) { var q = mdProps(p); return h(Tag, { palette: q.palette, variant: q.variant, size: q.size, icon: q.icon }, p.children); },
    "kui-kbd": function (p) { return h(Kbd, null, p.children); },
    "kui-status": function (p) { var q = mdProps(p); return h(Status, { status: q.status, size: q.size, pulse: q.pulse != null }, hasKids(p.children) ? p.children : undefined); },
    "kui-button": function (p) {
      var q = mdProps(p);
      return h(Button, { as: q.href ? "a" : undefined, href: q.href, palette: q.palette, variant: q.variant, size: q.size, startIcon: q.icon }, p.children);
    },
    h1: function (p) { return h(Heading, { as: "h1", size: HSIZE.h1, id: p.id }, p.children); },
    h2: function (p) { return h(Heading, { as: "h2", size: HSIZE.h2, id: p.id }, p.children); },
    h3: function (p) { return h(Heading, { as: "h3", size: HSIZE.h3, id: p.id }, p.children); },
    h4: function (p) { return h(Heading, { as: "h4", size: HSIZE.h4, id: p.id }, p.children); },
    h5: function (p) { return h(Heading, { as: "h5", size: HSIZE.h5, id: p.id }, p.children); },
    h6: function (p) { return h(Heading, { as: "h6", size: HSIZE.h6, id: p.id }, p.children); },
    a: function (p) { var ext = /^https?:\/\//.test(p.href || ""); return h(Link, { href: p.href, title: p.title, id: p.id, external: ext }, p.children); },
    code: function (p) { return /language-/.test(p.className || "") || /\n/.test(textOf(p.children)) ? h("code", { className: p.className }, p.children) : h(Code, null, p.children); },
    pre: function (p) {
      var c = React.Children.toArray(p.children)[0], cls = (c && c.props && c.props.className) || "", m = /language-(\S+)/.exec(cls);
      return h(CodeBlock, { language: m ? m[1] : undefined, code: textOf(c && c.props ? c.props.children : p.children).replace(/\n$/, "") });
    },
    kbd: function (p) { return h(Kbd, null, p.children); },
    blockquote: function (p) { return h(Blockquote, null, p.children); },
    hr: function () { return h(Separator); },
    table: function (p) { return h("div", { className: "kui-table-wrap" }, h("table", { className: "kui-ui kui-table kui-table--sm kui-table--line" }, p.children)); },
    input: function (p) {
      if (p.type !== "checkbox") return h("input", mdProps(p));
      return h("input", { type: "checkbox", className: "kui-checkbox__input kui-p-primary", checked: !!p.checked, disabled: true, readOnly: true, "aria-label": p["aria-label"], style: { "--cb": "1rem" } });
    },
    /* Task-list items: the item text becomes the checkbox's accessible name. */
    li: function (p) {
      var kids = React.Children.toArray(p.children), box = -1;
      kids.forEach(function (k, i) { if (box < 0 && k && k.props && k.props.type === "checkbox") box = i; });
      if (box >= 0) {
        var name = kids.filter(function (k, i) { return i !== box && !(k && (k.type === "ul" || k.type === "ol")); }).map(textOf).join("").trim();
        kids[box] = React.cloneElement(kids[box], { "aria-label": name || undefined });
      }
      return h("li", { className: p.className, id: p.id }, kids);
    }
  };

  window.KenosUI = {
    Icon: Icon, Button: Button, IconButton: IconButton, CopyButton: CopyButton,
    Heading: Heading, Link: Link, Code: Code, Kbd: Kbd, Blockquote: Blockquote, Separator: Separator, List: List, CodeBlock: CodeBlock, Terminal: Terminal,
    Input: Input, Field: Field, Textarea: Textarea, Select: Select, InputGroup: InputGroup, Checkbox: Checkbox, RadioGroup: RadioGroup, SegmentGroup: SegmentGroup, FileUpload: FileUpload, Switch: Switch,
    Badge: Badge, Tag: Tag, Card: Card, DataList: DataList, Accordion: Accordion, Alert: Alert,
    Spinner: Spinner, Skeleton: Skeleton, SkeletonText: SkeletonText, EmptyState: EmptyState,
    Status: Status, Progress: Progress, Stat: Stat, Table: Table, ActionBar: ActionBar,
    Container: Container, Stack: Stack, Grid: Grid, PageHeader: PageHeader,
    Tabs: Tabs, Breadcrumb: Breadcrumb, Pagination: Pagination, Steps: Steps, Nav: Nav, AppShell: AppShell,
    Dialog: Dialog, Drawer: Drawer, Menu: Menu, Tooltip: Tooltip, Combobox: Combobox,
    LineChart: LineChart, AreaChart: AreaChart, BarChart: BarChart, Sparkline: Sparkline, highlight: highlight, highlightHtml: highlightHtml, Toast: Toast, Toaster: Toaster, toast: toast,
    Avatar: Avatar, AvatarGroup: AvatarGroup, Popover: Popover, CommandPalette: CommandPalette, ConfirmHost: ConfirmHost, confirm: confirm,
    NumberInput: NumberInput, Slider: Slider, ProgressCircle: ProgressCircle, RelativeTime: RelativeTime, Timeline: Timeline, UptimeBar: UptimeBar,
    KeyValueEditor: KeyValueEditor, TreeView: TreeView, SkipLink: SkipLink, Banner: Banner, Navbar: Navbar, Hero: Hero, FeatureGrid: FeatureGrid, Footer: Footer,
    ThemeToggle: ThemeToggle, useTheme: useTheme, useHotkey: useHotkey, useMediaQuery: useMediaQuery, relativeTime: relTime,
    setLocale: setLocale, t: tr, messages: MESSAGES, version: "1.0.0",
    Prose: Prose, remarkKenosUI: remarkKenosUI, markdownComponents: markdownComponents
  };
})();
