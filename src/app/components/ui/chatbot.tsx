'use client';

import { useState } from 'react';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';

const qaPairs = [
  { question: 'who are you', answer: "I'm Arjay Tebia, a 23-year-old frontend developer based in Quezon City." },
  { question: 'what do you do', answer: "I specialize in building responsive and functional web interfaces using technologies like Next.js and Tailwind CSS." },
  { question: 'where are you from', answer: "I'm from Quezon City, Philippines." },
  { question: 'how can I contact you', answer: "You can fill out the contact form at the bottom of this page or connect with me via LinkedIn or email." },
  { question: 'what technologies do you use', answer: "I use Next.js, Tailwind CSS, TypeScript, Node.js, Express, and more." },
  { question: 'what is your experience', answer: "I have worked on various frontend projects, focusing on building scalable and responsive UIs for websites and applications." },
  { question: 'do you have a portfolio', answer: "Yes! You're currently viewing it. Check out the projects section to see my work." },
  { question: 'where did you study', answer: "I studied Computer Science and have a strong foundation in frontend development." },
  { question: 'what are your career goals', answer: "I aim to become a senior frontend developer and eventually lead a team to build innovative web experiences." },
  { question: 'do you work with backend', answer: "Yes, I have experience with backend development using Node.js, Express, and REST APIs." },
  { question: 'are you available for hire', answer: "I'm open to exciting opportunities! Feel free to contact me using the form or via LinkedIn." },
  { question: 'what frameworks do you use', answer: "I use frameworks like React, Next.js, and occasionally Express on the backend." },
  { question: 'what is your favorite project', answer: "One of my favorite projects is a portfolio site I built using Next.js and Tailwind CSS. It showcases my design and development skills." },
  { question: 'what do you do for fun', answer: "I enjoy learning new technologies, designing UI components, and occasionally playing games or watching tech videos." },
  { question: 'what is your design style', answer: "I prefer clean, modern UIs with smooth interactions and a strong focus on user experience." },
];
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    const lower = input.toLowerCase();

    const matched = qaPairs.find(q => lower.includes(q.question));
    const botMessage = {
      from: 'bot',
      text: matched ? matched.answer : "Sorry, I don't understand that yet. Try asking something else!",
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          <FaRobot size={24} />
        </button>
      )}

      {isOpen && (
        <div className="w-80 bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden flex flex-col">
          <div className="bg-blue-600 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaRobot />
              <span className="font-bold">Ask Arjay</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <FaTimes />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-2 h-64">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`my-1 p-2 rounded-lg ${
                  msg.from === 'user'
                    ? 'bg-blue-500 text-white self-end text-right ml-10'
                    : 'bg-gray-700 text-left mr-10'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex border-t border-gray-800">
            <input
              className="flex-1 px-3 py-2 bg-gray-800 text-white focus:outline-none"
              placeholder="Ask me something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="px-3 bg-blue-600 hover:bg-blue-700">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
