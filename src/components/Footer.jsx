import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/reach-logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        quick: [
            { name: 'Home', href: '/' },
            { name: 'About Us', href: '/about' },
            { name: 'Repair & Maintenance', href: '/repair-maintenance' },
            { name: 'Training & Jobs', href: '/training' },
            { name: 'Contact', href: '/#contact' }
        ],
        services: [
            { name: 'Soft Services', href: '/soft-services' },
            { name: 'Technical Services', href: '/technical-services' },
            { name: 'Facility Management', href: '/#services' },
            { name: 'Corporate Training', href: '/training' }
        ],
        social: [
            { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z', href: '#' },
            { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', href: '#' },
            { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', href: '#' }
        ]
    };

    return (
        <footer className="relative bg-brand-900 text-white font-['Poppins'] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-linear-to-br from-brand-950 via-brand-900 to-black z-0"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent z-10"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link to="/" className="inline-block">
                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-2xl border border-white/10 w-fit">
                                <img src={logo} alt="Reach Facility Management" className="h-10 w-auto object-contain bg-white rounded-lg p-1" />
                                <div>
                                    <h3 className="font-bold text-lg tracking-wide leading-none text-white">REACH</h3>
                                    <p className="text-brand-400 text-[10px] tracking-[0.2em] font-bold uppercase">Facility Management</p>
                                </div>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
                            Elevating standards in facility management through integrated solutions, technical expertise, and a commitment to excellence.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            {footerLinks.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white hover:border-brand-500 transition-all duration-300 group"
                                    aria-label={item.name}
                                >
                                    <svg className="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                                        <path d={item.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.quick.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="text-gray-400 hover:text-brand-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3">
                        <h4 className="font-bold text-white mb-6 text-lg">Services</h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="text-gray-400 hover:text-brand-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h4 className="font-bold text-white mb-6 text-lg">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <svg className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>
                                    No.410. Alpha Flat, Temple Green Apartment,<br />
                                    Arun Excello, Mathur Sriperumpudhur Taluk,<br />
                                    Kancheepuram - 602105
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <svg className="w-5 h-5 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <a href="mailto:reachfms@gmail.com" className="hover:text-white transition-colors">reachfms@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <svg className="w-5 h-5 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <a href="tel:+919176602204" className="hover:text-white transition-colors">+91 9176602204</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © 2017 Reach Facility Management. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
