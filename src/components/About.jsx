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

                {/* Vision & Mission Cards - Unique Styling */}
                <div className="grid lg:grid-cols-2 gap-10 mb-24 max-w-7xl mx-auto">
                    {/* Vision Card */}
                    <div className="group relative bg-white p-10 rounded-[2rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-gray-100">
                        {/* Decorative Background Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0d9488]/20 to-transparent rounded-bl-[10rem] -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0d9488]/5 rounded-tr-[5rem] -ml-10 -mb-10"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center text-[#0d9488] relative overflow-hidden group-hover:shadow-[#0d9488]/20 transition-all duration-300">
                                    <div className="absolute inset-0 bg-[#0d9488]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    <svg className="w-10 h-10 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                </div>
                                <div>
                                    <span className="text-[#0d9488] font-bold tracking-widest uppercase text-xs mb-1 block">Future Goal</span>
                                    <h3 className="text-4xl font-bold text-[#1e3a5f]">Our Vision</h3>
                                </div>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed relative">
                                <span className="text-6xl absolute -top-4 -left-2 text-[#0d9488]/10 font-serif">"</span>
                                To deliver cost-effective & customer-centric Housekeeping & Facility Management solutions, helping our Business Partners & Society build an eco-friendly environment.
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="group relative bg-[#1e3a5f] p-10 rounded-[2rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-500 text-white">
                        {/* Decorative Pattern */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0d9488] opacity-20 blur-[80px] rounded-full -mr-20 -mt-20"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white border border-white/20">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>
                                <div>
                                    <span className="text-[#0d9488] font-bold tracking-widest uppercase text-xs mb-1 block">Daily Purpose</span>
                                    <h3 className="text-4xl font-bold text-white">Our Mission</h3>
                                </div>
                            </div>

                            <ul className="grid gap-4">
                                {[
                                    'Quality Service',
                                    'Continuous Training',
                                    'Customer Satisfaction',
                                    'Time Bound Commitments',
                                    'Professionalism'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-white/90 font-medium p-3 rounded-xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/10">
                                        <div className="w-8 h-8 rounded-full bg-[#0d9488] flex items-center justify-center text-xs font-bold shadow-lg">
                                            {idx + 1}
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us - Redesigned */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-32 max-w-7xl mx-auto">

                    {/* Left Panel: Sticky Content */}
                    <div className="lg:col-span-5 lg:sticky top-32">
                        <span className="text-[#0d9488] font-bold tracking-widest uppercase text-sm mb-4 block">The Reach Advantage</span>
                        <h3 className="text-4xl lg:text-6xl font-bold text-[#1e3a5f] mb-8 leading-tight">
                            Why Partner <br />With <span className="text-[#0d9488]">Us?</span>
                        </h3>

                        {/* Highlight Box */}
                        <div className="bg-[#1e3a5f] text-white p-8 rounded-3xl shadow-xl mb-12 relative overflow-hidden group transform hover:scale-[1.02] transition-transform duration-500">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#0d9488] rounded-full blur-[60px] opacity-20 -mr-10 -mt-10"></div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-[#0d9488]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h4 className="text-xl font-bold mb-3">Client First Philosophy</h4>
                                <p className="text-white/80 leading-relaxed">
                                    Your happiness is our priority. That's why every client gets a <strong className="text-white border-b-2 border-[#0d9488]">Dedicated Relationship Manager</strong> to ensure seamless communication.
                                </p>
                            </div>
                        </div>

                        {/* Workflow Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
                            <img
                                src={workflowImage}
                                alt="Reach FMS Protocol"
                                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-transparent to-transparent flex items-end p-8">
                                <div>
                                    <span className="text-[#0d9488] text-xs font-bold uppercase tracking-wider block mb-1">Our Process</span>
                                    <span className="text-white font-bold text-lg">Streamlined Workflow System</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Feature Grid */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 pt-8">
                        {features.map((item, index) => (
                            <div key={index} className="p-6 bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-xl hover:border-[#0d9488]/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-[#1e3a5f] mb-4 group-hover:bg-[#0d9488] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h5 className="font-bold text-[#1e3a5f] text-lg leading-tight group-hover:text-[#0d9488] transition-colors">{item}</h5>
                            </div>
                        ))}
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
