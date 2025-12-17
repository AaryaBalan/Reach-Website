import React, { useState } from 'react';

const RepairMaintenance = () => {
    const [activeTab, setActiveTab] = useState('electrical');

    const services = [
        {
            key: 'electrical',
            title: 'Electrical Engineering',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            ),
            specs: [
                'HV/LV Cabling & Termination',
                'Network Cabling & Earthing',
                'DG Erecting & Cabling',
                'MV Panel Fabrication',
                'BMS Wiring Systems',
                'Power Factor Correction',
                'Industrial Heavy Wiring',
                'Transformer Erection'
            ]
        },
        {
            key: 'plumbing',
            title: 'Plumbing Solutions',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            ),
            specs: [
                'Industrial Pipeline Welding',
                'MS & SS Pipeline fabrication',
                'Sanitary Ware Installation',
                'Urinal Sensor Automation',
                'RO, ETP and STP Plant',
                'Comprehensive AMC'
            ]
        },
        {
            key: 'carpentry',
            title: 'Carpentry & Works',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            ),
            specs: [
                'Industrial Cabin Shades',
                'Door & Window Fabrication',
                'Interior Wood Paneling',
                'Floor Carpeting',
                'Aluminum Partitioning',
                'Plywood Furniture'
            ]
        },
        {
            key: 'painting',
            title: 'Painting & Finish',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
            ),
            specs: [
                'Surface Preparation',
                'Synthetic Plaster Renovation',
                'Putty & Emulsion Painting',
                'French Spirit Polishing',
                'Wood Texture Application',
                'Weather-Proof Coatings'
            ]
        }
    ];

    const activeData = services.find(s => s.key === activeTab);

    return (
        <section id="repair" className="py-24 bg-white font-['Poppins']">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="mb-16">
                    <span className="text-[#C1311C] font-bold tracking-widest uppercase text-sm mb-2 block">Technical Support</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#623004] mb-4">
                        Maintenance <span className="text-[#C1311C]">Expertise</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl">
                        Ensuring operational efficiency through precise engineering solutions.
                    </p>
                </div>

                {/* Clean Tab Layout */}
                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">

                    {/* Sidebar Nav */}
                    <div className="lg:w-1/3 bg-gray-50 border-r border-gray-100 p-6 flex flex-col gap-2">
                        {services.map((s) => (
                            <button
                                key={s.key}
                                onClick={() => setActiveTab(s.key)}
                                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300
                                    ${activeTab === s.key
                                        ? 'bg-white text-[#623004] shadow-md border border-gray-100'
                                        : 'text-gray-500 hover:text-[#623004] hover:bg-white/50'
                                    }
                                `}
                            >
                                <div className={`${activeTab === s.key ? 'text-[#C1311C]' : 'text-gray-400'}`}>
                                    {s.icon}
                                </div>
                                <span className={`font-bold ${activeTab === s.key ? 'font-bold' : 'font-medium'}`}>
                                    {s.title}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Content Panel */}
                    <div className="lg:w-2/3 p-8 lg:p-12">
                        <div className="animate-fade-in-up">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-[#623004]/5 rounded-xl text-[#623004]">
                                    {activeData.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-[#623004]">{activeData.title}</h3>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {activeData.specs.map((spec, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                        <svg className="w-5 h-5 text-[#C1311C] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-gray-600 font-medium text-sm">{spec}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RepairMaintenance;
