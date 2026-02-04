export default function TerminosPage() {
    return (
        <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-brand-yellow">Términos y Condiciones</h1>
            <div className="space-y-4 text-gray-light">
                <p>Bienvenido a CocinaKoke. Al utilizar nuestros servicios, aceptas los siguientes términos y condiciones.</p>

                <h2 className="text-xl font-semibold text-white mt-4">1. Uso del Servicio</h2>
                <p>Nuestros servicios están destinados para uso personal y no comercial. Nos reservamos el derecho de rechazar el servicio a cualquier persona por cualquier motivo y en cualquier momento.</p>

                <h2 className="text-xl font-semibold text-white mt-4">2. Pedidos y Pagos</h2>
                <p>Todos los pedidos están sujetos a disponibilidad y confirmación del precio. El pago debe realizarse en el momento del pedido.</p>

                <h2 className="text-xl font-semibold text-white mt-4">3. Modificaciones</h2>
                <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Es tu responsabilidad revisarlos periódicamente.</p>
            </div>
        </div>
    );
}
