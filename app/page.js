'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Mail } from 'lucide-react';
import styles from './page.module.css';

const roles = [
  "Software Engineer",
  "AI Developer",
  "System Architect",
  "Ethical Hacker",
  "Founder of Zetra & Co."
];

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Background Graphic */}
      <div className={styles.bgGraphic}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.radialGradient}></div>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.imageContainer}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.profileImageWrapper}>
                <Image 
                  src="/logo.png" 
                  alt="ZETRA Profile"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
            <div className={styles.imageGlow}></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="heading-hero">Mushi Dharun</h1>
          </motion.div>

          <motion.div 
            className={styles.rolesContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className={styles.roleScroller}>
              {roles.map((role, idx) => (
                <span key={idx} className={styles.role}>{role}</span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/projects" className={`${styles.btnPrimary} interactive`}>
                View Projects <ChevronRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/Mushi_Dharun_ZETRA_Resume.pdf" download className={`${styles.btnSecondary} interactive`}>
                Resume <Download size={18} />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className={`${styles.btnSecondary} interactive`}>
                Contact <Mail size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro}>
        <motion.div 
          className={`${styles.introContainer} glass-panel`}
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="heading-2">Systematic. Intelligent. <span className="text-gradient">Future-Ready.</span></h2>
          <p className="text-lead">
            Building modular, scalable, and secure technology ecosystems. From AI infrastructure to advanced web applications, I construct systems designed for the future.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
