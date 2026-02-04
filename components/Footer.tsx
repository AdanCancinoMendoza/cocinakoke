import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-charcoal text-gray-light py-8 mt-auto border-t border-gray-medium">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} La cocina de Koke. Todos los derechos reservados.
                </div>
                <nav className="flex flex-wrap justify-center gap-6 text-sm">
                    <Link href="/terms" className="hover:text-brand-yellow transition-colors">
                        Términos y Condiciones
                    </Link>
                    <Link href="/policies" className="hover:text-brand-yellow transition-colors">
                        Políticas
                    </Link>
                    <Link href="/privacy" className="hover:text-brand-yellow transition-colors">
                        Avisos de Privacidad
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
