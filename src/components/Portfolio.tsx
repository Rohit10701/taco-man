"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ExternalLink } from 'lucide-react';
import ConditionalPanel from './ConditionalPanel';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="bg-emerald-950 min-h-screen text-emerald-50 relative">
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 lg:hidden p-2 bg-emerald-900 rounded-lg"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Vertical Navigation */}
      <nav className={`fixed top-0 right-0 h-full w-16 bg-emerald-900 transform transition-transform duration-300 ease-in-out z-40
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
        <div className="h-full flex flex-col justify-center items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`transform -rotate-90 my-16 px-4 py-2 whitespace-nowrap hover:text-emerald-300 transition-colors
                ${activeSection === item.id ? 'text-emerald-300 font-bold' : 'text-emerald-50'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full lg:pr-16">
        {/* Home Section */}
        <ConditionalPanel isVisible={activeSection === "home"}>
        <section id="home" className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Rohit Kumar</h1>
            <h2 className="text-2xl md:text-3xl text-emerald-300 mb-4">Software Engineer</h2>
            <p className="text-lg mb-6">Patna, India</p>
            <div className="flex gap-4 mb-8">
              <a href="mailto:rohitkumar10701@gmail.com" className="hover:text-emerald-300">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-emerald-200">
              Experienced Software Engineer specializing in frontend development with expertise in React, Next.js, and modern web technologies.
            </p>
          </div>
        </section>
        </ConditionalPanel>

        {/* Experience Section */}
        <ConditionalPanel isVisible={activeSection === "experience"}>
        <section id="experience" className="min-h-screen p-8 pt-16">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="bg-emerald-900/50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <p className="text-emerald-300">Techinfinito</p>
                </div>
                <p className="text-emerald-400">May 2024 – Present</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-emerald-100">
                <li>Improved grocery e-commerce website performance by 80%</li>
                <li>Enhanced Lighthouse score from 4 to 80</li>
                <li>Implemented code splitting and optimization techniques</li>
              </ul>
            </div>
            
            <div className="bg-emerald-900/50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Frontend Developer</h3>
                  <p className="text-emerald-300">Amrutam</p>
                </div>
                <p className="text-emerald-400">Nov 2023 – May 2024</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-emerald-100">
                <li>Built healthcare consultation platform serving 7,000+ users</li>
                <li>Developed admin dashboard supporting 5 user roles</li>
                <li>Created questionnaire system using Remix framework</li>
              </ul>
            </div>
          </div>
        </section>
        </ConditionalPanel>

        {/* Skills Section */}
        <ConditionalPanel isVisible={activeSection === "skills"}>
        <section id="skills" className="min-h-screen p-8 pt-16">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-emerald-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'TypeScript'].map((skill) => (
                  <span key={skill} className="bg-emerald-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-emerald-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'Remix', 'Tailwind', 'HTML', 'CSS'].map((skill) => (
                  <span key={skill} className="bg-emerald-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-emerald-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Backend & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MongoDB', 'SQL', 'Redis', 'AWS'].map((skill) => (
                  <span key={skill} className="bg-emerald-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        </ConditionalPanel>

        {/* Projects Section */}
        <ConditionalPanel isVisible={activeSection === "projects"}>
        <section id="projects" className="min-h-screen p-8 pt-16">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-900/50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Quick Chat</h3>
                <a href="#" className="hover:text-emerald-300">
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-emerald-300 mb-4">React.js, TypeScript, Node.js, Kafka, Redis, Docker</p>
              <ul className="list-disc list-inside space-y-2 text-emerald-100">
                <li>Microservices architecture with 3 distinct services</li>
                <li>Real-time messaging using Socket.io</li>
                <li>Handles 1 million messages per day using Kafka</li>
              </ul>
            </div>

            <div className="bg-emerald-900/50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Collab</h3>
                <a href="#" className="hover:text-emerald-300">
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-emerald-300 mb-4">React.js, Next.js, Bootstrap, Firebase, socket.io</p>
              <ul className="list-disc list-inside space-y-2 text-emerald-100">
                <li>Real-time anonymous coding collaboration</li>
                <li>Page load times under 2 seconds</li>
                <li>Processes 20,000 updates per day</li>
              </ul>
            </div>
          </div>
        </section>
        </ConditionalPanel>

        {/* Contact Section */}
        <ConditionalPanel isVisible={activeSection === "contact"}>
        <section id="contact" className="min-h-screen p-8 pt-16">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="max-w-2xl mx-auto bg-emerald-900/50 p-6 rounded-lg">
            <div className="space-y-4">
              <div>
                <p className="font-bold">Email</p>
                <a href="mailto:rohitkumar10701@gmail.com" className="text-emerald-300 hover:text-emerald-100">
                  rohitkumar10701@gmail.com
                </a>
              </div>
              <div>
                <p className="font-bold">Phone</p>
                <a href="tel:+918340453292" className="text-emerald-300 hover:text-emerald-100">
                  +91-8340453292
                </a>
              </div>
              <div>
                <p className="font-bold">Location</p>
                <p className="text-emerald-300">Patna, India</p>
              </div>
              <div className="flex gap-4 pt-4">

                <a href="mailto:rohitkumar10701@gmail.com" className="hover:text-emerald-300">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
        </ConditionalPanel>
      </main>
    </div>
  );
};

export default Portfolio;