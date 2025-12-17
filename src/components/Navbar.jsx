import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'HOME', href: '#home' },
        { name: 'ABOUT US', href: '#about' },
        { name: 'SERVICES', href: '#services' },
        { name: 'REPAIR & MAINTENANCE', href: '#repair' },
        { name: 'TRAINING & JOBS', href: '#training' },
        { name: 'CONTACT US', href: '#contact' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-['Poppins'] ${isScrolled
                ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-white/20 py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo - Premium Glass Effect */}
                    <div className="flex-shrink-0">
                        <a href="#home" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#623004] to-[#C1311C] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out border border-white/20">
                                <span className="text-white font-extrabold text-2xl tracking-tight">R</span>
                            </div>
                            <div className="hidden sm:block">
                                <span className={`font-bold text-xl block leading-none tracking-tight transition-colors duration-300 ${isScrolled ? 'text-[#623004]' : 'text-white'}`}>
                                    REACH
                                </span>
                                <span className={`font-medium text-[11px] uppercase tracking-[0.2em] block mt-1 transition-colors duration-300 ${isScrolled ? 'text-[#C1311C]' : 'text-white/80'}`}>
                                    Facility Management
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Navigation - Professional Spacing */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={`px-4 py-2 text-[13px] font-bold tracking-wide rounded-full transition-all duration-300 ${isScrolled
                                    ? 'text-gray-600 hover:text-[#623004] hover:bg-gray-50'
                                    : 'text-white/90 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, '#contact')}
                            className={`ml-6 px-7 py-3 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${isScrolled
                                ? 'bg-[#623004] text-white hover:bg-[#162c46]'
                                : 'bg-white text-[#623004] hover:bg-gray-50'
                                }`}
                        >
                            Get Quote
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2.5 rounded-xl transition-all duration-300 ${isScrolled ? 'text-[#623004] bg-gray-50' : 'text-white bg-white/10 backdrop-blur-md'
                                }`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation - Glassmorphism Card */}
                <div
                    className={`lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden origin-top ${isMenuOpen ? 'max-h-[32rem] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
                        }`}
                >
                    <div className="p-2 space-y-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="block px-6 py-4 text-sm font-bold text-gray-700 hover:text-[#C1311C] hover:bg-red-50/50 rounded-xl transition-all duration-200 border border-transparent hover:border-red-100/50"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="p-2 pt-4 border-t border-gray-100 mt-2">
                            <a
                                href="#contact"
                                onClick={(e) => scrollToSection(e, '#contact')}
                                className="block w-full py-4 text-center bg-[#623004] text-white font-bold rounded-xl hover:bg-[#162c46] shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                            >
                                Get Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
