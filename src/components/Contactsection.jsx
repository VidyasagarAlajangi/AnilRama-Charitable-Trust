import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // 1️⃣ Send to TRUST TEAM (admin)
    emailjs.sendForm(
      "12345",
      "template_wq94hbg",
      form.current,
      "W7w8S_Az7ylLy_i3e"
    )
      .then(() => {

        // 2️⃣ Send AUTO REPLY to USER
        return emailjs.sendForm(
          "12345",
          "123",
          form.current,
          "W7w8S_Az7ylLy_i3e"
        );

      })
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        alert("Failed to send message.");
        console.log(error);
      });
  };


  <section id="contact" className="py-20 md:py-28 bg-white scroll-mt-24">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue text-center mb-4 tracking-tight">
        Contact Our Charity Team
      </h2>
      <p className="text-center text-charity-muted text-lg mb-10 max-w-xl mx-auto font-light">
        Have a question or want to get involved? Send us a message and we'll get back to you as soon as possible.
      </p>

      <form ref={form} onSubmit={sendEmail} className="space-y-5 bg-white p-8 md:p-10 rounded-3xl shadow-soft border border-gray-100/50">

        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
            className="w-full px-5 py-4 bg-brand-light/50 border border-gray-200 rounded-xl outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-300 text-charity-text placeholder-charity-muted text-base"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            className="w-full px-5 py-4 bg-brand-light/50 border border-gray-200 rounded-xl outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-300 text-charity-text placeholder-charity-muted text-base"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-5 py-4 bg-brand-light/50 border border-gray-200 rounded-xl outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-300 text-charity-text placeholder-charity-muted text-base"
          />

          {/* Hidden subject field (Email Title) */}
          <input type="hidden" name="subject" />

          <div className="relative">
            <select
              name="purpose"
              required
              className="w-full px-5 py-4 bg-brand-light/50 border border-gray-200 rounded-xl outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-300 text-charity-text appearance-none cursor-pointer text-base"
              onChange={(e) => {
                form.current.subject.value = e.target.value;
              }}
            >
              <option value="" disabled selected className="text-charity-muted">How would you like to help?</option>
              <option value="Make a Donation">Make a Donation</option>
              <option value="Become a Volunteer">Become a Volunteer</option>
              <option value="Corporate Partnership">Corporate Partnership</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>
        </div>

        <textarea
          name="message"
          rows="5"
          placeholder="Your message..."
          required
          className="w-full px-5 py-4 bg-brand-light/50 border border-gray-200 rounded-xl outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-300 text-charity-text placeholder-charity-muted resize-none text-base"
        ></textarea>

        <button
          type="submit"
          className="group w-full btn-primary py-4 text-lg mt-2 flex items-center justify-center gap-2"
        >
          Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </form>
    </div>
  </section>
};

export default ContactSection;
