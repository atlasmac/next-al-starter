#!/bin/bash 
rm secrets.json
echo { >> secrets.json
echo "\"CALENDAR_PRIVATE_KEY\": \""$CALENDAR_PRIVATE_KEY"\"," >> secrets.json
echo "\"CALENDAR_CLIENT_EMAIL\": \""$CALENDAR_CLIENT_EMAIL"\"," >> secrets.json
echo "\"CALENDAR_ID\": \""$CALENDAR_ID"\"," >> secrets.json
echo "\"SHEETS_PRIVATE_KEY\": \""$SHEETS_PRIVATE_KEY"\"," >> secrets.json
echo "\"SHEETS_CLIENT_EMAIL\": \""$SHEETS_CLIENT_EMAIL"\"," >> secrets.json
echo "\"SHEETS_ID\": \""$SHEETS_ID"\"" >> secrets.json
echo } >> secrets.json