import { connectDB } from '@/lib/mongodb';
import Producto from '@/models/Producto';

export default async function ProductosPage() {
  // Conectamos a la DB (Controlador)
  await connectDB();
  
  // SELECT * FROM productos (Lógica de Modelo)
  const productos = await Producto.find({});

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Inventario de Ferretería</h1>
      <hr />
      
      <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
        {productos.map((prod) => (
          <div key={prod._id.toString()} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h2>{prod.nombre}</h2>
            <p>Precio: ${prod.precio}</p>
            <p>Stock disponible: {prod.stock} unidades</p>
          </div>
        ))}
        
        {productos.length === 0 && <p>No hay productos en la base de datos.</p>}
      </div>
    </main>
  );
}