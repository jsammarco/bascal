const KEYFILE = 'key.pem';
const key = 'key.json'
const SERVICE_ACCT_ID = 'zinc-style-133219@appspot.gserviceaccount.com';
const CALENDAR_ID = {
  'primary': '#contacts@group.v.calendar.google.com',
  'calendar-1': '#contacts@group.v.calendar.google.com'
};
const TIMEZONE = 'UTC-06:00';
 
module.exports.keyFile = KEYFILE;           //or if using json keys - 
module.exports.key = key; 
module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.calendarId = CALENDAR_ID;
module.exports.timezone = TIMEZONE;
