import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#623004] text-white font-['Poppins'] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-white text-[#623004] rounded-lg flex items-center justify-center font-bold text-xl shadow-lg">R</div>
                            <div>
                                <h3 className="font-bold text-xl tracking-wide leading-none">REACH</h3>
                                <p className="text-[#C1311C] text-[10px] tracking-[0.2em] font-bold">FACILITY MANAGEMENT</p>
                            </div>
                        </div>
                        <p className="text-white/80 leading-relaxed max-w-sm">
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

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
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
