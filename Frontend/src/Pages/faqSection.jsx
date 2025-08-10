import React from 'react'

const faqs = [
  {
    question: "How many members can be in a team?",
    answer: "Each team must have 2 to 4 members, all from SRMIST, registered before the event.",
  },
  {
    question: "Can I use AI tools like ChatGPT during the event?",
    answer: "No. The use of AI tools or any outside help is strictly prohibited.",
  },
  {
    question: "What happens if we are late?",
    answer: "No late entries will be allowed once Phase 1 has started.",
  },
  {
    question: "How is the event structured?",
    answer: "The event has two phases: Resource Collection (solving coding challenges) and Build Your Empire (using resources to construct digital structures).",
  },
  {
    question: "Can we trade resources with other teams?",
    answer: "Yes. Teams may negotiate and trade resources, but only during their turn and trades must be declared to the game masters.",
  },
  {
    question: "What should I bring?",
    answer: "A charged laptop with coding tools, your SRM Student ID, and optionally a notepad and pen. Bring your team spirit, logic, and creativity!",
  },
  {
    question: "Who makes the final decisions?",
    answer: "All decisions by the event organizers and game masters are final and binding.",
  },
];

const FAQSection = () => {
  return (
    <div className="max-w-lg w-full bg-[#4d3828]/80 border border-orange-300 rounded-md p-6 font-semibold">
      <h2 className="text-2xl mb-4 font-['jersey_20'] text-[#ffae42]">FAQs</h2>
      {faqs.map((faq, index) => (
        <div className="mb-4" key={index}>
          <h3 className="font-semibold text-lg">{faq.question}</h3>
          <p className="text-sm text-orange-100 font-sans">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
