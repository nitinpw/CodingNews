import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req, context) {
    try {
      const email = context.params.email;
      const posts = await prisma.user.findUnique({ 
        where: { email },
        include: {
            posts: { orderBy: { createdAt: "desc" } },
        },
    });
      return NextResponse.json(posts);
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "Could not fetch post" });
    }
  }