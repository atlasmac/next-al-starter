import { google } from 'googleapis';
import he from 'he';
import { htmlToText } from "html-to-text";
import secrets from "../secrets.json"


function formatHrefOnly(elem, walk, builder, formatOptions) {
  function getHref() {
    if (formatOptions.ignoreHref) { return ''; }
    if (!elem.attribs || !elem.attribs.href) { return ''; }
    let href = elem.attribs.href.replace(/^mailto:/, '');
    if (formatOptions.noAnchorUrl && href[0] === '#') { return ''; }
    href = (formatOptions.baseUrl && href[0] === '/')
      ? formatOptions.baseUrl + href
      : href;
    return he.decode(href, builder.options.decodeOptions);
  }
  const href = getHref();
  if (!href) {
    builder.addInline('#google-calender-link-not-found', { noWordTransform: true });
  } else {
    builder.addInline(href, { noWordTransform: true });
  }
}

export async function fetchEvents() {
  const auth = new google.auth.JWT({
    email: secrets.CALENDAR_CLIENT_EMAIL || process.env.CALENDAR_CLIENT_EMAIL,
    // email: keys.client_email,
    key: secrets.CALENDAR_PRIVATE_KEY || process.env.CALENDAR_PRIVATE_KEY,
    scopes: [
      "https://www.googleapis.com/auth/calendar",
      "https://www.googleapis.com/auth/calendar.events",
    ],
  });
  const venueP = /^\s*(venue)\s*:\s*(.*)$/m;
  const linkP = /^\s*(link)\s*:\s*(.*)$/m;
  const desP = /^\s*(description)\s*:\s*(.*)$/m;



  const calendar = google.calendar({ version: "v3", auth });
  const calendarId = secrets.CALENDAR_ID || process.env.CALENDAR_ID;
  const timeMin = new Date();
  timeMin.setDate(timeMin.getDate() - 7);
  const eList = await calendar.events.list({ calendarId, timeMin });

  const events = eList.data.items.sort(({ start: a }, { start: b }) => {
    return new Date(a.dateTime) - new Date(b.dateTime);
  }).map((el) => {

    const html = el.description
    const descriptionFixed = htmlToText(html, {
      formatters: {
        // Create a formatter.
        formatHrefOnly
      }, selectors: [{
        selector: 'a',
        format: 'formatHrefOnly',
        options: {}
      }
      ]
    })
    const link = descriptionFixed?.match(linkP)?.[2].trim() || '';
    const venue = descriptionFixed?.match(venueP)?.[2] || '';
    const des = descriptionFixed?.match(desP)?.[2] || '';


    return {
      title: el.summary,
      location: el.location || '',
      link,
      venue,
      des,
      start: el.start,
      end: el.end,
      description: el.description || '',
    };
  });

  
  return events
}
