'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import styles from './page.module.css';

const timeline = [
  {
    period: 'Current',
    title: 'Founder & AI Systems Architect',
    org: 'Zetra & Co.',
    desc: 'Designing Project Zetra ecosystem (Z-CORE, R.A.V.E.N, L.Y.R.A). Building modular AI frameworks, memory engines, and secure execution layers.'
  },
  {
    period: 'Current',
    title: 'B.Tech Artificial Intelligence and Data Science',
    org: 'Ramco Institute of Technology',
    desc: 'Entering 2nd year. Focusing on advanced AI algorithms, programming foundations, and scalable system architectures.'
  },
  {
    period: 'Workshops',
    title: 'Technical Engagements',
    org: 'Google Developer Groups',
    desc: 'Active participant in GDG ecosystem. Participated in OpenMadurAI (Deploying Open Models on GKE) and Salem GDG Meet.'
  },
  {
    period: 'Project',
    title: 'Team Leader & Full Stack Developer',
    org: 'Lumini (Hackathon Project)',
    desc: 'Developed an AI-powered facial recognition and liveness detection system with offline authentication.'
  }
];

export default function Resume() {
  return (
    <div className={styles.resume}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.headerTop}>
            <div>
              <h1 className="heading-1">Professional <span className="text-gradient">Profile</span></h1>
              <p className="text-lead">Timeline, education, and professional experience.</p>
            </div>
            <a 
              href="/Mushi_Dharun_ZETRA_Resume.pdf" 
              download 
              className={`${styles.downloadBtn} interactive`}
            >
              <Download size={20} /> Download PDF
            </a>
          </div>
        </motion.div>

        <div className={styles.grid}>
          <motion.div 
            className={styles.mainColumn}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className={styles.sectionTitle}>Experience & Education</h2>
            <div className={styles.timeline}>
              {timeline.map((item, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <span className={styles.period}>{item.period}</span>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <span className={styles.org}>{item.org}</span>
                    <p className={styles.desc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className={styles.sectionTitle} style={{ marginTop: '4rem' }}>Resume Document</h2>
            <div className={styles.pdfViewer}>
              <iframe 
                src="/Mushi_Dharun_ZETRA_Resume.pdf#toolbar=0" 
                className={styles.iframe} 
                title="Mushi Dharun Resume"
              />
              <div className={styles.pdfOverlay}>
                <a href="/Mushi_Dharun_ZETRA_Resume.pdf" target="_blank" rel="noopener noreferrer" className={`${styles.openBtn} interactive`}>
                  Open Full Screen <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.sideColumn}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.infoCard}>
              <h3>Core Competencies</h3>
              <ul className={styles.list}>
                <li>Software Engineering</li>
                <li>System Architecture</li>
                <li>AI & Machine Learning</li>
                <li>Cybersecurity & Ethical Hacking</li>
                <li>Full Stack Development</li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3>Technologies</h3>
              <ul className={styles.list}>
                <li>Python, C/C++, JS/TS</li>
                <li>React, Next.js, React Native</li>
                <li>FastAPI, WebSockets</li>
                <li>MySQL, PostgreSQL, MongoDB</li>
                <li>Ollama, Local LLMs, RAG</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
