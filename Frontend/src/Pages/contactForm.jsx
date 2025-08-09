import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-lg w-full bg-[#4d3828]/80 border border-orange-300 rounded-md p-6 " >
      <h2 className="text-2xl font-semi-bold mb-4 font-['jersey_20'] text-[#ffae42]">Contact Us</h2>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="access_key" value="04602206-c2ae-44af-a679-d76004a657fc" />

        
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="bg-white/10 border border-white p-2 rounded placeholder:text-orange-200 text-white"
        />

        
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="bg-white/10 border border-white p-2 rounded placeholder:text-orange-200 text-white"
        />

       
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows="4"
          className="bg-white/10 border border-white p-2 rounded placeholder:text-orange-200 text-white"
        ></textarea>

        <button
          type="submit"
          className="bg-orange-400 hover:bg-orange-600 text-white py-2 rounded transition "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
