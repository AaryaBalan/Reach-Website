import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Head Office',
            content: 'No.410, Alpha Flat, Temple Green Apartment, Arun Excello, Mathur, Sriperumpudhur Taluk, Kancheepuram - 602105'
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Office Phone',
            content: '+91 9176602204',
            link: 'tel:+919176602204'
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email',
            content: 'operations@reachfacility.com',
            link: 'mailto:operations@reachfacility.com'
        }
    ];

    const emails = [
        'operations@reachfacility.com',
        'career@reachfacility.com',
        'hr@reachfacility.com',
        'reachfms@gmail.com'
    ];

    const personnel = [
        {
            role: 'Founder & Proprietor',
            name: 'Vijayanand Sivakumar',
            phone: '+91 9176602203',
            highlight: true
        },
        {
            role: 'Operations - Head',
            name: 'Rajalakshmi Sivakumar',
            phone: '+91 7373212269',
            highlight: true
        },
        {
            role: 'Operations - Head (Laundry & PG)',
            name: 'Aravind Palaniswamy',
            phone: '+91 9840602821',
            highlight: true
        },
        {
            role: 'Manager (PG & Laundry)',
            name: 'Arun Chokkanathan',
            phone: '+91 8667749189'
        },
        {
            role: 'Manager (Laundry)',
            name: 'Bablu Baitha Lagan',
            phone: '+91 8016306139'
        }
    ];

    const technicalTeam = [
        { role: 'Mechanical', name: 'Vinoth Balakrishnan', phone: '+91 9176602204' },
        { role: 'Electrical', name: 'Prakash Veeramani', phone: '+91 9176602204' },
        { role: 'Plumbing', name: 'Sivasurya Ganesan', phone: '+91 9176602204' }
    ];

    return (
        <section id="contact" className="py-24 lg:py-32 bg-white font-['Poppins']">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#C1311C]/5 text-[#C1311C] rounded-full text-[11px] font-bold tracking-[0.2em] uppercase mb-6 border border-[#C1311C]/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C1311C]"></span>
                        Get in Touch
                    </span>
                    <h2 className="text-4xl lg:text-6xl font-bold text-[#623004] mb-6 tracking-tight">
                        Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1311C] to-[#C1311C]">Conversation.</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                        We are here to help you with all your facility management needs. Reach out to us for a personalized quote.
                    </p>
                </div>

                <div className="grid xl:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column - Contact Info & Form (Span 5) */}
                    <div className="xl:col-span-5 space-y-8 animate-fade-in-up delay-100">
                        {/* Address & Info Card */}
                        <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#623004]/5 rounded-full blur-2xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150"></div>

                            <h3 className="font-bold text-[#623004] mb-8 text-xl relative z-10">Contact Information</h3>
                            <div className="space-y-8 relative z-10">
                                {mainContacts.map((info, index) => (
                                    <div key={index} className="flex gap-5 group/item">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#623004] shadow-sm border border-gray-100 shrink-0 group-hover/item:border-[#C1311C]/30 group-hover/item:text-[#C1311C] transition-all duration-300">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">{info.title}</p>
                                            {info.link ? (
                                                <a href={info.link} className="text-[#623004] font-medium hover:text-[#C1311C] transition-colors leading-relaxed block">
                                                    {info.content}
                                                </a>
                                            ) : (
                                                <p className="text-[#623004] font-medium text-sm leading-relaxed text-balance">{info.content}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Message Form */}
                        <div className="bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100 backdrop-blur-sm">
                            <h3 className="font-bold text-[#623004] mb-6 text-xl">Quick Enquiry</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl text-sm font-medium text-[#623004] placeholder-gray-400 focus:ring-4 focus:ring-[#C1311C]/10 focus:border-[#C1311C] transition-all duration-300 outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl text-sm font-medium text-[#623004] placeholder-gray-400 focus:ring-4 focus:ring-[#C1311C]/10 focus:border-[#C1311C] transition-all duration-300 outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        rows={3}
                                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl text-sm font-medium text-[#623004] placeholder-gray-400 focus:ring-4 focus:ring-[#C1311C]/10 focus:border-[#C1311C] transition-all duration-300 outline-none resize-none"
                                        required
                                    />
                                </div>
                                <button type="submit" className="w-full py-4 bg-[#623004] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#162c46] transition-all duration-300 text-sm tracking-wide">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column - Team Grid & Interaction (Span 7) */}
                    <div className="xl:col-span-7 space-y-8 animate-fade-in-up delay-200">

                        {/* Key Management Bento Grid */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-px bg-gray-200 flex-1"></div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Leadership Team</h3>
                                <div className="h-px bg-gray-200 flex-1"></div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                {personnel.map((person, index) => (
                                    <div key={index} className={`group p-6 rounded-2xl border transition-all duration-300 ${person.highlight
                                        ? 'bg-white border-gray-100 shadow-sm hover:border-[#C1311C]/30 hover:shadow-lg'
                                        : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-100 hover:shadow-md'}`}>

                                        <div className="flex justify-between items-start mb-2">
                                            <p className={`text-[10px] font-bold uppercase tracking-widest ${person.highlight ? 'text-[#C1311C]' : 'text-gray-400'}`}>
                                                {person.role}
                                            </p>
                                            {person.highlight && <div className="w-2 h-2 rounded-full bg-[#C1311C]"></div>}
                                        </div>

                                        <h4 className="text-lg font-bold text-[#623004] mb-3">{person.name}</h4>

                                        <a href={`tel:${person.phone}`} className="inline-flex items-center gap-2 text-sm text-gray-500 font-medium group-hover:text-[#C1311C] transition-colors">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            {person.phone}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 pt-4">
                            {/* Emails List */}
                            <div className="bg-white p-6 rounded-2xl border border-gray-100">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Direct Lines</h3>
                                <ul className="space-y-3">
                                    {emails.map((email, idx) => (
                                        <li key={idx}>
                                            <a href={`mailto:${email}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                                                <div className="w-8 h-8 rounded-full bg-[#623004]/5 flex items-center justify-center text-[#623004] group-hover:bg-[#623004] group-hover:text-white transition-all duration-300">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                </div>
                                                <span className="text-sm font-medium text-gray-600 group-hover:text-[#623004]">{email}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technical Leads Compact Grid */}
                            <div className="space-y-4">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Technical Support</h3>
                                <div className="space-y-3">
                                    {technicalTeam.map((tech, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-[#C1311C]/30 transition-all duration-300">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">{tech.role}</p>
                                                <h4 className="font-bold text-[#623004] text-sm">{tech.name}</h4>
                                            </div>
                                            <a href={`tel:${tech.phone}`} className="w-8 h-8 rounded-full bg-[#C1311C]/10 flex items-center justify-center text-[#C1311C] hover:bg-[#C1311C] hover:text-white transition-all">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Map - Premium Rounded */}
                        <div className="bg-gray-100 rounded-[2rem] overflow-hidden h-64 border border-gray-200 shadow-inner mt-4 relative group">
                            <div className="absolute inset-0 border-4 border-white/50 rounded-[2rem] pointer-events-none z-10 transition-colors group-hover:border-white/20"></div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.6200685987!2d80.208119!3d13.009848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52676b1f3c3a9f%3A0xc9c1b3f3f3f3f3f3!2sMathur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location Map"
                                className="transition-all duration-700 group-hover:filter-none group-hover:scale-105"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
