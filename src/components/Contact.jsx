import React, { useState } from 'react';
import bgImage from '../assets/carousel-2.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [activeTab, setActiveTab] = useState('Leadership');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const mainContacts = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Head Office',
            content: 'No.410, Alpha Flat, Temple Green Apartment, Arun Excello, Mathur, Sriperumpudhur Taluk, Kancheepuram - 602105'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Phone',
            content: '+91 9176602204',
            link: 'tel:+919176602204'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email',
            content: 'operations@reachfacility.com',
            link: 'mailto:operations@reachfacility.com'
        }
    ];

    const personnel = [
        { role: 'Founder & Proprietor', name: 'Vijayanand Sivakumar', phone: '+91 9176602203', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500', category: 'Leadership' },
        { role: 'Operations - Head', name: 'Rajalakshmi Sivakumar', phone: '+91 7373212269', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500', category: 'Leadership' },
        { role: 'Operations - Head (Laundry & PG)', name: 'Aravind Palaniswamy', phone: '+91 9840602821', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500', category: 'Leadership' },
        { role: 'Manager (PG & Laundry)', name: 'Arun Chokkanathan', phone: '+91 8667749189', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500', category: 'Leadership' },
        { role: 'Manager (Laundry)', name: 'Bablu Baitha Lagan', phone: '+91 8016306139', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500', category: 'Leadership' }
    ];

    const technicalTeam = [
        { role: 'Mechanical', name: 'Vinoth Balakrishnan', phone: '+91 9176602204', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=500', category: 'Technical Support' },
        { role: 'Electrical', name: 'Prakash Veeramani', phone: '+91 9176602204', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500', category: 'Technical Support' },
        { role: 'Plumbing', name: 'Sivasurya Ganesan', phone: '+91 9176602204', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500', category: 'Technical Support' }
    ];

    const allTeam = [...personnel, ...technicalTeam];
    const filteredTeam = activeTab === 'All' ? allTeam : allTeam.filter(m => m.category === activeTab);

    return (
        <div className="font-['Poppins']">
            <section id="contact" className="py-20 md:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Main Contact Card */}
                    <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden flex flex-col lg:flex-row mb-0">

                        {/* Left Side - Visual & Info */}
                        <div className="lg:w-5/12 relative bg-brand-900 text-white p-10 md:p-14 flex flex-col justify-between overflow-hidden">
                            {/* Background Image & Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img src={bgImage} alt="Office" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-b from-brand-900/90 to-brand-950/95"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                    Let's build something <br /> <span className="text-brand-300">great together.</span>
                                </h2>
                                <p className="text-brand-100/80 text-lg mb-12 max-w-sm">
                                    Reach out to us for a personalized quote or any facility management inquiries.
                                </p>

                                <div className="space-y-8">
                                    {mainContacts.map((info, index) => (
                                        <div key={index} className="flex gap-5 items-start">
                                            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/10">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-widest text-brand-300 mb-1">{info.title}</p>
                                                {info.link ? (
                                                    <a href={info.link} className="text-lg font-medium hover:text-white transition-colors">
                                                        {info.content}
                                                    </a>
                                                ) : (
                                                    <p className="text-base font-medium text-brand-50 leading-relaxed">{info.content}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Circles */}
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="absolute top-1/2 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="lg:w-7/12 p-10 md:p-14 lg:p-20 bg-white">
                            <h3 className="text-2xl font-bold text-brand-900 mb-8">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Your Name</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl text-brand-900 placeholder-gray-400 focus:bg-white focus:ring-4 focus:ring-brand-600/10 focus:border-brand-600 transition-all duration-300 outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl text-brand-900 placeholder-gray-400 focus:bg-white focus:ring-4 focus:ring-brand-600/10 focus:border-brand-600 transition-all duration-300 outline-none"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        type="email"
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl text-brand-900 placeholder-gray-400 focus:bg-white focus:ring-4 focus:ring-brand-600/10 focus:border-brand-600 transition-all duration-300 outline-none"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your requirements..."
                                        rows={4}
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl text-brand-900 placeholder-gray-400 focus:bg-white focus:ring-4 focus:ring-brand-600/10 focus:border-brand-600 transition-all duration-300 outline-none resize-none"
                                        required
                                    />
                                </div>
                                <button type="submit" className="w-full py-5 bg-brand-900 text-white font-bold rounded-xl shadow-xl shadow-brand-900/20 hover:shadow-2xl hover:shadow-brand-900/30 hover:-translate-y-1 hover:bg-brand-800 transition-all duration-300 text-base tracking-wide flex items-center justify-center gap-2">
                                    Send Message
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section - Full Width Dark Design */}
            <section className="bg-black py-20 md:py-32 overflow-hidden relative text-white">
                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-8 h-px bg-brand-500"></span>
                                <span className="text-brand-500 text-xs font-bold uppercase tracking-widest">Our People</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Meet Our <br /> <span className="text-gray-500">Team</span>
                            </h2>
                        </div>

                        {/* Filters - Horizontal Toggle */}
                        <div className="flex items-center bg-gray-900/50 p-1.5 rounded-full border border-gray-800">
                            {['All', 'Leadership', 'Technical Support'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab
                                            ? 'bg-white text-black shadow-lg'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid - Team Members */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredTeam.map((member, index) => (
                            <div key={index} className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-500 hover:-translate-y-1">
                                {/* Image */}
                                <div className="aspect-[4/5] overflow-hidden relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>

                                    {/* Call Button - Always Visible */}
                                    <a
                                        href={`tel:${member.phone}`}
                                        className="absolute bottom-4 right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center transition-all duration-300 hover:bg-brand-500 hover:text-white shadow-lg z-20"
                                        title="Call Now"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </a>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-5">
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">{member.name}</h3>
                                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">{member.role}</p>
                                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        {member.phone}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
