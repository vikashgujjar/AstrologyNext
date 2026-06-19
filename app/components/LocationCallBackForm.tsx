"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function LocationCallBackForm({ location }: { location: string }) {
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
      email: "N/A",
      serviceType: `Call Back Request — ${location}`,
      message: `Call back request from ${location}. Name: ${data.name}, Phone: ${data.phone}`,
      mail_to: "astrosanatana.info@gmail.com",
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cb-name" className="text-primary font-quicksand font-semibold text-sm">
            Your Name <span className="text-foreground">*</span>
          </label>
          <input
            id="cb-name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="w-full border border-primary/20 bg-background rounded-xl px-4 py-3 font-quicksand text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:ring-1 focus:ring-secondary transition-shadow"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cb-phone" className="text-primary font-quicksand font-semibold text-sm">
            Mobile Number <span className="text-foreground">*</span>
          </label>
          <input
            id="cb-phone"
            name="phone"
            type="tel"
            required
            placeholder="+1 000 000 0000"
            className="w-full border border-primary/20 bg-background rounded-xl px-4 py-3 font-quicksand text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:ring-1 focus:ring-secondary transition-shadow"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loader}
        className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-quicksand font-semibold rounded-full px-8 py-3.5 hover:bg-secondary/80 transition-colors w-full disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wide"
      >
        {loader ? (
          <>
            <svg
              className="animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Sending…
          </>
        ) : (
          "Request Now !"
        )}
      </button>
    </form>
  );
}
