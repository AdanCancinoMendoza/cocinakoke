import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

interface LocationCardProps {
    title: string;
    address: string;
    schedule: string;
    phone?: string;
    color: 'yellow' | 'red';
    delay?: string;
    mapSrc?: string;
}

export default function LocationCard({ title, address, schedule, phone, color, delay = '0s', mapSrc }: LocationCardProps) {
    const borderColor = color === 'yellow' ? 'border-brand-yellow' : 'border-brand-red';
    const titleColor = color === 'yellow' ? 'text-brand-yellow' : 'text-brand-red';
    const shadowColor = color === 'yellow' ? 'shadow-[0_0_20px_rgba(255,212,0,0.3)]' : 'shadow-[0_0_20px_rgba(225,6,0,0.3)]';
    const iconColor = color === 'yellow' ? 'text-brand-yellow' : 'text-brand-red';

    // Gradient definitions for the moving border
    const gradientColors = color === 'yellow'
        ? 'from-brand-yellow via-white to-brand-yellow'
        : 'from-brand-red via-white to-brand-red';

    return (
        <div className={`group relative rounded-2xl transform hover:scale-[1.02] transition-all duration-300 animate__animated animate__fadeInUp h-full`} style={{ animationDelay: delay }}>
            {/* Moving Border Background */}
            <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${gradientColors} opacity-0 group-hover:opacity-100 transition duration-500 blur-sm animate-border-flow`}></div>

            <div className={`relative bg-gray-medium rounded-2xl border-l-4 ${borderColor} ${shadowColor} overflow-hidden flex flex-col h-full z-10`}>
                <div className="p-6 flex-grow">
                    <h3 className={`text-2xl font-bold mb-3 ${titleColor}`}>{title}</h3>
                    <div className="space-y-4 text-gray-light">
                        <p className="flex items-start gap-3">
                            <MapPin className={`w-6 h-6 shrink-0 ${iconColor}`} />
                            <span className="font-medium">{address}</span>
                        </p>
                        <p className="flex items-start gap-3">
                            <Clock className={`w-6 h-6 shrink-0 ${iconColor}`} />
                            <span className="whitespace-pre-line leading-relaxed">{schedule}</span>
                        </p>
                        {phone && (
                            <p className="flex items-center gap-3 mt-4 font-bold text-white text-lg">
                                <Phone className={`w-6 h-6 shrink-0 ${iconColor}`} />
                                <a href={`tel:${phone}`} className={`hover:${titleColor} transition-colors hover:underline`}>{phone}</a>
                            </p>
                        )}
                    </div>
                </div>

                {/* Google Maps Embed */}
                {mapSrc && (
                    <div className="w-full h-64 border-t border-gray-700 relative z-0">
                        <iframe
                            src={mapSrc}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
}
