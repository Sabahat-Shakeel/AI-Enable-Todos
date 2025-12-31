import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(process.env.LOCAL_API_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Local API response failed");
    }

    const data = await response.json();

    return NextResponse.json({
      response: data.response ?? "Sorry, our agent is not responding.",
    });
  } catch (error) {
    console.error("Error in local API request:", error);
    return NextResponse.json(
      { response: "Local API request failed" },
      { status: 500 }
    );
  }
}
