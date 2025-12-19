import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importing images for the detailed view
import img1 from '../assets/carousel-1.png'; // Using available assets as placeholders
import img2 from '../assets/carousel-2.png';
import img3 from '../assets/carousel-3.jpg';
import img4 from '../assets/carousel-4.png';
import img5 from '../assets/carousel-5.jpg';
import img6 from '../assets/workflow.png'; // Using another available asset

const Services = () => {
    const [activeId, setActiveId] = useState(0); // Default first card active
    const navigate = useNavigate();

    const services = [
        {
            id: 0,
            title: 'Housekeeping',
            desc: 'Reach FMS understands the importance of cleanliness, hygiene and proper housekeeping. Good Housekeeping and a clean environment improves the productivity and motivation of employees.',
            image: img1,
            route: '/soft-services',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            )
        },
        {
            id: 1,
            title: 'Security',
            desc: 'Reach FMS provides security services to its clients as per their needs. We provide a comprehensive range of disciplined and professionally trained security staff to perform a wide range of security functions.',
            image: img2,
            route: '/soft-services',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            )
        },
        {
            id: 2,
            title: 'Landscaping',
            desc: 'We offer complete maintenance solution of gardening and landscaping. In addition to creation of the beautiful landscape, we also have a monthly maintenance scheme for all our clients.',
            image: img3,
            route: '/soft-services',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            )
        },
        {
            id: 3,
            title: 'Pest Control',
            desc: 'Pests can really be an annoying problem, both at home and in office. While short-term solutions are easily available, effective and long-term solution is only possible with the help of professional pest-control services.',
            image: img4,
            route: '/soft-services',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )
        },
        {
            id: 4,
            title: 'Training & Jobs',
            desc: 'Reach FMS provides Manpower Supply in Chennai offering a host of integrated services that cater to the various requirements of clients and candidates. Apart from providing hiring services, we also offer training programs.',
            image: img5,
            route: '/training',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7  10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            )
        },
        {
            id: 5,
            title: 'Event Management',
            desc: 'End-to-end logistics and management for Product Launches, Exhibitions, Conferences, and corporate functions. We handle the details so you can focus on the big picture.',
            image: img6,
            route: '/soft-services',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            )
        },
        {
            id: 6,
            title: 'Front Office',
            desc: 'Professional front office and reception management services. We provide trained personnel to manage visitor reception, phone handling, and administrative support for a seamless office experience.',
            image: img1,
            route: '/soft-services',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            )
        },
        {
            id: 7,
            title: 'Pantry & Cafeteria',
            desc: 'Complete pantry and cafeteria management solutions. From daily refreshments to full-scale cafeteria operations, we ensure hygienic food service and efficient kitchen management.',
            image: img2,
            route: '/soft-services',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        }
    ];

    const handleLearnMore = (route) => {
        navigate(route);
    };

    return (
        <section id="services" className="py-12 md:py-24 bg-gray-50 font-['Poppins']">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-brand-600/10 text-brand-600 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6">
                        Premimum <span className="text-brand-600">Services</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Click on any service to explore our comprehensive facility solutions.
                    </p>
                </div>

                {/* Expanding Cards Container */}
                <div className="flex flex-col lg:flex-row min-h-[1000px] lg:min-h-[500px] lg:h-[500px] gap-4 w-full">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => setActiveId(service.id)}
                            className={`relative cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-[700ms] ease-[cubic-bezier(0.25,1,0.5,1)]
                                ${activeId === service.id
                                    ? 'lg:flex-[5] flex-[5] opacity-100 ring-2 ring-brand-600/20'
                                    : 'lg:flex-[1] flex-[1] opacity-70 hover:opacity-100'
                                }
                            `}
                        >
                            {/* Background Image (only visible when active) */}
                            <div className={`absolute inset-0 bg-cover bg-center transition-all duration-700
                                ${activeId === service.id ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
                                style={{ backgroundImage: `url(${service.image})` }}
                            >
                                <div className="absolute inset-0 bg-linear-to-t from-brand-900/90 via-brand-900/40 to-transparent"></div>
                            </div>

                            {/* Inactive State Visuals (Simple Icon/Label) */}
                            <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-500
                                ${activeId === service.id ? 'opacity-0 translate-y-20 pointer-events-none' : 'opacity-100 translate-y-0'}
                            `}>
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-brand-900 mb-4">
                                    {service.icon}
                                </div>
                                <h3
                                    className="text-lg font-bold text-brand-900 lg:rotate-180 whitespace-nowrap lg:mt-4 lg:[writing-mode:vertical-rl]"
                                >
                                    {service.title}
                                </h3>
                            </div>

                            {/* Active Content */}
                            <div className={`absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-700 delay-200
                                ${activeId === service.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                            `}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-600/30">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold">{service.title}</h3>
                                </div>
                                <p className="text-gray-200 text-lg leading-relaxed max-w-xl mb-6">
                                    {service.desc}
                                </p>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleLearnMore(service.route);
                                    }}
                                    className="px-6 py-2.5 bg-white text-brand-900 font-bold rounded-lg hover:bg-brand-600 hover:text-white transition-colors duration-300"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
