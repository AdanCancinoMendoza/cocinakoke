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

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center p-4">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* IMAGEN O UN BACKGROUN CHIDO*/}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-yellow rounded-full blur-[150px] opacity-10 animate-pulse"></div>
        </div>

        <motion.div
          className="z-10 relative space-y-6 max-w-4xl mx-auto"
        >
          <motion.div
            className="mb-8 rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-brand-yellow shadow-[0_0_30px_rgba(255,212,0,0.3)] animate__animated animate__zoomIn"
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
          <p className="text-xl sm:text-2xl text-gray-light max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Sabor auténtico y tradición en cada platillo. <br />
            <span className="text-brand-yellow italic">¡La mejor comida de Vistas del Río!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate__animated animate__fadeInUp animate__delay-2s">
            <button className="px-8 py-4 rounded-full bg-brand-yellow text-black font-bold text-lg hover:bg-brand-yellow-dark hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,212,0,0.5)] cursor-pointer">
              ¡Pedir Ahora!
            </button>
            <Link href="/menu" className="px-8 py-4 rounded-full bg-transparent border-2 border-brand-red text-brand-red font-bold text-lg hover:bg-brand-red hover:text-white hover:scale-105 transition-all cursor-pointer text-center flex items-center justify-center">
              Ver Menú
            </Link>
          </div>
        </motion.div>

        <div className="absolute bottom-10 animate-bounce text-gray-light opacity-50">
          <span className="text-sm">Descubre más</span>
          <div className="text-2xl">⬇</div>
        </div>
      </section>

      {/* Promotions and Packages */}
      <PromotionsAndPackages />

      {/* Random Product */}
      < section className="px-4" >
        <RandomProductShowcase />
      </section >

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
      < section className="py-20 bg-gray-medium text-center relative overflow-hidden" >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow via-brand-red to-brand-yellow"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">¿Qué se te antoja hoy?</h2>
          <p className="text-gray-light mb-8 text-lg">No te quedes con el antojo. Ven y disfruta de lo mejor.</p>
          <button className="px-10 py-4 rounded-full bg-brand-red text-white font-bold text-xl hover:bg-brand-red-dark hover:shadow-[0_0_30px_rgba(225,6,0,0.6)] transition-all transform hover:-translate-y-1 cursor-pointer">
            Ordenar por WhatsApp
          </button>
        </div>
      </section >

    </div >
  );
}
