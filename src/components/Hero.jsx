import React, { useState, useEffect } from 'react';
import carousel1 from '../assets/carousel-1.png';
import carousel2 from '../assets/carousel-2.png';
import carousel3 from '../assets/carousel-3.jpg';
import carousel4 from '../assets/carousel-4.png';
import carousel5 from '../assets/carousel-5.jpg';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { image: carousel1, alt: 'Professional Housekeeping Services' },
        { image: carousel2, alt: 'HVAC and Electrical Maintenance' },
        { image: carousel3, alt: 'Commercial Facility Cleaning' },
        { image: carousel4, alt: 'Reception and Painting Services' },
        { image: carousel5, alt: 'Landscaping and Garden Maintenance' },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // 6s duration for better viewing
        return () => clearInterval(timer);
    }, [slides.length]);

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section id="home" className="relative h-screen flex items-center overflow-hidden font-['Poppins']">
            {/* Background Image Carousel with Ken Burns Effect */}
            <div className="absolute inset-0 bg-black">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        {/* Ken Burns Zoom Animation */}
                        <div className={`w-full h-full transition-transform duration-[10000ms] ease-linear transform ${index === currentSlide ? 'scale-110' : 'scale-100'}`}>
                            <img
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-full object-cover opacity-100"
                            />
                        </div>
                        {/* Cinematic Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-brand-900/50 via-brand-900/20 to-transparent"></div>
                        <div className="absolute inset-0 bg-linear-to-t from-brand-900/40 via-transparent to-transparent"></div>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in-up hover:bg-white/15 transition-colors cursor-default">
                        <span className="relative flex shrink-0 w-3 h-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-600 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-600"></span>
                        </span>
                        <span className="text-white font-semibold tracking-wide text-xs uppercase">ISO Certified Facility Management</span>
                    </div>

                    {/* Main heading - Apple Style Typography */}
                    <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold text-white leading-[1.1] mb-8 animate-fade-in-up delay-100 tracking-tight">
                        Reach New Heights in <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-600 via-brand-600 to-brand-900">
                            Facility Excellence.
                        </span>
                    </h1>

                    {/* Subsubtitle */}
                    <p className="text-lg sm:text-2xl text-gray-200 font-light leading-relaxed mb-12 max-w-2xl animate-fade-in-up delay-200">
                        We offer integrated management services, ensuring your infrastructure operates at its <strong className="text-white font-medium">highest potential</strong> through technical expertise and precise care.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up delay-300">
                        <button
                            onClick={scrollToContact}
                            className="group relative px-8 py-4 bg-brand-600 text-white font-bold rounded-2xl shadow-[0_20px_40px_-15px_rgba(13,148,136,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(13,148,136,0.5)] transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>
                            <span className="relative flex items-center gap-3 text-sm uppercase tracking-widest">
                                Get a Quote
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>
                        <a
                            href="#services"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-center text-sm uppercase tracking-widest flex items-center justify-center gap-2 group"
                        >
                            Explore Services
                            <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </a>
                    </div>

                    {/* Carousel Indicators - Refined */}
                    <div className="mt-20 flex items-center gap-3 animate-fade-in-up delay-500">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-500 rounded-full h-1.5 ${currentSlide === index ? 'w-12 bg-brand-600' : 'w-2 bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
