// components/ProjectsSection.tsx
'use client';

import Image from 'next/image';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'BMI CALCULATOR',
      description: 'A clean and simple Body Mass Index calculator that computes BMI based on height and weight inputs. Built for quick health checks with responsive UI."',
      image: '/assets/images/bmi-calculator.png',
      link: 'https://your-project-link.com',
    },
    {
      title: 'INVOICE APP',
      description: 'A streamlined invoicing tool for managing client billing, creating digital invoices, and tracking payment statuses efficiently.',
      image: '/assets/images/invoice.png',
      link: 'https://your-project-link.com',
    },
    {
      title: 'TODO LIST',
      description: 'A to-do list is a tool for organizing tasks. It helps you keep track of what needs to be done, set priorities, and mark tasks as completed. Its useful for staying focused and managing time effectively',
      image: '/assets/images/todo.jpg',
      link: 'https://your-project-link.com',
    },
  ];

  return (
    <section id="project" className="py-20 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
