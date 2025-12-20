import React from 'react';
import { useNavigate } from 'react-router-dom';

// Importing images for the detailed view
import imgHousekeeping from '../assets/service-housekeeping.png';
import imgSecurity from '../assets/carousel-2.png';
import imgGarden from '../assets/service-garden.png';
import imgPest from '../assets/carousel-3.jpg';
import imgTraining from '../assets/training-hero.png';
import imgEvent from '../assets/service-event.png';
import imgFrontOffice from '../assets/carousel-4.png';
import imgPantry from '../assets/carousel-5.jpg';

const Services = () => {
    const navigate = useNavigate();

    const services = [
        {
            id: 0,
            title: 'Housekeeping',
            desc: 'Comprehensive cleanliness and hygiene solutions for improved productivity.',
            image: imgHousekeeping,
            route: '/soft-services',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            )
        },
        {
            id: 1,
            title: 'Security',
            desc: 'Disciplined and professionally trained security staff for total safety.',
            image: imgSecurity,
            route: '/soft-services',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            )
        },
        {
            id: 2,
            title: 'Landscaping',
            desc: 'Complete gardening and landscaping maintenance for beautiful environments.',
            image: imgGarden,
            route: '/soft-services',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            )
        },
        {
            id: 3,
            title: 'Pest Control',
            desc: 'Effective and long-term pest control solutions for homes and offices.',
            image: imgPest,
            route: '/soft-services',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )
        },
        {
            id: 4,
            title: 'Training & Jobs',
            desc: 'Manpower supply and comprehensive training programs for candidates.',
            image: imgTraining,
            route: '/training',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7  10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            )
        },
        {
            id: 5,
            title: 'Event Management',
            desc: 'End-to-end logistics for corporate functions, launches, and exhibitions.',
            image: imgEvent,
            route: '/soft-services',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            )
        },
        {
            id: 6,
            title: 'Front Office',
            desc: 'Professional reception management and administrative support services.',
            image: imgFrontOffice,
            route: '/soft-services',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            )
        },
        {
            id: 7,
            title: 'Pantry & Cafeteria',
            desc: 'Hygienic food service and efficient kitchen management solutions.',
            image: imgPantry,
            route: '/soft-services',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        }
    ];

    return (
        <section id="services" className="py-16 md:py-24 bg-gray-50 font-['Poppins']">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-brand-600/10 text-brand-600 rounded-full text-xs font-bold tracking-widest uppercase mb-3 md:mb-4">
                        Our Expertise
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-4 md:mb-6">
                        Premium <span className="text-brand-600">Services</span>
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                        Click on any service to explore our comprehensive facility solutions.
                    </p>
                </div>

                {/* Grid Layout for All Screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => navigate(service.route)}
                            className="group relative h-[320px] rounded-3xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            >
                                <div className="absolute inset-0 bg-linear-to-t from-brand-900/90 via-brand-900/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="transform transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/10">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white leading-tight">{service.title}</h3>
                                    </div>

                                    <p className="text-gray-200 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                                        {service.desc}
                                    </p>

                                    <div className="flex items-center gap-2 text-white/90 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                                        <span>Learn More</span>
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
