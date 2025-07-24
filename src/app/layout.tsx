'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Metadata } from "next";
import "./globals.css";

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-800 font-sans antialiased">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex justify-between items-center h-16">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="font-semibold text-lg text-gray-900"
              >
                Noah Rushing
              </button>
              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm transition-colors relative ${
                      activeSection === item.id
                        ? 'text-gray-900'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                     {activeSection === item.id && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-900"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </header>
        
        <main>
          {children}
        </main>
        
        <footer className="py-12 mt-20 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="flex justify-center gap-6 mb-6">
              <a href="mailto:your.email@example.com" className="text-gray-500 hover:text-gray-900 transition-colors">Email</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">LinkedIn</a>
            </div>
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Noah Rushing. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 