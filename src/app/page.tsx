'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Mock data
const mockProjects = [
  {
    id: 1,
    title: "Example title",
    description: "Example description",
    image_url: null,
    github_url: "https://github.com",
    live_url: "https://example.com"
  },
  {
    id: 2,
    title: "Example title",
    description: "Example description",
    image_url: null,
    github_url: "https://github.com",
    live_url: "https://example.com"
  }
];

const mockExperiences = [
  {
    id: 1,
    title: "Example title",
    company: "Example company",
    start_date: "7/24/2025",
    end_date: "7/24/2025",
    description: [
      "Example description",
      "Example description"
    ]
  },
  {
    id: 2,
    title: "Example title",
    company: "Example company",
    start_date: "7/24/2025",
    end_date: "7/24/2025",
    description: [
      "Example description",
      "Example description"
    ]
  }
];

// Hero
const HeroSection = () => (
  <section className="min-h-screen flex items-center pt-16">
    <div className="max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-4">
          Noah Rushing
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Example statement
        </p>
      </motion.div>
    </div>
  </section>
);

// About
const AboutSection = () => (
  <section id="about" className="py-20 md:py-32">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-medium text-gray-900">About Me</h2>
        </div>
        <div className="md:col-span-2 space-y-4 text-gray-600 leading-relaxed">
          <p>
            Section 1
          </p>
          <p>
            Section 2
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Projects
const ProjectsSection = () => {
  return (
    <section id="work" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-medium text-gray-900 mb-12">Featured Work</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {mockProjects.map(project => (
            <div key={project.id} className="group">
              <div className="aspect-[16/10] bg-gray-200 rounded-md mb-6 overflow-hidden">
                {project.image_url ? (
                  <img src={project.image_url} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 font-light text-2xl">
                    {project.title.slice(0, 2)}
                  </div>
                )}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <a href={project.github_url || project.live_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                View Project <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-medium text-gray-900 mb-12">Experience</h2>
        <div className="border-l border-gray-200">
          {mockExperiences.map(exp => (
            <div key={exp.id} className="relative pl-12 pb-12 last:pb-0">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-gray-900 rounded-full" />
              <p className="text-sm text-gray-500 mb-1">
                {new Date(exp.start_date).getFullYear()} - {exp.end_date ? new Date(exp.end_date).getFullYear() : 'Present'}
              </p>
              <h3 className="text-lg font-medium text-gray-900">{exp.title}</h3>
              <p className="text-md text-gray-600 mb-3">{exp.company}</p>
              <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-gray-600">
                {exp.description?.slice(0, 2).map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact
const ContactSection = () => (
  <section id="contact" className="py-20 md:py-32 bg-gray-900 text-white">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-medium mb-4">Let's Connect</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
        Example description
      </p>
      <a href="mailto:email@example.com" className="inline-block bg-white text-gray-900 font-medium px-8 py-3 rounded-md hover:bg-gray-200 transition-colors">
        email@example.com
      </a>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
} 