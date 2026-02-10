"use client";

import { motion } from "framer-motion";
import { Tag, Sparkles, ChevronRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import menuData from "../data/menu.json";
import Link from "next/link";

interface MenuItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image?: string;
}

export default function PromotionsAndPackages() {
    const promoData = menuData.filter((cat) => cat.category === "Promociones");

    return (
        <section className="py-24 relative overflow-hidden bg-neutral-900 border-b border-white/5">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[130px] -translate-y-1/2 -translate-x-1/2" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[130px] translate-y-1/2 translate-x-1/2" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-black uppercase tracking-[0.2em] mb-6"
                    >
                        <Tag size={14} />
                        Ofertas Exclusivas
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white mb-6"
                    >
                        Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Promociones</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto font-medium"
                    >
                        Disfruta de nuestras mejores promociones y especialidades preparadas para deleitar tu paladar.
                    </motion.p>
                </div>

                <div className="space-y-20">
                    {promoData.map((group) => (
                        <div key={group.category} className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {(group.items as any[]).map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group relative h-full"
                                    >
                                        <div className="h-full bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col transition-all duration-500 hover:bg-white/[0.07] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)]">

                                            <div className="relative h-64 w-full bg-neutral-800/50 overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

                                                {item.image ? (
                                                    <div className="relative w-full h-full" onContextMenu={(e) => e.preventDefault()}>
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                            sizes="(max-width: 768px) 100vw, 33vw"
                                                            draggable={false}
                                                        />
                                                        <div className="absolute inset-0 z-20 pointer-events-auto bg-transparent"
                                                            onContextMenu={(e) => e.preventDefault()}
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="w-full h-full flex flex-col items-center justify-center text-neutral-600">
                                                        <Sparkles size={48} strokeWidth={1} />
                                                        <span className="text-[10px] font-black uppercase tracking-widest mt-2">Cocina Koke</span>
                                                    </div>
                                                )}

                                                <div className="absolute bottom-6 left-6 bg-red-600 text-white font-black px-5 py-2 rounded-2xl shadow-xl z-20 flex items-center gap-1 scale-110">
                                                    <span className="text-sm font-medium opacity-80">$</span>
                                                    {item.price}
                                                </div>
                                            </div>

                                            <div className="p-8 flex flex-col flex-1">
                                                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-red-400 transition-colors leading-tight">
                                                    {item.name}
                                                </h3>
                                                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                                                    {item.description}
                                                </p>

                                                <Link
                                                    href="/menu"
                                                    className="inline-flex items-center justify-center gap-3 w-full h-14 rounded-2xl bg-white/5 hover:bg-red-600 text-white font-black transition-all duration-500 border border-white/10 hover:border-red-500 shadow-lg hover:shadow-red-500/25 hover:translate-y-[-6px] hover:scale-[1.02] active:scale-95"
                                                >
                                                    <ShoppingBag size={20} />
                                                    <span>Pedir Promo</span>
                                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>

                                            {/* Decoration */}
                                            <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-12 h-12 rounded-full bg-red-500/20 blur-xl animate-pulse" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}