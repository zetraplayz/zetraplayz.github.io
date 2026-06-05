'use client';

import { motion } from 'framer-motion';
import styles from './page.module.css';

const skillCategories = [
  {
    title: "Software Development",
    skills: ["Web Development", "Mobile Development", "Application Development"]
  },
  {
    title: "Artificial Intelligence",
    skills: ["AI Development", "Local AI Systems", "LLM Concepts", "Prompt Engineering"]
  },
  {
    title: "Cybersecurity",
    skills: ["Security Fundamentals", "Ethical Hacking Learning Path"]
  },
  {
    title: "Project Management",
    skills: ["Agile Methodology", "Planning", "Organization"]
  },
  {
    title: "Communication",
    skills: ["English", "Technical Communication"]
  },
  {
    title: "Additional Skills",
    skills: ["Typing", "Problem Solving", "System Thinking", "Architecture Design"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-1">Technical <span className="text-gradient">Arsenal</span></h1>
          <p className="text-lead">Categorized expertise and foundational capabilities.</p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className={`${styles.categoryCard} glass-panel`}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <div className={styles.skillTags}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
              <div className={styles.progressVisual}>
                <motion.div 
                  className={styles.progressBar}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
