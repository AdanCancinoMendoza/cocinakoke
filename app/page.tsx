"use client";

import Image from "next/image";
import LocationCard from "@/components/LocationCard";
import RandomProductShowcase from "@/components/RandomProductShowcase";
import Link from "next/link";
import PromotionsAndPackages from "@/components/PromotionsAndPackages";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal font-[family-name:var(--font-geist-sans)] overflow-x-hidden">

      <section className="relative min-h-screen flex flex-col items-center text-center p-4">

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        </div>

        <div className="flex-grow flex flex-col justify-center items-center z-10 relative space-y-6 max-w-4xl mx-auto py-20">

          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-yellow rounded-full blur-[150px] opacity-10 animate-pulse -z-10 pointer-events-none"></div>

          <motion.div
            className="mb-8 rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-brand-yellow shadow-[0_0_30px_rgba(255,212,0,0.3)] animate__animated animate__zoomIn relative z-10"
          >
            <Image
              src="/Koke.png"
              alt="La Cocina de Koke"
              width={600}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
          <p className="text-xl sm:text-2xl text-gray-light max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s relative z-10">
            Estoy aquí para ayudarte a elegir tus platillos, resolver dudas y acompañarte hasta completar tu pedido. <br />
            <span className="text-brand-yellow italic"> ¿Qué se te antoja hoy?</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate__animated animate__fadeInUp animate__delay-2s relative z-10">
            <button className="px-8 py-4 rounded-full bg-brand-yellow text-black font-bold text-lg hover:bg-brand-yellow-dark hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,212,0,0.5)] cursor-pointer">
              ¡Pedir Ahora!
            </button>
            <Link href="/menu" className="px-8 py-4 rounded-full bg-transparent border-2 border-brand-red text-brand-red font-bold text-lg hover:bg-brand-red hover:text-white hover:scale-105 transition-all cursor-pointer text-center flex items-center justify-center">
              Ver Menú
            </Link>
          </div>
        </div>

        <div className="animate-bounce text-gray-light opacity-50 pb-8 z-10">
          <span className="text-sm whitespace-nowrap">Descubre más</span>
          <div className="text-2xl">⬇</div>
        </div>

      </section>

      <PromotionsAndPackages />
      <RandomProductShowcase />

      {/* Seccion de Sucursales */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-16 text-white animate__animated animate__fadeIn">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
            Nuestras Sucursales
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Tacos 1  */}
          <LocationCard
            title="La Cocina de Koke"
            address="Vistas del norte 426, Vistas del Río, Juárez, N.L."
            schedule={`Jueves a Domingo: 7:30 am - 11:30 pm\nMartes y Miércoles: 10:30 am - 8:00 pm`}
            phone="+52 8112981377"
            color="yellow"
            delay="0.2s"
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4668.42493600401!2d-100.10257702376244!3d25.66669431252294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c3adc427fea9%3A0x8a0172fae57e9cf1!2zTGEgY29jaW5hIGRlIEtva2Un4p2k77iP!5e1!3m2!1ses-419!2smx!4v1770237410227!5m2!1ses-419!2smx"
          />

          {/* Tacos 2 */}
          <LocationCard
            title="Tostadas Koke"
            address="Av. El Sabinal S/N, Col. Terranova (La Rotonda)"
            schedule="Miércoles a Lunes: 11:30 am - 8:00 pm"
            phone="+52 8111650774"
            color="red"
            delay="0.4s"
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4668.651126721457!2d-100.11118022376259!3d25.660916912760854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c3b10a147dbb%3A0xbc3301cc4dd4fca0!2sTostadas%20y%20tacos%20tipo%20Siberia%20Koke!5e1!3m2!1ses-419!2smx!4v1770237476658!5m2!1ses-419!2smx"
          />
        </div>
      </section >

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-neutral-900 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-20 mixed-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/90 to-neutral-900/80"></div>
        </div>

        {/* Animated content */}
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight"
          >
            ¿Qué se te antoja hoy?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 mb-10 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            No te quedes con el antojo. Los mejores tacos, tostadas y platillos de Vistas del Río están a un mensaje de distancia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-40 animate-pulse rounded-full"></div>
            <a
              href="https://wa.me/528112981377"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 text-neutral-900 font-black text-xl hover:from-yellow-200 hover:via-yellow-300 hover:to-yellow-400 hover:scale-105 transition-all transform shadow-[0_0_20px_rgba(234,179,8,0.5)] cursor-pointer group border border-yellow-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="group-hover:rotate-12 transition-transform text-neutral-900">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Ordenar por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

    </div >
  );
}
