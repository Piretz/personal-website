'use client';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 mt-16">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Arjay Tebia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
