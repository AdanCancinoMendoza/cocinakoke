import Image from "next/image";
import LocationCard from "@/components/LocationCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal font-[family-name:var(--font-geist-sans)] overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center p-4">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* IMAGEN O UN BACKGROUN CHIDO*/}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-yellow rounded-full blur-[150px] opacity-10 animate-pulse"></div>
        </div>

        <div className="z-10 relative space-y-6 max-w-4xl mx-auto">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-yellow-dark animate__animated animate__zoomIn">
            LA COCINA <br className="sm:hidden" /> DE KOKE
          </h1>
          <p className="text-xl sm:text-2xl text-gray-light max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Sabor auténtico y tradición en cada platillo. <br />
            <span className="text-brand-yellow italic">¡La mejor comida de Vistas del Río!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate__animated animate__fadeInUp animate__delay-2s">
            <button className="px-8 py-4 rounded-full bg-brand-yellow text-black font-bold text-lg hover:bg-brand-yellow-dark hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,212,0,0.5)] cursor-pointer">
              ¡Pedir Ahora!
            </button>
            <button className="px-8 py-4 rounded-full bg-transparent border-2 border-brand-red text-brand-red font-bold text-lg hover:bg-brand-red hover:text-white hover:scale-105 transition-all cursor-pointer">
              Ver Menú
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce text-gray-light opacity-50">
          <span className="text-sm">Descubre más</span>
          <div className="text-2xl">⬇</div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white animate__animated animate__fadeIn">
          Nuestras <span className="text-brand-red underline decoration-brand-yellow">Sucursales</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Sede Principal */}
          <LocationCard
            title="La Cocina de Koke"
            address="Vistas del norte 426, Vistas del Río, Juárez, N.L."
            schedule={`Jueves a Domingo: 7:30 am - 11:30 pm\nMartes y Miércoles: 10:30 am - 8:00 pm`}
            color="yellow"
            delay="0.2s"
          />

          {/* Sucursal Tostadas */}
          <LocationCard
            title="Tostadas Koke"
            address="Av. El Sabinal S/N, Col. Terranova (La Rotonda)"
            schedule="Miércoles a Lunes: 11:30 am - 8:00 pm"
            phone="8111650774"
            color="red"
            delay="0.4s"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-medium text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow via-brand-red to-brand-yellow"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">¿Qué se te antoja hoy?</h2>
          <p className="text-gray-light mb-8 text-lg">No te quedes con el antojo. Ven y disfruta de lo mejor.</p>
          <button className="px-10 py-4 rounded-full bg-brand-red text-white font-bold text-xl hover:bg-brand-red-dark hover:shadow-[0_0_30px_rgba(225,6,0,0.6)] transition-all transform hover:-translate-y-1 cursor-pointer">
            Ordenar por WhatsApp
          </button>
        </div>
      </section>

    </div>
  );
}
