import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TechnicalServicesPage = () => {
    const [activeService, setActiveService] = useState(0)

    const services = [
        {
            name: 'Electro Mechanical Maintenance',
            icon: '⚙️',
            description: 'Comprehensive electro mechanical maintenance services',
            longDescription: 'We will take into account the speed of repair, the Total Cost of Ownership of the repaired item, and the alternative cost of replacement, before making our recommendation based on your needs, not our wishes.',
            features: [
                'Cost-effective repair solutions',
                'Total Cost of Ownership analysis',
                'Speed-optimized repairs',
                'Alternative cost evaluation',
                'Need-based recommendations'
            ]
        },
        {
            name: 'Electrical Service',
            icon: '⚡',
            description: 'Professional electrical maintenance and repair services',
            longDescription: 'Complete electrical services with expert diagnosis and repair capabilities.',
            points: [
                'We will take into account the speed of repair, the Total Cost of Ownership of the repaired item, and the alternative cost of replacement, before making our recommendation based on your needs, not our wishes.',
                'At the same time, we identify reasons for failure and can modify either the replacement part or repair process to negate the problem.',
                'If we replace, we can also repair the existing part to be held in stock for the future. If new parts are unavailable, we can effect a temporary repair, and then manufacture a replacement part from new.',
                'In fact, whatever your electronic, electrical or mechanical problem, we have the all-round capability to devise the solution to achieve your desired result.'
            ]
        },
        {
            name: 'A/C Services',
            icon: '❄️',
            description: 'Air conditioning maintenance and repair services',
            longDescription: 'Professional air conditioning services to keep your environment comfortable and energy-efficient.',
            features: [
                'AC installation and setup',
                'Regular maintenance',
                'Repair and troubleshooting',
                'Performance optimization',
                'Energy efficiency improvements',
                'Emergency AC services'
            ]
        },
        {
            name: 'Plumbing Service',
            icon: '🚿',
            description: 'Complete plumbing solutions for residential and commercial properties',
            longDescription: 'Expert plumbing services covering all aspects of water supply, drainage, and sanitation systems.',
            features: [
                'Pipe installation and repair',
                'Leak detection and fixing',
                'Drainage solutions',
                'Water supply systems',
                'Sanitation maintenance',
                'Emergency plumbing services'
            ]
        },
        {
            name: 'Carpentry Services',
            icon: '🔨',
            description: 'Professional carpentry and woodwork services',
            longDescription: 'Quality carpentry services for all your woodwork requirements in residential and commercial spaces.',
            features: [
                'Custom furniture making',
                'Door and window repairs',
                'Cabinet installation',
                'Wooden flooring',
                'Interior woodwork',
                'Maintenance and repairs'
            ]
        },
        {
            name: 'STP & WTP SERVICES',
            icon: '💧',
            description: 'Sewage and Water Treatment Plant operation and maintenance',
            longDescription: 'To run the STP / WTP, the vital facility and devices are: electrical facility such as power receiving and distribution facility, power generation facility, variable speed control equipment and rotating machinery and other units such as various type water quality measuring devices, industrial measuring units. The process control system conducts automatic control based on such facility and devices. Our system makes the total monitoring of such process control systems.',
            points: [
                'We will assist you with all of your loading and unloading service needs, from beginning to end. Loading and unloading of the goods will take place under the guidance of skilled labours.',
                'We take full responsibility for the safe transportation right from the customers\' doorstep to the final designation',
                'Loading and unloading of the goods is of huge importance, proper coordination and sequence should be followed',
                'Our essentials carton is especially popular for safely conveying items such as furniture hardware, electronic equipments, etc',
                'Clothing is placed carefully into hanging wardrobes or flat wardrobes.',
                'Crates and casings are built specifically for items that require special protection during international transport',
                'The result comes in the form of the best possible output and the utmost satisfaction of the customers.'
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCA1.3OS00IDQgMS43OSA0IDQgNC00LTEuNzktNC00LTR6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-10"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Technical Services</h1>
                        <p className="text-xl text-orange-100 mb-4">Electro Mechanical Maintenance</p>
                        <p className="text-lg text-orange-200 max-w-3xl mx-auto">
                            Electrical, A/C, Plumbing, Carpentry, WTP & STP Plant
                        </p>
                        <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
                    </motion.div>
                </div>
            </section>

            {/* Services Navigation */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technical Services</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Expert technical solutions for all your facility management needs
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                onClick={() => setActiveService(index)}
                                className={`cursor-pointer rounded-xl p-6 transition-all duration-300 ${activeService === index
                                    ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-xl scale-105'
                                    : 'bg-gradient-to-br from-gray-50 to-orange-50 hover:shadow-lg hover:-translate-y-1'
                                    }`}
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className={`text-lg font-bold mb-2 ${activeService === index ? 'text-white' : 'text-gray-900'}`}>
                                    {service.name}
                                </h3>
                                <p className={`text-sm ${activeService === index ? 'text-orange-100' : 'text-gray-600'}`}>
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
                        className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-10 md:p-14 shadow-xl"
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
                                            <svg className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {services[activeService].points && (
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Service Details:</h4>
                                <div className="space-y-4">
                                    {services[activeService].points.map((point, idx) => (
                                        <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4">
                                            <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                                {idx + 1}
                                            </div>
                                            <p className="text-gray-700 flex-1">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Technical Services?</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Expert Technicians',
                                description: 'Highly trained and experienced professionals',
                                icon: '👨‍🔧'
                            },
                            {
                                title: 'Quick Response',
                                description: 'Fast turnaround time for repairs and maintenance',
                                icon: '⚡'
                            },
                            {
                                title: 'Cost-Effective',
                                description: 'Competitive pricing with quality service',
                                icon: '💰'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Need Technical Services?
                        </h2>
                        <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
                            Get expert technical support for all your facility management needs
                        </p>
                        <a
                            href="/#contact"
                            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get Expert Advice
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default TechnicalServicesPage
