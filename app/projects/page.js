'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Code, ExternalLink } from 'lucide-react';
import styles from './page.module.css';

const projects = [
  {
    id: 'lumini',
    title: 'Lumini',
    featured: true,
    description: 'AI-Powered Facial Recognition and Verification System.',
    longDescription: 'An advanced enterprise-grade security system incorporating offline authentication, facial recognition, and liveness detection. Built with edge AI capabilities, secure local encrypted storage, and seamless AWS synchronization architecture to function reliably in connectivity-deprived environments.',
    tags: ['React Native', 'Computer Vision', 'Face Recognition', 'Liveness Detection', 'AWS', 'Offline Auth'],
    role: 'Team Leader, Full Stack Developer, AI/ML Engineer',
    image: '/images/lumini.png',
    links: { github: '#', live: '#' }
  },
  {
    id: 'project-zetra',
    title: 'Project Z-CORE & ZPLUS',
    featured: true,
    description: 'Master AI Ecosystem Orchestrator and Security Layer.',
    longDescription: 'The foundational architecture for a long-term local-first cognitive ecosystem featuring modular AI agents, secure runtime execution (ZPLUS SECURE), and an intelligent orchestrator engine.',
    tags: ['System Architecture', 'Local AI', 'Security', 'Next.js', 'FastAPI'],
    role: 'System Architect & AI Engineer',
    image: '/images/project-zetra.png',
    links: { github: '#', live: '#' }
  },
  {
    id: 'project-raven',
    title: 'R.A.V.E.N',
    featured: false,
    description: 'Research and Analysis Vision Engine Network.',
    longDescription: 'An advanced Knowledge Engine subsystem for Project Zetra. It integrates state-of-the-art vector databases (ChromaDB) and LLM orchestration (LiteLLM) to perform deep research, contextual retrieval, and analytical reasoning.',
    tags: ['Vector Database', 'RAG', 'ChromaDB', 'LiteLLM', 'Knowledge Engine'],
    role: 'AI Engineer',
    image: '/images/project-zetra.png',
    links: { github: '#', live: '#' }
  },
  {
    id: 'project-lyra',
    title: 'L.Y.R.A',
    featured: false,
    description: 'Linguistic Yield & Recognition Architecture.',
    longDescription: 'The Memory and Voice Engine subsystem of Project Zetra. Responsible for maintaining persistent context, voice processing (edge_tts, speechrecognition), and dynamic conversational yield.',
    tags: ['Speech Processing', 'Edge TTS', 'Memory Engine', 'NLP'],
    role: 'AI Engineer',
    image: '/images/project-zetra.png',
    links: { github: '#', live: '#' }
  }
];

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-1">Featured <span className="text-gradient">Projects</span></h1>
          <p className="text-lead">Engineering complex systems and cognitive infrastructure.</p>
        </motion.div>

        <div className={styles.projectList}>
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              className={`${styles.projectCard} ${project.featured ? styles.featured : ''} glass-panel`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <div className={styles.projectContent}>
                {project.featured && <span className={styles.featuredBadge}>Featured Case Study</span>}
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectSubtitle}>{project.description}</p>
                
                <div className={styles.projectMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Role</span>
                    <span className={styles.metaValue}>{project.role}</span>
                  </div>
                </div>

                <p className={styles.projectDescription}>{project.longDescription}</p>

                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.actions}>
                  <a href={project.links.github} className={`${styles.actionBtn} interactive`} aria-label="GitHub">
                    <Code size={20} />
                  </a>
                  <a href={project.links.live} className={`${styles.actionLink} interactive`}>
                    View Case Study <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              
              <div className={styles.projectVisual}>
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={`${project.title} Preview`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className={styles.abstractVisual}>
                    <div className={styles.abstractCircle}></div>
                    <div className={styles.abstractLines}></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginTop: '80px', marginBottom: '40px' }}
        >
          <h2 className="heading-2">Active Project <span className="text-gradient">Roadmap</span></h2>
          <p className="text-lead">Tracking development progression from foundational to enterprise-grade.</p>
        </motion.div>

        <div className={styles.roadmapGrid}>
          <motion.div 
            className={`${styles.roadmapCard} glass-panel`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>Beginner Phase</h3>
            <ul>
              <li>Scientific Calculator</li>
              <li>Expense Tracker</li>
              <li>Student Management System</li>
            </ul>
          </motion.div>
          <motion.div 
            className={`${styles.roadmapCard} glass-panel`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Intermediate Phase</h3>
            <ul>
              <li>Attendance Management System</li>
              <li>Library Management System</li>
              <li>Portfolio Website</li>
              <li>College Website Portal</li>
            </ul>
          </motion.div>
          <motion.div 
            className={`${styles.roadmapCard} glass-panel`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Advanced Phase</h3>
            <ul>
              <li>College ERP Portal</li>
              <li>Hand Tracking Controller</li>
              <li>Eye Tracking Controller</li>
              <li>Age Detection System</li>
              <li>Face Recognition Attendance System</li>
            </ul>
          </motion.div>
          <motion.div 
            className={`${styles.roadmapCard} glass-panel`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>Placement-Level</h3>
            <ul>
              <li>AI Resume Analyzer</li>
              <li>AI Interview Assistant</li>
              <li>Smart Campus Management System</li>
              <li>Real-Time Surveillance System</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
