import cloudinary from 'cloudinary';

const partNumbers = { vscodePart: 1, figmaPart: 1 };

const jsonString = JSON.stringify(partNumbers);

export async function uploadPartNumbers(partNumbers: { vscodePart: number, figmaPart: number }){
  const jsonString = JSON.stringify(partNumbers);
  
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload_stream(
      { resource_type: 'raw', public_id: 'partNumbers', format: 'json' },
      (error, result) => {
        if (error) {
          console.error("Error uploading to Cloudinary:", error);
          return reject(error);
        }
        console.log("Upload result:", result);
        resolve(result);
      }
    ).end(jsonString);
  });
}

const jsonUrl = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/raw/upload/vYOUR_VERSION_ID/partNumbers.json`;

export async function loadPartNumbers(): Promise<{ vscodePart: number, figmaPart: number }> {
  try {
    const response = await fetch(jsonUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading part numbers:", error);
    return { vscodePart: 1, figmaPart: 1 };
  }
}