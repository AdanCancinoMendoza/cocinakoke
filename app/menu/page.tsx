import MenuGrid from "../../components/MenuGrid";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MenuPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-white dark:bg-neutral-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-neutral-700 border border-gray-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-all duration-300 mb-8 font-medium"
                    >
                        <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                        Volver al inicio
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                            Nuestro Menú
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Descubre nuestra variedad de platillos preparados con amor y el sazón único de Cocina Koke.
                    </p>
                </div>

                <MenuGrid />
            </div>
        </div>
    );
}
