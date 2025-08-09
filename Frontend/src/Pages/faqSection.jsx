import React from 'react'


const faqs = [
  {
    question: "How can I contact support?",
    answer: "Fill out the contact form and we'll reply within 24 hours.",
  },
  {
    question: "Do you offer remote help?",
    answer: "Yes! We help through email and video calls.",
  },
  {
    question: "Can I edit my message?",
    answer: "Unfortunately no, but you can send another form.",
  },
  {
    question: "How soon can I expect a reply?",
    answer: "Usually within 24 to 48 hours depending on volume.",
  },
];
const faqSection = () => {
  return (
    
    <div className="max-w-lg w-full bg-[#4d3828]/80 border border-orange-300 rounded-md p-6  font-semibold " >
      <h2 className="text-2xl font-semi-bold mb-4 font-['jersey_20'] text-[#ffae42]">FAQs</h2>
      {faqs.map((faq, index) => (
        <div className="mb-4" key={index}>
          <h3 className="font-semibold text-lg">{faq.question}</h3>
          <p className="text-sm text-orange-100 font-sans">{faq.answer}</p>
        </div>
      ))}
    </div>
  )
}

export default faqSection
