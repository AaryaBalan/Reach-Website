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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-['Poppins'] ${isScrolled
                ? 'bg-white/90 backdrop-blur-md shadow-lg py-2'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#home" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#0d9488] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                                <span className="text-white font-bold text-xl">R</span>
                            </div>
                            <div className="hidden sm:block">
                                <span className={`font-bold text-xl block leading-none transition-colors duration-300 ${isScrolled ? 'text-[#1e3a5f]' : 'text-white'}`}>
                                    REACH
                                </span>
                                <span className={`font-medium text-xs block mt-1 transition-colors duration-300 ${isScrolled ? 'text-[#0d9488]' : 'text-white/80'}`}>
                                    Facility Management
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${isScrolled
                                    ? 'text-gray-700 hover:text-[#0d9488] hover:bg-teal-50'
                                    : 'text-white/90 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, '#contact')}
                            className={`ml-4 px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${isScrolled
                                ? 'bg-[#1e3a5f] text-white hover:bg-[#162c46]'
                                : 'bg-white text-[#1e3a5f] hover:bg-gray-100'
                                }`}
                        >
                            Get Quote
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
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

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[32rem]' : 'max-h-0'
                        }`}
                >
                    <div className="p-4 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-[#0d9488] hover:bg-teal-50 rounded-xl transition-all duration-200"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-2">
                            <a
                                href="#contact"
                                onClick={(e) => scrollToSection(e, '#contact')}
                                className="block w-full py-3 text-center bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-[#162c46] transition-colors"
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
