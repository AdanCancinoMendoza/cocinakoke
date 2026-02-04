export default function PrivacidadPage() {
    return (
        <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
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
