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
        <section id="faq" className="py-24 bg-gray-50 font-['Poppins']">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-brand-600/10 text-brand-600 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                        Questions & Answers
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-brand-900 mb-6">
                        Frequently Asked <span className="text-brand-600">Questions</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                        Learn more about what makes Reach FMS the preferred choice for facility management.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden
                                ${openIndex === index ? 'border-brand-600/30 shadow-lg' : 'border-gray-100 hover:border-gray-200'}
                            `}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-900' : 'text-gray-700'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300
                                    ${openIndex === index ? 'bg-brand-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'}
                                `}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-6 pb-6">
                                    {Array.isArray(faq.answer) ? (
                                        <ul className="grid sm:grid-cols-2 gap-3">
                                            {faq.answer.map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-gray-600">
                                                    <svg className="w-5 h-5 text-brand-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    )}
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
