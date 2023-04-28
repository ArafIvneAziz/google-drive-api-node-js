# Generating a Direct Download Link for a File with Google Drive API
This project demonstrates how to use the Google Drive API to generate a direct download link for a file.

## Prerequisites
- Node.js
- npm
- A Google Account

## Installation
1. Clone this repository
2. Create a project in the [Google Developer Console](https://console.developers.google.com/), enable the Drive API, and create credentials
3. Copy the credentials into the `credentials.json` file
4. Install the dependencies using `npm install`
5. Initiate the authentication process by running `node auth.js`
6. Follow the instructions in the terminal to complete the authentication process
7. Replace `your-file-id-which-you-want-to-install` with the ID of the file that you want to generate a direct download link for
8. Run `node index.js` to generate the direct download link

## Usage
Once you've followed the installation instructions, you can use the `generateDirectDownloadLink()` function to generate direct download links for files.

Example:
```
generateDirectDownloadLink('your-file-id-which-you-want-to-install')
  .then(link => console.log(link))
  .catch(err => console.error(err));
```
