import { getUserSession } from "@/lib/get-user-session";
import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await getUserSession();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const userData = await prisma.user.findUnique({
      where: { id: Number(user.id) },
      select: { fullName: true, email: true, password: false },
    });
    if (!userData) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json(userData);
  } catch (error) {
    console.error("Server error [API_ME]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
