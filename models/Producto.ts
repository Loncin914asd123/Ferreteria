import mongoose, { Schema, model, models } from 'mongoose';

const ProductoSchema = new Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
});

// Evitamos recrear el modelo si ya existe (Hot Reload de Next.js)
const Producto = models.Producto || model('Producto', ProductoSchema);

export default Producto;