import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Housekeeping',
            desc: 'Professional cleaning and hygiene maintenance for corporate and industrial facilities.',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            )
        },
        {
            title: 'Security Services',
            desc: '24/7 manned guarding and electronic surveillance for maximum asset protection.',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            )
        },
        {
            title: 'Landscaping',
            desc: 'Creating and maintaining beautiful green spaces for a refreshing environment.',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            )
        },
        {
            title: 'Pest Control',
            desc: 'Advanced eco-friendly treatments for effective long-term pest management.',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )
        },
        {
            title: 'Manpower Supply',
            desc: 'Skilled, semi-skilled, and unskilled labor for various industrial requirements.',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            )
        },
        {
            title: 'Event Management',
            desc: 'End-to-end logistics and management for corporate events and functions.',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            )
        }
    ];

    return (
        <section id="services" className="py-24 bg-gray-50 font-['Poppins']">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-[#0d9488]/10 text-[#0d9488] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
                        Comprehensive <span className="text-[#0d9488]">Facility Services</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Delivering excellence through integrated facility management solutions designed to optimize your operations.
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 bg-[#1e3a5f]/5 rounded-xl flex items-center justify-center text-[#1e3a5f] mb-6 group-hover:bg-[#0d9488] group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#0d9488] transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 leading-relaxed mb-6">
                                {service.desc}
                            </p>

                            {/* Link */}
                            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#1e3a5f] group-hover:text-[#0d9488] transition-colors">
                                Learn More
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
