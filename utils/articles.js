import { google } from 'googleapis';

export async function fetchArticles() {
  const auth = new google.auth.JWT({
    email: process.env.SHEETS_CLIENT_EMAIL,
    key: process.env.SHEETS_PRIVATE_KEY,
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets"
    ],
  });
  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = process.env.SHEETS_ID;

  const getRows = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1",
  })
  const articles = getRows.data.values.slice(1);
  
  return articles
}
