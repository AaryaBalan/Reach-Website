import React from 'react';
import client1 from '../assets/client-1.png';
import client2 from '../assets/client-2.png';
import client3 from '../assets/client-3.png';
import client4 from '../assets/client-4.png';
import client5 from '../assets/client-5.png';
import client6 from '../assets/client-6.png';

const Clients = () => {
    const clients = [
        { id: 1, logo: client1, alt: "Swaram Specialty Hospital" },
        { id: 2, logo: client2, alt: "Vembu" },
        { id: 3, logo: client3, alt: "Santosh Super Specialty Hospital" },
        { id: 4, logo: client4, alt: "Vendhar" },
        { id: 5, logo: client5, alt: "Exide Life Insurance" },
        { id: 6, logo: client6, alt: "Enzen" },
    ];

    return (
        <section className="py-12 md:py-16 bg-white border-t border-gray-100 overflow-hidden font-['Poppins']">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
                <h3 className="text-2xl font-bold text-brand-900 mb-2">Precious & Happy Clients</h3>
                <p className="text-gray-500 text-sm">Trusted by leading organizations across the region</p>
            </div>

            <div className="relative max-w-full overflow-hidden">
                {/* Marquee Container */}
                <div className="flex gap-12 animate-marquee items-center min-w-max">
                    {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-32 h-16 md:w-48 md:h-24 bg-white rounded-xl border border-gray-100 p-4 hover:shadow-lg hover:border-brand-600/30 transition-all duration-300 flex items-center justify-center group"
                        >
                            <img
                                src={client.logo}
                                alt={client.alt}
                                className="max-w-full max-h-full object-contain transition-all duration-300 transform group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>

                {/* Gradient Fade Edges */}
                <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-linear-to-r from-white to-transparent pointer-events-none z-10"></div>
                <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-linear-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
        </section>
    );
};

export default Clients;
