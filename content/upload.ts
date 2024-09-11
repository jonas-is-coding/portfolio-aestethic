import cloudinary from 'cloudinary';
import fs from 'fs';
import path from 'path';

// Cloudinary-Konfiguration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Funktion zum Hochladen eines Bildes zu Cloudinary
export async function upload(imagePath: string) {
  try {
    const result = await cloudinary.v2.uploader.upload(imagePath, {
      // Optional: Du kannst weitere Upload-Optionen hier angeben
      // z.B. folder: 'my_folder', tags: 'my_tag'
    });
    console.log('Bild erfolgreich hochgeladen:', result.secure_url);
    return result.secure_url;
  } catch (error: any) {
    console.error('Fehler beim Hochladen:', error);
    throw new Error(`Fehler beim Hochladen: ${error.message}`);
  }
}