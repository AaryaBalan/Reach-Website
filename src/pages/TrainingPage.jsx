import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImg from '../assets/training-hero.png';

const TrainingPage = () => {
    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        initial: {},
        whileInView: { transition: { staggerChildren: 0.1 } },
        viewport: { once: true }
    };

    const benefits = [
        { title: 'Productivity', desc: 'Increases employee output, helping the organization achieve long-term goals efficiently.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
        { title: 'Team Spirit', desc: 'Inculcates a strong sense of teamwork, collaboration, and a collective zeal to learn.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
        { title: 'Organization Culture', desc: 'Develops a healthy organizational culture, fostering effectiveness and continuous learning.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
        { title: 'Organization Climate', desc: 'Builds positive perceptions and feelings about the organization among leaders and peers.', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
        { title: 'Quality', desc: 'Significantly improves the quality of work and enhances overall work-life balance.', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
        { title: 'Healthy Environment', desc: 'Creates a supportive work environment aligning individual goals with organizational objectives.', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
        { title: 'Health & Safety', desc: 'Improves organizational health and safety standards, preventing operational obsolescence.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
        { title: 'Morale', desc: 'Boosts workforce morale, leading to higher job satisfaction and retention.', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Image', desc: 'Enhances the corporate image, making the organization more attractive to stakeholders.', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
        { title: 'Profitability', desc: 'Leads to improved profitability and cultivates a positive, profit-oriented attitude.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
    ];

    const trainingPoints = {
        humanResource: ['HR Administration', 'Induction Training', 'Recruitment & Selection', 'Successful Appraising', 'Personal Development Courses'],
        workshops: ['Building Confidence', 'Coping with Change', 'Interview Techniques', 'Maximize Potential'],
        coaching: ['Focused entirely on personal objectives', 'Move forward at individual pace', 'Tailor-made development materials', 'Strict code of confidentiality'],
        consultancy: ['Enhancing company\'s image', 'Strengthening team spirit', 'Developing core competencies', 'Improving work relations', 'Developing focused staff', 'Greater success rate']
    };

    return (
        <div className="min-h-screen bg-white font-['Poppins'] selection:bg-brand-500 selection:text-white">
            <Navbar />

            {/* ═══════════════════════════════════════════════════════════════
                HERO SECTION - Cinematic Parallax with Floating Elements
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative h-[80vh] min-h-[600px] md:h-screen md:min-h-[700px] flex items-center justify-center overflow-hidden">
                {/* Parallax Background */}
                <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 z-0">
                    <img src={heroImg} alt="Corporate Training" className="w-full h-[120%] object-cover" />
                </motion.div>

                {/* Cinematic Overlays - Dark like Home page */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 z-10"></div>

                {/* Animated Floating Shapes */}
                <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 right-[10%] w-24 h-24 md:w-40 md:h-40 border border-white/10 rounded-full"
                    />
                    <motion.div
                        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-1/3 right-[20%] w-16 h-16 md:w-32 md:h-32 border border-brand-500/20 rounded-full"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 right-[5%] w-64 h-64 md:w-96 md:h-96 bg-brand-500 rounded-full blur-[100px] opacity-10"
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-3xl"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="inline-flex items-center gap-2 md:gap-3 px-3 py-2 md:px-5 md:py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6 md:mb-8"
                        >
                            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-full w-full bg-brand-400"></span>
                            </span>
                            <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">Professional Development</span>
                        </motion.div>

                        {/* Main Title with Shimmer Effect */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6 md:mb-8 tracking-tight">
                            Elevate<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 animate-gradient-x">
                                Potential.
                            </span><br />
                            <span className="font-light italic text-white/90">Exceed Limits.</span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-xl leading-relaxed mb-8 md:mb-10">
                            Strategic acquisition of <strong className="text-white font-semibold">Knowledge, Skills, and Attitude (ASK)</strong> to redefine where you stand and where you're headed.
                        </p>

                        <motion.a
                            href="#modules"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-brand-600 text-white text-sm md:text-base font-bold rounded-full shadow-xl shadow-brand-600/30 hover:bg-brand-700 transition-all"
                        >
                            Explore Programs
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
                DEFINITION - Floating 3D Card
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative z-30 -mt-16 md:-mt-24 px-4 md:px-6 pb-16 md:pb-24">
                <motion.div
                    {...fadeInUp}
                    className="max-w-5xl mx-auto"
                >
                    <div className="group relative">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 via-brand-600 to-brand-500 rounded-3xl md:rounded-[2.5rem] opacity-30 blur-2xl group-hover:opacity-50 transition duration-700"></div>

                        {/* Card */}
                        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl md:rounded-[2rem] p-6 md:p-10 lg:p-14 shadow-2xl border border-white/50">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                                {/* Animated Icon */}
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl md:rounded-3xl flex items-center justify-center shrink-0 shadow-xl shadow-brand-500/30"
                                >
                                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                </motion.div>

                                <div className="flex-1">
                                    <span className="text-brand-600 text-xs md:text-sm font-bold uppercase tracking-widest mb-2 block">Definition</span>
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-900 mb-4 md:mb-6">What is Training?</h3>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                                        It is a transformative process involving the acquisition of knowledge, sharpening of skills, and reshaping of attitudes to enhance employee performance.
                                    </p>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                        Beyond the basics, it aids in <span className="text-brand-600 font-semibold">Organizational Development</span>—fostering better decision-making, effective problem-solving, and seamless policy implementation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                BENEFITS - Animated Bento Grid
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-20 right-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-brand-100 rounded-full blur-[120px] opacity-30"></div>
                <div className="absolute bottom-20 left-0 w-64 h-64 md:w-96 md:h-96 bg-brand-200 rounded-full blur-[100px] opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <motion.div {...fadeInUp} className="text-center mb-12 md:mb-20">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 block">Benefits</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 tracking-tight">Why Training Matters</h2>
                    </motion.div>

                    {/* Bento Grid */}
                    <motion.div
                        {...staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
                    >
                        {benefits.map((benefit, index) => {
                            // Create varied sizes for bento effect
                            const isLarge = index === 0 || index === 4;
                            const isMedium = index === 2 || index === 7;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className={`group relative p-5 md:p-8 rounded-2xl md:rounded-3xl cursor-default overflow-hidden transition-all duration-500
                                        ${index % 3 === 0 ? 'bg-brand-900 text-white' : 'bg-white border border-gray-100 hover:border-brand-200'}
                                        ${isLarge ? 'sm:col-span-2' : ''}
                                        ${isMedium ? 'lg:row-span-2' : ''}
                                        hover:shadow-2xl
                                    `}
                                >
                                    {/* Gradient Glow on Hover */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${index % 3 === 0 ? 'bg-gradient-to-br from-brand-700 to-brand-900' : 'bg-gradient-to-br from-brand-50 to-white'}`}></div>

                                    <div className="relative z-10">
                                        {/* Icon & Number */}
                                        <div className="flex items-center justify-between mb-4 md:mb-6">
                                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center ${index % 3 === 0 ? 'bg-white/10' : 'bg-brand-50'}`}>
                                                <svg className={`w-6 h-6 md:w-7 md:h-7 ${index % 3 === 0 ? 'text-brand-300' : 'text-brand-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                                                </svg>
                                            </div>
                                            <span className={`text-4xl md:text-5xl font-black opacity-10 ${index % 3 === 0 ? 'text-white' : 'text-brand-900'}`}>
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>

                                        <h4 className={`font-bold text-lg md:text-xl mb-2 md:mb-3 ${index % 3 === 0 ? 'text-white' : 'text-brand-900 group-hover:text-brand-600'} transition-colors`}>
                                            {benefit.title}
                                        </h4>
                                        <p className={`text-sm md:text-base leading-relaxed ${index % 3 === 0 ? 'text-white/70' : 'text-gray-500 group-hover:text-gray-600'} transition-colors`}>
                                            {benefit.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                TRAINING MODULES - Premium Asymmetric Bento
            ═══════════════════════════════════════════════════════════════ */}
            <section id="modules" className="py-16 md:py-24 lg:py-32 bg-brand-950 relative overflow-hidden scroll-mt-20">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }}></div>
                </div>

                {/* Floating Orbs */}
                <div className="absolute top-20 left-20 w-64 h-64 md:w-96 md:h-96 bg-brand-500 rounded-full blur-[150px] opacity-10"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 md:w-72 md:h-72 bg-brand-400 rounded-full blur-[120px] opacity-10"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <motion.div {...fadeInUp} className="text-center mb-12 md:mb-20">
                        <span className="text-brand-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 block">Our Curriculum</span>
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white tracking-tight">Program Modules</h2>
                    </motion.div>

                    {/* Asymmetric Bento Grid */}
                    <div className="grid lg:grid-cols-12 gap-4 md:gap-6">

                        {/* Human Resources - Large Card */}
                        <motion.div
                            {...fadeInUp}
                            className="lg:col-span-8 group"
                        >
                            <div className="h-full bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden hover:shadow-3xl transition-all duration-500">
                                {/* Decorative Element */}
                                <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-brand-100 rounded-full blur-[80px] opacity-50 -translate-y-1/2 translate-x-1/2"></div>

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-6 md:mb-8">
                                        <div>
                                            <span className="text-brand-500 text-xs font-bold uppercase tracking-widest">Module 01</span>
                                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-900 mt-2">Human Resources</h3>
                                            <p className="text-gray-500 text-sm md:text-base mt-2">Essential administration & development</p>
                                        </div>
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.7 }}
                                            className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0"
                                        >
                                            <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        </motion.div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                                        {trainingPoints.humanResource.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ scale: 1.05, x: 5 }}
                                                className="flex items-center gap-3 p-3 md:p-4 bg-gray-50 rounded-xl border border-gray-100 text-gray-700 hover:bg-brand-50 hover:border-brand-200 transition-all cursor-default"
                                            >
                                                <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0"></span>
                                                <span className="text-sm md:text-base font-medium">{item}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Workshops - Tall Card */}
                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.1 }}
                            className="lg:col-span-4 lg:row-span-2 group"
                        >
                            <div className="h-full bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl md:rounded-3xl p-6 md:p-10 text-white relative overflow-hidden shadow-2xl">
                                {/* Animated Orb */}
                                <motion.div
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full blur-[80px] opacity-20"
                                ></motion.div>

                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="mb-6 md:mb-8">
                                        <span className="text-brand-200 text-xs font-bold uppercase tracking-widest">Module 02</span>
                                        <h3 className="text-2xl md:text-3xl font-bold mt-2">Workshops</h3>
                                        <p className="text-white/60 text-sm md:text-base mt-2">Interactive Sessions</p>
                                    </div>

                                    <div className="flex-1 space-y-4 md:space-y-5">
                                        {trainingPoints.workshops.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ x: 10 }}
                                                className="flex items-center gap-4 py-3 border-b border-white/10 last:border-0 cursor-default"
                                            >
                                                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <span className="font-medium text-sm md:text-base">{item}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Coaching - Standard Card */}
                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-4 group"
                        >
                            <div className="h-full bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden hover:shadow-3xl transition-all duration-500">
                                <div className="relative z-10">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-brand-800 mb-4 md:mb-6"
                                    >
                                        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    </motion.div>

                                    <span className="text-brand-500 text-xs font-bold uppercase tracking-widest">Module 03</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-brand-900 mt-2 mb-4 md:mb-6">1-on-1 Coaching</h3>

                                    <ul className="space-y-3">
                                        {trainingPoints.coaching.map((item, i) => (
                                            <li key={i} className="text-gray-600 text-sm md:text-base flex items-start gap-3">
                                                <span className="text-brand-500 mt-1.5">●</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Consultancy - Wide Card */}
                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-4 group"
                        >
                            <div className="h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl md:rounded-3xl p-6 md:p-10 text-white relative overflow-hidden shadow-2xl">
                                {/* Decorative Glow */}
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-500 rounded-full blur-[80px] opacity-20"></div>

                                <div className="relative z-10">
                                    <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">Module 04</span>
                                    <h3 className="text-xl md:text-2xl font-bold mt-2 mb-6 md:mb-8">Consultancy</h3>

                                    <div className="grid grid-cols-1 gap-3">
                                        {trainingPoints.consultancy.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ x: 5 }}
                                                className="flex items-center gap-3 text-sm font-medium text-white/80 cursor-default"
                                            >
                                                <svg className="w-4 h-4 text-brand-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                {item}
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.a
                                        href="/#contact"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center gap-2 mt-6 md:mt-8 px-5 py-2.5 md:px-6 md:py-3 bg-brand-600 text-white font-bold rounded-xl shadow-lg hover:bg-brand-700 transition-all text-sm md:text-base"
                                    >
                                        Get Consultation
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                CTA - Premium Call to Action
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-600 overflow-hidden">
                {/* Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }}></div>
                </div>

                {/* Decorative Circles */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] border border-white/10 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] lg:w-[600px] h-[300px] md:h-[450px] lg:h-[600px] border border-white/10 rounded-full"
                />

                {/* Floating Orbs */}
                <div className="absolute top-10 right-10 w-48 h-48 md:w-72 md:h-72 bg-white rounded-full blur-[120px] opacity-10"></div>
                <div className="absolute bottom-10 left-10 w-36 h-36 md:w-56 md:h-56 bg-brand-300 rounded-full blur-[100px] opacity-20"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs md:text-sm font-bold uppercase tracking-widest mb-6 md:mb-8 border border-white/20">
                            Get Started Today
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight">
                            Ready to Transform<br className="sm:hidden" /> Your Team?
                        </h2>
                        <p className="text-white/70 text-sm md:text-base lg:text-lg mb-8 md:mb-12 max-w-xl mx-auto leading-relaxed">
                            Join hundreds of innovative leaders who have elevated their organizational performance with our training.
                        </p>
                        <motion.a
                            href="/#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="group inline-flex items-center justify-center gap-2 md:gap-3 px-8 py-4 md:px-10 md:py-5 bg-white text-brand-700 text-sm md:text-lg font-bold rounded-full shadow-2xl shadow-black/20 hover:bg-brand-900 hover:text-white transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                            <span className="relative">Start Your Journey</span>
                            <svg className="w-4 h-4 md:w-5 md:h-5 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TrainingPage;
