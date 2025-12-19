import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import heroImg from '../assets/training-hero.png';

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
        <div className="min-h-screen bg-neutral-50 font-['Poppins'] selection:bg-brand-500 selection:text-white">
            <Navbar />

            {/* Cinematic Hero Section */}
            <section className="relative h-[40vh] min-h-75 md:h-[70vh] md:min-h-125 flex items-center justify-center overflow-hidden bg-brand-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-neutral-50 z-10"></div>
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        src={heroImg}
                        alt="Corporate Training"
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>

                <div className="relative z-20 text-center px-4 md:px-6 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-2 md:px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs md:text-sm font-medium tracking-wider uppercase mb-4 md:mb-6">
                            Professional Development
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                            Elevate Potential. <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-400 to-brand-600">Exceed Limits.</span>
                        </h1>
                        <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
                            Strategic acquisition of <strong className="text-white font-semibold">Knowledge, Skills, and Attitude (ASK)</strong> to redefine where you stand and where you're headed.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Definition Card - Glassmorphism */}
            <section className="relative z-30 -mt-10 md:-mt-20 px-4 md:px-6 pb-12 md:pb-24">
                <div className="max-w-5xl mx-auto relative group">
                    <div className="absolute -inset-1 bg-linear-to-r from-brand-500 to-brand-600 rounded-3xl md:rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl md:rounded-[2rem] p-5 md:p-8 lg:p-14 shadow-2xl border border-white/50 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-50 rounded-3xl flex items-center justify-center shrink-0 border border-brand-100">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">What is Training?</h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                                It is a transformative process involving the acquisition of knowledge, sharpening of skills, and reshaping of attitudes to enhance employee performance.
                            </p>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                Beyond the basics, it aids in <span className="text-brand-600 font-semibold">Organizational Development</span>—fostering better decision-making, effective problem-solving, and seamless policy implementation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid - Modern Cards */}
            <section className="py-12 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 md:w-125 md:h-125 bg-brand-500/5 rounded-full blur-[80px] md:blur-[120px]"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Why Training Matters</h2>
                        <div className="w-24 h-1.5 bg-brand-500 mx-auto rounded-full opacity-20"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="group p-5 md:p-8 rounded-3xl bg-gray-50 hover:bg-brand-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-default border border-gray-100 hover:border-transparent">
                                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                                    <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-gray-900 font-bold shadow-sm group-hover:text-brand-500 group-hover:bg-gray-800 transition-colors text-sm md:text-base">
                                        {index + 1}
                                    </span>
                                    <h4 className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-white transition-colors">{benefit.title}</h4>
                                </div>
                                <p className="text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed text-sm md:text-base">
                                    {benefit.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Modules - Bento Grid */}
            <section className="py-12 md:py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-16">
                    <span className="text-brand-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">Our Curriculum</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Program Modules</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-4 md:gap-6">

                    {/* HR Module - Large Card */}
                    <div className="lg:col-span-2 bg-white rounded-3xl md:rounded-[2.5rem] p-5 md:p-10 border border-gray-100 shadow-xl shadow-gray-200/50 hover:border-brand-500/20 transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-6 md:mb-8">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">Human Resources</h3>
                                <p className="text-gray-500 text-sm md:text-base">Essential administration & development</p>
                            </div>
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                            {trainingPoints.humanResource.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-gray-50 rounded-xl border border-gray-100 text-gray-700 hover:bg-brand-50 hover:border-brand-100 transition-colors text-sm md:text-base">
                                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-500"></span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Workshops - Tall Card */}
                    <div className="bg-brand-900 rounded-3xl md:rounded-[2.5rem] p-5 md:p-10 text-white flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500 rounded-full blur-[60px] opacity-40 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="mb-6 md:mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Workshops</h3>
                                <p className="text-white/60 text-sm md:text-base">Interactive Sessions</p>
                            </div>
                            <div className="space-y-3 md:space-y-4">
                                {trainingPoints.workshops.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 py-2 border-b border-white/10 last:border-0 hover:pl-2 transition-all">
                                        <svg className="w-4 h-4 md:w-5 md:h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span className="font-medium text-sm md:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Coaching - Standard Card */}
                    <div className="bg-white rounded-3xl md:rounded-[2.5rem] p-5 md:p-10 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        </div>
                        <h3 className="text-2xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">1-on-1 Coaching</h3>
                        <ul className="space-y-2 md:space-y-3">
                            {trainingPoints.coaching.map((item, i) => (
                                <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                    <span className="text-brand-500 mt-1">●</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Consultancy - Wide Card */}
                    <div className="lg:col-span-2 bg-linear-to-br from-brand-500 to-brand-600 rounded-3xl md:rounded-[2.5rem] p-5 md:p-10 text-white relative overflow-hidden group">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black rounded-full blur-[80px] opacity-30"></div>
                        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Consultancy</h3>
                                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                                    Enhancing corporate image and strengthening team spirit through expert guidance and core competency development.
                                </p>
                                <button className="px-5 py-2.5 md:px-6 md:py-3 bg-white text-brand-600 font-bold rounded-xl shadow-lg hover:bg-gray-100 transition-all text-sm md:text-base">
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
            </section>

            {/* Final CTA */}
            <section className="py-16 md:py-24 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-brand-900 to-black opacity-90"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[150px] opacity-20"></div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8">Ready to Transform Your Team?</h2>
                    <p className="text-white/70 text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto">
                        Join hundreds of innovative leaders who have elevated their organizational performance with our training.
                    </p>
                    <a href="/#contact" className="inline-block px-8 py-4 md:px-10 md:py-5 bg-brand-600 text-white text-base md:text-lg font-bold rounded-2xl shadow-xl shadow-brand-600/30 hover:bg-brand-700 hover:-translate-y-1 transition-all">
                        Start Your Journey
                    </a>
                </div>
            </section>
        </div>
    );
};

export default TrainingPage;
