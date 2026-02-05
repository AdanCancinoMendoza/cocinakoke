"use client";

import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 border-t border-neutral-800 pt-16 pb-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-white bg-clip-text bg-linear-to-r from-brand-yellow to-brand-red w-fit">
                            La Cocina de Koke
                        </h3>
                        <p className="text-gray-400 max-w-xs leading-relaxed">
                            Sabor auténtico y tradición en cada platillo.
                            ¡La mejor comida de Vistas del Río!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-lg">Enlaces Rápidos</h4>
                        <nav className="flex flex-col gap-3 text-gray-400">
                            <Link href="/terms" className="hover:text-brand-yellow transition-colors w-fit">
                                Términos y Condiciones
                            </Link>
                            <Link href="/policies" className="hover:text-brand-yellow transition-colors w-fit">
                                Política De Privacidad Y Tratamiento De Datos Personales
                            </Link>
                            <Link href="/privacy" className="hover:text-brand-yellow transition-colors w-fit">
                                Avisos de Privacidad
                            </Link>
                        </nav>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-lg">Síguenos</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/share/1AZGjtZeTs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#1877F2] hover:scale-110 transition-all duration-300 shadow-lg"
                                aria-label="Facebook"
                            >
                                <Facebook size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/lacocinadekoke?igsh=MXg3N2o4NDQyMTJwOA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-linear-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:scale-110 transition-all duration-300 shadow-lg"
                                aria-label="Instagram"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@tostadaskoketacos?_r=1&_t=ZS-93b8nWP4eiF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-black hover:border hover:border-gray-700 hover:scale-110 transition-all duration-300 shadow-lg group"
                                aria-label="TikTok"
                            >
                                {/* Custom TikTok Icon using SVG since it might not be in all lucide versions or we want specific styling */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:fill-current"
                                >
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} La Cocina de Koke. Todos los derechos reservados.</p>
                    <p className="flex items-center gap-1">
                        Hecho con <span className="text-red-500 animate-pulse">❤</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
