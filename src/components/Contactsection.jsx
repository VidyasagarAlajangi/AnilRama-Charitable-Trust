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
  

  return (
    <section id="contact" className="py-16 bg-white scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Contact Our Charity Team
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
            className="input-style"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            className="input-style"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="input-style"
          />

          {/* Hidden subject field (Email Title) */}
          <input type="hidden" name="subject" />

          <select
            name="purpose"
            required
            className="input-style"
            onChange={(e) => {
              form.current.subject.value = e.target.value;
            }}
          >
            <option value="">How would you like to help?</option>
            <option value="Make a Donation">Make a Donation</option>
            <option value="Become a Volunteer">Become a Volunteer</option>
            <option value="Corporate Partnership">Corporate Partnership</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>

          <textarea
            name="message"
            rows="4"
            placeholder="Your message..."
            required
            className="input-style"
          ></textarea>

          <button
            type="submit"
            className="w-full btn-primary flex items-center justify-center gap-2"
          >
            Send Message <Send size={18} />
          </button>
        </form>
      </div>

      <style>
        {`
          .input-style {
            width: 100%;
            padding: 12px 16px;
            border-radius: 14px;
            border: 1px solid #e5e7eb;
            outline: none;
            transition: 0.3s;
          }
          .input-style:focus {
            border-color: #22c55e;
            box-shadow: 0 0 0 3px rgba(34,197,94,0.15);
          }
        `}
      </style>
    </section>
  );
};

export default ContactSection;
