"use client";

import { useState } from "react";
import menuData from "../data/menu.json";
import { motion } from "framer-motion";
import {
    LayoutGrid,
    Coffee,
    Sun,
    UtensilsCrossed,
    CookingPot,
    Drumstick,
    Flame,
    Sandwich,
    ScanFace,
    Pizza,
    Package,
    Plus,
    CupSoda,
    TicketPercent,
    CircleDot
} from "lucide-react";

interface MenuItem {
    id: string;
    name: string;
    price: number;
    description: string;
}

interface MenuCategory {
    category: string;
    items: MenuItem[];
}

const categoryIcons: Record<string, React.ElementType> = {
    "Todos": LayoutGrid,
    "Desayunos": Coffee,
    "Almuerzos": Sun,
    "Entradas": UtensilsCrossed,
    "Comidas": CookingPot,
    "Boneless y Alitas": Drumstick,
    "Salsas": Flame,
    "Tortas": Sandwich,
    "Hamburguesas": CircleDot, // Using CircleDot for "Round" burger shape representation
    "Tostadas y Tacos Tipo Siberia": Pizza, // Closest visual metaphor for flat tostada/folded taco available generically
    "Paquetes": Package,
    "Extras": Plus,
    "Bebidas": CupSoda,
    "Promociones": TicketPercent
};

export default function MenuGrid() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

    const categories = ["Todos", ...menuData.map((c) => c.category)];

    const filteredItems =
        selectedCategory === "Todos"
            ? menuData.flatMap((c) => c.items)
            : menuData.find((c) => c.category === selectedCategory)?.items || [];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-10">
                {categories.map((cat) => {
                    const Icon = categoryIcons[cat] || LayoutGrid;
                    return (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all ${selectedCategory === cat
                                ? "bg-orange-500 text-white shadow-lg scale-105"
                                : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-neutral-700"
                                }`}
                        >
                            <Icon size={18} />
                            {cat}
                        </button>
                    );
                })}
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        key={item.id}
                        className="flex flex-col bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-neutral-700"
                    >
                        <div className="p-5 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                    {item.name}
                                </h3>
                                <span className="text-lg font-bold text-orange-500 whitespace-nowrap ml-2">
                                    ${item.price}
                                </span>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-1">
                                {item.description}
                            </p>
                            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-neutral-700 flex justify-between items-center text-xs text-gray-400">
                                <span>Cocina Koke</span>
                                {selectedCategory === "Todos" && (
                                    <span className="bg-gray-100 dark:bg-neutral-700 px-2 py-1 rounded">
                                        {menuData.find(c => c.items.some(i => i.id === item.id))?.category}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
