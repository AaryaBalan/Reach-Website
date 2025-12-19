import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { technicalServices } from '../data/serviceContent'

// Importing new high-quality technical service images
import imgElectroMechanical from '../assets/tech-electro-mechanical.png'
import imgElectrical from '../assets/tech-electrical.png'
import imgAC from '../assets/tech-ac.png'
import imgPlumbing from '../assets/tech-plumbing.png'
import imgCarpentry from '../assets/tech-carpentry.png'
import imgSTP from '../assets/tech-plumbing.png' // Reusing plumbing for STP/WTP as it's related to water treatment

const TechnicalServicesPage = () => {
    const [activeService, setActiveService] = useState('electroMechanical')

    // Map service keys to images and icons
    const servicesMap = {
        electroMechanical: { ...technicalServices.electroMechanical, image: imgElectroMechanical, icon: '⚙️' },
        electrical: { ...technicalServices.electrical, image: imgElectrical, icon: '⚡' },
        acServices: { ...technicalServices.acServices, image: imgAC, icon: '❄️' },
        plumbing: { ...technicalServices.plumbing, image: imgPlumbing, icon: '🚿' },
        carpentry: { ...technicalServices.carpentry, image: imgCarpentry, icon: '🔨' },
        stpWtp: { ...technicalServices.stpWtp, image: imgSTP, icon: '💧' }
    }

    const serviceKeys = Object.keys(servicesMap)

    return (
        <div className="min-h-screen bg-neutral-50 font-['Poppins']">
            <Navbar />

            {/* Cinematic Hero Section */}
            <section className="relative h-[40vh] min-h-75 md:h-[60vh] md:min-h-125 flex items-center justify-center overflow-hidden bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-neutral-50 z-10"></div>
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        src={servicesMap[activeService].image}
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-60 blur-sm"
                    />
                </div>

                <div className="relative z-20 text-center px-4 md:px-6 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-2 md:px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs md:text-sm font-medium tracking-wider uppercase mb-4 md:mb-6">
                            Expert Technical Solutions
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                            Technical Services
                        </h1>
                        <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
                            Specialized maintenance and repair services for your facility's critical infrastructure.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="relative z-30 -mt-10 md:-mt-20 pb-8 md:pb-24 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-6 md:gap-8">

                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-4">
                            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 overflow-hidden sticky top-24">
                                <div className="p-4 md:p-6 bg-gray-50 border-b border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800">Technical Services</h3>
                                </div>
                                <div className="p-2 max-h-[70vh] overflow-y-auto custom-scrollbar">
                                    {serviceKeys.map((key) => (
                                        <button
                                            key={key}
                                            onClick={() => setActiveService(key)}
                                            className={`w-full text-left p-3 md:p-4 rounded-xl flex items-center gap-3 md:gap-4 transition-all duration-300 group ${activeService === key
                                                ? 'bg-brand-900 text-white shadow-lg'
                                                : 'hover:bg-brand-50 text-gray-600'
                                                }`}
                                        >
                                            <span className={`text-xl md:text-2xl transition-transform duration-300 ${activeService === key ? 'scale-110' : 'group-hover:scale-110'}`}>
                                                {servicesMap[key].icon}
                                            </span>
                                            <span className={`font-semibold text-sm md:text-base ${activeService === key ? 'text-white' : 'text-gray-700'}`}>
                                                {servicesMap[key].title}
                                            </span>
                                            {activeService === key && (
                                                <motion.div
                                                    layoutId="activeIndicator"
                                                    className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-500"
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Content Display */}
                        <div className="lg:col-span-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden"
                                >
                                    {/* Service Image Banner */}
                                    <div className="relative h-48 md:h-80 overflow-hidden group">
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10"></div>
                                        <img
                                            src={servicesMap[activeService].image}
                                            alt={servicesMap[activeService].title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute bottom-0 left-0 p-5 md:p-8 z-20">
                                            <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                                                <span className="text-2xl md:text-4xl">{servicesMap[activeService].icon}</span>
                                                <h2 className="text-2xl md:text-4xl font-bold text-white">
                                                    {servicesMap[activeService].title}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-5 md:p-10">
                                        {/* Short Description */}
                                        <div className="text-lg md:text-xl text-gray-600 font-medium mb-6 md:mb-8 leading-relaxed border-l-4 border-brand-500 pl-4 md:pl-6">
                                            {servicesMap[activeService].shortDesc}
                                        </div>

                                        {/* Full Content */}
                                        <div className="prose prose-lg max-w-none text-gray-600 text-sm md:text-base">
                                            <div className="whitespace-pre-line leading-relaxed">
                                                {servicesMap[activeService].fullContent}
                                            </div>
                                        </div>

                                        {/* Features Grid */}
                                        {servicesMap[activeService].features && (
                                            <div className="mt-8 md:mt-10">
                                                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Key Features:</h4>
                                                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                                                    {servicesMap[activeService].features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-100">
                                                            <svg className="w-4 h-4 md:w-5 md:h-5 text-brand-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span className="text-gray-700 font-medium text-sm md:text-base">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Points Grid (for services that have points instead of features) */}
                                        {servicesMap[activeService].points && (
                                            <div className="mt-8 md:mt-10">
                                                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Service Details:</h4>
                                                <div className="space-y-3 md:space-y-4">
                                                    {servicesMap[activeService].points.map((point, idx) => (
                                                        <div key={idx} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-100">
                                                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0 font-bold text-xs md:text-sm">
                                                                {idx + 1}
                                                            </div>
                                                            <span className="text-gray-700 text-sm md:text-base">{point}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* CTA Button */}
                                        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-100 flex justify-end">
                                            <a
                                                href="/#contact"
                                                className="inline-flex items-center gap-2 bg-brand-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-brand-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm md:text-base"
                                            >
                                                <span>Request Service</span>
                                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default TechnicalServicesPage
