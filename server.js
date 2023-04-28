const {google} = require('googleapis');
const fs = require('fs');

// Set up OAuth2 client
const credentials = require('./credentials.json');
const {client_secret, client_id, redirect_uris} = credentials.installed;
const oAuth2Client = new google.auth.OAuth2(
  client_id, client_secret, redirect_uris[0]
);
const token = fs.readFileSync('./token.json');
oAuth2Client.setCredentials(JSON.parse(token));

// Set up Google Drive API
const drive = google.drive({version: 'v3', auth: oAuth2Client});

// Function to generate direct download link for a file
async function generateDirectDownloadLink(fileId) {
  const res = await drive.files.get({
    fileId: fileId,
    fields: 'webContentLink'
  });
  return res.data.webContentLink.replace('view', 'uc');
}

// Usage example
generateDirectDownloadLink('14bVqz0FpiF5LPiYFtvlC6lwchQaeJDnt')
  .then(link => console.log(link))
  .catch(err => console.error(err));
