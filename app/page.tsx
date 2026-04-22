import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      {/* Barra de navegación rápida */}
      <nav className="w-full bg-orange-600 p-4 text-white text-center font-bold shadow-md">
        ¡Atención caserito! Despacho gratis en toda la RM por compras sobre $50.000
      </nav>

      <main className="flex flex-1 w-full max-w-5xl mx-auto flex-col items-center py-12 px-6 sm:items-start">
        {/* Logo y Encabezado */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
          <div className="bg-orange-500 p-4 rounded-lg shadow-lg">
            <span className="text-4xl font-black text-white italic">FERRE-CHILE</span>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Ferretería "Donde el Lucho"
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Más de 30 años sirviendo a los maestros de la zona. ¡Si no lo tenemos, lo inventamos!
            </p>
          </div>
        </div>

        {/* Banner Principal / Imagen */}
        <div className="relative w-full h-64 mb-12 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1581244276891-9955ad0cb121?q=80&w=1200&auto=format&fit=crop"
            alt="Herramientas de ferretería"
            fill
            className="object-cover"
            priority
          />
          <Link 
            href="/herramientas" 
            className="mt-2 bg-zinc-900 dark:bg-white dark:text-black text-white py-2 rounded-lg font-semibold text-center hover:bg-orange-600 dark:hover:bg-orange-500 dark:hover:text-white transition-colors"
          >
            Ver Catálogo
          </Link>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8">
            <h2 className="text-white text-3xl font-bold max-w-xs">
              Ofertas de la semana: ¡Pinturas con 20% de descuento!
            </h2>
          </div>
        </div>

        {/* Sección de Productos / Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
          <div className="group flex flex-col gap-3 p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
            <div className="h-40 relative rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1530124560676-4cb451c72635?q=80&w=400&auto=format&fit=crop" 
                alt="Herramientas" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="text-xl font-bold">Herramientas</h3>
            <p className="text-sm text-zinc-500">Taladros, esmeriles y todo pa' la pega pesada.</p>
            <button className="mt-2 bg-zinc-900 dark:bg-white dark:text-black text-white py-2 rounded-lg font-semibold">
              Ver Catálogo
            </button>
          </div>

          <div className="group flex flex-col gap-3 p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
            <div className="h-40 relative rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&auto=format&fit=crop" 
                alt="Materiales" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="text-xl font-bold">Construcción</h3>
            <p className="text-sm text-zinc-500">Cemento, ladrillos y fierro. ¡Precio por mayor!</p>
            <button className="mt-2 bg-zinc-900 dark:bg-white dark:text-black text-white py-2 rounded-lg font-semibold">
              Cotizar Aquí
            </button>
          </div>

          <div className="group flex flex-col gap-3 p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
            <div className="h-40 relative rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=400&auto=format&fit=crop" 
                alt="Gasfitería" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="text-xl font-bold">Gasfitería</h3>
            <p className="text-sm text-zinc-500">Cañerías, fittings y todo lo que el maestro necesita.</p>
            <button className="mt-2 bg-zinc-900 dark:bg-white dark:text-black text-white py-2 rounded-lg font-semibold">
              Revisar Stock
            </button>
          </div>
        </div>

        {/* Sección de contacto típica chilena */}
        <div className="w-full p-8 bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex flex-col items-center sm:flex-row justify-between gap-6 border-l-8 border-orange-500">
          <div>
            <h2 className="text-2xl font-bold mb-2">¿Necesita una cotización rápida?</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Mándenos un WhatsApp y le respondemos de una.</p>
          </div>
          <div className="flex gap-4">
            <a
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-green-600 px-6 text-white font-bold transition-transform hover:scale-105"
              href="#"
            >
              Hablar al WhatsApp
            </a>
            <a
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-green-600 px-6 text-white font-bold transition-transform hover:scale-105"
              href="/productos"
            >
              Ver CRUD Productos
            </a>
            <a
              className="flex h-12 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 px-6 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
              href="#"
            >
              Ver Mapa
            </a>
          </div>
        </div>
      </main>

      <footer className="w-full py-8 text-center text-sm text-zinc-500 border-t border-zinc-200 dark:border-zinc-800">
        © 2024 Ferretería Don Lucho - "La mejor picada del maestro" - Santiago, Chile.
      </footer>
    </div>
  );
}