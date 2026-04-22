"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Producto {
  _id: string;
  nombre: string;
  precio: number;
  stock: number;
}

export default function HerramientasPage() {
  const [formData, setFormData] = useState({ nombre: "", precio: "", stock: "" });
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState<Producto[]>([]);

  // 1. Cargar productos desde la API
  const fetchProductos = async () => {
    try {
      const res = await fetch("/api/productos");
      if (res.ok) {
        const data = await res.json();
        setProductos(data);
      }
    } catch (error) {
      console.error("Error cargando productos:", error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  // 2. Guardar nuevo producto (POST)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          precio: Number(formData.precio),
          stock: Number(formData.stock),
        }),
      });

      if (res.ok) {
        alert("¡Herramienta guardada con éxito!");
        setFormData({ nombre: "", precio: "", stock: "" });
        fetchProductos(); // Recarga la lista
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al guardar");
    } finally {
      setLoading(false);
    }
  };

  // 3. Eliminar producto (DELETE) - Opcional pero recomendado
  const deleteProducto = async (id: string) => {
    if (!confirm("¿Seguro que quieres eliminar este producto?")) return;
    
    try {
      const res = await fetch(`/api/productos?id=${id}`, { method: "DELETE" });
      if (res.ok) fetchProductos();
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* HEADER RECUPERADO */}
      <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-orange-600 flex items-center gap-2">
            ← Volver
          </Link>
          <h1 className="text-xl font-bold">Panel de Inventario</h1>
          <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
            Admin Ferretería
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* FORMULARIO DE CREACIÓN RECUPERADO */}
          <section className="lg:col-span-1">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border-2 border-orange-500 shadow-md">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="bg-orange-500 text-white p-1 rounded">➕</span> 
                Nueva Herramienta
              </h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-bold text-zinc-500 uppercase">Nombre del Producto</label>
                  <input
                    required
                    type="text"
                    placeholder="Ej: Martillo de Carpintero"
                    className="w-full p-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent outline-orange-500"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-zinc-500 uppercase">Precio ($)</label>
                    <input
                      required
                      type="number"
                      placeholder="9990"
                      className="w-full p-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent outline-orange-500"
                      value={formData.precio}
                      onChange={(e) => setFormData({...formData, precio: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-zinc-500 uppercase">Stock</label>
                    <input
                      required
                      type="number"
                      placeholder="10"
                      className="w-full p-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent outline-orange-500"
                      value={formData.stock}
                      onChange={(e) => setFormData({...formData, stock: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg active:scale-95 disabled:opacity-50"
                >
                  {loading ? "Guardando..." : "REGISTRAR EN BBDD"}
                </button>
              </form>
            </div>
          </section>

          {/* LISTADO DINÁMICO */}
          <section className="lg:col-span-2">
            <h2 className="font-bold mb-4 text-zinc-400 uppercase text-sm tracking-widest">
              Productos en Inventario ({productos.length})
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {productos.length === 0 ? (
                <div className="col-span-2 p-10 border-2 border-dashed border-zinc-200 text-center text-zinc-400">
                  No hay productos registrados todavía.
                </div>
              ) : (
                productos.map((prod) => (
                  <div key={prod._id} className="group bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-orange-300 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-orange-600 transition-colors">{prod.nombre}</h3>
                        <p className="text-orange-600 font-mono text-xl font-bold">${prod.precio.toLocaleString()}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${prod.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          Stock: {prod.stock}
                        </span>
                        <button 
                          onClick={() => deleteProducto(prod._id)}
                          className="text-zinc-400 hover:text-red-500 text-xs underline"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}