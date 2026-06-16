"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoader(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      company: "Astro Sanatana",
      company_name: "Astro Sanatana",
      name: data.name as string,
      phone: data.phone as string,
      email: (data.email as string) || "N/A",
      serviceType: (data.subject as string) || "General Inquiry",
      message: data.message as string,
      mail_to: "www.vgujjar1234@gmail.com",
    };

    try {
      const response = await fetch("https://mail.futuretouch.org/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        Swal.fire("Error", "Failed to send message. Please try again.", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoader(false);
    }
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
        <label htmlFor="subject" className="text-primary font-quicksand font-semibold text-sm">Service</label>
        <select
          id="subject"
          name="subject"
          className="w-full border border-primary/20 bg-background rounded-xl px-4 py-3 font-quicksand text-sm text-primary focus:outline-none focus:ring-1 focus:ring-secondary transition-shadow"
        >
          <option value="">Select a service</option>
          <option value="Astrology Consultation">Astrology Consultation</option>
          <option value="Kundli Reading">Kundli Reading</option>
          <option value="Vastu Consultation">Vastu Consultation</option>
          <option value="Black Magic Removal">Black Magic Removal</option>
          <option value="Love & Relationship">Love &amp; Relationship</option>
          <option value="Spiritual Healing">Spiritual Healing</option>
          <option value="Pooja Booking">Pooja Booking</option>
          <option value="Other">Other</option>
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
        disabled={loader}
        className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-quicksand font-medium rounded-full px-10 py-4 hover:bg-secondary/80 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full md:w-auto md:self-start disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loader ? (
          <>
            <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
