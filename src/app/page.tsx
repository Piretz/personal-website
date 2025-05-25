'use client';
import Image from "next/image";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import ChatBot from "./components/ui/chatbot";
// Used icons only
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiNodejsLine,
} from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import {
  SiExpress,
  SiFastapi,
  SiLaravel,
  SiTypescript,
  SiMysql,
  SiNpm,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  
} from "react-icons/si";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";
import { SiPostman, SiGithub, SiVercel, SiNetlify } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { DiGit } from "react-icons/di";

export default function Home() {
const technologies = [
  { name: "Next.js", icon: <RiNextjsFill size={60} className="text-white" />, url: "https://nextjs.org/" },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill size={60} className="text-cyan-400" />, url: "https://tailwindcss.com/" },
  { name: "Node.js", icon: <RiNodejsLine size={60} className="text-teal-400" />, url: "https://nodejs.org/" },
  { name: "Express.js", icon: <SiExpress size={60} className="text-white" />, url: "https://expressjs.com/" },
  { name: "FastAPI", icon: <SiFastapi size={60} className="text-teal-400" />, url: "https://fastapi.tiangolo.com/" },
  { name: "HTML5", icon: <SiHtml5 size={60} className="text-cyan-400" />, url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
  { name: "Laravel", icon: <SiLaravel size={60} className="text-red-500" />, url: "https://laravel.com/" },
  { name: "TypeScript", icon: <SiTypescript size={60} className="text-blue-500" />, url: "https://www.typescriptlang.org/" },
  { name: "MySQL", icon: <SiMysql size={60} className="text-blue-500" />, url: "https://www.mysql.com/" },
  { name: "NPM", icon: <SiNpm size={60} className="text-red-500" />, url: "https://www.npmjs.com/" },
 
];

const tools = [
  { name: "Postman", icon: <SiPostman size={60} className="text-orange-400" />, url: "https://www.postman.com/" },
  { name: "GitHub", icon: <SiGithub size={60} className="text-white" />, url: "https://github.com/" },
  { name: "Vercel", icon: <SiVercel size={60} className="text-white" />, url: "https://vercel.com/" },
  { name: "Netlify", icon: <SiNetlify size={60} className="text-teal-400" />, url: "https://www.netlify.com/" },
   { name: "VS Code", icon: <VscVscode size={60} className="text-blue-500" />, url: "https://code.visualstudio.com/" },
  { name: "Windows", icon: <FaWindows size={60} className="text-blue-400" />, url: "https://www.microsoft.com/en-us/windows" },
  { name: "Git", icon: <DiGit size={60} className="text-red-500" />, url: "https://git-scm.com/" }
];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="py-20 px-4 text-white bg-[url('/assets/images/grid-bg.svg')] bg-cover bg-center flex flex-col items-center text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I am<span className="text-black bg-white px-2 rounded">Arjay, Nice to Meet You!</span></h1>
        <p className="text-lg text-gray-200 mb-6">a Front-end Developer</p>
        <div className="relative w-full max-w-3xl flex justify-center">
        </div>
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

    <section
  id="about"
  className="min-h-screen px-6 bg-black text-white flex justify-center items-center"
>
  <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center justify-center gap-10">
 <div className="flex justify-center items-center w-full lg:w-1/2">
   <Image src="/assets/images/tebia.jpg" 
   width={300} 
   height={200} 
   alt="tebia"
  className="w-40 md:w-70 drop-shadow-2xl"
  />
</div>
          {/* Text Content */}
         <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
      <h2 className="text-4xl font-bold text-white animate-fade-in">
  Hi I am Arjay, a Frontend Developer!
</h2>
      <p className="text-lg text-gray-300">
        I’m a curious and driven developer passionate about turning ideas into real, functional products. Whether I’m building apps, solving challenges, or diving into new technologies, I give it my all. </p>

      <div className="space-y-4">
        <p className="text-gray-300">My name is Arjay Tebia, a 23-year-old developer based in Quezon City.
    I&apos;m Arjay Tebia, 23 years old, from Quezon City...</p>
        <p className="text-gray-300"> I&apos;m a developer   </p>
      </div>
      <div>
I am always eager to explore new tools, frameworks, and innovations in tech.
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

      {/* Technologies Section */}
      <section id="technology" className="py-20 px-4 text-center">
    <h2 className="text-4xl font-extrabold mb-8 relative inline-block text-white after:block after:mt-2 after:h-1 after:w-70 after:bg-gradient-to-r after:from-yellow-400 after:via-red-500 after:to-pink-500 after:mx-auto">
  Technologies
</h2>

       
        <div className="flex flex-wrap justify-center gap-10">
    {technologies.map((tech) => (
        <div
          key={tech.name}
          onClick={() => window.open(tech.url, "_blank")}
          className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-40 transform transition-transform duration-300 hover:scale-105 cursor-pointer group"
        >
          <div className="mb-4 transform transition-transform duration-300 group-hover:scale-125">
            {tech.icon}
          </div>
          <span className="text-white text-lg">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="tools" className="py-20 px-4 text-center">
<h2 className="text-4xl font-extrabold mb-8 relative inline-block text-white after:block after:mt-2 after:h-1 after:w-40 after:bg-gradient-to-r after:from-yellow-400 after:via-red-500 after:to-pink-500 after:mx-auto">
  Tools
</h2>

  <div className="flex flex-wrap justify-center gap-10">
    {tools.map((tool) => (
      <div
        key={tool.name}
        onClick={() => window.open(tool.url, "_blank")}
        className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-40 transform transition-transform duration-300 hover:scale-105 cursor-pointer group"
      >
        <div className="mb-4 transform transition-transform duration-300 group-hover:scale-125">
          {tool.icon}
        </div>
        <span className="text-white text-lg">{tool.name}</span>
      </div>
    ))}
  </div>
</section>


   {/* Projects Section */}
<section id="project" className="py-20 px-4 text-center bg-black">
<h2 className="text-4xl font-extrabold mb-8 relative inline-block text-white after:block after:mt-2 after:h-1 after:w-50 after:bg-gradient-to-r after:from-yellow-400 after:via-red-500 after:to-pink-500 after:mx-auto">
  Projects
</h2>
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
    {[
      {
        title: "BMI CALCULATOR",
        description: "A clean and simple Body Mass Index calculator that computes BMI based on height and weight inputs. Built for quick health checks with responsive UI.",
        Image: "/assets/images/bmi.png",
        status: "Live",
        url: "https://piretz.github.io/BmiCalculator/",
        tech: [
          <SiHtml5 key="html" className="text-orange-500 text-2xl" />,
          <SiCss3 key="css" className="text-blue-500 text-2xl" />,
          <SiJavascript key="js" className="text-yellow-400 text-2xl" />,
        ],
      },
      {
        title: "INVOICE APP",
        description: "A streamlined invoicing tool for managing client billing, creating digital invoices, and tracking payment statuses efficiently.",
        Image: "/assets/images/invoice.png",
        status: "Repo",
        url: "https://github.com/lwshq/invoice-fe",
        tech: [
          <SiNextdotjs key="nextjs" className="text-white text-2xl" />,
          <RiTailwindCssFill key="tailwind" className="text-cyan-400 text-2xl" />,
          <SiTypescript key="typescript" className="text-blue-500 text-2xl" />,
          <SiExpress key="express" className="text-white text-2xl" />,
        ],
      },
      {
        title: "E-COMMERCE",
        description: "E-commerce, short for electronic commerce, refers to the buying and selling of goods or services over the internet. ",
        Image: "/assets/images/ecommerce.png",
        status: "Live",
        url: "https://v0-new-project-vti3lhckcl9.vercel.app/",
        tech: [
          <SiNextdotjs key="nextjs" className="text-white text-2xl" />,
          <RiTailwindCssFill key="tailwind" className="text-cyan-400 text-2xl" />,
          <SiTypescript key="typescript" className="text-blue-500 text-2xl" />,
          <SiExpress key="express" className="text-white text-2xl" />,
        ],
      },
      // {
      //   title: "INVOICE APP",
      //   description: "A streamlined invoicing tool for managing client billing, creating digital invoices, and tracking payment statuses efficiently.",
      //   Image: "/assets/images/invoice.png",
      //   status: "Repo",
      //   url: "https://github.com/lwshq/invoice-fe",
      //   tech: [
      //     <SiNextdotjs key="nextjs" className="text-white text-2xl" />,
      //     <RiTailwindCssFill key="tailwind" className="text-cyan-400 text-2xl" />,
      //     <SiTypescript key="typescript" className="text-blue-500 text-2xl" />,
      //     <SiExpress key="express" className="text-white text-2xl" />,
      //   ],
      // },
      {
        title: "TODO LIST",
        description: "A to-do list is a tool for organizing tasks. It helps you keep track of what needs to be done, set priorities, and mark tasks as completed.",
        Image: "/assets/images/todo.jpg",
        status: "Repo",
        url: "https://github.com/Piretz/to-do-list",
        tech: [
          <SiNextdotjs key="next" className="text-white text-2xl" />,
          <RiTailwindCssFill key="tailwind" className="text-cyan-400 text-2xl" />,
          <SiTypescript key="ts" className="text-blue-500 text-2xl" />,
        ],
      },
    ].map((project, i) => (
      <div
        key={i}
        onClick={() => window.open(project.url, "_blank")}
        className="group cursor-pointer bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl overflow-hidden shadow-md hover:shadow-[0_0_30px_#10b981] transform hover:scale-[1.03] transition duration-300"
      >
        <div className="relative">
          <img
            src={project.Image} 
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg mb-4 group-hover:brightness-110 transition duration-300"
          />
          <div className="absolute inset-0 border border-gray-700 rounded-xl group-hover:border-green-400 transition duration-300 pointer-events-none"></div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-4">{project.description}</p>
        <div className="flex items-center gap-3 mb-4 justify-center">
          {project.tech}
        </div>
        <span
          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
            project.status === "Live"
              ? "bg-green-500 text-white"
              : project.status === "Repo"
              ? "bg-gray-600 text-white"
              : "bg-yellow-600 text-white"
          }`}
        >
          {project.status}
        </span>
      </div>
    ))}
  </div>
</section>
{/* Contact Section */}
<section id="contact" className="py-20 px-4 text-center bg-black text-white">
 <h2 className="text-4xl font-extrabold mb-8 relative inline-block text-white after:block after:mt-2 after:h-1 after:w-160 after:bg-gradient-to-r after:from-yellow-400 after:via-red-500 after:to-pink-500 after:mx-auto">
  Let’s Build Something Together
</h2>



  <form
    action="https://formspree.io/f/mvgrgpwj" // ✅ Replace this with your actual Formspree URL
    method="POST"
    className="max-w-xl mx-auto space-y-6 bg-gray-900 p-8 rounded-xl shadow-lg"
  >
    <div className="text-left">
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
        Your Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg shadow-inner text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="text-left">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
        Your Email
      </label>
      <input
        type="email"
        id="email"
        name="_replyto"
        required
        className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg shadow-inner text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="text-left">
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
        Your Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        required
        className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg shadow-inner text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow transition duration-300"
    >
      Send Message
    </button>
  </form>
</section>


      {/* Social icons */}
      <div className="flex justify-center space-x-6 my-10">
        {[
          {
            icon: <FaFacebookF />,
            url: "https://www.facebook.com/Fotlongs",
            color: "text-blue-600 hover:text-blue-800",
            label: "Facebook",
          },
          {
            icon: <FaGithub />,
            url: "https://github.com/Piretz",
            color: "text-white hover:text-gray-400",
            label: "GitHub",
          },
          {
            icon: <FaLinkedinIn />,
            url: "https://www.linkedin.com/in/tebia-arjay-827056231/",
            color: "text-blue-500 hover:text-blue-700",
            label: "LinkedIn",
          },
          {
            icon: <FaInstagram />,
            url: "https://www.instagram.com/ey_above/",
            color: "text-pink-500 hover:text-pink-700",
            label: "Instagram",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 ${item.color} transition-colors duration-300`}
            aria-label={item.label}
          >
            <span className="text-xl">{item.icon}</span>
          </a>
        ))}
        
      </div>
      <div></div>
       <Footer />
       <ChatBot />
    </div>
    
    
  );
}

