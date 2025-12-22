import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { technicalServices } from '../data/serviceContent'
import { Link } from 'react-router-dom'

// Import Images
import imgElectroMechanical from '../assets/tech-electro-mechanical.png'
import imgElectrical from '../assets/tech-electrical.png'
import imgAC from '../assets/tech-ac.png'
import imgPlumbing from '../assets/tech-plumbing.png'
import imgCarpentry from '../assets/tech-carpentry.png'
import imgSTP from '../assets/tech-plumbing.png'

// SVG Icon Components
const Icons = {
    electroMechanical: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    electrical: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    acServices: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
    plumbing: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
    ),
    carpentry: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
    ),
    stpWtp: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
    )
}

const TechnicalServicesPage = () => {
    const [activeService, setActiveService] = useState('electroMechanical')
    const { scrollYProgress } = useScroll()
    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const servicesMap = {
        electroMechanical: { ...technicalServices.electroMechanical, image: imgElectroMechanical },
        electrical: { ...technicalServices.electrical, image: imgElectrical },
        acServices: { ...technicalServices.acServices, image: imgAC },
        plumbing: { ...technicalServices.plumbing, image: imgPlumbing },
        carpentry: { ...technicalServices.carpentry, image: imgCarpentry },
        stpWtp: { ...technicalServices.stpWtp, image: imgSTP }
    }

    const serviceKeys = Object.keys(servicesMap)

    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.6 }
    }

    const stats = [
        { value: '6+', label: 'Technical Services' },
        { value: '50+', label: 'Expert Technicians' },
        { value: '24/7', label: 'Emergency Support' },
        { value: '100%', label: 'Quality Assured' }
    ]

    return (
        <div className="min-h-screen bg-white font-['Poppins']">
            <Navbar />

            {/* ═══════════════════════════════════════════════════════════════
                HERO SECTION
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative h-[60vh] min-h-[400px] sm:h-[70vh] sm:min-h-[500px] lg:h-screen lg:min-h-[700px] flex items-center overflow-hidden">
                <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
                        src={servicesMap[activeService].image}
                        alt="Technical Services"
                        className="w-full h-[120%] object-cover"
                    />
                </motion.div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 z-10" />

                {/* Content */}
                <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-3xl"
                    >
                        <br /><br />
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4 sm:mb-6 lg:mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-full w-full bg-brand-400" />
                            </span>
                            <span className="text-white/90 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                                Expert Technical Solutions
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-4 sm:mb-6 tracking-tight">
                            Technical
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500">
                                Services.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed mb-6 sm:mb-8 lg:mb-10">
                            Specialized maintenance and repair services for your facility's critical infrastructure.
                        </p>

                        {/* CTA */}
                        <motion.a
                            href="#services"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-brand-600 text-white text-sm sm:text-base font-semibold rounded-full shadow-xl shadow-brand-600/30 hover:bg-brand-700 transition-all duration-300"
                        >
                            Explore Services
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center"
                >
                    <span className="text-white/50 text-[10px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-3">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
                    >
                        <div className="w-1 h-2 bg-white/50 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                STATS SECTION
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative py-8 sm:py-12 lg:py-16 bg-brand-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center py-2 sm:py-4"
                            >
                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-brand-300 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SERVICES SECTION
            ═══════════════════════════════════════════════════════════════ */}
            <section id="services" className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-neutral-50 to-white scroll-mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <motion.div {...fadeInUp} className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm">
                            Expert Solutions
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mt-2 sm:mt-3 tracking-tight">
                            Technical Services
                        </h2>
                        <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-3 sm:mt-4">
                            Select a service category below to explore our expert technical solutions
                        </p>
                    </motion.div>

                    {/* Service Navigation Pills */}
                    <div className="mb-8 sm:mb-12 lg:mb-16 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                        <div className="flex gap-2 sm:gap-3 min-w-max pb-2 lg:flex-wrap lg:justify-center">
                            {serviceKeys.map((key, index) => (
                                <motion.button
                                    key={key}
                                    onClick={() => setActiveService(key)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.03 }}
                                    className={`flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 rounded-full text-[11px] sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${activeService === key
                                        ? 'bg-brand-900 text-white shadow-lg shadow-brand-900/25'
                                        : 'bg-white text-gray-600 hover:bg-brand-50 border border-gray-200 hover:border-brand-300'
                                        }`}
                                >
                                    <span className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${activeService === key ? 'text-brand-300' : 'text-brand-600'}`}>
                                        {Icons[key]}
                                    </span>
                                    <span>{servicesMap[key].title}</span>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Active Service Display */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start"
                        >
                            {/* Image Card */}
                            <div className="relative group order-1">
                                <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-brand-500 to-brand-700 rounded-2xl sm:rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
                                <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                                    <div className="relative h-56 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                                        <motion.img
                                            initial={{ scale: 1.05 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                            src={servicesMap[activeService].image}
                                            alt={servicesMap[activeService].title}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Badge */}
                                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                                            <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                                <span className="w-4 h-4 sm:w-5 sm:h-5 text-white">
                                                    {Icons[activeService]}
                                                </span>
                                                <span className="text-white font-semibold text-xs sm:text-sm">
                                                    {servicesMap[activeService].title}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 z-20">
                                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                                                {servicesMap[activeService].title}
                                            </h3>
                                            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="space-y-4 sm:space-y-6 order-2">

                                {/* Description */}
                                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-brand-600 to-brand-800 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg p-2 sm:p-2.5 lg:p-3">
                                            {Icons[activeService]}
                                        </div>
                                        <div>
                                            <span className="text-brand-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                                                Service Overview
                                            </span>
                                            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                                                {servicesMap[activeService].title}
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed border-l-4 border-brand-500 pl-3 sm:pl-4 lg:pl-6 mb-4 sm:mb-6">
                                        {servicesMap[activeService].shortDesc}
                                    </div>

                                    <div className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                                        {servicesMap[activeService].fullContent.split('\n').map((line, idx) => {
                                            if (!line.trim()) return <div key={idx} className="h-3" />;

                                            if (line.trim().startsWith('**') && line.includes(':**')) {
                                                const heading = line.replace(/\*\*/g, '').trim();
                                                return (
                                                    <h5 key={idx} className="font-bold text-gray-900 mt-4 mb-2 text-sm sm:text-base">
                                                        {heading}
                                                    </h5>
                                                );
                                            }

                                            if (line.trim().startsWith('- **')) {
                                                const content = line.replace('- **', '').replace('**', '');
                                                const parts = content.split(' - ');
                                                const title = parts[0];
                                                const desc = parts.slice(1).join(' - ');

                                                return (
                                                    <div key={idx} className="flex items-start gap-2 sm:gap-3 py-1.5 sm:py-2">
                                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                        <div>
                                                            <span className="font-semibold text-gray-800">{title}</span>
                                                            {desc && <span className="text-gray-600"> — {desc}</span>}
                                                        </div>
                                                    </div>
                                                );
                                            }

                                            if (line.trim().startsWith('- ')) {
                                                const content = line.replace('- ', '').trim();
                                                return (
                                                    <div key={idx} className="flex items-start gap-2 sm:gap-3 py-1">
                                                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span>{content}</span>
                                                    </div>
                                                );
                                            }

                                            if (/^\d+\./.test(line.trim())) {
                                                const content = line.replace(/^\d+\.\s*/, '').trim();
                                                const num = line.match(/^\d+/)?.[0] || '';
                                                return (
                                                    <div key={idx} className="flex items-start gap-2 sm:gap-3 py-1.5 sm:py-2">
                                                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                                                            {num}
                                                        </span>
                                                        <span className="flex-1">{content}</span>
                                                    </div>
                                                );
                                            }

                                            return <p key={idx} className="mb-2">{line}</p>;
                                        })}
                                    </div>
                                </div>

                                {/* Points Grid */}
                                {servicesMap[activeService].points && (
                                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-200">
                                        <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-600 to-brand-800 rounded-xl flex items-center justify-center shadow-lg">
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                                </svg>
                                            </div>
                                            Service Details
                                        </h4>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                            {servicesMap[activeService].points.map((point, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    className={`group relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-xl ${idx % 2 === 0 ? 'bg-gradient-to-br from-brand-800 to-brand-900' : 'bg-white'
                                                        }`}
                                                >
                                                    <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-2xl opacity-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-brand-500'
                                                        }`} />

                                                    <div className="relative p-4 sm:p-5 lg:p-6">
                                                        <div className="flex items-start gap-3 sm:gap-4">
                                                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-base sm:text-lg shadow-lg flex-shrink-0 ${idx % 2 === 0
                                                                ? 'bg-white/20 text-white backdrop-blur-sm'
                                                                : 'bg-gradient-to-br from-brand-500 to-brand-700 text-white'
                                                                }`}>
                                                                {String(idx + 1).padStart(2, '0')}
                                                            </div>
                                                            <p className={`text-xs sm:text-sm leading-relaxed ${idx % 2 === 0 ? 'text-white/90' : 'text-gray-700'
                                                                }`}>
                                                                {point}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* CTA */}
                                <motion.a
                                    href="/#contact"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-gradient-to-r from-brand-600 to-brand-700 text-white px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:from-brand-700 hover:to-brand-800 transition-all shadow-xl shadow-brand-600/25 text-sm sm:text-base lg:text-lg"
                                >
                                    <span>Request Service</span>
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                ALL SERVICES GRID
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #3E1212 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div {...fadeInUp} className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm">
                            All Services at a Glance
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mt-2 sm:mt-3 tracking-tight">
                            Quick Overview
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {serviceKeys.map((key, index) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ y: -6 }}
                                onClick={() => {
                                    setActiveService(key)
                                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                                className="group cursor-pointer relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    <img
                                        src={servicesMap[key].image}
                                        alt={servicesMap[key].title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 z-20">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center border border-white/20 p-1.5 sm:p-2">
                                            <span className="text-white">{Icons[key]}</span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2.5 sm:bottom-3 right-2.5 sm:right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3.5 sm:p-4 lg:p-5">
                                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-brand-600 transition-colors">
                                        {servicesMap[key].title}
                                    </h3>
                                    <p className="text-gray-500 text-xs sm:text-sm line-clamp-2">
                                        {servicesMap[key].shortDesc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                WHY CHOOSE US
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-brand-100/30 to-transparent" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div {...fadeInUp} className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm">
                            The Reach Promise
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mt-2 sm:mt-3 tracking-tight">
                            Why Choose Us?
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {[
                            {
                                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                                title: "Rapid Response",
                                desc: "24/7 emergency support with quick turnaround times."
                            },
                            {
                                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                title: "Certified Experts",
                                desc: "Licensed technicians with professional certifications."
                            },
                            {
                                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                title: "Fair Pricing",
                                desc: "Transparent cost estimates with no hidden fees."
                            },
                            {
                                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                title: "Quality Work",
                                desc: "Premium materials and workmanship guaranteed."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="group p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white border border-gray-100 hover:border-brand-200 hover:shadow-xl transition-all duration-300 text-center"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-brand-600 to-brand-800 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mx-auto mb-4 sm:mb-5 lg:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg p-2.5 sm:p-3 lg:p-3.5">
                                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-brand-800 mb-1.5 sm:mb-2 group-hover:text-brand-600 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 text-xs sm:text-sm lg:text-base leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                CTA SECTION
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-700 overflow-hidden">
                {/* Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                </div>

                {/* Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] lg:w-[600px] h-[250px] sm:h-[400px] lg:h-[600px] border border-white/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[300px] lg:w-[450px] h-[180px] sm:h-[300px] lg:h-[450px] border border-white/10 rounded-full" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 lg:px-5 lg:py-2 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-widest mb-4 sm:mb-6 lg:mb-8 border border-white/20">
                            Need Technical Support?
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight">
                            Expert Solutions
                            <br className="sm:hidden" /> On Demand
                        </h2>
                        <p className="text-white/70 text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-12 max-w-xl mx-auto leading-relaxed">
                            Our skilled technicians are ready to solve your facility's most challenging technical problems.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <motion.a
                                href="/#contact"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 lg:px-10 lg:py-4 bg-white text-brand-700 text-sm sm:text-base lg:text-lg font-bold rounded-full shadow-2xl shadow-black/20 hover:bg-brand-50 transition-all duration-300"
                            >
                                Book a Technician
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 border-2 border-white/30 text-white text-sm sm:text-base lg:text-lg font-bold rounded-full hover:bg-white/10 transition-all duration-300"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default TechnicalServicesPage
