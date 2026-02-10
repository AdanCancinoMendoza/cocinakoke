"use client";

import { useState, useEffect } from "react";
import menuData from "../data/menu.json";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, RefreshCcw, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MenuItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image?: string;
}

export default function RandomProductShowcase() {
    const [randomItems, setRandomItems] = useState<MenuItem[]>([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const refreshItems = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            const allItems: MenuItem[] = (menuData as any)
                .filter((c: any) => !["Salsas", "Extras", "Promociones", "Paquetes"].includes(c.category))
                .flatMap((category: any) =>
                    category.items
                        .filter((item: any) => !["agua", "pepsi", "be light"].includes(item.name.toLowerCase()))
                        .map((item: any) => ({
                            ...item,
                            price: item.price ?? item.variants?.[0]?.price ?? 0
                        }))
                );
            const shuffled = [...allItems].sort(() => 0.5 - Math.random());
            setRandomItems(shuffled.slice(0, 3));
            setIsRefreshing(false);
        }, 600);
    };

    useEffect(() => {
        refreshItems();
    }, []);

    if (randomItems.length === 0) return null;

    return (
        <section className="py-24 relative overflow-hidden bg-neutral-900">
            {/* Background efectoss */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-4"
                        >
                            <Sparkles size={14} className="animate-pulse" />
                            Selección del Chef
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-white leading-tight"
                        >
                            ¿No sabes qué pedir? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-600">
                                Prueba algo nuevo hoy
                            </span>
                        </motion.h2>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={refreshItems}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-black text-lg border border-white/10 backdrop-blur-md transition-all group"
                    >
                        <RefreshCcw size={20} className={`${isRefreshing ? 'animate-spin' : 'group-hover:rotate-180'} transition-transform duration-500 text-orange-500`} />
                        Sugerir otros
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    <AnimatePresence mode="popLayout">
                        {randomItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group relative"
                            >
                                {/* Card Glassmorphism */}
                                <div className="h-full bg-white/[0.03] dark:bg-neutral-800/40 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/[0.07] hover:border-orange-500/30 flex flex-col">

                                    {/* Image Container */}
                                    <div className="relative h-56 w-full mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-shadow duration-500">
                                        {item.image ? (
                                            <div className="relative w-full h-full p-6 transition-transform duration-700 group-hover:scale-110" onContextMenu={(e) => e.preventDefault()}>
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-contain drop-shadow-2xl"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                    draggable={false}
                                                />
                                                <div className="absolute inset-0 z-20 pointer-events-auto bg-transparent"
                                                    onContextMenu={(e) => e.preventDefault()}
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center text-neutral-700">
                                                <Sparkles size={60} strokeWidth={1} />
                                                <span className="text-[10px] font-black uppercase tracking-widest mt-4">Próximamente</span>
                                            </div>
                                        )}
                                        {/* Price Tag Overlay */}
                                        <div className="absolute top-4 right-4 bg-orange-500 text-white font-black px-4 py-2 rounded-2xl shadow-lg z-30 flex items-center gap-1">
                                            <span>${item.price}</span>
                                            <span className="text-[10px] opacity-80">MXN</span>
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-2xl font-black text-white mb-3 group-hover:text-orange-400 transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                                            {item.description}
                                        </p>

                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
