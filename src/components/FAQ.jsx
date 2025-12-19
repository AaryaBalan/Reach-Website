import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'Why choose Reach FMS?',
            answer: [
                'Affordable agency',
                'Agreement guarantee',
                'Simple and Efficient application and assessment procedure',
                'Flexible services',
                'Leading providers of high-caliber staff',
                'Thorough quality control measures',
                'Comprehensive candidate recruitment procedure',
                'Expert advice on current Labour laws',
                'Professional and friendly management staff'
            ]
        },
        {
            question: "What's the difference between Reach FMS and other agencies?",
            answer: "At Reach FMS you're not just treated as a business or one time client. Each of our clients is allotted with a Relationship Manager to cater to your requests at any given time."
        },
        {
            question: 'What is the Reach FMS etiquette?',
            answer: 'WE ARE HAPPY WHEN YOU ARE HAPPY. Our commitment is to deliver excellence and ensure complete customer satisfaction in every project we undertake.'
        }
    ];

    return (
        <section id="faq" className="py-12 md:py-24 bg-gray-50 font-['Poppins']">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block px-4 py-1.5 bg-brand-600/10 text-brand-600 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                        Questions & Answers
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-brand-900 mb-6">
                        Frequently Asked <span className="text-brand-600">Questions</span>
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        Learn more about what makes Reach FMS the preferred choice for facility management.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden
                                ${openIndex === index
                                    ? 'border-brand-600/30 shadow-lg shadow-brand-900/5 ring-1 ring-brand-600/10'
                                    : 'border-gray-100 hover:border-brand-600/20 hover:shadow-md'
                                }
                            `}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-start md:items-center justify-between p-5 md:p-6 text-left gap-4"
                            >
                                <span className={`font-bold text-base md:text-lg transition-colors duration-300 ${openIndex === index ? 'text-brand-600' : 'text-brand-900'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300
                                    ${openIndex === index ? 'bg-brand-600 text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-brand-600/10 group-hover:text-brand-600'}
                                `}>
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0">
                                        <div className="h-px w-full bg-gray-100 mb-4"></div>
                                        {Array.isArray(faq.answer) ? (
                                            <ul className="grid sm:grid-cols-2 gap-3">
                                                {faq.answer.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                                                        <svg className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
