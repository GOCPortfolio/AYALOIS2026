/**
 * RSVP receiver for the wedding site.
 * Paste into Extensions > Apps Script of a Google Sheet, then Deploy > New deployment > Web app
 * (Execute as: Me, Who has access: Anyone). Paste the Web app URL into CONFIG.rsvp.endpoint.
 */
var SHEET_NAME = "RSVPs";
var HEADERS = ["Received", "Name", "Phone", "Attending", "Guests", "Message"];

// Stops cells starting with = + - @ from being run as formulas.
function safe_(v) {
  v = String(v == null ? "" : v).slice(0, 1000);
  return /^[=+\-@\t\r]/.test(v) ? "'" + v : v;
}

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) { sh.appendRow(HEADERS); sh.setFrozenRows(1); }
    var phone = String(d.phone || "").replace(/[^\d+ ]/g, "");
    sh.getRange(sh.getLastRow() + 1, 3).setNumberFormat("@");      // keep leading zeros
    sh.appendRow([new Date(), safe_(d.name), phone, safe_(d.attending), Number(d.guests) || 0, safe_(d.message)]);
    sh.getRange(sh.getLastRow(), 3).setNumberFormat("@").setValue(phone);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() { return ContentService.createTextOutput("RSVP endpoint is running."); }
