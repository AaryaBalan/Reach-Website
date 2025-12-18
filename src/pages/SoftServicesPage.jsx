import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SoftServicesPage = () => {
    const [activeService, setActiveService] = useState(0)

    const services = [
        {
            name: 'Housekeeping',
            icon: '🏢',
            description: 'Daily Sweeping Mopping of Reception, Office',
            longDescription: 'Reach FMS understands the importance of cleanliness, hygienic and proper housekeeping. Good Housekeeping and clean environment improves the productivity and motivation of employees.',
            features: [
                'Daily sweeping and mopping',
                'Reception area maintenance',
                'Office cleaning services',
                'Restroom sanitization',
                'Common area upkeep'
            ]
        },
        {
            name: 'Office Assistant',
            icon: '👔',
            description: 'Total Infrastructure',
            longDescription: 'Professional office assistance services to support your daily operations and maintain smooth workflow.',
            features: [
                'Administrative support',
                'Document management',
                'Front desk coordination',
                'Mail and courier handling',
                'General office assistance'
            ]
        },
        {
            name: 'Garden Services',
            icon: '🌳',
            description: 'We offer a wide variety of services to achieve a high quality design',
            longDescription: 'We offer a wide variety of services to achieve a high quality design. Our services are for both residential and commercial property.',
            categories: [
                {
                    title: 'General Maintenance Landscaping',
                    items: [
                        'Lawn mowing & care',
                        'Weeding & pruning',
                        'Tree surgery',
                        'Path & driveway clearance'
                    ]
                },
                {
                    title: 'Landscaping',
                    items: [
                        'Soft garden design',
                        'Border development',
                        'Plant selection & placing'
                    ]
                },
                {
                    title: 'Hard Landscaping',
                    items: [
                        'Patio construction',
                        'Pond installation',
                        'Water feature installation',
                        'Brick wall and pathway construction',
                        'Fencing construction (any type)'
                    ]
                }
            ]
        },
        {
            name: 'Garden Machinery',
            icon: '🛠️',
            description: 'Professional garden machinery services and maintenance',
            longDescription: 'Comprehensive garden machinery services to keep your equipment in top condition.',
            features: [
                'Mower servicing (including Ride-on)',
                'Sharpening of garden tools (shears, edge clippers etc.)',
                'General garden maintenance of your property',
                'Landscape Gardening services',
                'Hard Landscape gardening in your property',
                'Professional Garden Design services'
            ]
        },
        {
            name: 'Event Management',
            icon: '🎉',
            description: 'Product Launch, Exhibitions, Conferences',
            longDescription: 'Complete event management services for corporate and personal events.',
            features: [
                'Product Launch',
                'Exhibitions',
                'Conferences',
                'Corporate Events',
                'Theme parties',
                'Promotions',
                'Sporting Events',
                'Balloon decorators',
                'Party entertainer',
                'Mall decorations'
            ]
        },
        {
            name: 'Loading & Unloading',
            icon: '📦',
            description: 'Loading and unloading services',
            longDescription: 'Professional loading and unloading services with trained personnel to ensure safe handling of your goods.',
            features: [
                'Skilled labour guidance',
                'Safe goods handling',
                'Door-to-door transportation',
                'Proper coordination and sequence',
                'Special equipment handling',
                'Residential and commercial moves'
            ]
        },
        {
            name: 'Pest Control',
            icon: '🐛',
            description: 'Pest control services',
            longDescription: 'Effective and long-term pest control solutions for homes and offices.',
            features: [
                'Rats control',
                'Cockroaches elimination',
                'Mosquito treatment',
                'Termite control',
                'Professional pest management',
                'Long-term solutions'
            ]
        },
        {
            name: 'Security',
            icon: '🛡️',
            description: 'Security services',
            longDescription: 'Comprehensive range of disciplined and professionally trained security staff to perform a wide range of security functions.',
            features: [
                'Trained security personnel',
                '24/7 security coverage',
                'Access control',
                'Surveillance monitoring',
                'Emergency response',
                'Professional security management'
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCA1.3OS00IDQgMS43OSA0IDQgNC00LTEuNzktNC00LTR6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-10"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Soft Services</h1>
                        <p className="text-xl text-green-100 max-w-3xl mx-auto">
                            Comprehensive facility management solutions to keep your spaces clean, secure, and well-maintained
                        </p>
                        <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Soft Services</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We offer a comprehensive range of soft services tailored to meet your facility management needs
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                onClick={() => setActiveService(index)}
                                className={`cursor-pointer rounded-xl p-6 transition-all duration-300 ${activeService === index
                                    ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl scale-105'
                                    : 'bg-gradient-to-br from-gray-50 to-green-50 hover:shadow-lg hover:-translate-y-1'
                                    }`}
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className={`text-lg font-bold mb-2 ${activeService === index ? 'text-white' : 'text-gray-900'}`}>
                                    {service.name}
                                </h3>
                                <p className={`text-sm ${activeService === index ? 'text-green-100' : 'text-gray-600'}`}>
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Active Service Details */}
                    <motion.div
                        key={activeService}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-10 md:p-14 shadow-xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-6xl">{services[activeService].icon}</div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900">{services[activeService].name}</h3>
                                <p className="text-gray-600 mt-1">{services[activeService].description}</p>
                            </div>
                        </div>

                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            {services[activeService].longDescription}
                        </p>

                        {services[activeService].features && (
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h4>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    {services[activeService].features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {services[activeService].categories && (
                            <div className="mt-8">
                                <h4 className="text-xl font-bold text-gray-900 mb-6">Service Categories:</h4>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {services[activeService].categories.map((category, idx) => (
                                        <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                                            <h5 className="font-bold text-gray-900 mb-4">{category.title}</h5>
                                            <ul className="space-y-2">
                                                {category.items.map((item, itemIdx) => (
                                                    <li key={itemIdx} className="flex items-start gap-2">
                                                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-700 text-sm">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Need Soft Services for Your Facility?
                        </h2>
                        <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                            Get in touch with our team to discuss your facility management requirements
                        </p>
                        <a
                            href="/#contact"
                            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            Request a Quote
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default SoftServicesPage
