import fs from "fs";
import cloudinary from "cloudinary";

export async function upload(imagePath: string) {
  try {
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
