import React from 'react';
import workflowImage from '../assets/workflow.png';

const About = () => {
    const features = [
        'Affordable agency',
        'Agreement guarantee',
        'Simple & Efficient procedure',
        'Flexible services',
        'Leading staff providers',
        'Quality control measures',
        'Comprehensive recruitment',
        'Expert labour law advice',
        'Friendly management',
        'Dedicated Relationship Manager'
    ];

    return (
        <section id="about" className="py-10 md:py-32 bg-white relative overflow-hidden font-['Poppins']">
            {/* Cinematic Background Elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-900/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Intro Header */}
                <div className="max-w-4xl mx-auto text-center mb-10 md:mb-32">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-brand-50 border border-brand-100 mb-6 md:mb-8 animate-fade-in-up">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-600 animate-pulse"></span>
                        <span className="text-brand-900 text-[10px] md:text-sm font-bold uppercase tracking-widest">About Reach FMS</span>
                    </div>

                    <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-brand-900 mb-4 md:mb-8 leading-[1.1] tracking-tight animate-fade-in-up delay-100">
                        Professional <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-600 to-brand-400">Integrity</span>
                    </h2>

                    <p className="text-gray-600 text-base md:text-2xl leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                        We are <strong className="text-brand-900">REACH FACILITY MANAGEMENT SERVICE</strong>, redefining the standards of facility care with over <strong className="text-brand-600">5 years of excellence</strong>.
                    </p>
                </div>

                {/* Vision & Mission - Glassmorphism Cards */}
                <div className="grid lg:grid-cols-2 gap-3 md:gap-10 mb-12 md:mb-32">
                    {/* Vision Card */}
                    <div className="group relative bg-white rounded-2xl md:rounded-[2.5rem] p-5 md:p-12 shadow-lg shadow-gray-100/50 border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-500">
                        <div className="absolute inset-0 bg-linear-to-br from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-600/10 transition-colors duration-500"></div>

                        <div className="relative z-10 flex flex-row md:flex-col items-start gap-4 md:gap-0">
                            <div className="w-12 h-12 md:w-20 md:h-20 bg-brand-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-600/30 shrink-0 md:mb-8 transform group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>

                            <div>
                                <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block">Our Aspiration</span>
                                <h3 className="text-xl md:text-4xl font-bold text-brand-900 mb-2 md:mb-6">Our Vision</h3>

                                <p className="text-gray-600 text-xs md:text-lg leading-relaxed">
                                    To deliver cost-effective & customer-centric Housekeeping & Facility Management solutions, helping our Business Partners & Society build an eco-friendly environment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="group relative bg-brand-900 rounded-2xl md:rounded-[2.5rem] p-5 md:p-12 shadow-lg shadow-brand-900/20 overflow-hidden hover:shadow-2xl hover:shadow-brand-900/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-linear-to-br from-brand-800 to-brand-900"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-brand-600/30 transition-colors duration-500"></div>

                        <div className="relative z-10 flex flex-row md:flex-col items-start gap-4 md:gap-0">
                            <div className="w-12 h-12 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-inner border border-white/20 shrink-0 md:mb-8 transform group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>

                            <div className="w-full">
                                <span className="text-brand-400 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block">Our Purpose</span>
                                <h3 className="text-xl md:text-4xl font-bold text-white mb-3 md:mb-8">Our Mission</h3>

                                <ul className="space-y-1.5 md:space-y-4">
                                    {[
                                        'Quality Service',
                                        'Continuous Training',
                                        'Customer Satisfaction'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 md:gap-4 text-gray-300 font-medium text-xs md:text-lg">
                                            <span className="w-3 md:w-8 h-px bg-brand-600 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                    <li className="text-white font-bold text-xs md:text-lg mt-3 md:mt-6 pt-3 md:pt-6 border-t border-white/10 flex items-center gap-2">
                                        <span className="text-brand-400">✦</span> Time Bound Commitments & Professionalism
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Partner With Us - Modern Layout */}
                <div className="mb-12 md:mb-32">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">

                        {/* Left: Sticky Narrative */}
                        <div className="lg:w-5/12 lg:sticky top-32 h-fit">
                            <span className="text-brand-600 font-bold tracking-widest uppercase text-[10px] md:text-sm mb-2 md:mb-4 block">The Reach Advantage</span>
                            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-[1.1] mb-4 md:mb-8">
                                Redefining <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-600 to-brand-400">Excellence.</span>
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-10">
                                We go beyond standard maintenance. We engineer environments that enhance productivity, safety, and comfort through our comprehensive facility management solutions.
                            </p>

                            {/* Highlight Card */}
                            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-brand-900 p-6 md:p-8 text-white shadow-2xl group cursor-pointer">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 opacity-20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-700"></div>
                                <div className="relative z-10">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 md:mb-6 backdrop-blur-sm">
                                        <svg className="w-5 h-5 md:w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Dedicated Relationship Manager</h4>
                                    <p className="text-white/70 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">Every partner is assigned a single point of contact for seamless, personalized communication and instant resolutions.</p>
                                    <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-brand-400 group-hover:text-white transition-colors">
                                        Learn More <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Feature Grid */}
                        <div className="lg:w-7/12">
                            <div className="grid sm:grid-cols-2 gap-3 md:gap-6">
                                {features.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`p-5 md:p-8 rounded-2xl md:rounded-3xl border transition-all duration-300 group relative overflow-hidden
                                            ${index === 0
                                                ? 'sm:col-span-2 bg-brand-600 text-white border-transparent shadow-xl shadow-brand-600/20'
                                                : 'bg-white border-gray-100 hover:border-brand-200 hover:shadow-xl hover:shadow-gray-100/50 hover:-translate-y-1'
                                            }
                                        `}
                                    >
                                        <div className="relative z-10 flex items-start justify-between gap-3 md:gap-4">
                                            <div>
                                                {index === 0 && <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-white/20 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2 md:mb-4 backdrop-blur-sm">Top Priority</span>}
                                                <h5 className={`font-bold leading-tight mb-1 md:mb-2 ${index === 0 ? 'text-white text-lg md:text-3xl' : 'text-brand-900 text-sm md:text-xl'}`}>{item}</h5>
                                                {index === 0 && <p className="text-white/80 mt-2 md:mt-4 text-sm md:text-lg max-w-lg">Experience the most cost-effective and transparent pricing models in the industry.</p>}
                                            </div>

                                            <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 
                                                ${index === 0 ? 'bg-white text-brand-600' : 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white'}
                                            `}>
                                                {index === 0 ? (
                                                    <svg className="w-4 h-4 md:w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                ) : (
                                                    <svg className="w-4 h-4 md:w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats - Modern Minimalist */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 pt-10 md:pt-16 border-t border-gray-100">
                    {[
                        { label: 'Total Projects', value: '800+' },
                        { label: 'Housekeeping', value: '100+' },
                        { label: 'Pantry Services', value: '300+' },
                        { label: 'Technical', value: '150+' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-3xl md:text-6xl font-bold text-brand-900 mb-1 md:mb-2 group-hover:text-brand-600 transition-colors duration-300 font-mono tracking-tighter">{stat.value}</div>
                            <div className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-sm group-hover:text-brand-900 transition-colors duration-300">{stat.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
