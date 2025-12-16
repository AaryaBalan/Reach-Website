import React, { useState } from 'react';

const RepairMaintenance = () => {
    const [activeTab, setActiveTab] = useState('electrical');

    const services = {
        electrical: {
            title: 'Electrical Services',
            subtitle: 'Technical Excellence',
            icon: "⚡",
            features: [
                'HV/LV Cabling work up to 400 sq.mm',
                'Network cabling & Earthing Layout',
                'DG Erecting and Cabling',
                'MV Panel Fabrication',
                'BMS Electrical work',
                'Power factor correction',
                'Industrial wiring',
                'Transformers Erection'
            ]
        },
        plumbing: {
            title: 'Plumbing Services',
            subtitle: 'Installation & AMC',
            icon: "💧",
            features: [
                'Pipeline welding & installation',
                'MS and SS Pipe Line work',
                'Wash basin & WC installation',
                'Urinal sensor setup',
                'RO, ETP and STP Plant',
                'Comprehensive AMC'
            ]
        },
        carpentry: {
            title: 'Carpentry Services',
            subtitle: 'Industrial & Interior',
            icon: "🪚",
            features: [
                'Industrial cabin shade & roofing',
                'Doors, Windows, Sofa sets',
                'Interior & Exterior wood works',
                'Floor Carpet & Sun Window',
                'Aluminum fabrication',
                'Industrial Plywood work'
            ]
        },
        painting: {
            title: 'Painting Services',
            subtitle: 'Premium Finishing',
            icon: "🎨",
            features: [
                'Surface prep & 3-coat white wash',
                'Synthetic plaster renovation',
                'Putty & Emulsion painting',
                'French spirit polishing',
                'Melamine Polishing',
                'Wood filler application'
            ]
        },
        interior: {
            title: 'Interior Fit Outs',
            subtitle: 'Space Optimization',
            icon: "🛋️",
            features: [
                'Cupboard & Storage',
                'Work Station Cubicles',
                'Office Partitions',
                'False Ceiling',
                'Custom furniture',
                'Space optimization'
            ]
        }
    };

    return (
        <section id="repair" className="py-24 bg-gray-50 font-['Poppins']">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="mb-16 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
                        Technical <span className="text-[#0d9488]">Maintenance</span>
                    </h2>
                    <p className="text-gray-600 text-lg">Precision maintenance across all operational domains</p>
                </div>

                {/* Dashboard Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {Object.keys(services).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-8 py-4 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300 border shadow-sm ${activeTab === key
                                    ? 'bg-[#1e3a5f] text-white border-[#1e3a5f] shadow-lg transform scale-105'
                                    : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-100'
                                }`}
                        >
                            <span className="mr-2 opacity-100">{services[key].icon}</span>
                            {services[key].title.split(' ')[0]}
                        </button>
                    ))}
                </div>

                {/* Active Content Display */}
                <div className="bg-white rounded-3xl p-8 lg:p-16 shadow-2xl border border-gray-100">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block p-4 rounded-2xl bg-[#0d9488]/10 text-4xl mb-6 text-[#0d9488]">
                                {services[activeTab].icon}
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-2">
                                {services[activeTab].title}
                            </h3>
                            <p className="text-[#0d9488] font-semibold tracking-wider uppercase mb-8">
                                {services[activeTab].subtitle}
                            </p>
                            <div className="h-1 w-20 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-[#0d9488] w-2/3"></div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {services[activeTab].features.map((feature, idx) => (
                                <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-3 hover:border-[#0d9488]/30 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-[#0d9488] shadow-sm"></div>
                                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RepairMaintenance;
