import { NextRequest, NextResponse } from "next/server";
import { createContent } from "@/content/content";
import { buildDesign } from "@/content/design";
import { sendMessage } from "@/content/message";
import { upload } from "@/content/upload";

export async function POST(req: NextRequest) {
  try {
    console.log("Starting POST request...");

    const categories = [
      "Figma_Tip",
      "VSCode_Tip",
      /* "Other_Tip", */
    ];

    const chosenCategory = categories[Math.floor(Math.random() * categories.length)];

    const content = await createContent(chosenCategory);
    console.log("Content created:", content);

    const design = await buildDesign(chosenCategory, content);

    console.log("Design: ", design)

    const imageUrl = await upload(design!)

    console.log("Image URL:", imageUrl);

    if (imageUrl) {
      await sendMessage(content, imageUrl);
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