import { NextRequest, NextResponse } from "next/server";
import { RecommendationSchema } from "@/lib/schemas/recommendation";

export async function POST(req: NextRequest) {
  // return NextResponse.json({ message: "Request failed" }, { status: 500 });
  const body = await req.json();
  const parsed = RecommendationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.flatten(), message: "Field Validation failed" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`${process.env.API_BASEURL}/recommendation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ message: "Request failed" }, { status: 500 });
  }
}
