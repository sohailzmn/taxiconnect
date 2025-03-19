const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Erstelle einen SVG-String für ein Taxi-Icon
const generateTaxiSvg = (bgColor = '#1a365d', iconColor = '#ffffff') => {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="100" fill="${bgColor}"/>
  <path d="M128 320c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm248 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-280-64h336c15.5 0 28-12.5 28-28v-36c0-51.9-36.4-95.7-85.8-106.6L345 74.1c-7.3-17.3-24.4-28.6-43.2-28.6H210.2c-18.8 0-35.9 11.3-43.2 28.6L137.8 85.4C88.4 96.3 52 140.1 52 192v36c0 15.5 12.5 28 28 28h16zm16-112c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16v-16z" fill="${iconColor}"/>
</svg>
`;
};

const outputDir = path.join(__dirname, '../public');

// Überprüfen, ob das Ausgabeverzeichnis existiert, andernfalls erstellen
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const taxiSvg = generateTaxiSvg();

// Generate favicon.ico (16x16, 32x32, 48x48)
sharp(Buffer.from(taxiSvg))
  .resize(48, 48)
  .toFile(path.join(outputDir, 'favicon-48.png'))
  .then(() => {
    sharp(Buffer.from(taxiSvg))
      .resize(32, 32)
      .toFile(path.join(outputDir, 'favicon-32.png'))
      .then(() => {
        sharp(Buffer.from(taxiSvg))
          .resize(16, 16)
          .toFile(path.join(outputDir, 'favicon-16.png'))
          .then(() => {
            console.log('PNG Favicon-Datei wurden erfolgreich erstellt!');
          });
      });
  })
  .catch(err => console.error('Fehler beim Erstellen des Favicons:', err));

// Generiere logo192.png und logo512.png
sharp(Buffer.from(taxiSvg))
  .resize(192, 192)
  .toFile(path.join(outputDir, 'logo192.png'))
  .then(() => {
    console.log('logo192.png wurde erfolgreich erstellt!');
  })
  .catch(err => console.error('Fehler beim Erstellen von logo192.png:', err));

sharp(Buffer.from(taxiSvg))
  .resize(512, 512)
  .toFile(path.join(outputDir, 'logo512.png'))
  .then(() => {
    console.log('logo512.png wurde erfolgreich erstellt!');
  })
  .catch(err => console.error('Fehler beim Erstellen von logo512.png:', err)); 