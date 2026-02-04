import React from 'react';

interface LocationCardProps {
    title: string;
    address: string;
    schedule: string;
    phone?: string;
    color: 'yellow' | 'red';
    delay?: string;
}

export default function LocationCard({ title, address, schedule, phone, color, delay = '0s' }: LocationCardProps) {
    const borderColor = color === 'yellow' ? 'border-brand-yellow' : 'border-brand-red';
    const titleColor = color === 'yellow' ? 'text-brand-yellow' : 'text-brand-red';
    const shadowColor = color === 'yellow' ? 'shadow-[0_0_20px_rgba(255,212,0,0.3)]' : 'shadow-[0_0_20px_rgba(225,6,0,0.3)]';

    return (
        <div className={`bg-gray-medium p-6 rounded-2xl border-l-4 ${borderColor} ${shadowColor} transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp`} style={{ animationDelay: delay }}>
            <h3 className={`text-2xl font-bold mb-3 ${titleColor}`}>{title}</h3>
            <div className="space-y-2 text-gray-light">
                <p className="flex items-start gap-2">
                    <span className="text-xl"></span>
                    <span>{address}</span>
                </p>
                <p className="flex items-start gap-2">
                    <span className="text-xl"></span>
                    <span className="whitespace-pre-line">{schedule}</span>
                </p>
                {phone && (
                    <p className="flex items-start gap-2 mt-4 font-bold text-white">
                        <span className="text-xl"></span>
                        <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
                    </p>
                )}
            </div>
        </div>
    );
}
