import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TrainingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const benefits = [
        { title: 'Productivity', desc: 'Increases employee output, helping the organization achieve long-term goals efficiently.' },
        { title: 'Team Spirit', desc: 'Inculcates a strong sense of teamwork, collaboration, and a collective zeal to learn.' },
        { title: 'Organization Culture', desc: 'Develops a healthy organizational culture, fostering effectiveness and continuous learning.' },
        { title: 'Organization Climate', desc: 'Builds positive perceptions and feelings about the organization among leaders and peers.' },
        { title: 'Quality', desc: 'Significantly improves the quality of work and enhances overall work-life balance.' },
        { title: 'Healthy Environment', desc: 'Creates a supportive work environment aligning individual goals with organizational objectives.' },
        { title: 'Health & Safety', desc: 'Improves organizational health and safety standards, preventing operational obsolescence.' },
        { title: 'Morale', desc: 'Boosts workforce morale, leading to higher job satisfaction and retention.' },
        { title: 'Image', desc: 'Enhances the corporate image, making the organization more attractive to stakeholders.' },
        { title: 'Profitability', desc: 'Leads to improved profitability and cultivates a positive, profit-oriented attitude.' }
    ];

    const trainingPoints = {
        humanResource: ['HR Administration', 'Induction Training', 'Recruitment & Selection', 'Successful Appraising', 'Personal Development Courses'],
        workshops: ['Building Confidence', 'Coping with Change', 'Interview Techniques', 'Maximize Potential'],
        coaching: ['Focused entirely on personal objectives', 'Move forward at individual pace', 'Tailor-made development materials', 'Strict code of confidentiality'],
        consultancy: ['Enhancing company\'s image', 'Strengthening team spirit', 'Developing core competencies', 'Improving work relations', 'Developing focused staff', 'Greater success rate']
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] font-['Poppins'] selection:bg-[#C1311C] selection:text-white">

            {/* Navigation / Back Button */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 pointer-events-none">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md text-[#623004] rounded-full text-sm font-bold shadow-sm hover:bg-white hover:shadow-md transition-all duration-300 border border-white/20">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C1311C]/5 rounded-full blur-[120px] mix-blend-multiply animate-blob"></div>
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#623004]/5 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 bg-white/60 backdrop-blur-sm border border-[#623004]/10 text-[#623004] rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6">
                        Professional Development
                    </span>
                    <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold text-[#623004] leading-[1.1] mb-8 tracking-tight">
                        Elevate Potential. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1311C] to-[#8a2314]">Exceed Limits.</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
                        Training isn't just learning; it's the strategic acquisition of <strong className="text-[#623004] font-semibold">Knowledge, Skills, and Attitude (ASK)</strong> to redefine where you stand and where you're headed.
                    </p>
                </div>
            </div>

            {/* Definition Card - Glassmorphism */}
            <div className="px-6 lg:px-8 mb-24">
                <div className="max-w-5xl mx-auto relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#C1311C] to-[#623004] rounded-[2.5rem] opacity-20 blur group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-white rounded-[2rem] p-8 lg:p-14 shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-20 h-20 bg-[#C1311C]/10 rounded-3xl flex items-center justify-center shrink-0">
                            <svg className="w-10 h-10 text-[#C1311C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#623004] mb-4">What is Training?</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                It is a transformative process involving the acquisition of knowledge, sharpening of skills, and reshaping of attitudes to enhance employee performance.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Beyond the basics, it aids in <span className="text-[#C1311C] font-semibold">Organizational Development</span>—fostering better decision-making, effective problem-solving, and seamless policy implementation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Grid - Modern Cards */}
            <div className="bg-white py-24 border-t border-gray-100 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#623004] mb-4">Why Training Matters</h2>
                        <div className="w-24 h-1.5 bg-[#C1311C] mx-auto rounded-full opacity-20"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="group p-8 rounded-3xl bg-gray-50 hover:bg-[#623004] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-default border border-gray-100 hover:border-transparent">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#623004] font-bold shadow-sm group-hover:text-[#C1311C]">
                                        {index + 1}
                                    </span>
                                    <h4 className="font-bold text-xl text-[#623004] group-hover:text-white transition-colors">{benefit.title}</h4>
                                </div>
                                <p className="text-gray-500 group-hover:text-white/80 transition-colors leading-relaxed">
                                    {benefit.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Training Modules - Bento Grid */}
            <div className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#C1311C] font-bold tracking-widest uppercase text-sm mb-2 block">Our Curriculum</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#623004]">Program Modules</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">

                    {/* HR Module - Large Card */}
                    <div className="lg:col-span-2 bg-[#FDFCFB] rounded-[2.5rem] p-10 border border-gray-100 hover:border-[#C1311C]/20 hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-8">
                            <div>
                                <h3 className="text-3xl font-bold text-[#623004] mb-2">Human Resources</h3>
                                <p className="text-gray-500">Essential administration & development</p>
                            </div>
                            <div className="w-14 h-14 bg-[#C1311C]/10 rounded-2xl flex items-center justify-center text-[#C1311C] group-hover:bg-[#C1311C] group-hover:text-white transition-colors">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {trainingPoints.humanResource.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-50 text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-[#C1311C]"></span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Workshops - Tall Card */}
                    <div className="bg-[#623004] rounded-[2.5rem] p-10 text-white flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C1311C] rounded-full blur-[60px] opacity-40 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold mb-2">Workshops</h3>
                                <p className="text-white/60">Interactive Sessions</p>
                            </div>
                            <div className="space-y-4">
                                {trainingPoints.workshops.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 py-2 border-b border-white/10 last:border-0 hover:pl-2 transition-all">
                                        <svg className="w-5 h-5 text-[#C1311C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span className="font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Coaching - Standard Card */}
                    <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#623004] mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-[#623004] mb-4">1-on-1 Coaching</h3>
                        <ul className="space-y-3">
                            {trainingPoints.coaching.map((item, i) => (
                                <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                    <span className="text-[#C1311C] mt-1">●</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Consultancy - Wide Card */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-[#C1311C] to-[#a02817] rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#623004] rounded-full blur-[80px] opacity-30"></div>
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold mb-4">Consultancy</h3>
                                <p className="text-white/80 text-lg leading-relaxed mb-6">
                                    Enhancing corporate image and strengthening team spirit through expert guidance and core competency development.
                                </p>
                                <button className="px-6 py-3 bg-white text-[#C1311C] font-bold rounded-xl shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)] hover:bg-[#623004] hover:text-white transition-all">
                                    Get Consultation
                                </button>
                            </div>
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                {trainingPoints.consultancy.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm font-medium">
                                        <svg className="w-4 h-4 text-white/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Final CTA */}
            <div className="py-24 bg-[#623004] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#C1311C] rounded-full blur-[150px] opacity-30"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Transform Your Team?</h2>
                    <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
                        Join hundreds of innovative leaders who have elevated their organizational performance with our training.
                    </p>
                    <a href="/#contact" className="inline-block px-10 py-5 bg-white text-[#623004] text-lg font-bold rounded-2xl shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)] hover:shadow-[0_20px_40px_-15px_rgba(193,49,28,0.5)] hover:-translate-y-1 transition-all">
                        Start Your Journey
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TrainingPage;
