"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import menuData from "../data/menu.json";

interface MenuItem {
    id: string;
    name: string;
    price: number;
    description: string;
}

interface CategoryGroup {
    category: string;
    items: MenuItem[];
}

export default function PromotionsAndPackages() {
    const promoData = menuData.filter((cat) => cat.category === "Promociones" || cat.category === "Paquetes");

    return (
        <section className="py-16 max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-black text-center mb-4 text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                        Ofertas y Paquetes
                    </span>
                </h2>
                <p className="text-xl text-gray-light">
                    Disfruta de nuestras mejores promociones y combos familiares
                </p>
            </div>

            <div className="space-y-16">
                {promoData.map((group) => {
                    // Iconos basados en la categoria
                    const badgeIcon = group.category === "Paquetes"
                        ? "/icons/combo-comida.png"
                        : "/icons/oferta-especial.png";

                    const badgeText = group.category === "Paquetes" ? "COMBO" : "OFERTA";

                    return (
                        <div key={group.category}>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-l-4 border-brand-yellow pl-4">
                                {group.category}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {group.items.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`relative bg-white dark:bg-neutral-800 rounded-xl shadow-md border-2 overflow-hidden hover:shadow-xl transition-all group flex flex-row h-48 ${group.category === "Paquetes" ? "border-brand-yellow" : "border-red-600"
                                            }`}
                                    >
                                        <div className={`absolute inset-0 z-0 pointer-events-none ${group.category === "Paquetes" ? "bg-checker-yellow" : "bg-checker-red"
                                            }`}></div>

                                        <div className={`absolute top-0 left-0 text-white text-[10px] font-bold px-3 py-1 rounded-br-lg z-20 flex items-center gap-1 shadow-sm ${group.category === "Paquetes" ? "bg-brand-yellow text-black" : "bg-red-600"
                                            }`}>
                                            <Image
                                                src={badgeIcon}
                                                alt={badgeText}
                                                width={14}
                                                height={14}
                                                className="object-contain brightness-0 invert"
                                            />
                                            <span>{badgeText}</span>
                                        </div>


                                        <div className="w-[35%] h-full relative bg-gray-100 dark:bg-black overflow-hidden z-10 border-r border-gray-200 dark:border-neutral-800">
                                            <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                <span className="text-3xl">🍽️</span>
                                            </div>
                                        </div>

                                        <div className="w-[65%] p-3 flex flex-col justify-between relative z-10 bg-white/90 dark:bg-black backdrop-blur-sm">
                                            {/* Header */}
                                            <div className="mt-4">
                                                <h4 className="text-base font-black text-gray-900 dark:text-white leading-tight mb-1 line-clamp-2">
                                                    {item.name}
                                                </h4>
                                                <p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2 leading-snug">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* Footer: Price & Action */}
                                            <div className="flex flex-col gap-2 mt-2">
                                                <div className="flex items-center justify-between mt-auto">
                                                    <span className={`text-lg font-black ${group.category === "Paquetes" ? "text-brand-yellow-dark" : "text-red-600"
                                                        }`}>
                                                        ${item.price}
                                                    </span>
                                                    <button className={`text-white py-1.5 px-4 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm transition-colors ${group.category === "Paquetes"
                                                        ? "bg-black hover:bg-gray-800"
                                                        : "bg-red-600 hover:bg-red-700"
                                                        }`}>
                                                        Pedir
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}