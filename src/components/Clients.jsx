import React from 'react';
import { Link } from 'react-router-dom';
import client1 from '../assets/client-1.png';
import client2 from '../assets/client-2.png';
import client3 from '../assets/client-3.png';
import client4 from '../assets/client-4.png';
import client5 from '../assets/client-5.png';
import client6 from '../assets/client-6.png';

const Clients = () => {
    const leftClients = [
        { id: 1, logo: client1, alt: "Swaram Specialty Hospital" },
        { id: 2, logo: client2, alt: "Vembu" },
        { id: 3, logo: client3, alt: "Santosh Super Specialty Hospital" },
    ];

    const rightClients = [
        { id: 4, logo: client4, alt: "Vendhar" },
        { id: 5, logo: client5, alt: "Exide Life Insurance" },
        { id: 6, logo: client6, alt: "Enzen" },
    ];

    const ClientCard = ({ client }) => (
        <div className={`bg-white p-4 md:p-6 rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-100 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 transition-transform duration-500 hover:scale-105 hover:shadow-xl ${client.className || ''}`}>
            <img
                src={client.logo}
                alt={client.alt}
                className="max-w-full max-h-full object-contain transition-all duration-300"
            />
        </div>
    );

    return (
        <section className="py-20 md:py-32 bg-gray-100 overflow-hidden font-['Poppins'] relative">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-100/60 rounded-full blur-3xl -translate-x-1/2"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl translate-x-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Left Grid - Vertical Marquee */}
                    <div className="hidden lg:block w-1/4 h-[600px] overflow-hidden relative mask-gradient-y">
                        <div className="flex flex-col gap-6 animate-marquee-vertical">
                            {[...leftClients, ...leftClients, ...leftClients].map((client, idx) => (
                                <ClientCard key={`${client.id}-${idx}`} client={client} />
                            ))}
                        </div>
                    </div>

                    {/* Center Content */}
                    <div className="flex-1 text-center max-w-2xl mx-auto z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-8 leading-tight tracking-tight">
                            Trusted by Industry Leaders
                        </h2>
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 bg-brand-900 text-white px-6 py-3 rounded-full font-bold hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/20 hover:shadow-brand-900/30 hover:-translate-y-1 text-sm md:text-base"
                        >
                            Read Success Stories
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>

                    {/* Right Grid - Vertical Marquee (Reverse Direction or Offset) */}
                    <div className="hidden lg:block w-1/4 h-[600px] overflow-hidden relative mask-gradient-y">
                        <div className="flex flex-col gap-6 animate-marquee-vertical" style={{ animationDirection: 'reverse' }}>
                            {[...rightClients, ...rightClients, ...rightClients].map((client, idx) => (
                                <ClientCard key={`${client.id}-${idx}`} client={client} />
                            ))}
                        </div>
                    </div>

                    {/* Mobile View - Horizontal Marquee */}
                    <div className="lg:hidden w-full mt-8 overflow-hidden relative mask-gradient-x">
                        <div className="flex gap-4 animate-marquee w-max">
                            {[...leftClients, ...rightClients, ...leftClients, ...rightClients].map((client, idx) => (
                                <div key={`${client.id}-${idx}`} className="bg-white p-3 rounded-xl shadow-md border border-gray-100 flex items-center justify-center w-24 h-24 shrink-0">
                                    <img
                                        src={client.logo}
                                        alt={client.alt}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
