"use client";

import { useState, useEffect } from "react";
import menuData from "../data/menu.json";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    LayoutGrid,
    Coffee,
    Sun,
    UtensilsCrossed,
    CookingPot,
    Drumstick,
    Flame,
    Sandwich,
    Pizza,
    Package,
    Plus,
    CupSoda,
    TicketPercent,
    CircleDot,
    ShoppingBag,
    Home,
    Search,
    Menu as MenuIcon,
    X,
    Box,
    Sparkles,
    Star,
    ChefHat,
    Beef,
    Egg
} from "lucide-react";
import Link from "next/link";

interface MenuItem {
    id: string;
    name: string;
    price?: number;
    description: string;
    image?: string;
    available?: boolean;
    icon?: string;
    categoryIcon?: string;
    isBestSeller?: boolean;
    variants?: { name: string; price: number }[];
}

interface MenuCategory {
    category: string;
    icon: string;
    items: MenuItem[];
}

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

const categoryIcons: Record<string, React.ElementType> = {
    "Todos": LayoutGrid,
    "Desayunos": Coffee,
    "Almuerzos": Sun,
    "Entradas": UtensilsCrossed,
    "Comidas": CookingPot,
    "Boneless y Alitas": Drumstick,
    "Salsas": Flame,
    "Tortas": Sandwich,
    "Hamburguesas": Burger,
    "Tostadas y Tacos Tipo Siberia": Pizza,
    "Paquetes": Package,
    "Extras": Sparkles,
    "Bebidas": CupSoda,
    "Promociones": TicketPercent
};

export default function MenuGrid() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [selectedItemForVariants, setSelectedItemForVariants] = useState<MenuItem | null>(null);
    const [selectedItemForDetails, setSelectedItemForDetails] = useState<MenuItem | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Scroll handler to hide/show menu
    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    // Scrolling down & passed threshold
                    setIsVisible(false);
                } else {
                    // Scrolling up
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    // Find max price per category and enrich items
    const processedCategories = (menuData as unknown as MenuCategory[]).map(cat => {
        const itemsWithPrices = cat.items
            .filter(item => item.available !== false) // Filter out items where available is explicitly false
            .map(item => ({
                ...item,
                effectivePrice: item.variants && item.variants.length > 0
                    ? Math.max(...item.variants.map(v => v.price))
                    : (item.price || 0)
            }));

        const maxPriceInCat = Math.max(...itemsWithPrices.map(i => i.effectivePrice));

        return {
            ...cat,
            items: itemsWithPrices.map(item => ({
                ...item,
                categoryIcon: cat.icon,
                isBestSeller: item.effectivePrice === maxPriceInCat && maxPriceInCat > 0
            }))
        };
    });

    const categories = ["Todos", ...processedCategories.map((c) => c.category)];

    const filteredItems = (
        selectedCategory === "Todos"
            ? processedCategories
                .filter(c => !["Salsas", "Extras"].includes(c.category))
                .flatMap((c) => c.items)
            : processedCategories.find((c) => c.category === selectedCategory)?.items || []
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 pb-24 md:pb-8">
            <AnimatePresence>
                {selectedItemForVariants && (
                    <VariantModal
                        item={selectedItemForVariants}
                        onClose={() => setSelectedItemForVariants(null)}
                    />
                )}
                {selectedItemForDetails && (
                    <ProductDetailsModal
                        item={selectedItemForDetails}
                        onClose={() => setSelectedItemForDetails(null)}
                        onSelectVariants={(it) => {
                            setSelectedItemForDetails(null);
                            setSelectedItemForVariants(it);
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Desktop Category Filter - Fixed at top for PC with animation */}
            <div className={`hidden md:flex flex-wrap gap-3 justify-center items-center mb-12 sticky top-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md py-6 px-6 border-b border-gray-100 dark:border-neutral-800 shadow-sm transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}>
                <Link
                    href="/"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-neutral-700 transition-all"
                >
                    <Home size={18} />
                    Casa
                </Link>

                <div className="w-px h-6 bg-gray-200 dark:bg-neutral-700 mx-2" />

                {categories.map((cat) => {
                    const Icon = categoryIcons[cat] || LayoutGrid;
                    const isSelected = selectedCategory === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${isSelected
                                ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30 scale-105"
                                : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-neutral-700"
                                }`}
                        >
                            <Icon size={18} />
                            {cat}
                        </button>
                    );
                })}
            </div>

            <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-neutral-900/90 dark:bg-black/95 backdrop-blur-xl border-t border-white/10 px-4 pb-safe pt-2 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
                <div className="max-w-md mx-auto flex items-center justify-between gap-2">
                    <Link
                        href="/"
                        className="flex flex-col items-center justify-center flex-1 py-1 text-gray-400 hover:text-white transition-colors"
                    >
                        <Home size={22} />
                        <span className="text-[10px] font-bold uppercase mt-1">Casa</span>
                    </Link>

                    <div className="w-px h-8 bg-white/10" />

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${isMobileMenuOpen ? 'text-orange-500' : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
                        <span className="text-[10px] font-bold uppercase mt-1">Menú</span>
                    </button>
                </div>
                <div className="h-4 md:hidden" />
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="md:hidden fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-md p-6 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-black text-white">Categorías</h2>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-full bg-white/10 text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pb-32">
                            {categories.map((cat) => {
                                const Icon = categoryIcons[cat] || LayoutGrid;
                                const isSelected = selectedCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => {
                                            setSelectedCategory(cat);
                                            setIsMobileMenuOpen(false);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className={`flex flex-col items-center gap-3 p-6 rounded-3xl transition-all duration-300 ${isSelected
                                            ? "bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-xl shadow-orange-500/20"
                                            : "bg-neutral-900 text-gray-400 border border-white/5"
                                            }`}
                                    >
                                        <Icon size={32} />
                                        <span className="text-xs font-black uppercase tracking-widest text-center">{cat}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                layout
                className={`grid grid-cols-2 gap-3 md:gap-6 ${["Salsas", "Extras"].includes(selectedCategory)
                    ? "lg:grid-cols-4 xl:grid-cols-6"
                    : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    }`}
            >
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item) => (
                        <MenuCard
                            key={item.id}
                            item={item}
                            isSauce={["Salsas", "Extras"].includes(selectedCategory) || item.id.startsWith("s") || item.id.startsWith("ex")}
                            onSelectVariants={(it) => setSelectedItemForVariants(it)}
                            onViewDetails={(it) => setSelectedItemForDetails(it)}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}


function MenuCard({ item, isSauce, onSelectVariants, onViewDetails }: { item: MenuItem; isSauce?: boolean; onSelectVariants?: (item: MenuItem) => void; onViewDetails?: (item: MenuItem) => void }) {
    const hasImage = !!item.image && item.image !== "";
    const hasVariants = !!item.variants && item.variants.length > 0;
    const displayPrice = hasVariants ? item.variants![0].price : item.price;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`group relative flex flex-col bg-white dark:bg-neutral-800 rounded-[2rem] md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-neutral-700 h-full border-b-4 border-b-orange-500/20 hover:border-b-orange-500 ${isSauce ? 'min-h-[280px] md:min-h-[320px]' : ''}`}
        >
            <div className={`relative ${isSauce ? 'h-24 md:h-32' : 'h-32 md:h-48'} w-full flex items-center justify-center overflow-hidden bg-neutral-50 dark:bg-neutral-900/50`}>
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />

                {hasImage ? (
                    <div
                        className="relative w-full h-full p-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                        onContextMenu={(e) => e.preventDefault()}
                        onClick={() => onViewDetails?.(item)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative w-full h-full flex items-center justify-center drop-shadow-xl group-hover:drop-shadow-2xl transition-all">
                            <Image
                                src={item.image!}
                                alt={item.name}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                draggable={false}
                            />
                        </div>

                        <div className="absolute inset-0 z-20 pointer-events-auto bg-transparent"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center text-orange-500/40 dark:text-neutral-700/60 transition-all duration-500 group-hover:text-orange-500 group-hover:scale-110">
                        {(() => {
                            const IconMap: Record<string, any> = { CupSoda, Box, Star, ChefHat, Sparkles, Egg, Coffee, Sun, UtensilsCrossed, CookingPot, Drumstick, Flame, Sandwich, Beef, Burger, Pizza, Package };
                            const SpecificIcon = item.icon ? IconMap[item.icon] : null;
                            const FallbackIcon = isSauce ? Flame : ChefHat;
                            const FinalIcon = SpecificIcon || FallbackIcon;
                            return <FinalIcon size={isSauce ? 48 : 64} strokeWidth={1.5} className="mb-3 drop-shadow-lg" />;
                        })()}
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">Koke Gourmet</span>
                    </div>
                )}

                {item.isBestSeller && !isSauce && (
                    <div className="absolute top-3 right-3 z-10">
                        <span className="px-3 py-1.5 rounded-xl text-[10px] font-black bg-orange-500 text-white uppercase tracking-tighter shadow-lg flex items-center gap-1.5 backdrop-blur-sm border border-white/20">
                            {(() => {
                                const IconMap: Record<string, any> = { CupSoda, Box, Star, ChefHat, Sparkles, Egg, Coffee, Sun, UtensilsCrossed, CookingPot, Drumstick, Flame, Sandwich, Beef, Burger, Pizza, Package };
                                const CategoryIcon = item.categoryIcon ? IconMap[item.categoryIcon] : Star;
                                return CategoryIcon ? <CategoryIcon size={12} strokeWidth={3} /> : <Star size={12} strokeWidth={3} />;
                            })()}
                            Especial
                        </span>
                    </div>
                )}
            </div>

            <div className={`p-3 md:p-5 flex flex-col flex-1 relative z-10 bg-white dark:bg-neutral-800 ${isSauce ? 'pt-2 md:pt-3' : ''}`}>
                <div className="flex justify-between items-start mb-1 md:mb-2 gap-2">
                    <div className="flex flex-col gap-0.5 md:gap-1">
                        <div className="flex items-center gap-1.5 md:gap-2">
                            {(() => {
                                const IconMap: Record<string, any> = { CupSoda, Box, Star, ChefHat, Sparkles, Egg, Coffee, Sun, UtensilsCrossed, CookingPot, Drumstick, Flame, Sandwich, Beef, Burger, Pizza, Package };
                                const CategoryIcon = item.categoryIcon ? IconMap[item.categoryIcon] : Star;
                                return CategoryIcon && <CategoryIcon size={14} className="text-orange-500 md:size-[16px]" strokeWidth={2.5} />;
                            })()}
                            <h3
                                className={`${isSauce ? 'text-sm md:text-base' : 'text-base md:text-lg'} font-black text-gray-900 dark:text-white leading-tight md:leading-[1.1] transition-colors group-hover:text-orange-600 dark:group-hover:text-orange-400 cursor-pointer line-clamp-1`}
                                onClick={() => onViewDetails?.(item)}
                            >
                                {item.name}
                            </h3>
                        </div>
                    </div>
                </div>

                <p className={`text-gray-500 dark:text-gray-400 text-[11px] md:text-sm mb-3 md:mb-5 ${isSauce ? 'line-clamp-1 mb-2' : 'line-clamp-2'} leading-snug md:leading-relaxed flex-1`}>
                    {item.description}
                </p>

                <div className="mt-auto flex flex-col gap-2 md:gap-4">
                    <div className="flex items-center justify-between gap-1">
                        <div className="flex flex-col">
                            {!isSauce && (
                                <span className="text-[8px] md:text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest mb-0.5">
                                    {hasVariants ? "Desde" : "Precio"}
                                </span>
                            )}
                            <span className={`${isSauce ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} font-black text-gray-900 dark:text-white flex items-center gap-1`}>
                                <span className="text-xs md:text-sm font-medium text-orange-600">$</span>
                                {displayPrice}
                                <span className="text-[10px] md:text-xs font-bold text-gray-400 dark:text-gray-500 ml-1">MXN</span>
                            </span>
                        </div>

                        {item.available !== false && (
                            <div className="flex items-center gap-1 md:gap-1.5 px-1 md:px-1.5 py-0.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                                <div className="w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-emerald-500/50" />
                                <span className="text-[7px] md:text-[8px] font-black text-emerald-600/70 dark:text-emerald-400/70 uppercase tracking-tighter">Disp.</span>
                            </div>
                        )}
                    </div>

                    {hasVariants && (
                        <button
                            onClick={() => onSelectVariants?.(item)}
                            className={`${isSauce ? 'h-8 md:h-9 px-2 md:px-3 text-xs md:text-sm' : 'h-10 md:h-12 px-3 md:px-6 text-[12px] md:text-sm'} w-full bg-transparent text-gray-900 dark:text-white font-black rounded-xl md:rounded-2xl flex items-center justify-center gap-1.5 md:gap-2 border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 transform active:scale-95 shadow-lg hover:shadow-orange-500/40 group/btn`}
                        >
                            <ShoppingBag size={isSauce ? 12 : 16} className="md:size-[18px] group-hover/btn:rotate-[20deg] group-hover/btn:scale-110 transition-transform duration-500" />
                            <span className="tracking-wide uppercase line-clamp-1 text-xs">Opciones</span>
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

function ProductDetailsModal({ item, onClose, onSelectVariants }: { item: MenuItem; onClose: () => void; onSelectVariants: (item: MenuItem) => void }) {
    const hasImage = !!item.image && item.image !== "";
    const hasVariants = !!item.variants && item.variants.length > 0;
    const displayPrice = hasVariants ? item.variants![0].price : item.price;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto bg-neutral-100 dark:bg-black/50 relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />

                    {hasImage ? (
                        <div className="relative w-full h-full p-8" onContextMenu={(e) => e.preventDefault()}>
                            <Image
                                src={item.image!}
                                alt={item.name}
                                fill
                                className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                draggable={false}
                            />
                            {/* Protection Overlay */}
                            <div className="absolute inset-0 z-20 pointer-events-auto bg-transparent"
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-orange-200 dark:text-neutral-800">
                            <Plus size={80} strokeWidth={1} />
                            <span className="text-xs font-black uppercase tracking-[0.3em] mt-4">Cocina Koke</span>
                        </div>
                    )}

                    <button
                        onClick={onClose}
                        className="md:hidden absolute top-6 right-6 p-4 rounded-full bg-black/50 text-white backdrop-blur-md z-30"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col bg-white dark:bg-neutral-900 overflow-y-auto">
                    <div className="hidden md:flex justify-end mb-4">
                        <button
                            onClick={onClose}
                            className="p-3 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-500 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex-1">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-black uppercase tracking-widest mb-6">
                            Producto Koke
                        </span>

                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-[1.1]">
                            {item.name}
                        </h2>

                        <div className="space-y-4 mb-8">
                            <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Descripción</h4>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between gap-6">
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest mb-1">
                                {hasVariants ? "Desde" : "Precio total"}
                            </span>
                            <span className="text-4xl font-black text-gray-900 dark:text-white flex items-center gap-1.5">
                                <span className="text-xl font-medium text-orange-600">$</span>
                                {displayPrice}
                                <span className="text-sm font-bold text-gray-400 dark:text-gray-500">MXN</span>
                            </span>
                        </div>

                        {hasVariants && (
                            <button
                                onClick={() => onSelectVariants(item)}
                                className="flex-1 bg-transparent border-2 border-orange-500 text-gray-900 dark:text-white h-16 rounded-3xl font-black text-lg flex items-center justify-center gap-3 hover:bg-orange-600 hover:text-white hover:-translate-y-1.5 hover:scale-[1.03] transition-all duration-500 transform active:scale-95 shadow-xl hover:shadow-orange-500/40"
                            >
                                <ShoppingBag size={24} />
                                <span>Ver Opciones</span>
                            </button>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function VariantModal({ item, onClose }: { item: MenuItem; onClose: () => void }) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-lg bg-white dark:bg-neutral-800 rounded-[40px] overflow-hidden shadow-2xl"
            >
                <div className="relative h-24 bg-orange-500 flex items-center justify-center p-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />

                    <div className="relative z-10 flex items-center gap-2 text-white/40">
                        <ShoppingBag size={32} />
                        <span className="text-sm font-black uppercase tracking-[0.3em]">Opciones</span>
                    </div>
                </div>

                <div className="p-8 pt-6">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
                                {item.name}
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full bg-gray-100 dark:bg-neutral-700 text-gray-500 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
                        >
                            <Plus size={24} className="rotate-45" />
                        </button>
                    </div>

                    <div className="space-y-4 mb-8">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Opciones disponibles</span>
                        <div className="grid grid-cols-1 gap-3">
                            {item.variants?.map((variant, idx) => (
                                <button
                                    key={idx}
                                    className="group flex items-center justify-between p-4 rounded-2xl border-2 border-gray-100 dark:border-neutral-700 hover:border-orange-500 transition-all bg-white dark:bg-neutral-900 active:scale-[0.98]"
                                >
                                    <div className="flex flex-col items-start">
                                        <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                                            {variant.name}
                                        </span>
                                        <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">Tamaño / Porción</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl font-black text-gray-900 dark:text-white">
                                            ${variant.price}
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center text-gray-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                            <ShoppingBag size={16} />
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={onClose}
                            className="text-gray-400 dark:text-gray-500 text-sm font-bold hover:text-orange-500 transition-colors uppercase tracking-widest"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
