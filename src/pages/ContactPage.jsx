import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
        alert('Thank you for contacting us! We will get back to you soon.')
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const positions = [
        { title: 'Founder & Proprietor', icon: '👔' },
        { title: 'Operations - Head', icon: '📊' },
        { title: 'Operations - Head Laundry & Paying Guest & Serviced Apartment', icon: '🏨' },
        { title: 'Manager Paying Guest & Laundry', icon: '🔑' },
        { title: 'Manager Laundry', icon: '🧺' },
        { title: 'Mechanical', icon: '⚙️' },
        { title: 'Electrical', icon: '⚡' },
        { title: 'Plumbing', icon: '🚿' }
    ]

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-12 md:py-24 bg-linear-to-br from-brand-600 via-brand-500 to-brand-400 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCA1LjNOS00IDQgMS43OSA0IDQgNC00LTEuNzktNC00LTR6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-10"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl text-brand-100 max-w-3xl mx-auto">
                            Get in touch with our team for all your facility management needs
                        </p>
                        <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-linear-to-br from-gray-50 to-brand-50 rounded-2xl p-6 md:p-10 shadow-xl">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition-colors"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition-colors"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Service Interested In
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition-colors"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="housekeeping">Housekeeping Management</option>
                                            <option value="cafeteria">Pantry & Cafeteria Management</option>
                                            <option value="gardening">Gardening & Landscaping</option>
                                            <option value="pest">Pest Control</option>
                                            <option value="security">Security Services</option>
                                            <option value="electrical">Electrical Services</option>
                                            <option value="plumbing">Plumbing Services</option>
                                            <option value="hvac">HVAC Services</option>
                                            <option value="training">Training & Job Placements</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition-colors resize-none"
                                            placeholder="Tell us about your requirements..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-linear-to-r from-brand-600 to-brand-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-brand-700 hover:to-brand-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                                    <p className="text-gray-600 text-lg mb-8">
                                        We're here to help with all your facility management needs. Reach out to us through any of the channels below.
                                    </p>
                                </div>

                                {/* Contact Cards */}
                                <div className="grid gap-6">
                                    <div className="bg-linear-to-br from-brand-50 to-brand-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                                <p className="text-gray-600">info@reachfacility.com</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-linear-to-br from-brand-50 to-brand-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                                                <p className="text-gray-600">+91 XXXXX XXXXX</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-linear-to-br from-brand-50 to-brand-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                                                <p className="text-gray-600">Chennai, Tamil Nadu, India</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-linear-to-br from-brand-50 to-brand-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-1">Website</h3>
                                                <p className="text-gray-600">www.reachfacility.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Positions Section */}
            <section className="py-12 md:py-20 bg-linear-to-br from-gray-50 to-brand-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team Structure</h2>
                        <p className="text-lg text-gray-600">
                            Dedicated professionals managing every aspect of facility services
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {positions.map((position, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="text-4xl mb-4 text-center">{position.icon}</div>
                                <h3 className="text-sm font-bold text-gray-900 text-center">{position.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-16 bg-linear-to-r from-brand-600 to-brand-500">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Get A Quote With Experts Advice
                        </h2>
                        <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
                            Technical, Housekeeping, Security Maintenance
                        </p>
                        <p className="text-2xl font-bold text-white italic">
                            "WE ARE HAPPY WHEN YOU ARE HAPPY"
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ContactPage
