import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import heroImg from '../assets/carousel-4.png';
import Navbar from '../components/Navbar';

// --- Animated 3D Card Component ---
const TiltCard = ({ children, className }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left - width / 2);
        mouseY.set(clientY - top - height / 2);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX: useTransform(mouseY, [-300, 300], [5, -5]),
                rotateY: useTransform(mouseX, [-300, 300], [-5, 5]),
            }}
        >
            <motion.div
                style={{
                    opacity: useTransform(mouseX, [-300, 300], [0, 0.4]),
                    background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(132, 67, 67, 0.15), transparent 80%)`,
                }}
                className="absolute inset-0 z-0 transition-opacity duration-300 rounded-[inherit]"
            />
            {children}
        </motion.div>
    );
};

const RepairMaintenancePage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    // const imgY = useTransform(scrollYProgress, [0, 1], [0, 100]); // Unused in new design

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            category: "Electrical Services",
            description: "Expert electrical solutions for industrial and residential needs.",
            iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
            roles: [
                { title: "Electrical Technician", tasks: ["HV/LV Cabling work up to 400 sq.mm"] },
                { title: "Senior Electrical Technician", tasks: ["Network cabling & Earthing Layout"] },
                { title: "Ass. Electrical Technician", tasks: ["DG Erecting and Cabling work"] },
                { title: "DG Experts", tasks: ["MV Panel Fabrication & Wiring"] },
                { title: "STP Operators", tasks: ["BMS related Electrical work"] }
            ],
            extra: ["Power factor correction", "Industrial & House wiring", "AMC & Transformers Erection"]
        },
        {
            category: "Plumbing Services",
            description: "Comprehensive plumbing maintenance and installation services.",
            iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
            roles: [
                { title: "Senior Plumbing Technician", tasks: ["Industrial Pipeline Welding (MS & SS)"] },
                { title: "Ass. Plumbing Technician", tasks: ["Sanitary installation", "RO, ETP & STP Plants"] }
            ],
            extra: ["Comprehensive AMC for Plumbing Systems"]
        },
        {
            category: "Carpentry Services",
            description: "Precision carpentry for structural and decorative requirements.",
            iconPath: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
            roles: [
                { title: "Senior Carpenter", tasks: ["Industrial Cabin Shades & Roofing", "Doors & Windows"] },
                { title: "Asst. Carpenter", tasks: ["Interior/Exterior Woodwork", "Flooring & Sun Windows"] }
            ],
            extra: ["Aluminum Fabrication", "Industrial Plywood works"]
        },
        {
            category: "Painting Services",
            description: "High-quality painting and finishing for all types of surfaces.",
            iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
            roles: [],
            extra: [
                "3-Coat White Wash & Surface Prep",
                "Synthetic Plaster (Renovation)",
                "Putty, Primer & Emulsion Painting",
                "French Spirit Polishing",
                "Melamine Polishing"
            ]
        },
        {
            category: "Interior Fit Out",
            description: "Complete interior solutions for workspaces and homes.",
            iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
            roles: [],
            extra: ["Cupboard & Workstations", "Partitioning (All materials)", "False Ceiling expert work"]
        }
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-neutral-50 font-['Poppins'] selection:bg-brand-600 selection:text-white overflow-x-hidden">

            {/* Navigation / Back Button */}
            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden bg-brand-900">
                {/* Full Background Image with Parallax & Zoom */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: "linear" }}
                        style={{ y }}
                        className="w-full h-full"
                    >
                        <img
                            src={heroImg}
                            alt="Facility Maintenance"
                            className="w-full h-full object-cover opacity-90"
                        />
                    </motion.div>

                    {/* Cinematic Gradients Overlay */}
                    <div className="absolute inset-0 bg-linear-to-r from-brand-900/70 via-brand-900/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-brand-900/60 via-transparent to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full mt-16">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold tracking-[0.2em] uppercase mb-8"
                        >
                            Technical Operations Domain
                        </motion.div>
                        <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-extrabold text-white leading-[0.9] mb-8 tracking-tight drop-shadow-2xl">
                            <motion.span
                                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                                className="block"
                            >
                                Masterful
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-transparent bg-clip-text bg-linear-to-r from-brand-600 to-brand-400"
                            >
                                Precision.
                            </motion.span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
                            className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light leading-relaxed drop-shadow-lg"
                        >
                            Orchestrating industrial reliability through high-voltage engineering, structural integrity, and premium interior finishing.
                        </motion.p>

                    </div>
                </div>
            </section>

            {/* Services List */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32 pt-16">
                <div className="flex flex-col gap-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="scroll-mt-32"
                        >
                            {/* Section Header */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-l-4 border-brand-600 pl-6 md:pl-10 relative">
                                <span className="absolute -left-[3px] top-0 h-full w-[2px] bg-linear-to-b from-brand-600 to-transparent"></span>
                                <div className="flex items-center gap-6">
                                    <div className="relative w-20 h-20 shrink-0">
                                        <div className="absolute inset-0 bg-brand-600/10 rounded-2xl rotate-6 transform transition-transform group-hover:rotate-12"></div>
                                        <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex items-center justify-center text-brand-600 z-10 border border-gray-50">
                                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <motion.path
                                                    d={service.iconPath}
                                                    strokeLinecap="round" strokeLinejoin="round"
                                                    initial={{ pathLength: 0 }}
                                                    whileInView={{ pathLength: 1 }}
                                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-brand-900 tracking-tight">{service.category}</h2>
                                        <p className="text-gray-500 mt-2 text-lg font-light tracking-wide">{service.description}</p>
                                    </div>
                                </div>
                                <div className="hidden lg:block text-[#f3f3f3] font-black text-9xl absolute -z-10 -top-10 right-0 select-none opacity-50">
                                    0{index + 1}
                                </div>
                            </div>

                            {/* Interactive Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                {/* Roles Cards */}
                                {service.roles.map((role, rIndex) => (
                                    <TiltCard key={rIndex} className="bg-white p-8 rounded-4xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 relative group overflow-hidden h-full">
                                        <div className="relative z-10">
                                            <h3 className="text-xl font-bold text-brand-900 mb-4 group-hover:text-brand-600 transition-colors">
                                                {role.title}
                                            </h3>
                                            <div className="space-y-3">
                                                {role.tasks.map((task, tIndex) => (
                                                    <div key={tIndex} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 shrink-0 opacity-50"></span>
                                                        {task}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </TiltCard>
                                ))}

                                {/* Featured Scope / Extra Work */}
                                <TiltCard className={`p-8 rounded-4xl relative overflow-hidden group h-full
                                    ${service.roles.length === 0 ? 'lg:col-span-3 bg-brand-900' : 'lg:col-span-1 bg-linear-to-br from-neutral-50 to-white border border-gray-100'}
                                `}>
                                    {service.roles.length === 0 && (
                                        <>
                                            <div className="absolute top-0 right-0 w-64 h-64 md:w-100 md:h-100 bg-brand-600/20 rounded-full blur-[60px] md:blur-[80px] group-hover:scale-110 transition-transform duration-700"></div>
                                            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-75 md:h-75 bg-black/20 rounded-full blur-2xl md:blur-[60px]"></div>
                                        </>
                                    )}

                                    <div className="relative z-10 h-full flex flex-col">
                                        <h3 className={`text-2xl font-bold mb-6 ${service.roles.length === 0 ? 'text-white' : 'text-brand-900'}`}>
                                            {service.roles.length === 0 ? 'Specialized Scope of Works' : 'Additional Capabilities'}
                                        </h3>

                                        <div className={`grid gap-4 ${service.roles.length === 0 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                                            {service.extra.map((work, wIndex) => (
                                                <div key={wIndex} className={`flex items-start gap-3 text-sm leading-relaxed p-3 rounded-xl transition-colors
                                                    ${service.roles.length === 0
                                                        ? 'bg-white/5 hover:bg-white/10 text-white/90 border border-white/5'
                                                        : 'hover:bg-gray-50 text-gray-600'
                                                    }
                                                `}>
                                                    <svg className={`w-5 h-5 shrink-0 ${service.roles.length === 0 ? 'text-brand-600' : 'text-brand-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <span>{work}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </TiltCard>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer CTA */}
            <div className="py-32 relative overflow-hidden bg-black">
                <div className="absolute inset-0 bg-linear-to-br from-brand-900 to-black opacity-80"></div>
                <div className="absolute -top-[20%] left-[20%] w-72 h-72 md:w-150 md:h-150 bg-brand-600 rounded-full blur-[80px] md:blur-[150px] opacity-20 animate-pulse"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight"
                    >
                        Ready to Upgrade Your <br />
                        <span className="text-brand-600">Facility Standard?</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/#contact" className="px-10 py-5 bg-brand-600 text-white text-lg font-bold rounded-2xl hover:bg-brand-700 hover:scale-105 transition-all shadow-xl shadow-brand-600/30">
                            Book a Technician
                        </Link>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default RepairMaintenancePage;
