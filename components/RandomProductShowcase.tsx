"use client";

import { useEffect, useState } from "react";
import menuData from "../data/menu.json";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

interface MenuItem {
    id: string;
    name: string;
    price: number;
    description: string;
}

export default function RandomProductShowcase() {
    const [randomItems, setRandomItems] = useState<MenuItem[]>([]);

    useEffect(() => {
        const allItems: MenuItem[] = menuData.flatMap((category) => category.items);
        const shuffled = allItems.sort(() => 0.5 - Math.random());
        setRandomItems(shuffled.slice(0, 3)); // Show 3 random items
    }, []);

    return (
        <div className="py-12 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-xl my-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                        ¿No sabes qué pedir?
                    </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                    Prueba alguna de nuestras recomendaciones del día
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
                {randomItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-orange-100 dark:border-neutral-700"
                    >
                        <div className="h-40 bg-orange-100 dark:bg-neutral-700 rounded-md mb-4 flex items-center justify-center">
                            <span className="text-4xl">🍽️</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                            {item.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                            {item.description}
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-orange-500">
                                ${item.price}
                            </span>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm transition-colors flex items-center gap-2">
                                <span>Comprar</span>
                                <ShoppingCart size={16} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
