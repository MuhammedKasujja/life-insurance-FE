import { ApiResponse } from "@/lib/api-response";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=API_KEY&q=London"
    );
    const data = await response.json();
    return ApiResponse.success({
      data: data,
      message: "Account created Successfully",
    });
  } catch (error) {
    return ApiResponse.error({ error: error });
  }
}
