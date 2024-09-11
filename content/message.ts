import twilio from "twilio";
import dotenv from "dotenv";

export async function sendMessage(message: string, imageUrl?: string) {
  dotenv.config();

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const phoneNumber = process.env.PHONE_NUMBER;

  console.log("Account SID:", accountSid);
  console.log("Auth Token:", authToken);
  console.log("Phone Number:", phoneNumber);

  const client = twilio(accountSid, authToken);

  console.log("Bild Url :", imageUrl)

  try {
    const response = await client.messages.create({
      body: "Hey Jonas, wie gefällt dir dieser Beitrag?",
      from: "whatsapp:+14155238886",
      to: "whatsapp:+4917637489615",
      mediaUrl: [imageUrl!],
    });
    console.log("Message SID:", response.sid);
  } catch (error) {
    console.error("Fehler beim Senden der Nachricht:", error);
  }
}
