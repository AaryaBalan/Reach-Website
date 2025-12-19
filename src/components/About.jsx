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
        <section id="about" className="py-24 bg-white relative overflow-hidden font-['Poppins']">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-bl-[10rem] -z-0"></div>

            <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <span className="inline-block px-4 py-1.5 bg-brand-900/5 text-brand-900 text-sm font-semibold rounded-full mb-6 uppercase tracking-[0.2em]">
                        About Reach FMS
                    </span>
                    <h2 className="text-5xl lg:text-7xl font-bold text-brand-900 mb-8 leading-tight tracking-tight">
                        Professional <span className="text-brand-600">Integrity</span>
                    </h2>
                    <p className="text-gray-600 text-xl leading-relaxed mb-6">
                        We are <strong className="text-brand-900">REACH FACILITY MANAGEMENT SERVICE</strong>, redefining the standards of facility care with over <strong className="text-brand-600">5 years of excellence</strong>.
                    </p>
                </div>

                {/* Vision & Mission Cards - Material UI Style */}
                <div className="grid lg:grid-cols-2 gap-8 mb-24 max-w-7xl mx-auto">
                    {/* Vision Card - Material Design */}
                    <div className="group bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(13,148,136,0.2)] transition-all duration-300 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-brand-600"></div>

                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-16 h-16 bg-brand-600/10 rounded-2xl flex items-center justify-center text-brand-600 shadow-sm">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                </div>
                                <div>
                                    <span className="text-gray-400 font-bold uppercase tracking-wider text-xs block mb-1">Our Aspiration</span>
                                    <h3 className="text-3xl font-bold text-brand-900">Our Vision</h3>
                                </div>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed flex-1">
                                To deliver cost-effective & customer-centric Housekeeping & Facility Management solutions, helping our Business Partners & Society build an eco-friendly environment.
                            </p>

                            <div className="mt-8 flex justify-end">
                                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 transition-all duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission Card - Material Design */}
                    <div className="group bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(30,58,95,0.2)] transition-all duration-300 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-brand-900"></div>

                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-16 h-16 bg-brand-900/10 rounded-2xl flex items-center justify-center text-brand-900 shadow-sm">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>
                                <div>
                                    <span className="text-gray-400 font-bold uppercase tracking-wider text-xs block mb-1">Our Purpose</span>
                                    <h3 className="text-3xl font-bold text-brand-900">Our Mission</h3>
                                </div>
                            </div>

                            <ul className="grid gap-3 flex-1">
                                {[
                                    'Quality Service',
                                    'Continuous Training',
                                    'Customer Satisfaction'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-600 font-medium p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-brand-900"></div>
                                        {item}
                                    </li>
                                ))}
                                <li className="text-brand-600 font-bold text-sm mt-2 flex items-center gap-1">
                                    + Time Bound Commitments & Professionalism
                                </li>
                            </ul>

                            <div className="mt-8 flex justify-end">
                                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-brand-900 group-hover:text-white group-hover:border-brand-900 transition-all duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Partner With Us - Modern Bento Grid UI */}
                <div className="mb-32 max-w-[1920px] mx-auto">

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

                        {/* Left: Sticky Narrative Panel */}
                        <div className="lg:w-1/3 lg:sticky top-32 h-fit space-y-8">
                            <div>
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-600/10 text-brand-600 text-xs font-bold uppercase tracking-widest mb-4 border border-brand-600/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
                                    The Reach Advantage
                                </span>
                                <h3 className="text-4xl lg:text-5xl font-bold text-brand-900 leading-tight mb-6">
                                    Redefining <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-900 via-brand-600 to-brand-600">Facility Excellence.</span>
                                </h3>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    We go beyond standard maintenance. We engineer environments that enhance productivity, safety, and comfort.
                                </p>
                            </div>

                            {/* Highlight Bento Block */}
                            <div className="relative group overflow-hidden rounded-[2rem] bg-brand-900 p-8 text-white shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 opacity-20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-700"></div>
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 blur-[50px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

                                <div className="relative z-10">
                                    <svg className="w-10 h-10 mb-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <h4 className="text-2xl font-bold mb-3">Dedicated Relationship Manager</h4>
                                    <p className="text-white/70 mb-6 leading-relaxed text-sm">Every partner is assigned a single point of contact for seamless, personalized communication and instant resolutions.</p>
                                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-600 hover:text-white transition-colors">
                                        Learn More <span className="text-lg">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right: Feature Masonry/Grid */}
                        <div className="lg:w-2/3">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {features.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden
                                            ${index === 0 ? 'sm:col-span-2 bg-brand-600 text-white border-transparent' : 'bg-white border-gray-100 hover:border-brand-600/30 hover:shadow-xl hover:-translate-y-1'}
                                        `}
                                    >
                                        {/* Hover Gradient for White Cards */}
                                        {index !== 0 && (
                                            <div className="absolute inset-0 bg-linear-to-br from-brand-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        )}

                                        <div className="relative z-10 flex items-start justify-between gap-4">
                                            <div>
                                                {index === 0 && <span className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2 block">Top Priority</span>}
                                                <h5 className={`font-bold text-lg leading-tight mb-2 ${index === 0 ? 'text-white text-2xl' : 'text-brand-900'}`}>{item}</h5>
                                                {index === 0 && <p className="text-white/80 mt-2 max-w-lg">Experience the most cost-effective and transparent pricing models in the industry.</p>}
                                            </div>

                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 
                                                ${index === 0 ? 'bg-white/20 text-white' : 'bg-brand-900/5 text-brand-900 group-hover:bg-brand-600 group-hover:text-white'}
                                            `}>
                                                {index === 0 ? (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                ) : (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto pt-16 border-t border-gray-200">
                    {[
                        { label: 'Total Projects', value: '800+' },
                        { label: 'Housekeeping', value: '100+' },
                        { label: 'Pantry Services', value: '300+' },
                        { label: 'Technical', value: '150+' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center group p-6 hover:bg-gray-50 rounded-2xl transition-all duration-300">
                            <div className="text-5xl lg:text-6xl font-bold text-brand-900 mb-2 group-hover:text-brand-600 transition-colors">{stat.value}</div>
                            <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
