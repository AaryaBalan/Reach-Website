import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { technicalServices } from '../data/serviceContent'

// Using placeholder images since specific technical service images weren't provided
// We can reuse some assets or use a generic technical background
import imgTechnical from '../assets/carousel-3.jpg' // Placeholder generic
import imgElectrical from '../assets/carousel-5.jpg' // Placeholder
import imgAC from '../assets/carousel-4.png' // Placeholder

const TechnicalServicesPage = () => {
    const [activeService, setActiveService] = useState('electroMechanical')

    // Map service keys to images and icons
    const servicesMap = {
        electroMechanical: { ...technicalServices.electroMechanical, image: imgTechnical, icon: '⚙️' },
        electrical: { ...technicalServices.electrical, image: imgElectrical, icon: '⚡' },
        acServices: { ...technicalServices.acServices, image: imgAC, icon: '❄️' },
        plumbing: { ...technicalServices.plumbing, image: imgTechnical, icon: '🚿' },
        carpentry: { ...technicalServices.carpentry, image: imgTechnical, icon: '🔨' },
        stpWtp: { ...technicalServices.stpWtp, image: imgTechnical, icon: '💧' }
    }

    const serviceKeys = Object.keys(servicesMap)

    return (
        <div className="min-h-screen bg-neutral-50 font-['Poppins']">
            <Navbar />

            {/* Cinematic Hero Section */}
            <section className="relative h-[60vh] min-h-125 flex items-center justify-center overflow-hidden bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-neutral-50 z-10"></div>
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        src={servicesMap[activeService].image}
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-60 blur-sm"
                    />
                </div>

                <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-wider uppercase mb-6">
                            Expert Technical Solutions
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Technical Services
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
                            Specialized maintenance and repair services for your facility's critical infrastructure.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="relative z-30 -mt-20 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-8">

                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-4">
                            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 overflow-hidden sticky top-24">
                                <div className="p-6 bg-gray-50 border-b border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800">Technical Services</h3>
                                </div>
                                <div className="p-2 max-h-[70vh] overflow-y-auto custom-scrollbar">
                                    {serviceKeys.map((key) => (
                                        <button
                                            key={key}
                                            onClick={() => setActiveService(key)}
                                            className={`w-full text-left p-4 rounded-xl flex items-center gap-4 transition-all duration-300 group ${activeService === key
                                                ? 'bg-gray-900 text-white shadow-lg'
                                                : 'hover:bg-gray-50 text-gray-600'
                                                }`}
                                        >
                                            <span className={`text-2xl transition-transform duration-300 ${activeService === key ? 'scale-110' : 'group-hover:scale-110'}`}>
                                                {servicesMap[key].icon}
                                            </span>
                                            <span className={`font-semibold ${activeService === key ? 'text-white' : 'text-gray-700'}`}>
                                                {servicesMap[key].title}
                                            </span>
                                            {activeService === key && (
                                                <motion.div
                                                    layoutId="activeIndicator"
                                                    className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500"
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
                                    <div className="relative h-64 md:h-80 overflow-hidden group">
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10"></div>
                                        <img
                                            src={servicesMap[activeService].image}
                                            alt={servicesMap[activeService].title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute bottom-0 left-0 p-8 z-20">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-4xl">{servicesMap[activeService].icon}</span>
                                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                                    {servicesMap[activeService].title}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 md:p-10">
                                        {/* Short Description */}
                                        <div className="text-xl text-gray-600 font-medium mb-8 leading-relaxed border-l-4 border-orange-500 pl-6">
                                            {servicesMap[activeService].shortDesc}
                                        </div>

                                        {/* Full Content */}
                                        <div className="prose prose-lg max-w-none text-gray-600">
                                            <div className="whitespace-pre-line leading-relaxed">
                                                {servicesMap[activeService].fullContent}
                                            </div>
                                        </div>

                                        {/* Features Grid */}
                                        {servicesMap[activeService].features && (
                                            <div className="mt-10">
                                                <h4 className="text-xl font-bold text-gray-900 mb-6">Key Features:</h4>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    {servicesMap[activeService].features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                                            <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span className="text-gray-700 font-medium">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Points Grid (for services that have points instead of features) */}
                                        {servicesMap[activeService].points && (
                                            <div className="mt-10">
                                                <h4 className="text-xl font-bold text-gray-900 mb-6">Service Details:</h4>
                                                <div className="space-y-4">
                                                    {servicesMap[activeService].points.map((point, idx) => (
                                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                                            <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                                                {idx + 1}
                                                            </div>
                                                            <span className="text-gray-700">{point}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* CTA Button */}
                                        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-end">
                                            <a
                                                href="/#contact"
                                                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                            >
                                                <span>Request Service</span>
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
