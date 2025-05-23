// components/Social.tsx
'use client';

import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/yourusername', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/yourusername', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://instagram.com/yourusername', icon: Instagram, label: 'Instagram' },
  { href: 'https://facebook.com/yourusername', icon: Facebook, label: 'Facebook' },
];

export default function Social() {
  return (
    <div className="flex space-x-6 mt-4">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon className="w-6 h-6 hover:text-gray-400 transition-colors duration-200" />
        </a>
      ))}
    </div>
  );
}
