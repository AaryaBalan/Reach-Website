import React from 'react';
import { Link } from 'react-router-dom';

const Training = () => {
    const benefits = [
        { title: 'Productivity', desc: 'Training helps increase the productivity of employees, helping the organization achieve its long-term goals.' },
        { title: 'Team Spirit', desc: 'Inculcates team work, team spirit, and inter-team collaborations among employees.' },
        { title: 'Organization Culture', desc: 'Develops and improves organizational health culture and effectiveness.' },
        { title: 'Quality', desc: 'Improves the quality of work and work-life for all employees.' }
    ];

    return (
        <section id="training" className="py-24 bg-white font-['Poppins'] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="relative mb-16">
                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-brand-600/5 rounded-full blur-3xl"></div>

                    <div className="relative text-center max-w-4xl mx-auto">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600/10 text-brand-600 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                            Professional Development
                        </span>
                        <h2 className="text-4xl lg:text-6xl font-bold text-brand-900 mb-6 leading-tight">
                            Training & <span className="text-brand-600">Job Placements</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            Empowering your workforce through acquisition of <strong className="text-brand-900">Knowledge, Skills, and Attitude (ASK)</strong> through professional development.
                        </p>
                    </div>
                </div>

                {/* 4 Preview Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-brand-600/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 bg-brand-600/10 rounded-xl flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                <span className="font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                            </div>
                            <h4 className="font-bold text-brand-900 mb-2 text-lg">{benefit.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Learn More Button */}
                <div className="text-center">
                    <Link
                        to="/training"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-600 text-white font-bold rounded-2xl shadow-lg shadow-brand-600/30 hover:shadow-xl hover:shadow-brand-600/40 transform hover:-translate-y-1 transition-all duration-300"
                    >
                        Learn More About Training Programs
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Training;
