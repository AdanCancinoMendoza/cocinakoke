export default function PoliticasPage() {
    return (
        <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
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
