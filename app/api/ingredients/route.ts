import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await prisma.ingredient.findMany();
  return NextResponse.json(response);
}
