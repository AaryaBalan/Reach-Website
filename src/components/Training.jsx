import React from 'react';

const Training = () => {
    return (
        <section id="training" className="py-24 lg:py-32 bg-white font-['Poppins'] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left: Timeline & Narrative */}
                    <div className="relative">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0d9488]/5 text-[#0d9488] rounded-full text-[11px] font-bold tracking-[0.2em] uppercase mb-6 border border-[#0d9488]/10 animate-fade-in-up">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
                            Excellence Hub
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-8 leading-tight animate-fade-in-up delay-100">
                            Manpower <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#2dd4bf]">Training & Supply.</span>
                        </h2>

                        <p className="text-gray-500 text-lg leading-relaxed mb-16 max-w-xl animate-fade-in-up delay-200">
                            We don't just supply manpower; we architect careers. Our rigorous 3-step process ensures that every deployed professional is a true asset to your organization.
                        </p>

                        <div className="space-y-0 relative animate-fade-in-up delay-300">
                            {/* Connecting Line - Absolute */}
                            <div className="absolute left-[1.25rem] top-4 bottom-12 w-0.5 bg-gradient-to-b from-[#1e3a5f] via-[#0d9488] to-gray-200 opacity-20 hidden md:block"></div>

                            {[
                                { title: 'Sourcing', desc: 'Identifying top-tier talent from a vast, vetted pool of potential.', icon: '1' },
                                { title: 'Training', desc: 'Rigorous upskilling in soft skills, safety, and technical handling.', icon: '2' },
                                { title: 'Deployment', desc: 'Strategic placement ensuring the perfect fit for your facility.', icon: '3' }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-8 group relative pb-12 last:pb-0">
                                    <div className="relative shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-white border-2 border-[#1e3a5f]/20 flex items-center justify-center text-[#1e3a5f] font-bold text-sm shadow-sm z-10 relative group-hover:border-[#0d9488] group-hover:bg-[#0d9488] group-hover:text-white transition-all duration-500">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#0d9488] transition-colors duration-300">{step.title}</h4>
                                        <p className="text-gray-500 leading-relaxed max-w-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Floating Cards */}
                    <div className="relative pt-8 lg:pt-20 animate-fade-in-up delay-200">
                        {/* Decorative Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#0d9488]/5 to-transparent rounded-full blur-3xl -z-10"></div>

                        <div className="grid gap-6 relative z-10">
                            {/* Card 1: Training Programs */}
                            <div className="bg-white p-8 rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-1 transition-transform duration-500">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#1e3a5f]">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f]">Training Modules</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Soft Skills & Etiquette', 'Safety Protocols (HSE)', 'Chemical Handling', 'Compliance & Ethics'].map((tag, i) => (
                                        <span key={i} className="px-4 py-2 bg-gray-50 text-gray-600 text-[13px] font-semibold rounded-xl border border-gray-100 hover:bg-[#1e3a5f] hover:text-white transition-colors cursor-default">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Card 2: Placements Highlight */}
                            <div className="bg-[#1e3a5f] p-10 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#0d9488] rounded-full blur-[50px] opacity-20 -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-4">Industrial Placements</h3>
                                    <p className="text-white/70 mb-8 leading-relaxed">
                                        We connect skilled professionals with leading industries, bridging the gap between talent and opportunity.
                                    </p>
                                    <button className="inline-flex items-center gap-2 text-[#0d9488] font-bold uppercase tracking-widest text-xs group-hover:text-white transition-colors">
                                        Join Our Network <span className="text-lg">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Training;
