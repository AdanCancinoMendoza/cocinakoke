import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function PoliticasPage() {
    return (
        <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
            <Link
                href="/"
                className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-neutral-700 border border-gray-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-all duration-300 mb-8 font-medium"
            >
                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                <Home size={18} />
                Volver al inicio
            </Link>
            <h1 className="text-3xl font-bold mb-6 text-brand-yellow">Políticas</h1>
            <div className="space-y-4 text-gray-light">
                <h2 className="text-xl font-semibold text-white mt-4">Política de Envío</h2>
                <p>Realizamos entregas en las zonas designadas. Los tiempos de entrega son estimados y pueden variar debido a factores externos.</p>

                <h2 className="text-xl font-semibold text-white mt-4">Política de Reembolso</h2>
                <p>Si no estás satisfecho con tu pedido, contáctanos dentro de los 30 minutos posteriores a la entrega para evaluar una posible devolución o reemplazo.</p>

                <h2 className="text-xl font-semibold text-white mt-4">Cancelaciones</h2>
                <p>Las cancelaciones solo se aceptan si el pedido no ha comenzado a prepararse.</p>
            </div>
        </div>
    );
}
