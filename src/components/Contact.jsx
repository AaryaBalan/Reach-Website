import React, { useState } from 'react';

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
            <section id="contact" className="py-20 md:py-32 bg-brand-950 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-900/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-900/20 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        {/* Left Side - Info */}
                        <div className="lg:w-5/12 flex flex-col justify-center">
                            <div className="mb-12">
                                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                                    Contact <span className="text-brand-500">Us.</span>
                                </h2>
                                <div className="w-20 h-1.5 bg-brand-500 rounded-full mb-8"></div>
                            </div>

                            <div className="space-y-6">
                                {/* Address */}
                                <div>
                                    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        Head Office
                                    </h3>
                                    <p className="text-gray-300 text-base leading-snug pl-6 border-l border-brand-500/30">
                                        No.410, Alpha Flat, Temple Green Apartment,<br />
                                        Arun Excello, Mathur, Sriperumpudhur Taluk,<br />
                                        Kancheepuram - 602105
                                    </p>
                                </div>

                                {/* Contacts */}
                                <div>
                                    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        Contact Details
                                    </h3>
                                    <div className="space-y-2 pl-6 border-l border-brand-500/30">
                                        <a href="mailto:operations@reachfacility.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                                            <span className="text-base">operations@reachfacility.com</span>
                                        </a>
                                        <a href="tel:+919176602204" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                                            <span className="text-base">+91 9176602204</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Socials Placeholder - Optional based on design */}
                                <div className="flex gap-4 pt-4">
                                    {/* Add social icons here if needed */}
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="lg:w-7/12 relative">
                            {/* Bracket Accents */}
                            <div className="absolute -top-6 -left-6 w-16 h-16 border-t-4 border-l-4 border-brand-500 rounded-tl-xl hidden md:block"></div>
                            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-4 border-r-4 border-brand-500 rounded-br-xl hidden md:block"></div>

                            {/* Form Card */}
                            <div className="bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-800 shadow-2xl relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-300 ml-1">Name</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-gray-700 rounded-lg text-white px-4 py-3 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none transition-all placeholder-gray-500"
                                            required
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-300 ml-1">Email</label>
                                            <input
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                type="email"
                                                className="w-full bg-white/5 border border-gray-700 rounded-lg text-white px-4 py-3 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none transition-all placeholder-gray-500"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-300 ml-1">Phone</label>
                                            <input
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 43210"
                                                className="w-full bg-white/5 border border-gray-700 rounded-lg text-white px-4 py-3 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none transition-all placeholder-gray-500"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-300 ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your requirements..."
                                            rows={4}
                                            className="w-full bg-white/5 border border-gray-700 rounded-lg text-white px-4 py-3 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none transition-all placeholder-gray-500 resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <button type="submit" className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg shadow-lg shadow-brand-900/20 transition-all duration-300 uppercase tracking-wider text-sm transform hover:-translate-y-0.5">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
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
