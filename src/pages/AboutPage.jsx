import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutHero from '../assets/carousel-1.png'

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />



            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-75 md:h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <img
                        src={aboutHero}
                        alt="About Reach FMS"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                            About Us
                        </h1>
                        <div className="w-16 md:w-24 h-1 bg-linear-to-r from-brand-500 to-brand-600 mx-auto mb-4 md:mb-6"></div>
                        <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                            Building trust through excellence in facility management since 2018.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-8 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-linear-to-br from-gray-50 to-brand-50 rounded-2xl p-5 md:p-14 shadow-lg border border-gray-100">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                                Welcome to Reach FMS
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                We would like to introduce ourselves as <span className="font-semibold text-brand-700">M/S REACH FACILITY MANAGEMENT SERVICE</span>,
                                a leading professionally managed concern providing Facility management, Manpower Consultancy and Project Management.
                            </p>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-3 md:mt-4">
                                With <span className="font-semibold">more than 5 years</span> of experience, we provide comprehensive services for:
                            </p>
                            <ul className="mt-4 md:mt-6 grid md:grid-cols-2 gap-3 md:gap-4">
                                {[
                                    'Facility Maintenance',
                                    'Manpower Consultancy Services',
                                    'Project Management Services',
                                    'Electrical Consultant',
                                    'Repair and Maintenance'
                                ].map((service, index) => (
                                    <li key={index} className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                                        <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-600 mt-0.5 md:mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">{service}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm md:text-base text-gray-600 mt-4 md:mt-6 italic">
                                Serving Commercial, Industrial, Guest Houses, Residential Flats, and Apartments
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-8 md:py-20 bg-linear-to-br from-gray-50 to-brand-50">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-5 md:gap-8">
                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl p-5 md:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-brand-600"
                        >
                            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-linear-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                We at REACH FMS thrive to deliver <span className="font-semibold text-brand-600">cost effective & Customer centric</span> Housekeeping &
                                Facility Management solutions to help our business Partners & Society at large in building an
                                <span className="font-semibold text-green-600"> eco-friendly and cleaner Environment</span>.
                            </p>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl p-5 md:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-brand-800"
                        >
                            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-linear-to-br from-brand-700 to-brand-800 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h2>
                            </div>
                            <p className="text-gray-700 mb-3 md:mb-4 text-base md:text-lg">
                                REACH FMS aims to be the top Facility Management Services provider with commitment for:
                            </p>
                            <ul className="space-y-2 md:space-y-3">
                                {[
                                    'Quality Service',
                                    'Continuous Training to Staff',
                                    'Customer Satisfaction',
                                    'Time Bound Commitments',
                                    'High degree of Professionalism'
                                ].map((point, index) => (
                                    <li key={index} className="flex items-center gap-2 md:gap-3 text-sm md:text-base">
                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-600 rounded-full flex-shrink-0"></div>
                                        <span className="text-gray-700 font-medium">{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 md:mt-6 text-gray-600 italic border-t pt-3 md:pt-4 text-sm md:text-base">
                                We are committed to constantly upgrading the range and quality of its services.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-8 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Our Core Values</h2>
                        <div className="w-16 md:w-24 h-1 bg-brand-600 mx-auto"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                        {[
                            {
                                icon: (
                                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: 'Excellence',
                                description: 'Committed to delivering the highest quality facility management services'
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                ),
                                title: 'Customer Centric',
                                description: 'Your satisfaction and requirements are at the heart of everything we do'
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: 'Eco-Friendly',
                                description: 'Building a cleaner, greener environment for future generations'
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-linear-to-br from-gray-50 to-brand-50 rounded-xl p-5 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-600 rounded-full flex items-center justify-center text-white mb-3 md:mb-4 mx-auto">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 text-center">{value.title}</h3>
                                <p className="text-sm md:text-base text-gray-600 text-center">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-10 md:py-16 bg-linear-to-r from-brand-600 to-brand-800">
                <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                            Ready to Work With Us?
                        </h2>
                        <p className="text-brand-100 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                            Get in touch with our team to discuss your facility management needs
                        </p>
                        <a
                            href="/#contact"
                            className="inline-block bg-white text-brand-700 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            Contact Us Today
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default AboutPage
