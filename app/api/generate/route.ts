import { NextRequest, NextResponse } from "next/server";
import { createContent } from "@/content/content";
import { buildDesign } from "@/content/design";
import { sendMessage } from "@/content/message";
import { upload } from "@/content/upload";

export async function POST(req: NextRequest) {
  try {
    console.log("Starting POST request...");

    const content = await createContent();
    console.log("Content created:", content);

    const design = await buildDesign("Figma_Tip", {
      id: "figma_text_id",
      content,
    });

    const imageUrl = await upload(design!)

    console.log("Image URL:", imageUrl);

    if (imageUrl) {
      await sendMessage(content, `./screenshots/${imageUrl}`);
      console.log("Message sent with image.");
    } else {
      await sendMessage(content);
      console.log("Message sent without image.");
    }

    return NextResponse.json({
      message: "Content generated and sent successfully!" + content,
    });
  } catch (error) {
    console.error("Error in handler:", error);
    return NextResponse.json(
      { error: "An error occurred while generating content." },
      { status: 500 }
    );
  }
}