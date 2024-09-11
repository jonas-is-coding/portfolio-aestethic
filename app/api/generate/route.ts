import { NextRequest, NextResponse } from "next/server";
import { createContent } from "@/content/content";
import { buildDesign } from "@/content/design";
import { sendMessage } from "@/content/message";

export async function POST(req: NextRequest) {
  try {
    const content = await createContent();

    const imageUrl = await buildDesign("Figma_Tip", {
      id: "figma_text_id",
      content,
    });

    if (imageUrl) {
      await sendMessage(content, imageUrl);
    } else {
      await sendMessage(content);
    }

    return NextResponse.json({
      message: "Content generated and sent successfully!",
    });
  } catch (error) {
    console.error("Error in handler:", error);
    return NextResponse.json(
      { error: "An error occurred while generating content." },
      { status: 500 }
    );
  }
}