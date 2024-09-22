import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import CounterSchema from "@/models/counter";

export async function POST(req) {
    try {
        await connectMongoDB(); 
        
        const counter = await CounterSchema.findOne({});

        return NextResponse.json(counter || { counter: 0 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ein Fehler ist beim Abrufen des Counters aufgetreten" }, { status: 500 });
    }
}
