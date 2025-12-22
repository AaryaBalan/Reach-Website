import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutHero from '../assets/carousel-1.png';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.6 }
    };

    const services = [
        'Facility Maintenance',
        'Manpower Consultancy',
        'Project Management',
        'Electrical Consultant',
        'Repair & Maintenance'
    ];

    const values = [
        { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: 'Excellence', desc: 'Highest quality facility management services' },
        { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", title: 'Customer Centric', desc: 'Your needs at the heart of everything' },
        { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: 'Eco-Friendly', desc: 'Building cleaner, greener environments' }
    ];

    const stats = [
        { value: '800+', label: 'Projects', sublabel: 'Completed' },
        { value: '5+', label: 'Years', sublabel: 'Experience' },
        { value: '100%', label: 'Client', sublabel: 'Satisfaction' },
        { value: '24/7', label: 'Support', sublabel: 'Available' }
    ];

    return (
        <div className="min-h-screen bg-white font-['Poppins']">
            <Navbar />

            {/* ═══════════════════════════════════════════════════════════════
                HERO SECTION - Full Screen with Parallax
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative h-[70vh] min-h-[500px] md:h-screen md:min-h-[700px] flex items-center overflow-hidden">
                {/* Parallax Background Image */}
                <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
                    <img src={aboutHero} alt="About Reach FMS" className="w-full h-[120%] object-cover" />
                </motion.div>

                {/* Overlay Gradients - Using dark colors like Home page */}
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

                {/* Content */}
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-2 md:px-5 md:py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6 md:mb-8">
                            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-full w-full bg-brand-500"></span>
                            </span>
                            <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">About Reach FMS</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6 md:mb-8 tracking-tight">
                            Building<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400">
                                Trust
                            </span><br />
                            Through<br />
                            <span className="italic font-light text-white/90">Excellence.</span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-xl leading-relaxed">
                            Since 2018, we've been redefining facility management with precision, innovation, and unwavering commitment to quality.
                        </p>
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
                INTRODUCTION - Split Layout
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative py-16 md:py-24 lg:py-32 bg-gray-50 overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-100/30 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

                        {/* Left: Content */}
                        <motion.div {...fadeInUp}>
                            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-brand-50 text-brand-700 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4 md:mb-6 border border-brand-100">Who We Are</span>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 leading-tight mb-6 md:mb-8 tracking-tight">
                                Welcome to<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Reach FMS</span>
                            </h2>

                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
                                We are <strong className="text-brand-800">M/S REACH FACILITY MANAGEMENT SERVICE</strong>, a leading professionally managed concern providing Facility Management, Manpower Consultancy, and Project Management services.
                            </p>

                            <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-6 md:mb-8">
                                With <strong className="text-brand-600">5+ years of experience</strong>, we serve Commercial, Industrial, Guest Houses, Residential Flats, and Apartments with excellence.
                            </p>

                            {/* Services Tags */}
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {services.map((service, idx) => (
                                    <span key={idx} className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border border-gray-200 text-xs md:text-sm font-medium text-brand-700 hover:border-brand-200 hover:shadow-md transition-all cursor-default">
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Visual Element */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-square max-w-sm lg:max-w-lg mx-auto relative">
                                {/* Decorative Circles */}
                                <div className="absolute inset-0 border-2 border-dashed border-brand-200/50 rounded-full animate-[spin_40s_linear_infinite]"></div>
                                <div className="absolute inset-6 md:inset-8 border-2 border-brand-300/30 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
                                <div className="absolute inset-12 md:inset-16 border-2 border-brand-200/20 rounded-full"></div>

                                {/* Center Card */}
                                <div className="absolute inset-20 md:inset-24 bg-gradient-to-br from-brand-700 to-brand-900 rounded-2xl md:rounded-3xl shadow-2xl flex items-center justify-center">
                                    <div className="text-center text-white p-4 md:p-6">
                                        <div className="text-4xl md:text-6xl font-black mb-1 md:mb-2">5+</div>
                                        <div className="text-[10px] md:text-sm uppercase tracking-widest text-white/70">Years of Excellence</div>
                                    </div>
                                </div>

                                {/* Floating Badges */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ repeat: Infinity, duration: 3 }}
                                    className="absolute top-4 md:top-8 right-0 md:right-8 px-3 py-2 md:px-5 md:py-3 bg-white rounded-xl md:rounded-2xl shadow-xl border border-gray-100"
                                >
                                    <div className="text-lg md:text-2xl font-bold text-brand-800">800+</div>
                                    <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Projects</div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                                    className="absolute bottom-4 md:bottom-8 left-0 md:left-8 px-3 py-2 md:px-5 md:py-3 bg-brand-600 rounded-xl md:rounded-2xl shadow-xl text-white"
                                >
                                    <div className="text-lg md:text-2xl font-bold">100%</div>
                                    <div className="text-[10px] md:text-xs text-white/70 uppercase tracking-wider">Satisfaction</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                VISION & MISSION - Cards
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative py-16 md:py-24 lg:py-32 bg-brand-800 overflow-hidden">
                {/* Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                </div>

                {/* Floating Orbs */}
                <div className="absolute top-10 md:top-20 right-10 md:right-20 w-48 md:w-96 h-48 md:h-96 bg-brand-500 rounded-full blur-[100px] md:blur-[200px] opacity-20"></div>
                <div className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-36 md:w-72 h-36 md:h-72 bg-brand-100 rounded-full blur-[80px] md:blur-[150px] opacity-10"></div>

                <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-1 relative z-10">
                    {/* Header */}
                    <motion.div {...fadeInUp} className="text-center mb-12 md:mb-16 lg:mb-20">
                        <span className="text-brand-300 font-bold uppercase tracking-widest text-xs md:text-sm">Our Foundation</span>
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mt-3 md:mt-4 tracking-tight">Vision & Mission</h2>
                    </motion.div>

                    {/* Cards Grid - Clean Side by Side */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Vision */}
                        <motion.div
                            {...fadeInUp}
                            className="h-full"
                        >
                            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl h-full hover:shadow-3xl transition-shadow duration-300">
                                <div className="flex items-center gap-4 mb-6 md:mb-8">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0">
                                        <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    </div>
                                    <div>
                                        <span className="text-brand-500 text-xs font-bold uppercase tracking-widest">Our Aspiration</span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-brand-900">Vision</h3>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                    To deliver <strong className="text-brand-700">cost-effective & customer-centric</strong> Housekeeping & Facility Management solutions, helping our Business Partners & Society build an <span className="text-brand-600 font-semibold">eco-friendly environment</span>.
                                </p>
                            </div>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            {...fadeInUp}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="h-full"
                        >
                            <div className="bg-brand-950 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl h-full border border-brand-700/20 hover:border-brand-600/30 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6 md:mb-8">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-500/30 shrink-0">
                                        <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                    </div>
                                    <div>
                                        <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">Our Purpose</span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">Mission</h3>
                                    </div>
                                </div>
                                <ul className="space-y-3 md:space-y-4">
                                    {['Quality Service', 'Continuous Staff Training', 'Customer Satisfaction', 'Time Bound Commitments', 'High Professionalism'].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-white/90 text-base md:text-lg">
                                            <span className="w-2 h-2 rounded-full bg-brand-400 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                STATS - Counter Strip
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative py-12 md:py-16 lg:py-20 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-800 mb-1 md:mb-2 group-hover:text-brand-600 transition-colors duration-300">
                                    {stat.value}
                                </div>
                                <div className="text-xs md:text-sm font-bold text-gray-700 uppercase tracking-wider">{stat.label}</div>
                                <div className="text-[10px] md:text-xs text-gray-400">{stat.sublabel}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                VALUES - Cards Grid
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-100/20 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div {...fadeInUp} className="text-center mb-12 md:mb-16 lg:mb-20">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-xs md:text-sm">What Drives Us</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mt-3 md:mt-4 tracking-tight">Our Core Values</h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-white border border-gray-100 hover:border-brand-200 hover:shadow-2xl transition-all duration-300 cursor-pointer text-center"
                            >
                                <div className="w-14 h-14 md:w-16 lg:w-20 md:h-16 lg:h-20 bg-gradient-to-br from-brand-600 to-brand-800 rounded-xl md:rounded-2xl flex items-center justify-center text-white mx-auto mb-5 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                                    <svg className="w-7 h-7 md:w-8 lg:w-10 md:h-8 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-brand-800 mb-2 md:mb-3 group-hover:text-brand-600 transition-colors">{value.title}</h3>
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                CTA - Call to Action
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
                            Let's Work Together
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight">
                            Ready to<br className="sm:hidden" /> Elevate Your Facility?
                        </h2>
                        <p className="text-white/70 text-sm md:text-base lg:text-lg mb-8 md:mb-12 max-w-xl mx-auto leading-relaxed">
                            Partner with us for facility management that transforms spaces into assets.
                        </p>
                        <motion.a
                            href="/#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-10 md:py-5 bg-white text-brand-700 text-sm md:text-lg font-bold rounded-full shadow-2xl shadow-black/20 hover:bg-brand-900 hover:text-white transition-all duration-300"
                        >
                            Contact Us Today
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
