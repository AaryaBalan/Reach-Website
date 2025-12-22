import React from 'react';
import { motion } from 'framer-motion';
import workflowImage from '../assets/workflow.png';

const About = () => {
    const features = [
        {
            title: 'Affordable Agency',
            desc: 'Cost-effective solutions without compromising quality.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        },
        {
            title: 'Agreement Guarantee',
            desc: 'Transparent contracts with guaranteed service levels.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        },
        {
            title: 'Simple Procedure',
            desc: 'Streamlined processes for hassle-free onboarding.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            )
        },
        {
            title: 'Flexible Services',
            desc: 'Tailored solutions to meet your specific needs.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            )
        },
        {
            title: 'Leading Staff',
            desc: 'Access to the best professionals in the industry.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            )
        },
        {
            title: 'Quality Control',
            desc: 'Rigorous standards to ensure excellence.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            )
        },
        {
            title: 'Recruitment',
            desc: 'Comprehensive hiring for your workforce needs.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )
        },
        {
            title: 'Legal Advice',
            desc: 'Expert guidance on labour laws and compliance.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
            )
        },
        {
            title: 'Friendly Mgmt',
            desc: 'Approachable and supportive management team.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="about" className="py-16 md:py-32 bg-white relative overflow-hidden font-['Poppins']">
            {/* Cinematic Background Elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-900/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Intro Header */}
                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-32">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-brand-50 border border-brand-100 mb-6 md:mb-8 animate-fade-in-up">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-600 animate-pulse"></span>
                        <span className="text-brand-900 text-[10px] md:text-sm font-bold uppercase tracking-widest">About Reach FMS</span>
                    </div>

                    <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-brand-900 mb-4 md:mb-8 leading-[1.1] tracking-tight animate-fade-in-up delay-100">
                        Professional <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-600 to-brand-400">Integrity</span>
                    </h2>

                    <p className="text-gray-600 text-base md:text-2xl leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                        We are <strong className="text-brand-900">REACH FACILITY MANAGEMENT SERVICE</strong>, redefining the standards of facility care with over <strong className="text-brand-600">5 years of excellence</strong>.
                    </p>
                </div>

                {/* ═══════════════════════════════════════════════════════════════════════════
                    VISION & MISSION - MASSIVE IMMERSIVE SECTION
                ═══════════════════════════════════════════════════════════════════════════ */}
                <div className="relative mb-24 md:mb-40">
                    {/* Animated Background Layer */}
                    <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden rounded-[3rem] md:rounded-[4rem]">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800"></div>
                        {/* Animated Orbs */}
                        <motion.div
                            animate={{
                                x: [0, 50, 0],
                                y: [0, -30, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-20 right-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-600/30 rounded-full blur-[100px]"
                        />
                        <motion.div
                            animate={{
                                x: [0, -40, 0],
                                y: [0, 40, 0],
                                scale: [1, 1.3, 1]
                            }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-10 left-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-brand-500/20 rounded-full blur-[80px]"
                        />
                        <motion.div
                            animate={{
                                x: [0, 30, 0],
                                y: [0, 20, 0]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-brand-400/10 rounded-full blur-[60px]"
                        />
                        {/* Grid Pattern Overlay */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 px-4 sm:px-8 lg:px-16 py-16 md:py-28">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-12 md:mb-20"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs md:text-sm font-bold uppercase tracking-widest mb-6 border border-white/10">
                                Our Foundation
                            </span>
                            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight">
                                Vision <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500">&</span> Mission
                            </h2>
                        </motion.div>

                        {/* Cards Grid */}
                        <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
                            {/* Vision Card - 3D Perspective */}
                            <motion.div
                                initial={{ opacity: 0, rotateY: -15, x: -50 }}
                                whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                whileHover={{ scale: 1.02, rotateY: 5 }}
                                className="group relative perspective-1000"
                            >
                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 rounded-3xl md:rounded-[2rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

                                <div className="relative bg-white/[0.08] backdrop-blur-xl rounded-3xl md:rounded-[2rem] p-8 md:p-12 border border-white/20 overflow-hidden">
                                    {/* Inner Glow */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-400/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>

                                    <div className="relative z-10">
                                        {/* Icon Container */}
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.8 }}
                                            className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-brand-400 to-brand-600 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-brand-500/50 mb-8 md:mb-10"
                                        >
                                            <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </motion.div>

                                        <span className="inline-block text-brand-300 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-3">Our Aspiration</span>
                                        <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Our Vision</h3>

                                        <p className="text-white/70 text-base md:text-xl leading-relaxed">
                                            To deliver cost-effective & customer-centric Housekeeping & Facility Management solutions, helping our Business Partners & Society build an eco-friendly environment.
                                        </p>

                                        {/* Decorative Line */}
                                        <div className="mt-8 md:mt-10 flex items-center gap-3">
                                            <div className="w-12 h-1 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full"></div>
                                            <div className="w-3 h-3 bg-brand-400 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Mission Card - 3D Perspective */}
                            <motion.div
                                initial={{ opacity: 0, rotateY: 15, x: 50 }}
                                whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                whileHover={{ scale: 1.02, rotateY: -5 }}
                                className="group relative perspective-1000"
                            >
                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 via-brand-200/30 to-white/30 rounded-3xl md:rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                                <div className="relative bg-white rounded-3xl md:rounded-[2rem] p-8 md:p-12 border border-white/50 shadow-2xl shadow-black/20 overflow-hidden">
                                    {/* Inner Gradients */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-50/50 to-transparent"></div>
                                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-100/50 rounded-full blur-[80px]"></div>

                                    <div className="relative z-10">
                                        {/* Icon Container */}
                                        <motion.div
                                            whileHover={{ rotate: -360 }}
                                            transition={{ duration: 0.8 }}
                                            className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-brand-900 to-brand-700 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-brand-900/30 mb-8 md:mb-10"
                                        >
                                            <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                            </svg>
                                        </motion.div>

                                        <span className="inline-block text-brand-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-3">Our Purpose</span>
                                        <h3 className="text-3xl md:text-5xl font-black text-brand-900 mb-8 tracking-tight">Our Mission</h3>

                                        {/* Mission Items */}
                                        <ul className="space-y-4 md:space-y-5">
                                            {[
                                                'Quality Service',
                                                'Continuous Training',
                                                'Customer Satisfaction'
                                            ].map((item, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.6 + idx * 0.1 }}
                                                    className="flex items-center gap-4 text-gray-700 font-semibold text-base md:text-xl"
                                                >
                                                    <span className="w-10 md:w-14 h-0.5 bg-gradient-to-r from-brand-600 to-brand-400 shrink-0"></span>
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {/* Highlight Item */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.9 }}
                                            className="mt-8 pt-6 border-t-2 border-brand-100"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">✦</span>
                                                <span className="text-brand-900 font-bold text-lg md:text-xl">Time Bound Commitments</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* ═══════════════════════════════════════════════════════════════════════════
                    REDEFINING EXCELLENCE - BENTO GRID SECTION
                ═══════════════════════════════════════════════════════════════════════════ */}
                <div className="mb-20 md:mb-32">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12 md:mb-20"
                    >
                        <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-brand-50 text-brand-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-6 border border-brand-100">
                            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                            The Reach Advantage
                        </span>
                        <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-900 leading-[1] tracking-tight mb-6">
                            Redefining <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400">Excellence.</span>
                        </h3>
                        <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
                            We go beyond standard maintenance. We engineer environments that enhance productivity, safety, and comfort through our comprehensive facility management solutions.
                        </p>
                    </motion.div>

                    {/* Bento Grid Layout */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                    >
                        {/* Premium Feature Card - Spans 2 columns */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="col-span-2 row-span-2 group relative overflow-hidden rounded-3xl md:rounded-[2rem] bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 p-6 md:p-10 text-white cursor-pointer"
                        >
                            {/* Animated Background */}
                            <motion.div
                                animate={{
                                    x: [0, 30, 0],
                                    y: [0, -20, 0],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-600 opacity-30 blur-[100px] rounded-full"
                            />
                            <motion.div
                                animate={{
                                    x: [0, -20, 0],
                                    y: [0, 30, 0]
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-brand-400 opacity-20 blur-[80px] rounded-full"
                            />

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-start justify-between mb-8">
                                    <motion.div
                                        whileHover={{ rotate: 15 }}
                                        className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-colors"
                                    >
                                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </motion.div>
                                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-500 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-500/30">
                                        Premium Feature
                                    </span>
                                </div>

                                <div className="flex-1">
                                    <h4 className="text-2xl md:text-4xl font-black mb-4 leading-tight">Dedicated Relationship Manager</h4>
                                    <p className="text-white/70 text-sm md:text-lg leading-relaxed mb-8">
                                        Every partner is assigned a single point of contact for seamless, personalized communication and instant resolutions.
                                    </p>
                                </div>

                                {/* Animated Progress Bar */}
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 rounded-full"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Feature Cards - Bento Style */}
                        {features.map((item, index) => {
                            // Determine card style based on index for visual variety
                            const isLarge = index === 3 || index === 6;
                            const isDark = index % 4 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03, y: -3 }}
                                    className={`group p-5 md:p-6 rounded-2xl md:rounded-3xl cursor-pointer transition-all duration-300 overflow-hidden relative ${isLarge ? 'col-span-2' : ''
                                        } ${isDark
                                            ? 'bg-brand-900 text-white'
                                            : 'bg-brand-50 border border-brand-100 shadow-lg shadow-brand-100/50 hover:shadow-xl hover:shadow-brand-200/50 hover:border-brand-200'
                                        }`}
                                >
                                    {/* Hover Gradient Overlay */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-br from-brand-800 to-brand-900' : 'bg-gradient-to-br from-brand-100/50 to-brand-50'
                                        }`}></div>

                                    <div className="relative z-10">
                                        <motion.div
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                            className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${isDark
                                                ? 'bg-white/10 text-white group-hover:bg-white/20'
                                                : 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white'
                                                }`}
                                        >
                                            {item.icon}
                                        </motion.div>

                                        <h5 className={`text-base md:text-lg font-bold mb-2 leading-tight ${isDark ? 'text-white' : 'text-brand-900'
                                            }`}>
                                            {item.title}
                                        </h5>
                                        <p className={`text-xs md:text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-500 group-hover:text-gray-600'
                                            }`}>
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Corner Accent */}
                                    <div className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark ? 'bg-brand-400/30' : 'bg-brand-200/50'
                                        }`}></div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Stats - Modern Minimalist */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 md:pt-20 border-t border-gray-100"
                >
                    {[
                        { label: 'Total Projects', value: '800+' },
                        { label: 'Housekeeping', value: '100+' },
                        { label: 'Pantry Services', value: '300+' },
                        { label: 'Technical', value: '150+' },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="text-center group cursor-pointer"
                        >
                            <div className="text-4xl md:text-6xl font-black text-brand-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-brand-400 transition-all duration-300 font-mono tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 font-bold uppercase tracking-widest text-xs md:text-sm group-hover:text-brand-900 transition-colors duration-300">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default About;
