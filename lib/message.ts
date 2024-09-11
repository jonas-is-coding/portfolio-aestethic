import { Twilio } from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new Twilio(accountSid, authToken);

export async function sendMessage(message: string, imageUrl?: string) {
  const from = 'whatsapp:+14155238886';
  const to = `whatsapp:${process.env.PHONE_NUMBER}`;

  if (imageUrl) {
    await client.messages.create({
      from,
      to,
      body: message,
      mediaUrl: [imageUrl],
    });
  } else {
    await client.messages.create({
      from,
      to,
      body: message,
    });
  }
}