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
        }, 5000); // Slower interval for better viewing
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
            {/* Background Image Carousel */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                        />
                        {/* Professional Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/95 via-[#1e3a5f]/80 to-transparent"></div>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in-up">
                        <span className="w-2 h-2 bg-[#0d9488] rounded-full animate-pulse"></span>
                        <span className="text-white font-medium tracking-wide text-sm">ISO Certified Facility Management</span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
                        Reach New Heights in
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#5eead4]">
                            Facility Excellence
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl animate-fade-in-up delay-200">
                        We offer a wide range of management services, from technical maintenance to soft services,
                        ensuring your infrastructure operates at its highest potential.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                        <button
                            onClick={scrollToContact}
                            className="group px-8 py-4 bg-[#0d9488] text-white font-bold rounded-xl shadow-lg shadow-teal-900/20 hover:bg-[#0f766e] transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <span className="flex items-center gap-2">
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
                            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                        >
                            Explore Services
                        </a>
                    </div>

                    {/* Carousel Indicators */}
                    <div className="mt-16 flex items-center gap-4 animate-fade-in-up delay-500">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${currentSlide === index ? 'w-12 h-1.5 bg-[#0d9488]' : 'w-2 h-2 bg-white/40 hover:bg-white/60'
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
