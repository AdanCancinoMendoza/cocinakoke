import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function PrivacidadPage() {
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
            <h1 className="text-3xl font-bold mb-6 text-brand-yellow">Avisos de Privacidad</h1>
            <div className="space-y-4 text-gray-light">
                <p>En CocinaKoke, nos tomamos muy en serio tu privacidad. Este aviso describe cómo recopilamos y protegemos tu información.</p>

                <h2 className="text-xl font-semibold text-white mt-4">Recopilación de Datos</h2>
                <p>Recopilamos información básica necesaria para procesar tus pedidos, como nombre, dirección y número de contacto.</p>

                <h2 className="text-xl font-semibold text-white mt-4">Uso de la Información</h2>
                <p>Utilizamos tus datos únicamente para fines de servicio, entrega y mejora de la experiencia del cliente. No compartimos tu información con terceros no autorizados.</p>

                <h2 className="text-xl font-semibold text-white mt-4">Seguridad</h2>
                <p>Implementamos medidas de seguridad razonables para proteger tus datos personales contra acceso no autorizado.</p>
            </div>
        </div>
    );
}
