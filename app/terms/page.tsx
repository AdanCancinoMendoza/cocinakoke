"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function TerminosPage() {
    return (
        <div className="min-h-screen bg-charcoal font-(family-name:--font-geist-sans)">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-100 h-100 bg-brand-yellow rounded-full blur-[150px] opacity-5"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-75 h-75 bg-brand-red rounded-full blur-[120px] opacity-5"></div>
                </div>

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 max-w-4xl mx-auto mb-8"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-medium/50 backdrop-blur-sm border border-gray-light/10 text-gray-light hover:bg-gray-medium hover:border-brand-yellow/30 hover:text-brand-yellow transition-all group"
                    >
                        <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="font-semibold">Volver al Inicio</span>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-center max-w-4xl mx-auto"
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-8 rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-brand-yellow shadow-[0_0_30px_rgba(255,212,0,0.3)]"
                    >
                        <Image
                            src="/Koke.png"
                            alt="La Cocina de Koke"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl font-black mb-4 text-transparent bg-clip-text bg-linear-to-r from-brand-yellow via-brand-red to-brand-yellow">
                        Términos y Condiciones
                    </h1>
                    <p className="text-sm text-gray-light/70">Última actualización: 4 de febrero de 2026</p>
                </motion.div>
            </section>

            {/* Content */}
            <section className="px-4 sm:px-8 pb-20 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gray-medium/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-light/10"
                >
                    <div className="space-y-8 text-gray-light">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg leading-relaxed"
                        >
                            Bienvenido a <span className="text-brand-yellow font-semibold">CocinaKoke</span>. Al visitar nuestro sitio web y/o contactarnos a través de nuestro número oficial de WhatsApp para realizar pedidos, usted acepta estos Términos y Condiciones en su totalidad.
                        </motion.p>

                        {/* Section 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="border-l-4 border-brand-yellow pl-6 py-2"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-yellow">01.</span>
                                Descripción del Servicio
                            </h2>
                            <p className="leading-relaxed mb-3">
                                CocinaKoke es un servicio de preparación y venta de alimentos. Este sitio web es de carácter <span className="text-brand-yellow font-semibold">únicamente informativo</span>, diseñado para que pueda consultar nuestro menú, ubicaciones y horarios.
                            </p>
                            <p className="leading-relaxed">
                                Los pedidos se realizan <span className="text-brand-yellow font-semibold">exclusivamente a través de nuestro número oficial de WhatsApp Business</span>. No se aceptan pedidos directamente desde este sitio web. Al contactarnos por WhatsApp, podrá realizar su pedido y recibir confirmación, información de disponibilidad y actualizaciones de entrega.
                            </p>
                        </motion.div>

                        {/* Section 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="border-l-4 border-brand-red pl-6 py-2"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-red">02.</span>
                                Aceptación de los Términos
                            </h2>
                            <p className="mb-3">Al visitar este sitio web y/o contactar a nuestro número oficial de WhatsApp para realizar un pedido, usted confirma que:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">✓</span>
                                    <span>Ha leído y comprendido estos Términos y Condiciones</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">✓</span>
                                    <span>Acepta estar legalmente vinculado por estos términos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">✓</span>
                                    <span>Tiene capacidad legal para celebrar contratos vinculantes</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">✓</span>
                                    <span>Proporciona información verdadera y precisa</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Section 3 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="border-l-4 border-brand-yellow pl-6 py-2"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-yellow">03.</span>
                                Pedidos y Disponibilidad
                            </h2>
                            <p className="mb-3 font-semibold text-white">⚠️ Importante: Los pedidos únicamente se realizan a través de nuestro <span className="text-brand-yellow">número oficial de WhatsApp</span>. Este sitio web no procesa pedidos.</p>
                            <p className="mb-3">Todos los pedidos realizados por WhatsApp están sujetos a:</p>
                            <ul className="space-y-3 mb-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🍽️</span>
                                    <span>Disponibilidad de productos e ingredientes en el momento del pedido</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">📅</span>
                                    <span>Temporada - algunos productos son estacionales</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">💰</span>
                                    <span>Confirmación de precios al momento de contactar por WhatsApp</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🕐</span>
                                    <span>Horarios de operación y zonas de entrega</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">✅</span>
                                    <span>Confirmación y aceptación por parte de CocinaKoke vía WhatsApp</span>
                                </li>
                            </ul>
                            <p className="leading-relaxed bg-charcoal/50 p-4 rounded-lg border border-brand-yellow/20">
                                <span className="font-semibold text-white">Nota:</span> Los precios y productos mostrados en este sitio web son <span className="text-brand-yellow font-semibold">referenciales</span> y pueden variar según disponibilidad y temporada. Para obtener precios actualizados y confirmar disponibilidad, contacte directamente a nuestro WhatsApp oficial.
                            </p>
                        </motion.div>

                        {/* Section 4 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="border-l-4 border-brand-red pl-6 py-2"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-red">04.</span>
                                Precios y Pagos
                            </h2>
                            <p className="mb-3">
                                Los precios mostrados en este sitio web son <span className="text-brand-yellow font-semibold">únicamente informativos y referenciales</span>. Los precios reales están sujetos a:
                            </p>
                            <ul className="space-y-3 mb-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">📊</span>
                                    <span>Disponibilidad de ingredientes al momento del pedido</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🌱</span>
                                    <span>Temporada del año</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">💲</span>
                                    <span>Variaciones en el mercado</span>
                                </li>
                            </ul>
                            <p className="mb-3 font-semibold text-white">
                                El precio final será confirmado al momento de realizar su pedido por WhatsApp. Los métodos de pago aceptados incluyen:
                            </p>
                            <ul className="space-y-3 mb-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">💵</span>
                                    <span>Efectivo contra entrega</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🏦</span>
                                    <span>Transferencia bancaria</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">💳</span>
                                    <span>Otros métodos según disponibilidad</span>
                                </li>
                            </ul>
                            <p className="leading-relaxed">
                                El pago debe completarse al momento de recibir el pedido, salvo acuerdo previo por escrito.
                            </p>
                        </motion.div>

                        {/* Section 5 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="border-l-4 border-brand-yellow pl-6 py-2"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-yellow">05.</span>
                                Entregas
                            </h2>
                            <p className="mb-3">
                                Realizamos entregas en áreas específicas. Los tiempos de entrega son estimados y pueden variar según:
                            </p>
                            <ul className="space-y-3 mb-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🍴</span>
                                    <span>Volumen de pedidos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🌤️</span>
                                    <span>Condiciones climáticas</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🚗</span>
                                    <span>Tráfico y condiciones de transporte</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">👨‍🍳</span>
                                    <span>Disponibilidad de repartidores</span>
                                </li>
                            </ul>
                            <p className="leading-relaxed">
                                No nos hacemos responsables por retrasos en la entrega causados por circunstancias fuera de nuestro control. Los costos de entrega, si aplican, se comunicarán al momento de realizar el pedido.
                            </p>
                        </motion.div>

                        {/* Section 6 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="border-l-4 border-brand-red pl-6 py-2"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-red">06.</span>
                                Cancelaciones y Devoluciones
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-charcoal/50 p-4 rounded-lg border border-brand-yellow/20">
                                    <p className="font-bold text-brand-yellow mb-2">⏱️ Cancelaciones:</p>
                                    <p>Las cancelaciones deben realizarse vía WhatsApp dentro de los primeros 10 minutos después de confirmado el pedido. Después de este tiempo, el pedido no podrá ser cancelado.</p>
                                </div>
                                <div className="bg-charcoal/50 p-4 rounded-lg border border-brand-red/20">
                                    <p className="font-bold text-brand-red mb-2">↩️ Devoluciones:</p>
                                    <p className="mb-3">Debido a la naturaleza perecedera de nuestros productos, no aceptamos devoluciones excepto en casos de:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-brand-yellow">•</span>
                                            <span>Producto incorrecto entregado</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-brand-yellow">•</span>
                                            <span>Producto en mal estado al momento de entrega</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-brand-yellow">•</span>
                                            <span>Defectos de preparación evidentes</span>
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-sm italic">
                                    Las reclamaciones deben reportarse inmediatamente al momento de recibir el pedido y no serán válidas después de que el producto haya sido consumido.
                                </p>
                            </div>
                        </motion.div>

                        {/* Section 7 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="border-l-4 border-brand-yellow pl-6 py-2"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-yellow">07.</span>
                                Información del Cliente y Privacidad
                            </h2>
                            <p className="mb-3">Al contactarnos por WhatsApp para realizar un pedido, usted acepta proporcionarnos la información necesaria para procesar su solicitud, incluyendo:</p>
                            <ul className="space-y-3 mb-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">👤</span>
                                    <span>Nombre completo</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">📱</span>
                                    <span>Número de teléfono</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">📍</span>
                                    <span>Dirección de entrega</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">💳</span>
                                    <span>Información de pago</span>
                                </li>
                            </ul>
                            <p className="leading-relaxed">
                                Nos comprometemos a proteger su información personal de acuerdo con nuestra{" "}
                                <Link href="/privacy" className="text-brand-yellow hover:text-brand-yellow-dark underline transition-colors font-semibold">
                                    Política de Privacidad
                                </Link>
                                . No compartiremos su información con terceros sin su consentimiento, excepto cuando sea necesario para procesar su pedido.
                            </p>
                        </motion.div>

                        {/* Section 8 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="border-l-4 border-brand-red pl-6 py-2 bg-linear-to-r from-brand-red/5 to-transparent p-6 rounded-r-2xl"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-red">08.</span>
                                Comunicación por WhatsApp - Canal Oficial de Pedidos
                            </h2>
                            <p className="mb-3 font-semibold text-white bg-brand-yellow/10 p-3 rounded-lg border border-brand-yellow/30">
                                ⚠️ <span className="text-brand-yellow">WhatsApp es nuestro ÚNICO canal oficial</span> para realizar pedidos. No procesamos pedidos por otros medios.
                            </p>
                            <p className="mb-3">Al comunicarse con nosotros a través de nuestro número oficial de WhatsApp Business, usted acepta:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">💬</span>
                                    <span><span className="font-semibold text-white">Realizar pedidos únicamente por este medio</span> - proporcione detalles de su orden y dirección de entrega</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">💰</span>
                                    <span>Recibir confirmación de disponibilidad y <span className="text-brand-yellow font-semibold">precio actualizado</span> de su pedido</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">✅</span>
                                    <span>Recibir confirmación oficial del pedido y tiempo estimado de entrega</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">📍</span>
                                    <span>Recibir actualizaciones del estado de su pedido y entrega</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">🎁</span>
                                    <span>Recibir información sobre promociones y menú especial (puede optar por no recibirla en cualquier momento)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">📱</span>
                                    <span>Las políticas de uso de WhatsApp y Meta</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Section 9 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="border-l-4 border-brand-yellow pl-6 py-2"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-yellow">09.</span>
                                Seguridad Alimentaria y Alergias
                            </h2>
                            <p className="mb-3">Nos esforzamos por mantener los más altos estándares de seguridad alimentaria. Sin embargo:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">⚠️</span>
                                    <span>Es responsabilidad del cliente informar sobre alergias o restricciones dietéticas</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">⚠️</span>
                                    <span>No podemos garantizar que nuestros productos estén libres de alérgenos al 100%</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">⚠️</span>
                                    <span>Procesamos alimentos que pueden contener alérgenos comunes</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Section 10 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="border-l-4 border-brand-red pl-6 py-2"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-red">10.</span>
                                Propiedad Intelectual
                            </h2>
                            <p className="leading-relaxed">
                                Todo el contenido de este sitio web, incluyendo pero no limitado a texto, imágenes, logos, recetas y diseños, es propiedad de <span className="text-brand-yellow font-semibold">CocinaKoke</span> y está protegido por las leyes de propiedad intelectual. No se permite la reproducción sin autorización expresa por escrito.
                            </p>
                        </motion.div>

                        {/* Section 11 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            className="border-l-4 border-brand-yellow pl-6 py-2"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-yellow">11.</span>
                                Limitación de Responsabilidad
                            </h2>
                            <p className="mb-3">CocinaKoke no será responsable por:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">•</span>
                                    <span>Daños indirectos o consecuentes derivados del uso de nuestros servicios</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">•</span>
                                    <span>Interrupciones del servicio por mantenimiento o causas de fuerza mayor</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">•</span>
                                    <span>Errores en la información del sitio web</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">•</span>
                                    <span>Acciones de terceros (repartidores, proveedores de pago, etc.)</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Section 12 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            className="border-l-4 border-brand-red pl-6 py-2"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-red">12.</span>
                                Modificaciones de los Términos
                            </h2>
                            <p className="leading-relaxed">
                                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en este sitio web. Es responsabilidad del usuario revisar periódicamente estos términos. El uso continuado de nuestros servicios después de cualquier modificación constituye la aceptación de los nuevos términos.
                            </p>
                        </motion.div>

                        {/* Section 13 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="border-l-4 border-brand-yellow pl-6 py-2"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-yellow">13.</span>
                                Ley Aplicable y Jurisdicción
                            </h2>
                            <p className="leading-relaxed">
                                Estos Términos y Condiciones se rigen por las leyes aplicables en nuestra jurisdicción. Cualquier disputa se resolverá en los tribunales competentes de nuestra localidad.
                            </p>
                        </motion.div>

                        {/* Section 14 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.3 }}
                            className="border-l-4 border-brand-red pl-6 py-2"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-red">14.</span>
                                Contacto
                            </h2>
                            <p className="mb-4">Para preguntas, comentarios o reclamaciones sobre estos Términos y Condiciones, puede contactarnos a través de:</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-3 bg-charcoal/50 rounded-lg hover:bg-charcoal/70 transition-colors">
                                    <span className="text-2xl">💬</span>
                                    <div>
                                        <p className="font-semibold text-white">WhatsApp Business</p>
                                        <p className="text-brand-yellow">8132370129</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-charcoal/50 rounded-lg hover:bg-charcoal/70 transition-colors">
                                    <span className="text-2xl">📧</span>
                                    <div>
                                        <p className="font-semibold text-white">Email</p>
                                        <p className="text-brand-yellow">tacosytostadaskoke@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-charcoal/50 rounded-lg hover:bg-charcoal/70 transition-colors">
                                    <span className="text-2xl">📍</span>
                                    <div>
                                        <p className="font-semibold text-white mb-2">Dirección</p>
                                        <p className="text-brand-yellow mb-1">Vistas del norte 426, Vistas del Río</p>
                                        <p className="text-brand-yellow mb-2">Juarez, N.L</p>
                                        <p className="text-gray-light text-sm">También en:</p>
                                        <p className="text-brand-yellow">Av. El Sabinal S/N, Col. Terranova (La Rotonda)</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Section 15 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                            className="border-l-4 border-brand-yellow pl-6 py-2"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-yellow">15.</span>
                                Aceptación
                            </h2>
                            <p className="leading-relaxed">
                                Al visitar este sitio web y/o contactar a nuestro número oficial de WhatsApp para realizar un pedido con <span className="text-brand-yellow font-semibold">CocinaKoke</span>, usted reconoce que ha leído, comprendido y aceptado estos Términos y Condiciones en su totalidad.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-light mb-6 text-lg">¿Listo para ordenar?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/menu"
                            className="px-8 py-4 rounded-full bg-brand-yellow text-black font-bold text-lg hover:bg-brand-yellow-dark hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,212,0,0.5)] cursor-pointer inline-block"
                        >
                            Ver Menú
                        </Link>
                        <Link
                            href="/"
                            className="px-8 py-4 rounded-full bg-transparent border-2 border-brand-red text-brand-red font-bold text-lg hover:bg-brand-red hover:text-white hover:scale-105 transition-all cursor-pointer inline-block"
                        >
                            Volver al Inicio
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
