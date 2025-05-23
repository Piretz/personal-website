// components/AboutSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 bg-black text-white flex justify-center items-center"
    >
      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <Image
            src="/assets/images/Tebia.jpg"
            alt="Arjay"
            width={400}
            height={200}
            className="w-40 md:w-70 drop-shadow-2xl"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-4xl font-bold text-white">Hi, I'm Arjay, Nice to Meet You!</h2>
          <p className="text-lg text-gray-300">
            I'm a curious and driven developer who loves turning ideas into real, working products.
          </p>
          <div className="space-y-4">
            <p className="text-gray-300">I'm Arjay Tebia, 23 years old, from Quezon City...</p>
            <p className="text-gray-300">I'm a developer</p>
            <p className="text-gray-300">I'm always eager to explore new tech...</p>
          </div>
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow">
              Get a Quote
            </a>
            <a href="/assets/images/CV_Tebia_Arjay_Delacruz.pdf" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded shadow">
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
