import Image from "next/image";
import Link from "next/link";

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Taladro Percutor 1/2 600W",
    marca: "Bauker",
    precio: 45990,
    imagen: "https://images.unsplash.com/photo-1504148455328-497c5efdf13d?q=80&w=500&auto=format&fit=crop",
    stock: "Disponible",
  },
  {
    id: 2,
    nombre: "Esmeril Angular 4 1/2 700W",
    marca: "DeWalt",
    precio: 89990,
    imagen: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=500&auto=format&fit=crop",
    stock: "Pocas unidades",
  },
  {
    id: 3,
    nombre: "Set de Destornilladores 10 pcs",
    marca: "Stanley",
    precio: 12490,
    imagen: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=500&auto=format&fit=crop",
    stock: "Disponible",
  },
  {
    id: 4,
    nombre: "Sierra Circular 7 1/4",
    marca: "Makita",
    precio: 135000,
    imagen: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=500&auto=format&fit=crop",
    stock: "A pedido",
  },
  {
    id: 5,
    nombre: "Nivel de Mano 24 pulgadas",
    marca: "Irimo",
    precio: 8900,
    imagen: "https://images.unsplash.com/photo-1581147036324-c17da42e16c2?q=80&w=500&auto=format&fit=crop",
    stock: "Disponible",
  },
  {
    id: 6,
    nombre: "Combo Llave Francesa 10'",
    marca: "Ubermann",
    precio: 15990,
    imagen: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?q=80&w=500&auto=format&fit=crop",
    stock: "Disponible",
  },
];

export default function HerramientasPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header de navegación */}
      <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-orange-600 flex items-center gap-2">
            ← Volver al Inicio
          </Link>
          <h1 className="text-xl font-bold">Catálogo de Herramientas</h1>
          <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
            6 Productos encontrados
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar de filtros (Estilo Chileno) */}
          <aside className="w-full md:w-64 flex flex-col gap-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h2 className="font-bold mb-4 border-b pb-2">Categorías</h2>
              <ul className="space-y-2 text-sm">
                <li className="font-bold text-orange-600 underline cursor-pointer">Eléctricas</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Manuales</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Medición</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Seguridad (EPP)</li>
              </ul>
            </div>

            <div className="bg-orange-600 p-6 rounded-xl text-white shadow-lg">
              <h3 className="font-bold text-lg mb-2">¿Busca algo más?</h3>
              <p className="text-sm opacity-90 mb-4">Pregunte por stock de fierro y materiales de patio.</p>
              <button className="w-full bg-white text-orange-600 font-bold py-2 rounded-lg text-sm uppercase tracking-wider">
                Llamar a la central
              </button>
            </div>
          </aside>

          {/* Grilla de productos */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTOS.map((prod) => (
              <div 
                key={prod.id} 
                className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 relative bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={prod.imagen}
                    alt={prod.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4 flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-zinc-400">{prod.marca}</span>
                  <h3 className="font-bold text-zinc-800 dark:text-zinc-100 leading-snug h-12">
                    {prod.nombre}
                  </h3>
                  
                  <div className="mt-4 flex flex-col">
                    <span className="text-2xl font-black text-orange-600">
                      ${prod.precio.toLocaleString('es-CL')}
                    </span>
                    <span className="text-[10px] text-zinc-500 italic">Precio unitario con IVA</span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className={`text-xs font-medium ${
                      prod.stock === "Disponible" ? "text-green-600" : "text-amber-600"
                    }`}>
                      ● {prod.stock}
                    </span>
                    <button className="bg-zinc-900 dark:bg-zinc-100 dark:text-black text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-orange-500 transition-colors">
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-20 bg-zinc-200 dark:bg-zinc-900 p-8 text-center text-zinc-600 dark:text-zinc-400">
        <p className="text-sm">Precios válidos para venta web y local central.</p>
        <p className="font-bold">Despacho en camión 3/4 disponible para toda la provincia.</p>
      </footer>
    </div>
  );
}