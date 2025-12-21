import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImg from '../assets/carousel-4.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RepairMaintenancePage = () => {
    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.6 }
    };

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
        }]

    const stats = [
        { value: '500+', label: 'Projects Delivered' },
        { value: '24/7', label: 'Emergency Support' },
        { value: '50+', label: 'Expert Technicians' },
        { value: '100%', label: 'Quality Assured' }
    ];

    return (
        <div className="min-h-screen bg-white font-['Poppins']">
            <Navbar />

            {/* ═══════════════════════════════════════════════════════════════
                HERO - Cinematic Full Screen
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative h-[70vh] min-h-[500px] md:h-screen md:min-h-[700px] flex items-center overflow-hidden">
                {/* Parallax Background */}
                <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
                    <img src={heroImg} alt="Repair & Maintenance" className="w-full h-[120%] object-cover" />
                </motion.div>

                {/* Gradient Overlays - Dark like Home page */}
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

                {/* Content */}
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-2 md:px-5 md:py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6 md:mb-8">
                            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-full w-full bg-brand-400"></span>
                            </span>
                            <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">Technical Operations</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6 md:mb-8 tracking-tight">
                            Masterful<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-brand-300">
                                Precision.
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-xl leading-relaxed mb-8 md:mb-10">
                            Orchestrating industrial reliability through high-voltage engineering, structural integrity, and premium interior finishing.
                        </p>

                        <motion.a
                            href="#services"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-brand-600 text-white text-sm md:text-base font-bold rounded-full shadow-xl shadow-brand-600/30 hover:bg-brand-700 transition-all"
                        >
                            Explore Services
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                        </motion.a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center"
                >
                    <span className="text-white/40 text-xs uppercase tracking-widest mb-3">Scroll</span>
                    <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white/40 to-transparent"></div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                STATS - Horizontal Counter Band
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative py-12 md:py-16 bg-brand-800 border-t border-brand-700/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-brand-300 text-xs md:text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SERVICES LIST - Alternating Section Styles
            ═══════════════════════════════════════════════════════════════ */}
            <section id="services" className="scroll-mt-20">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`relative py-16 md:py-24 lg:py-32 overflow-hidden ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                            }`}
                    >
                        {/* Background Number */}
                        <div className="absolute top-1/2 -translate-y-1/2 right-0 text-[15rem] md:text-[25rem] font-black text-gray-100/50 select-none pointer-events-none leading-none hidden lg:block">
                            0{index + 1}
                        </div>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className={`grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                                }`}>

                                {/* Content Side */}
                                <motion.div
                                    {...fadeInUp}
                                    className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                                >
                                    {/* Category Badge */}
                                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0">
                                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="text-brand-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">Service {String(index + 1).padStart(2, '0')}</span>
                                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-900">{service.category}</h2>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    {/* Roles Tags */}
                                    {service.roles.length > 0 && (
                                        <div className="mb-8">
                                            <h4 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Our Experts</h4>
                                            <div className="flex flex-wrap gap-2 md:gap-3">
                                                {service.roles.map((role, rIdx) => (
                                                    <span key={rIdx} className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs md:text-sm font-medium">
                                                        {role.title}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* CTA */}
                                    <Link
                                        to="/#contact"
                                        className="inline-flex items-center gap-2 text-brand-600 font-bold text-sm md:text-base hover:text-brand-800 transition-colors group"
                                    >
                                        Get a Quote
                                        <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </motion.div>

                                {/* Capabilities Card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className={index % 2 === 1 ? 'lg:col-start-1' : ''}
                                >
                                    <div className="bg-brand-900 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
                                        {/* Decorative Orb */}
                                        <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-brand-600 rounded-full blur-[80px] md:blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>

                                        <h3 className="text-lg md:text-xl font-bold text-white mb-6 md:mb-8 relative z-10">
                                            Capabilities & Scope
                                        </h3>

                                        <ul className="space-y-3 md:space-y-4 relative z-10">
                                            {/* Render tasks from roles */}
                                            {service.roles.flatMap(role => role.tasks).map((task, tIdx) => (
                                                <li key={`task-${tIdx}`} className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                                                    <svg className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {task}
                                                </li>
                                            ))}
                                            {/* Render extra items */}
                                            {service.extra.map((item, eIdx) => (
                                                <li key={`extra-${eIdx}`} className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                                                    <svg className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                WHY CHOOSE US - Feature Grid
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-100/20 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div {...fadeInUp} className="text-center mb-12 md:mb-16 lg:mb-20">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-xs md:text-sm">The Reach Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mt-3 md:mt-4 tracking-tight">Why Choose Us?</h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Rapid Response", desc: "24/7 emergency support with quick turnaround times." },
                            { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Quality Assured", desc: "Certified technicians with rigorous quality standards." },
                            { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Transparent Pricing", desc: "No hidden costs with upfront estimates." },
                            { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", title: "Expert Team", desc: "Skilled professionals with years of experience." }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all duration-300 text-center"
                            >
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl flex items-center justify-center text-white mx-auto mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-brand-800 mb-2 md:mb-3 group-hover:text-brand-600 transition-colors">{feature.title}</h3>
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                CTA - Final Call to Action
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-600 overflow-hidden">
                {/* Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }}></div>
                </div>

                {/* Decorative Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] border border-white/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] lg:w-[600px] h-[300px] md:h-[450px] lg:h-[600px] border border-white/10 rounded-full"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs md:text-sm font-bold uppercase tracking-widest mb-6 md:mb-8 border border-white/20">
                            Ready to Start?
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight">
                            Upgrade Your<br className="sm:hidden" /> Facility Standard
                        </h2>
                        <p className="text-white/70 text-sm md:text-base lg:text-lg mb-8 md:mb-12 max-w-xl mx-auto leading-relaxed">
                            Partner with our expert technicians for reliable, professional repair and maintenance services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="/#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-10 md:py-5 bg-white text-brand-700 text-sm md:text-lg font-bold rounded-full shadow-2xl shadow-black/20 hover:bg-brand-900 hover:text-white transition-all duration-300"
                            >
                                Book a Technician
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </motion.a>
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-5 border-2 border-white/30 text-white text-sm md:text-lg font-bold rounded-full hover:bg-white/10 transition-all duration-300"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default RepairMaintenancePage;
