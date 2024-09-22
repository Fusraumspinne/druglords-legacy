import mongoose from "mongoose";

let isConnected = false; // Globaler Verbindungsstatus

export const connectMongoDB = async () => {
  if (isConnected) {
    console.log("MongoDB ist bereits verbunden");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState;
    console.log("MongoDB verbunden");
  } catch (error) {
    console.error("Fehler bei der Verbindung zur MongoDB", error);
    throw new Error("Datenbankverbindung fehlgeschlagen");
  }
};
