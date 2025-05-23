// components/TechnologySection.tsx
'use client';

import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiNodejsLine,
} from 'react-icons/ri';
import {
  SiExpress,
  SiFastapi,
  SiLaravel,
  SiGit,
  SiTypescript,
  SiMysql,
  SiNpm,
  SiPostman,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from 'react-icons/si';

export default function TechnologySection() {
  const technologies = [
    { name: "Next.js", icon: <RiNextjsFill size={60} className="text-white" />, url: "https://nextjs.org/" },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill size={60} className="text-cyan-400" />, url: "https://tailwindcss.com/" },
    { name: "Node.js", icon: <RiNodejsLine size={60} className="text-green-500" />, url: "https://nodejs.org/" },
    { name: "Express.js", icon: <SiExpress size={60} className="text-white" />, url: "https://expressjs.com/" },
    { name: "FastAPI", icon: <SiFastapi size={60} className="text-teal-400" />, url: "https://fastapi.tiangolo.com/" },
    { name: "HTML5", icon: <SiHtml5 size={60} className="text-orange-500" />, url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
    { name: "Laravel", icon: <SiLaravel size={60} className="text-red-600" />, url: "https://laravel.com/" },
    { name: "Git", icon: <SiGit size={60} className="text-orange-500" />, url: "https://git-scm.com/" },
    { name: "TypeScript", icon: <SiTypescript size={60} className="text-blue-500" />, url: "https://www.typescriptlang.org/" },
    { name: "MySQL", icon: <SiMysql size={60} className="text-blue-700" />, url: "https://www.mysql.com/" },
    { name: "NPM", icon: <SiNpm size={60} className="text-red-600" />, url: "https://www.npmjs.com/" },
    { name: "Postman", icon: <SiPostman size={60} className="text-orange-500" />, url: "https://www.postman.com/" },
    { name: "GitHub", icon: <SiGithub size={60} className="text-white" />, url: "https://github.com/" },
  ];

  return (
    <section id="technology" className="py-20 px-4 text-center text-white">
      <h2 className="text-3xl font-semibold mb-4">Technologies</h2>
      <p className="text-lg mb-8">I work with Next.js, Tailwind CSS, React, Node.js, and more.</p>
      <div className="flex flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            onClick={() => window.open(tech.url, "_blank")}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-40 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="mb-4">{tech.icon}</div>
            <span className="text-white text-lg">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
