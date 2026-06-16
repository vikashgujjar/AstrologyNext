"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
          </svg>
        </div>
        <h3 className="text-2xl font-medium font-playfair-display text-secondary">Message Sent!</h3>
        <p className="text-primary font-quicksand font-medium max-w-sm">
          Thank you for reaching out. Astro Sanatana Veer will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-primary font-quicksand font-semibold text-sm">Full Name <span className="text-foreground">*</span></label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="w-full border border-primary/20 bg-background rounded-xl px-4 py-3 font-quicksand text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:ring-1 focus:ring-secondary transition-shadow"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-primary font-quicksand font-semibold text-sm">Phone Number <span className="text-foreground">*</span></label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+1 000 000 0000"
            className="w-full border border-primary/20 bg-background rounded-xl px-4 py-3 font-quicksand text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:ring-1 focus:ring-secondary transition-shadow"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-primary font-quicksand font-semibold text-sm">Email Address <span className="text-foreground">*</span></label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="w-full border border-primary/20 bg-background rounded-xl px-4 py-3 font-quicksand text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:ring-1 focus:ring-secondary transition-shadow"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-primary font-quicksand font-semibold text-sm">Subject</label>
        <select
          id="subject"
          name="subject"
          className="w-full border border-primary/20 bg-background rounded-xl px-4 py-3 font-quicksand text-sm text-primary focus:outline-none focus:ring-1 focus:ring-secondary transition-shadow"
        >
          <option value="">Select a service</option>
          <option value="astrology">Astrology Consultation</option>
          <option value="pooja">Pooja Booking</option>
          <option value="vastu">Vastu Consultation</option>
          <option value="wedding">Wedding Muhurat</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-primary font-quicksand font-semibold text-sm">Your Message <span className="text-foreground">*</span></label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your concern or query..."
          className="w-full border border-primary/20 bg-background rounded-xl px-4 py-3 font-quicksand text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:ring-1 focus:ring-secondary transition-shadow resize-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-quicksand font-medium rounded-full px-10 py-4 hover:bg-secondary/80 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full md:w-auto md:self-start"
      >
        Send Message
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      </button>
    </form>
  );
}
