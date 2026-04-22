import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Producto from "@/models/Producto"; // Ajusta la ruta según tu carpeta models

const MONGODB_URI = "mongodb://admin:password123@localhost:27017/proyecto_ferreteria?authSource=admin";

// Función para conectar a la BD
async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(MONGODB_URI);
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();
    
    // Crear el producto usando el modelo que definiste
    const nuevoProducto = await Producto.create(data);
    
    return NextResponse.json(nuevoProducto, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const productos = await Producto.find({});
    return NextResponse.json(productos);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}