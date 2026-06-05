'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-1">About <span className="text-gradient">ZETRA</span></h1>
          <p className="text-lead">The Builder Identity.</p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="heading-3">Who I Am</h2>
            <p className="text-body">
              My name is Mushi Dharun, known professionally as ZETRA. I am an aspiring software engineer, AI developer, system architect, and ethical hacker. My focus lies in constructing robust, future-ready technology systems.
            </p>
            <p className="text-body">
              My work spans full-stack software development, AI infrastructure, security, automation, and creative worldbuilding. The identity &quot;ZETRA&quot; represents my builder mindset—a founder identity dedicated to long-term ecosystem design.
            </p>

            <h2 className="heading-3">My Vision</h2>
            <p className="text-body">
              I believe AI is not magic; it is a system. Intelligence emerges from memory, reasoning, planning, and precise execution. My overarching vision, <strong>Project Zetra</strong>, is a modular cognitive ecosystem designed to be local-first, future-ready, and scalable.
            </p>
          </motion.div>

          <motion.div 
            className={styles.stats}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={`${styles.statCard} glass-panel`}>
              <h3 className={styles.statTitle}>Focus Areas</h3>
              <ul className={styles.statList}>
                <li>Software Development</li>
                <li>Artificial Intelligence</li>
                <li>System Design</li>
                <li>Cybersecurity</li>
                <li>Technology Innovation</li>
              </ul>
            </div>

            <div className={`${styles.statCard} glass-panel`}>
              <h3 className={styles.statTitle}>Core Strengths</h3>
              <ul className={styles.statList}>
                <li>Systems Thinking</li>
                <li>Architecture Design</li>
                <li>Problem Solving</li>
                <li>Long-term Planning</li>
              </ul>
            </div>
          </motion.div>
          <motion.div 
            className={styles.aboutImage}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/about-workspace.png" 
                alt="ZETRA Workspace"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className={styles.imageOverlay}></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
