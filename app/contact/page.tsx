"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", form);
    // In real app, send this to your backend/API
    alert("Thank you for reaching out! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-pink-100 text-black font-bold px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-4xl md:text-5xl">Get in Touch</h1>
        <p className="text-lg font-normal">
          Questions? Suggestions? We're all ears. Drop us a message and we’ll
          respond within 24 hours.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border-2 border-black bg-pink-200 placeholder-black font-normal"
              placeholder="Jane Doe"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border-2 border-black bg-pink-200 placeholder-black font-normal"
              placeholder="jane@rentease.co.uk"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border-2 border-black bg-pink-200 placeholder-black font-normal"
              placeholder="Tell us how we can help..."
            />
          </div>

          <button
            type="submit"
            className="bg-black text-pink-100 px-6 py-3 rounded-lg hover:bg-pink-300 hover:text-black transition font-bold"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="pt-10 text-base font-normal">
          <p>
            Email us directly:{" "}
            <a href="mailto:hello@rentease.co.uk" className="underline">
              hello@rentease.co.uk
            </a>
          </p>
          <p className="mt-2">
            Our office: RentEase HQ, 20 Wonderlock Road, London, N1 7GU
          </p>
          <p className="mt-2">Support Hours: Mon–Fri, 10am – 6pm</p>
        </div>
      </div>
    </section>
  );
}
