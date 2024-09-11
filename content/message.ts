import dotenv from "dotenv";
import twilio from "twilio";

export async function sendMessage(message: string, imageUrl?: string) {
  dotenv.config();

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);

  if (imageUrl) {
    client.messages.create({
      from: "whatsapp:+14155238886",
      body: message,
      to: `whatsapp:${process.env.PHONE_NUMBER}`,
      mediaUrl: [imageUrl],
    });
  } else {
    await client.messages.create({
      from: "whatsapp:+14155238886",
      to: `whatsapp:${process.env.PHONE_NUMBER}`,
      body: message,
    });
  }
}
