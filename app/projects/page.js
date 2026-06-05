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
    title: 'Project Zetra Base',
    featured: false,
    description: 'Modular cognitive ecosystem architecture.',
    longDescription: 'The foundational architecture for a long-term local-first cognitive ecosystem featuring modular AI agents, secure runtime execution, and an intelligent orchestrator engine.',
    tags: ['System Architecture', 'Local AI', 'Security', 'Next.js'],
    role: 'System Architect',
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
      </div>
    </div>
  );
}
