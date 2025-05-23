// components/ContactSection.tsx
'use client';

import Social from "./social";

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-300 mb-8">
          Feel free to reach out if you're interested in working together or just want to say hi!
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          >
            Send Message
          </button>
        </form>
        <Social />
      </div>
    </section>
  );
}
