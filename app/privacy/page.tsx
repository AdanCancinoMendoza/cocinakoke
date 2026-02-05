"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function PrivacidadPage() {
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
                        Aviso de Privacidad
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
                            En <span className="text-brand-yellow font-semibold">CocinaKoke</span>, nos comprometemos a proteger su privacidad y garantizar la seguridad de sus datos personales. Este Aviso de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información cuando interactúa con nuestro sitio web y servicios de WhatsApp Business.
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
                                Responsable del Tratamiento
                            </h2>
                            <p className="leading-relaxed mb-3">
                                <span className="text-brand-yellow font-semibold">CocinaKoke</span> es el responsable del tratamiento de sus datos personales. Puede contactarnos a través de:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">📱</span>
                                    <span><span className="font-semibold text-white">WhatsApp:</span> 8132370129</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">📧</span>
                                    <span><span className="font-semibold text-white">Email:</span> tacosytostadaskoke@gmail.com</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">📍</span>
                                    <span><span className="font-semibold text-white">Dirección:</span> Vistas del norte 426, Vistas del Río, Juarez, N.L</span>
                                </li>
                            </ul>
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
                                Información que Recopilamos
                            </h2>
                            <p className="mb-3">Recopilamos diferentes tipos de información cuando utiliza nuestros servicios:</p>

                            <div className="space-y-4">
                                <div className="bg-charcoal/50 p-4 rounded-lg border border-brand-yellow/20">
                                    <p className="font-bold text-brand-yellow mb-2">📋 Información que usted proporciona:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-brand-yellow">•</span>
                                            <span>Nombre completo</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-brand-yellow">•</span>
                                            <span>Número de teléfono (WhatsApp)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-brand-yellow">•</span>
                                            <span>Dirección de entrega</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-brand-yellow">•</span>
                                            <span>Preferencias alimentarias y alergias</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-brand-yellow">•</span>
                                            <span>Historial de pedidos</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-charcoal/50 p-4 rounded-lg border border-brand-red/20">
                                    <p className="font-bold text-brand-red mb-2">🌐 Información recopilada automáticamente:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-brand-yellow">•</span>
                                            <span>Dirección IP</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-brand-yellow">•</span>
                                            <span>Tipo de navegador y dispositivo</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-brand-yellow">•</span>
                                            <span>Páginas visitadas en nuestro sitio web</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-brand-yellow">•</span>
                                            <span>Fecha y hora de acceso</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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
                                Uso de WhatsApp Business
                            </h2>
                            <p className="mb-3 font-semibold text-white bg-brand-yellow/10 p-3 rounded-lg border border-brand-yellow/30">
                                💬 WhatsApp es nuestro canal principal de comunicación para pedidos y atención al cliente.
                            </p>
                            <p className="mb-3">Cuando se comunica con nosotros a través de WhatsApp:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">✓</span>
                                    <span>Su número de teléfono y datos de perfil de WhatsApp quedan registrados</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">✓</span>
                                    <span>El contenido de las conversaciones se almacena de forma segura</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">✓</span>
                                    <span>Sus datos están sujetos a las políticas de privacidad de Meta/WhatsApp</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">✓</span>
                                    <span>Usamos WhatsApp Business API en cumplimiento con las regulaciones de Meta</span>
                                </li>
                            </ul>
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
                                Finalidad del Tratamiento
                            </h2>
                            <p className="mb-3">Utilizamos sus datos personales para los siguientes propósitos:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🛒</span>
                                    <span><span className="font-semibold text-white">Procesar pedidos:</span> Gestionar y entregar sus pedidos de alimentos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">💬</span>
                                    <span><span className="font-semibold text-white">Comunicación:</span> Responder consultas y enviar confirmaciones de pedidos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">📊</span>
                                    <span><span className="font-semibold text-white">Mejora del servicio:</span> Analizar preferencias para mejorar nuestros productos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🎁</span>
                                    <span><span className="font-semibold text-white">Marketing:</span> Enviar promociones y ofertas (con su consentimiento)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">⚖️</span>
                                    <span><span className="font-semibold text-white">Cumplimiento legal:</span> Cumplir con obligaciones fiscales y legales</span>
                                </li>
                            </ul>
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
                                Base Legal para el Tratamiento
                            </h2>
                            <p className="mb-3">Procesamos sus datos personales con base en:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">✓</span>
                                    <span><span className="font-semibold text-white">Ejecución de contrato:</span> Para procesar y entregar sus pedidos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">✓</span>
                                    <span><span className="font-semibold text-white">Consentimiento:</span> Para enviar comunicaciones de marketing</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">✓</span>
                                    <span><span className="font-semibold text-white">Obligación legal:</span> Para cumplir con requisitos fiscales y legales</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">✓</span>
                                    <span><span className="font-semibold text-white">Interés legítimo:</span> Para mejorar nuestros servicios y prevenir fraudes</span>
                                </li>
                            </ul>
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
                                Compartir Información con Terceros
                            </h2>
                            <p className="mb-3">No vendemos ni alquilamos sus datos personales. Solo compartimos información con:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🚗</span>
                                    <span><span className="font-semibold text-white">Servicios de entrega:</span> Para coordinar la entrega de sus pedidos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">💳</span>
                                    <span><span className="font-semibold text-white">Procesadores de pago:</span> Para procesar transacciones de forma segura</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">💬</span>
                                    <span><span className="font-semibold text-white">WhatsApp/Meta:</span> Como plataforma de comunicación (sujeto a sus políticas)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">⚖️</span>
                                    <span><span className="font-semibold text-white">Autoridades:</span> Cuando sea requerido por ley</span>
                                </li>
                            </ul>
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
                                Seguridad de los Datos
                            </h2>
                            <p className="mb-3">Implementamos medidas de seguridad para proteger sus datos personales:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🔒</span>
                                    <span>Cifrado de datos sensibles durante la transmisión</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🛡️</span>
                                    <span>Acceso restringido a información personal solo para personal autorizado</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">💾</span>
                                    <span>Almacenamiento seguro de datos con respaldos regulares</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🔐</span>
                                    <span>Uso de WhatsApp Business API con cifrado de extremo a extremo</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">⚠️</span>
                                    <span>Protocolos de respuesta ante posibles brechas de seguridad</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Section 8 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="border-l-4 border-brand-red pl-6 py-2"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-red">08.</span>
                                Retención de Datos
                            </h2>
                            <p className="mb-3">Conservamos sus datos personales durante el tiempo necesario para:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">📅</span>
                                    <span>Prestar nuestros servicios y procesar pedidos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">📋</span>
                                    <span>Cumplir con obligaciones legales y fiscales (generalmente 5-10 años)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🔍</span>
                                    <span>Resolver disputas y hacer cumplir nuestros acuerdos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🗑️</span>
                                    <span>Después de este período, eliminamos o anonimizamos sus datos</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Section 9 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="border-l-4 border-brand-yellow pl-6 py-2 bg-linear-to-r from-brand-yellow/5 to-transparent p-6 rounded-r-2xl"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-brand-yellow">09.</span>
                                Sus Derechos como Titular (Derechos ARCO)
                            </h2>
                            <p className="mb-3 font-semibold text-white">Usted tiene los siguientes derechos respecto a sus datos personales:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">👁️</span>
                                    <span><span className="font-semibold text-white">Derecho de Acceso:</span> Solicitar una copia de los datos que tenemos sobre usted</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">✏️</span>
                                    <span><span className="font-semibold text-white">Derecho de Rectificación:</span> Corregir datos inexactos o incompletos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">🗑️</span>
                                    <span><span className="font-semibold text-white">Derecho de Cancelación:</span> Solicitar la eliminación de sus datos personales</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">⛔</span>
                                    <span><span className="font-semibold text-white">Derecho de Oposición:</span> Oponerse al procesamiento de sus datos para ciertos fines</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">📦</span>
                                    <span><span className="font-semibold text-white">Derecho de Portabilidad:</span> Recibir sus datos en un formato estructurado</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">🚫</span>
                                    <span><span className="font-semibold text-white">Derecho de Limitación:</span> Limitar el procesamiento de sus datos en ciertas circunstancias</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">❌</span>
                                    <span><span className="font-semibold text-white">Revocar Consentimiento:</span> Retirar su consentimiento para marketing en cualquier momento</span>
                                </li>
                            </ul>
                            <p className="mt-4 bg-charcoal/50 p-3 rounded-lg text-sm">
                                Para ejercer estos derechos, contáctenos a través de WhatsApp (8132370129) o email (tacosytostadaskoke@gmail.com)
                            </p>
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
                                Cookies y Tecnologías Similares
                            </h2>
                            <p className="mb-3">Nuestro sitio web puede utilizar cookies y tecnologías similares para:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🍪</span>
                                    <span>Mejorar la funcionalidad del sitio web</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">📊</span>
                                    <span>Analizar el uso y tráfico del sitio</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">💾</span>
                                    <span>Recordar sus preferencias</span>
                                </li>
                            </ul>
                            <p className="mt-3 text-sm italic">Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>
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
                                Menores de Edad
                            </h2>
                            <p className="leading-relaxed">
                                Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente datos personales de menores. Si descubrimos que hemos recopilado datos de un menor sin el consentimiento de los padres, tomaremos medidas para eliminar esa información.
                            </p>
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
                                Transferencias Internacionales
                            </h2>
                            <p className="mb-3">Sus datos pueden ser transferidos a:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🌍</span>
                                    <span>Servidores de WhatsApp/Meta ubicados en diferentes países</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-yellow mt-1">🔒</span>
                                    <span>Procesadores de pago internacionales</span>
                                </li>
                            </ul>
                            <p className="mt-3 leading-relaxed">
                                Estas transferencias se realizan con las garantías adecuadas para proteger sus datos conforme a las leyes aplicables.
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
                                Modificaciones a este Aviso
                            </h2>
                            <p className="leading-relaxed">
                                Nos reservamos el derecho de actualizar este Aviso de Privacidad en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. Le notificaremos sobre cambios significativos a través de WhatsApp o correo electrónico. Le recomendamos revisar periódicamente este aviso.
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
                                Contacto para Asuntos de Privacidad
                            </h2>
                            <p className="mb-4">Si tiene preguntas, inquietudes o desea ejercer sus derechos relacionados con la privacidad de sus datos, contáctenos:</p>
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
                                Aceptación del Aviso
                            </h2>
                            <p className="leading-relaxed">
                                Al utilizar nuestro sitio web y servicios de WhatsApp, usted reconoce que ha leído, comprendido y acepta este Aviso de Privacidad y el tratamiento de sus datos personales descrito en él. Si no está de acuerdo con este aviso, por favor no utilice nuestros servicios.
                            </p>
                        </motion.div>

                        {/* Important Note */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            className="mt-8 p-6 bg-linear-to-br from-brand-yellow/10 via-brand-red/10 to-transparent rounded-2xl border-2 border-brand-yellow/30 shadow-[0_0_30px_rgba(255,212,0,0.1)]"
                        >
                            <div className="flex items-start gap-4">
                                <span className="text-3xl">🔐</span>
                                <div>
                                    <p className="font-semibold text-white mb-2">Cumplimiento Normativo</p>
                                    <p className="text-sm leading-relaxed">
                                        Este Aviso de Privacidad cumple con los requisitos de la <span className="text-brand-yellow font-semibold">Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</span> de México. Nos comprometemos a mantener actualizadas nuestras prácticas conforme a las regulaciones vigentes.
                                    </p>
                                </div>
                            </div>
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
                    <p className="text-gray-light mb-6 text-lg">¿Tienes dudas sobre tu privacidad?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/terms"
                            className="px-8 py-4 rounded-full bg-transparent border-2 border-brand-yellow text-brand-yellow font-bold text-lg hover:bg-brand-yellow hover:text-black hover:scale-105 transition-all cursor-pointer inline-block"
                        >
                            Ver Términos y Condiciones
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
