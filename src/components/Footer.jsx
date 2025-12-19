import React from 'react';
import logo from '../assets/reach-logo.png';

const Footer = () => {
    return (
        <footer className="bg-brand-900 text-white font-['Poppins'] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 text-center md:text-left">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <img src={logo} alt="Reach Facility Management" className="h-12 w-auto object-contain bg-white rounded-lg p-1" />
                            <div>
                                <h3 className="font-bold text-xl tracking-wide leading-none">REACH</h3>
                                <p className="text-brand-600 text-[10px] tracking-[0.2em] font-bold">FACILITY MANAGEMENT</p>
                            </div>
                        </div>
                        <p className="text-white/80 leading-relaxed max-w-sm mx-auto md:mx-0">
                            Providing top-tier facility management services to creates clean, safe, and efficient environments for businesses to thrive.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.split(' ')[0].toLowerCase()}`} className="text-gray-300 hover:text-white hover:underline transition-all">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
                        <ul className="space-y-3">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-300 hover:text-white hover:underline transition-all">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-center md:text-left gap-4 md:gap-0">
                    <p className="text-gray-400 text-sm">© 2024 Reach Facility Management Service. All rights reserved.</p>
                    <div className="mt-4 md:mt-0">
                        <span className="text-gray-500 text-xs">Professional Facility Care</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
