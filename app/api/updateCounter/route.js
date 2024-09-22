import { connectMongoDB } from "@/lib/mongodb";
import CounterSchema from "@/models/counter";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB(); 

        const updatedCounter = await CounterSchema.findOneAndUpdate(
            {}, 
            { $inc: { counter: 1 } },
            { new: true, upsert: true, setDefaultsOnInsert: true } 
        );

        return NextResponse.json({ message: "Counter erfolgreich aktualisiert", data: updatedCounter }, { status: 201 });
    } catch (error) {
        console.error("Fehler beim Aktualisieren des Counters:", error);
        return NextResponse.json({ message: "Ein Fehler ist beim Aktualisieren des Counters aufgetreten" }, { status: 500 });
    }
}
