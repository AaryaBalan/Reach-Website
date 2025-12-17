import React from 'react';

const Welcome = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50 font-['Poppins']">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#C1311C]/10 rounded-tr-[4rem] rounded-bl-[4rem]"></div>
                        <div className="relative bg-white p-8 lg:p-12 rounded-tr-[3rem] rounded-bl-[3rem] shadow-xl border border-gray-100">
                            <h2 className="text-3xl lg:text-5xl font-bold text-[#623004] mb-6 leading-tight">
                                Cleanliness is <br />
                                <span className="text-[#C1311C]">Power.</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Be it an office, home, industry or supermarket, it reflects care, concern and respect for people you rely on for your progress.
                            </p>
                            <p className="text-gray-500 italic border-l-4 border-[#C1311C] pl-4">
                                "A clean hygienic and a well maintained environment delights every individual walking in. It speaks highly about the commitment of the management team."
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <span className="text-[#C1311C] font-bold tracking-wider uppercase text-sm mb-2 block">Our Philosophy</span>
                            <h3 className="text-3xl font-bold text-[#623004] mb-4">Innovation in Every Sweep</h3>
                            <p className="text-gray-600">
                                Reach FMS has an extensive range of innovative cleaning solutions that have been the choice of distinguished names in every industry segment.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-[#C1311C] transition-colors group">
                                <div className="w-12 h-12 bg-[#C1311C]/10 rounded-lg flex items-center justify-center mb-4 text-[#C1311C]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h4 className="text-[#623004] font-bold mb-2">Efficient</h4>
                                <p className="text-gray-500 text-sm">Optimized workflows for maximum output.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-[#C1311C] transition-colors group">
                                <div className="w-12 h-12 bg-[#C1311C]/10 rounded-lg flex items-center justify-center mb-4 text-[#C1311C]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-[#623004] font-bold mb-2">Reliable</h4>
                                <p className="text-gray-500 text-sm">Consistent quality you can count on.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Welcome;
