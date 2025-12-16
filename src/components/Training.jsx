import React from 'react';

const Training = () => {
    return (
        <section id="training" className="py-24 bg-white font-['Poppins']">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[#0d9488] font-bold tracking-widest uppercase mb-4 block">Excellence Hub</span>
                        <h2 className="text-4xl lg:text-6xl font-bold text-[#1e3a5f] mb-8 leading-tight">
                            Manpower <br />
                            <span className="text-[#0d9488]">Training & Supply.</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-xl">
                            We don't just supply manpower; we architect careers and build workforces that drive industrial success.
                        </p>

                        <div className="space-y-8">
                            {[
                                { title: 'Sourcing', desc: 'Identifying top-tier talent from a vast pool.' },
                                { title: 'Training', desc: 'Rigorous upskilling to meet industrial standards.' },
                                { title: 'Deployment', desc: 'Strategic placement for maximum efficiency.' }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full border-2 border-[#1e3a5f] flex items-center justify-center text-[#1e3a5f] font-bold bg-white group-hover:bg-[#1e3a5f] group-hover:text-white transition-all duration-300">
                                            {idx + 1}
                                        </div>
                                        {idx !== 2 && <div className="w-px h-16 bg-gray-200 my-2 group-hover:bg-[#1e3a5f] transition-colors duration-500 delay-100"></div>}
                                    </div>
                                    <div className="pb-8">
                                        <h4 className="text-xl font-bold text-[#1e3a5f] group-hover:text-[#0d9488] transition-colors">{step.title}</h4>
                                        <p className="text-gray-500">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-[#0d9488]/5 rounded-3xl transform rotate-3"></div>
                        <div className="grid gap-6 relative z-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Training Programs</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Soft Skills', 'Safety Protocols', 'Technical Handling', 'Compliance'].map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-white text-[#1e3a5f] text-sm font-semibold rounded-md border border-gray-200 shadow-sm">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-[#1e3a5f] p-8 rounded-2xl text-white">
                                <h3 className="text-2xl font-bold mb-4">Job Placements</h3>
                                <p className="text-white/80 mb-6">Connecting skilled professionals with leading industries across the region.</p>
                                <button className="bg-white text-[#1e3a5f] px-6 py-3 rounded-lg font-bold tracking-wide uppercase text-xs hover:bg-[#0d9488] hover:text-white transition-colors flex items-center gap-2 w-max">
                                    Apply Now <span>→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Training;
