import cloudinary from "cloudinary";
import { readdir } from "fs/promises";
import fs from "fs";

export async function upload(imagePath: string) {
  try {
    const files = await readdir("/tmp");
    console.log("Files in /tmp:", files); // Logging

    if (!fs.existsSync(imagePath)) {
      throw new Error(`Datei nicht gefunden: ${imagePath}`);
    }

    const result = await cloudinary.v2.uploader.upload(imagePath);
    console.log("Bild erfolgreich hochgeladen:", result.secure_url);
    return result.secure_url;
  } catch (error: any) {
    console.error("Fehler beim Hochladen:", error);
    throw new Error(`Fehler beim Hochladen: ${error.message}`);
  }
}
