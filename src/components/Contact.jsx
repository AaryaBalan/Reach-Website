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
        <section id="contact" className="py-20 lg:py-28 bg-white font-['Poppins']">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-[#0d9488]/10 text-[#0d9488] text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
                        Contact Us
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
                        Get in Touch With Us
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        We are here to help you with all your facility management needs.
                    </p>
                </div>

                <div className="grid xl:grid-cols-3 gap-8 lg:gap-12 mb-16">
                    {/* Left Column - General Info & Form */}
                    <div className="xl:col-span-1 space-y-8">
                        {/* Address Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-[#1e3a5f] mb-6 text-lg">Contact Information</h3>
                            <div className="space-y-6">
                                {mainContacts.map((info, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center text-[#0d9488] flex-shrink-0">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-medium mb-1">{info.title}</p>
                                            {info.link ? (
                                                <a href={info.link} className="text-[#1e3a5f] font-medium hover:text-[#0d9488] transition-colors">
                                                    {info.content}
                                                </a>
                                            ) : (
                                                <p className="text-[#1e3a5f] font-medium text-sm leading-relaxed">{info.content}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <p className="text-sm text-gray-400 font-medium mb-3">Department Emails</p>
                                <div className="flex flex-wrap gap-2">
                                    {emails.map((email, idx) => (
                                        <a href={`mailto:${email}`} key={idx} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-md hover:bg-[#0d9488] hover:text-white transition-colors border border-gray-100">
                                            {email}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Message Form */}
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0d9488]"
                                    required
                                />
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0d9488]"
                                    required
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows={3}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0d9488]"
                                    required
                                />
                                <button type="submit" className="w-full py-3 bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-[#162c46] transition-colors text-sm">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column - Team Grid */}
                    <div className="xl:col-span-2 space-y-8">
                        <div>
                            <h3 className="font-bold text-[#1e3a5f] mb-6 flex items-center gap-2">
                                <span className="w-2 h-6 bg-[#0d9488] rounded-full"></span>
                                Key Management
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {personnel.map((person, index) => (
                                    <div key={index} className={`p-5 rounded-xl border transition-all duration-300 ${person.highlight ? 'bg-white border-[#0d9488]/30 shadow-md hover:shadow-lg' : 'bg-gray-50 border-gray-100 hover:bg-white hover:shadow-md'}`}>
                                        <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${person.highlight ? 'text-[#0d9488]' : 'text-gray-500'}`}>
                                            {person.role}
                                        </p>
                                        <h4 className="text-lg font-bold text-[#1e3a5f] mb-1">{person.name}</h4>
                                        <a href={`tel:${person.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-[#0d9488] text-sm group">
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            {person.phone}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-[#1e3a5f] mb-6 flex items-center gap-2">
                                <span className="w-2 h-6 bg-[#0d9488] rounded-full"></span>
                                Technical Leads
                            </h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                {technicalTeam.map((tech, index) => (
                                    <div key={index} className="bg-white p-5 rounded-xl border border-gray-100 hover:shadow-lg hover:border-[#0d9488]/30 transition-all duration-300">
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#1e3a5f] mb-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{tech.role}</p>
                                        <h4 className="font-bold text-[#1e3a5f] text-sm mb-2">{tech.name}</h4>
                                        <a href={`tel:${tech.phone}`} className="text-xs text-[#0d9488] font-medium hover:underline block">
                                            {tech.phone}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-gray-100 rounded-2xl overflow-hidden h-64 border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.6200685987!2d80.208119!3d13.009848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52676b1f3c3a9f%3A0xc9c1b3f3f3f3f3f3!2sMathur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
