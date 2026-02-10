"use client";

import Link from 'next/link';
import { Facebook, Instagram, Coffee, Sun, UtensilsCrossed, CookingPot, Drumstick, Flame, Sandwich, Pizza, Package, CupSoda, Sparkles, Star, ChefHat, Beef, Egg } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Burger = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M7 15V17C7 18.6569 8.34315 20 10 20H14C15.6569 20 17 18.6569 17 17V15" />
        <path d="M7 11H17" />
        <path d="M7 13H17" />
        <path d="M17 11C17 7.68629 14.3137 5 11 5H9C5.68629 5 3 7.68629 3 11V11" />
        <rect x="3" y="11" width="18" height="2" rx="1" />
        <path d="M3 11V11C3 7.68629 5.68629 5 9 5H15C18.3137 5 21 7.68629 21 11V11" />
        <path d="M3 14H21" />
        <path d="M6 18H18" />
    </svg>
);

const allIcons = [
    Coffee, Sun, UtensilsCrossed, CookingPot, Drumstick,
    Flame, Sandwich, Burger, Pizza, Package,
    CupSoda, Sparkles, Star, ChefHat, Beef, Egg
];

export default function Footer() {
    const [icons, setIcons] = useState<{ id: number, x: number, duration: number, delay: number, size: number, Icon: any }[]>([]);

    useEffect(() => {
        const newIcons = Array.from({ length: 10 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            duration: 15 + Math.random() * 20,
            delay: Math.random() * -30,
            size: 20 + Math.random() * 30,
            Icon: allIcons[Math.floor(Math.random() * allIcons.length)]
        }));
        setIcons(newIcons);
    }, []);

    return (
        <footer className="relative bg-neutral-900 border-t border-neutral-800 pt-16 pb-8 mt-auto overflow-hidden">
            {/* Icon Rain Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
                {icons.map((icon) => (
                    <motion.div
                        key={icon.id}
                        initial={{ y: -100, rotate: 0 }}
                        animate={{
                            y: ['0vh', '110vh'],
                            rotate: 360,
                            x: [0, (Math.random() * 40 - 20)]
                        }}
                        transition={{
                            duration: icon.duration,
                            repeat: Infinity,
                            delay: icon.delay,
                            ease: "linear"
                        }}
                        className="absolute top-0"
                        style={{ left: `${icon.x}%`, color: 'white' }}
                    >
                        <icon.Icon size={icon.size} strokeWidth={1} />
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
