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
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0d9488]/5 rounded-bl-[10rem] -z-0"></div>

            <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <span className="inline-block px-4 py-1.5 bg-[#1e3a5f]/5 text-[#1e3a5f] text-sm font-semibold rounded-full mb-6 uppercase tracking-[0.2em]">
                        About Reach FMS
                    </span>
                    <h2 className="text-5xl lg:text-7xl font-bold text-[#1e3a5f] mb-8 leading-tight tracking-tight">
                        Professional <span className="text-[#0d9488]">Integrity</span>
                    </h2>
                    <p className="text-gray-600 text-xl leading-relaxed mb-6">
                        We are <strong className="text-[#1e3a5f]">REACH FACILITY MANAGEMENT SERVICE</strong>, redefining the standards of facility care with over <strong className="text-[#0d9488]">5 years of excellence</strong>.
                    </p>
                </div>

                {/* Vision & Mission Cards */}
                <div className="grid lg:grid-cols-2 gap-8 mb-24 max-w-7xl mx-auto">
                    {/* Vision */}
                    <div className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:border-[#0d9488]/30 transition-all duration-300">
                        <div className="w-16 h-16 bg-[#0d9488]/10 rounded-2xl flex items-center justify-center text-[#0d9488] mb-6 group-hover:bg-[#0d9488] group-hover:text-white transition-colors">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                        <h3 className="text-3xl font-bold text-[#1e3a5f] mb-4">Our Vision</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            To deliver cost-effective & customer-centric Housekeeping & Facility Management solutions, helping our Business Partners & Society build an eco-friendly environment.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:border-[#1e3a5f]/30 transition-all duration-300">
                        <div className="w-16 h-16 bg-[#1e3a5f]/10 rounded-2xl flex items-center justify-center text-[#1e3a5f] mb-6 group-hover:bg-[#1e3a5f] group-hover:text-white transition-colors">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                        </div>
                        <h3 className="text-3xl font-bold text-[#1e3a5f] mb-4">Our Mission</h3>
                        <ul className="space-y-3">
                            {[
                                'Quality Service',
                                'Continuous Training',
                                'Customer Satisfaction',
                                'Time Bound Commitments',
                                'Professionalism'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-600 font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a5f]"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Why Choose Us & Workflow */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 max-w-7xl mx-auto">
                    <div>
                        <h3 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-8">
                            Why <span className="text-[#0d9488]">Reach FMS?</span>
                        </h3>
                        <p className="text-gray-600 text-lg mb-8 border-l-4 border-[#0d9488] pl-6">
                            Your happiness is our priority. Each client gets a <strong>Dedicated Relationship Manager</strong>.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100">
                                    <svg className="w-5 h-5 text-[#0d9488] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-gray-700 text-sm font-semibold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#0d9488]/10 to-[#1e3a5f]/10 p-4 rounded-3xl">
                        <img
                            src={workflowImage}
                            alt="Reach FMS Workflow"
                            className="w-full h-auto rounded-2xl shadow-lg bg-white"
                        />
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
                            <div className="text-5xl lg:text-6xl font-bold text-[#1e3a5f] mb-2 group-hover:text-[#0d9488] transition-colors">{stat.value}</div>
                            <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
