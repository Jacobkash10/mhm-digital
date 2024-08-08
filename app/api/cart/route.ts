import { db } from "@/lib/db";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";


export async function GET() {
        try {
          const cartItems = await db.cart.findMany({
            include: {
              package: true,
            },
          });
    
          return NextResponse.json({cartItems}, {status: 200});
        } catch (error) {
            return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
        }
    }