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
    image?: string;
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
                                        className="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-lg border border-gray-100 dark:border-neutral-700 overflow-hidden hover:shadow-2xl transition-all group"
                                    >
                                        {/* Special Offer Badge - Corner */}
                                        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-10 flex items-center gap-1 shadow-md">
                                            <Image
                                                src={badgeIcon}
                                                alt={badgeText}
                                                width={20}
                                                height={20}
                                                className="brightness-0 invert"
                                            />
                                            {badgeText}
                                        </div>

                                        {/* Product Image if available */}
                                        {item.image && (
                                            <div className="relative h-45 w-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                {/* Gradient overlay for better text contrast if needed, mostly aesthetic here */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        )}

                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2 mt-4">
                                                <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight pr-8">
                                                    {item.name}
                                                </h4>
                                                <span className="text-xl font-bold text-orange-600 block bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-lg">
                                                    ${item.price}
                                                </span>
                                            </div>

                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 min-h-[3rem]">
                                                {item.description}
                                            </p>

                                            <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-black py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 dark:hover:bg-gray-200 transition-colors group-hover:scale-[1.02] active:scale-95">
                                                <span>Ordenar ahora</span>
                                                <ShoppingCart size={18} />
                                            </button>
                                        </div>

                                        {/* Decorative gradient line at bottom */}
                                        <div className="h-1 w-full bg-gradient-to-r from-brand-yellow via-brand-red to-brand-yellow"></div>
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