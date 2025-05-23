// components/HomeSection.tsx
'use client';

import Link from 'next/link';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="py-20 px-4 text-white bg-[url('/assets/images/grid-bg.svg')] bg-cover bg-center flex flex-col items-center text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        Hi, I&apos;m
        <span className="text-black bg-white px-2 rounded">Arjay, Nice to Meet You!</span>
      </h1>
      <p className="text-lg text-gray-200 mb-6">a Front-end Developer</p>
      <div className="mt-8 flex space-x-4">
        <a
          href="/assets/images/CV_Tebia_Arjay_Delacruz.pdf"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
        >
          Download CV
        </a>
        <a
          href="#project"
          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded shadow flex items-center space-x-2"
        >
          <span>View Projects</span>
          <span className="text-sm">🔍</span>
        </a>
      </div>
    </section>
  );
}
