import React, { useState } from 'react';
import carousel1 from '../assets/carousel-1.png'; // Housekeeping
import carousel2 from '../assets/carousel-2.png'; // Pest Control
import carousel3 from '../assets/carousel-3.jpg'; // Event Management
import carousel4 from '../assets/carousel-4.png'; // Security
import carousel5 from '../assets/carousel-5.jpg'; // Landscape
import workflow from '../assets/workflow.png';     // Training

const Services = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const services = [
        {
            id: '01',
            title: 'Housekeeping Services',
            description: 'Experience pristine cleanliness that boosts productivity. Our professional housekeeping staff ensures your workspace remains hygienic, organized, and welcoming every single day.',
            features: ['Daily Sweeping & Mopping', 'Restroom Sanitization', 'Workstation Cleaning', 'Waste Management'],
            image: carousel1,
            color: 'bg-blue-600'
        },
        {
            id: '02',
            title: 'Landscape & Garden',
            description: 'Transform your outdoors into a serene oasis. We provide comprehensive gardening solutions, from landscape creation to monthly maintenance, ensuring year-round beauty.',
            features: ['Landscape Design', 'Lawn Maintenance', 'Tree Pruning', 'Irrigation Systems'],
            image: carousel5,
            color: 'bg-green-600'
        },
        {
            id: '03',
            title: 'Security Maintenance',
            description: 'Protect your assets with our disciplined security personnel. We offer tailored security solutions including access control, surveillance, and 24/7 guarding services.',
            features: ['Manned Guarding', 'Access Control', 'Patrolling', 'Emergency Response'],
            image: carousel4,
            color: 'bg-slate-700'
        },
        {
            id: '04',
            title: 'Pest Control Services',
            description: 'Say goodbye to pests with our long-term solutions. We use eco-friendly and effective treatments to eliminate termites, rodents, and insects from your facility.',
            features: ['Termite Treatment', 'General Disinfestation', 'Rodent Control', 'Mosquito Fogging'],
            image: carousel2,
            color: 'bg-orange-600'
        },
        {
            id: '05',
            title: 'Training & Placements',
            description: 'Empowering the workforce. We not only supply skilled manpower but also provide rigorous training to ensure they meet the highest industry standards.',
            features: ['Skill Development', 'Soft Skills Training', 'Safety Protocols', 'Job Placement'],
            image: workflow,
            color: 'bg-indigo-600'
        },
        {
            id: '06',
            title: 'Event Management',
            description: 'Flawless execution for your corporate events. From product launches to conferences, we handle all logistics, decor, and management so you can focus on your guests.',
            features: ['Venue Management', 'Decor & Logistics', 'Catering Coordination', 'Guest Management'],
            image: carousel3,
            color: 'bg-pink-600'
        }
    ];

    const toggleService = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="services" className="py-24 bg-white font-['Poppins']">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-20">
                    <span className="text-[#0d9488] font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
                    <h2 className="text-5xl lg:text-7xl font-bold text-[#1e3a5f] leading-tight">
                        Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#2dd4bf]">Services</span>
                    </h2>
                </div>

                {/* Vertical Mega-Accordion */}
                <div className="border-t border-gray-200">
                    {services.map((service, index) => (
                        <div key={index} className="border-b border-gray-200 group">
                            {/* Accordion Header */}
                            <button
                                onClick={() => toggleService(index)}
                                className="w-full py-8 lg:py-12 flex items-center justify-between text-left focus:outline-none group-hover:bg-gray-50 transition-colors duration-300 px-4 -mx-4 sm:px-0 sm:mx-0"
                            >
                                <div className="flex items-baseline gap-6 lg:gap-10">
                                    <span className={`text-xl font-bold font-mono transition-colors duration-300 ${openIndex === index ? 'text-[#0d9488]' : 'text-gray-300'}`}>
                                        {service.id}
                                    </span>
                                    <h3 className={`text-3xl sm:text-4xl lg:text-6xl font-bold transition-all duration-300 ${openIndex === index ? 'text-[#1e3a5f] translate-x-4' : 'text-gray-400 group-hover:text-gray-600'}`}>
                                        {service.title}
                                    </h3>
                                </div>
                                <div className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#1e3a5f] border-[#1e3a5f] rotate-45' : 'group-hover:border-[#0d9488]'}`}>
                                    <svg className={`w-6 h-6 transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-[#0d9488]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </button>

                            {/* Accordion Content (Collapsible) */}
                            <div
                                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 pb-12' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="min-h-0">
                                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center pt-4">
                                        {/* Image Side */}
                                        <div className="lg:col-span-5 relative group/img overflow-hidden rounded-3xl">
                                            <div className={`absolute inset-0 opacity-20 transition-colors duration-300 ${service.color}`}></div>
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-[300px] lg:h-[400px] object-cover transform group-hover/img:scale-110 transition-transform duration-700"
                                            />
                                        </div>

                                        {/* Content Side */}
                                        <div className="lg:col-span-7 space-y-8">
                                            <p className="text-xl text-gray-600 leading-relaxed">
                                                {service.description}
                                            </p>

                                            <div>
                                                <h4 className="text-sm font-bold text-[#1e3a5f] uppercase tracking-wider mb-4">Key Features</h4>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    {service.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-center gap-3">
                                                            <div className={`w-2 h-2 rounded-full ${service.color.replace('bg-', 'bg-')}`}></div>
                                                            <span className="text-gray-700 font-medium">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <button className="inline-flex items-center gap-2 text-[#0d9488] font-bold text-lg hover:gap-4 transition-all duration-300 group/link">
                                                Learn more
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </button>
                                        </div>
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
