import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RepairMaintenance = () => {
    const [activeTab, setActiveTab] = useState('electrical');
    const navigate = useNavigate();

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
        <section id="repair" className="py-10 md:py-20 bg-gray-50 relative overflow-hidden font-['Poppins']">
            {/* Cinematic Background Elements */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-600/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-900/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border border-gray-200 mb-4 md:mb-6 shadow-sm animate-fade-in-up">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-600 animate-pulse"></span>
                        <span className="text-brand-900 text-[10px] md:text-sm font-bold uppercase tracking-widest">Technical Support</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-900 mb-3 md:mb-6 leading-[1.1] tracking-tight animate-fade-in-up delay-100">
                        Maintenance <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-600 to-brand-400">Expertise</span>
                    </h2>

                    <p className="text-gray-600 text-sm md:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Ensuring operational efficiency through precise engineering solutions and comprehensive maintenance services.
                    </p>
                </div>

                {/* Modern Tab Layout */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">

                    {/* Navigation - Scrollable Pills on Mobile, Sidebar on Desktop */}
                    <div className="lg:w-1/3">
                        <div className="flex lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide snap-x">
                            {services.map((s) => (
                                <button
                                    key={s.key}
                                    onClick={() => setActiveTab(s.key)}
                                    className={`flex items-center gap-3 md:gap-4 p-3 md:p-5 rounded-xl md:rounded-2xl text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal shrink-0 snap-start border
                                        ${activeTab === s.key
                                            ? 'bg-brand-900 text-white border-brand-900 shadow-lg shadow-brand-900/20 scale-[1.02]'
                                            : 'bg-white text-gray-500 border-gray-100 hover:border-brand-200 hover:text-brand-900 hover:bg-gray-50'
                                        }
                                    `}
                                >
                                    <div className={`p-2 rounded-lg ${activeTab === s.key ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                        {s.icon}
                                    </div>
                                    <span className="font-bold text-sm md:text-lg">
                                        {s.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Panel - Glassmorphism */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-10 shadow-xl shadow-gray-100/50 border border-gray-100 relative overflow-hidden min-h-[350px] md:min-h-[400px]">
                            {/* Decorative Blobs inside card */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <div className="relative z-10 animate-fade-in-up key={activeTab}"> {/* Key forces re-render for animation */}
                                <div className="flex items-center gap-4 mb-6 md:mb-10 border-b border-gray-100 pb-4 md:pb-8">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shadow-inner">
                                        {activeData.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-3xl font-bold text-brand-900">{activeData.title}</h3>
                                        <p className="text-brand-600 font-medium text-xs md:text-base mt-1">Professional Services</p>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-2 md:gap-4">
                                    {activeData.specs.map((spec, idx) => (
                                        <div key={idx} className="group flex items-start gap-3 p-2 md:p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                                <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-gray-600 font-medium text-xs md:text-base group-hover:text-brand-900 transition-colors">{spec}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 md:mt-10 pt-4 md:pt-8 border-t border-gray-100 flex justify-end">
                                    <button
                                        onClick={() => navigate('/repair-maintenance')}
                                        className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-brand-600 hover:text-brand-800 transition-colors group"
                                    >
                                        View Details <span className="transform group-hover:translate-x-1 transition-transform">→</span>
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

export default RepairMaintenance;
