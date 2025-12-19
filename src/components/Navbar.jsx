import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/reach-logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle hash scrolling when landing on homepage from another page
    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const navItems = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT US', href: '/about' },
        {
            name: 'SERVICES',
            submenu: [
                { name: 'Soft Services', href: '/soft-services' },
                { name: 'Technical Services', href: '/technical-services' }
            ]
        },
        { name: 'REPAIR & MAINTENANCE', href: '/repair-maintenance' },
        { name: 'TRAINING & JOBS', href: '/training' },
        { name: 'CONTACT US', href: '/#contact' },
    ];

    const handleNavigation = (e, href) => {
        e.preventDefault();
        setIsMenuOpen(false);

        if (href.startsWith('/#')) {
            const hash = href.substring(1);
            if (location.pathname === '/') {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate(href); // Navigate to homepage with hash
            }
        } else {
            navigate(href); // Navigate to other pages
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 font-['Poppins'] ${isScrolled || location.pathname !== '/'
                    ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-white/20 py-3'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo - Premium Glass Effect */}
                        <div className="flex-shrink-0">
                            <a href="/" onClick={(e) => handleNavigation(e, '/#home')} className="flex items-center gap-3 group">
                                <img src={logo} alt="Reach Facility Management" className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                            </a>
                        </div>

                        {/* Desktop Navigation - Professional Spacing */}
                        <div className="hidden lg:flex items-center gap-2">
                            {navItems.map((item) => (
                                item.submenu ? (
                                    // Services dropdown menu
                                    <div
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() => setServicesDropdownOpen(true)}
                                        onMouseLeave={() => setServicesDropdownOpen(false)}
                                    >
                                        <button
                                            className={`px-4 py-2 text-[13px] font-bold tracking-wide rounded-full transition-all duration-300 flex items-center gap-1 ${isScrolled || location.pathname !== '/'
                                                ? 'text-gray-600 hover:text-brand-900 hover:bg-gray-50'
                                                : 'text-white/90 hover:text-white hover:bg-white/10'
                                                }`}
                                        >
                                            {item.name}
                                            <svg className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* Dropdown menu */}
                                        <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                            }`}>
                                            {item.submenu.map((subItem, index) => (
                                                <a
                                                    key={index}
                                                    href={subItem.href}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setServicesDropdownOpen(false);
                                                        handleNavigation(e, subItem.href);
                                                    }}
                                                    className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-linear-to-r hover:from-brand-900 hover:to-brand-600 hover:text-white transition-all duration-200"
                                                >
                                                    {subItem.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    // Regular menu item
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => handleNavigation(e, item.href)}
                                        className={`px-4 py-2 text-[13px] font-bold tracking-wide rounded-full transition-all duration-300 ${isScrolled || location.pathname !== '/'
                                            ? 'text-gray-600 hover:text-brand-900 hover:bg-gray-50'
                                            : 'text-white/90 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                )
                            ))}
                            <button
                                onClick={(e) => handleNavigation(e, '/#contact')}
                                className={`ml-6 px-7 py-3 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${isScrolled || location.pathname !== '/'
                                    ? 'bg-brand-900 text-white hover:bg-brand-950'
                                    : 'bg-white text-brand-900 hover:bg-gray-50'
                                    }`}
                            >
                                Get Quote
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`p-2.5 rounded-xl transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'text-brand-900 bg-gray-50' : 'text-white bg-white/10 backdrop-blur-md'
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
                </div>
            </nav>

            {/* Mobile Navigation - Portal to Body */}
            {createPortal(
                <div
                    className={`lg:hidden fixed inset-x-0 bottom-0 bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-2xl transition-all duration-500 ease-in-out overflow-y-auto z-[9999] ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                        }`}
                    style={{ top: isScrolled || location.pathname !== '/' ? '88px' : '104px' }}
                >
                    <div className="p-2 space-y-1">
                        {navItems.map((item) => (
                            item.submenu ? (
                                // Services dropdown for mobile
                                <div key={item.name}>
                                    <button
                                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                                        className="w-full flex items-center justify-between px-6 py-4 text-sm font-bold text-gray-700 hover:text-brand-600 hover:bg-brand-50/50 rounded-xl transition-all duration-200 border border-transparent hover:border-brand-100/50"
                                    >
                                        <span>{item.name}</span>
                                        <svg className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {/* Mobile submenu */}
                                    <div className={`overflow-hidden transition-all duration-200 ${servicesDropdownOpen ? 'max-h-40' : 'max-h-0'}`}>
                                        <div className="pl-4 space-y-1 mt-1">
                                            {item.submenu.map((subItem, index) => (
                                                <a
                                                    key={index}
                                                    href={subItem.href}
                                                    onClick={(e) => {
                                                        handleNavigation(e, subItem.href);
                                                        setServicesDropdownOpen(false);
                                                    }}
                                                    className="block px-6 py-3 text-sm font-semibold text-gray-600 hover:text-brand-600 hover:bg-brand-50/50 rounded-lg transition-all duration-200"
                                                >
                                                    {subItem.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // Regular mobile menu item
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavigation(e, item.href)}
                                    className="block px-6 py-4 text-sm font-bold text-gray-700 hover:text-brand-600 hover:bg-brand-50/50 rounded-xl transition-all duration-200 border border-transparent hover:border-brand-100/50"
                                >
                                    {item.name}
                                </a>
                            )
                        ))}
                        <div className="p-2 pt-4 border-t border-gray-100 mt-2">
                            <button
                                onClick={(e) => handleNavigation(e, '/#contact')}
                                className="block w-full py-4 text-center bg-brand-900 text-white font-bold rounded-xl hover:bg-brand-950 shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                            >
                                Get Quote
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default Navbar;
