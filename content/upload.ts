import fetch from 'node-fetch';
import fs from 'fs';

// Funktion zum Hochladen eines Bildes zu Imgur
export async function upload(imagePath: string) {
  const clientId = process.env.IMGUR_CLIENT_ID;
  const image = fs.readFileSync(imagePath, { encoding: 'base64' }); 

  const response = await fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: {
      Authorization: `Client-ID ${clientId}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image: image,
      type: 'base64',
    }),
  });

  const data = await response.json() as { success: boolean; data: { link: string } };
  if (data.success) {
    console.log('Bild erfolgreich hochgeladen:', data.data.link); // URL des hochgeladenen Bildes
    return data.data.link;
  } else {
    throw new Error(`Fehler beim Hochladen: ${JSON.stringify(data)}`);
  }
}