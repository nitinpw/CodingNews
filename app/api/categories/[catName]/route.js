import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req, context) {
    try {
      const catName = context.params.catName;
      const posts = await prisma.category.findUnique({ 
        where: { catName },
        include: {
            posts: {include: { author: true}, orderBy: { createdAt: "desc" } },
        },
    });
      return NextResponse.json(posts);
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "Could not fetch post" });
    }
  }