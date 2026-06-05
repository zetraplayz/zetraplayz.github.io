'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cpu, Shield, Brain, Workflow, Network } from 'lucide-react';
import styles from './page.module.css';

const ecosystemComponents = [
  {
    id: 'raven',
    name: 'R.A.V.E.N',
    role: 'Tactical cognitive AI & autonomous orchestration system',
    icon: <Brain size={32} />,
    concepts: ['Voice-first', 'Local-first', 'Memory-driven', 'Multi-agent planning']
  },
  {
    id: 'lyra',
    name: 'L.Y.R.A',
    role: 'Adaptive companion intelligence',
    icon: <Network size={32} />,
    concepts: ['Human-centered', 'Emotional intelligence', 'Responsive support']
  },
  {
    id: 'z-core',
    name: 'Z-CORE',
    role: 'Internal engineering framework',
    icon: <Workflow size={32} />,
    concepts: ['Modular structure', 'Execution workflows', 'Performance discipline']
  },
  {
    id: 'z-secure',
    name: 'Z+ Secure',
    role: 'Unified security layer',
    icon: <Shield size={32} />,
    concepts: ['Sandboxing', 'Runtime protection', 'Audit logging']
  }
];

export default function ProjectZetra() {
  return (
    <div className={styles.projectZetra}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.badge}>Vision Architecture</div>
          <h1 className="heading-1">Project <span className="text-gradient">ZETRA</span></h1>
          <p className="text-lead">A long-term cognitive ecosystem and future technology platform.</p>
        </motion.div>

        <section className={styles.visionSection}>
          <motion.div 
            className={styles.visionContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-2">The Ecosystem Vision</h2>
            <p className="text-body">
              Project Zetra is not a single application—it is a comprehensive, local-first cognitive infrastructure vision. It represents a systematic approach to modular, scalable, and future-ready engineering.
            </p>
            <p className="text-body">
              The architecture is designed to handle advanced AI orchestration, seamless emotional intelligence, stringent security, and efficient internal engineering standards.
            </p>
          </motion.div>
          <motion.div 
            className={styles.visionVisual}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Cpu size={120} className={styles.coreIcon} />
            <div className={styles.orbitContainer}>
              <div className={`${styles.orbit} ${styles.orbit1}`}></div>
              <div className={`${styles.orbit} ${styles.orbit2}`}></div>
              <div className={`${styles.orbit} ${styles.orbit3}`}></div>
            </div>
          </motion.div>
        </section>

        <section className={styles.componentsSection}>
          <h2 className={`heading-2 ${styles.centerHeading}`}>Core Components</h2>
          <div className={styles.componentGrid}>
            {ecosystemComponents.map((comp, idx) => (
              <motion.div 
                key={comp.id}
                className={`${styles.componentCard} glass-panel`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                <div className={styles.compIconWrapper}>{comp.icon}</div>
                <h3 className={styles.compName}>{comp.name}</h3>
                <p className={styles.compRole}>{comp.role}</p>
                <ul className={styles.compConcepts}>
                  {comp.concepts.map((concept, cIdx) => (
                    <li key={cIdx}>{concept}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.creativeUniverse}>
          <div className={styles.cuImageWrapper}>
            <Image 
              src="/images/creative-universe.png" 
              alt="Creative Universe Concept Art"
              fill
              style={{ objectFit: 'cover', opacity: 0.3 }}
            />
          </div>
          <motion.div 
            className={styles.cuContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-2 text-gradient">Creative Universe</h2>
            <p className="text-lead">
              A personal worldbuilding and storytelling project exploring themes of technology, humanity, control, freedom, and survival.
            </p>
            <div className={styles.cuGrid}>
              <div className={`${styles.cuCard} glass-panel`}>
                <h4>Core Themes</h4>
                <p>Control vs Freedom, Order vs Chaos, Rebuilding after collapse.</p>
              </div>
              <div className={`${styles.cuCard} glass-panel`}>
                <h4>Major Arcs</h4>
                <p>Outbreak Zero, Fall of Nations, The Last Will.</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
