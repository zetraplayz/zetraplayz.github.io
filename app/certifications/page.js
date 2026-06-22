'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ExternalLink } from 'lucide-react';
import styles from './page.module.css';

const certData = [
  { id: 1, title: 'NPTEL Elite Certification', issuer: 'NPTEL / IIT Madras', file: '/certificates/NOC26CS80S47190018303193042.pdf', category: 'Data Science' },
  { id: 2, title: 'Microsoft Applied Skills Certification', issuer: 'Microsoft', file: '/certificates/Credentials - mushidharuna-4042 _ Microsoft Learn_2.pdf', category: 'AI' },
  { id: 3, title: 'Microsoft Applied Skills Certification', issuer: 'Microsoft', file: '/certificates/Credentials - mushidharuna-4042 _ Microsoft Learn.pdf', category: 'AI' },
  { id: 4, title: 'MongoDB Skill Badge Certification', issuer: 'MongoDB', file: '/certificates/SkillsCert20260604-31-ndosfb.pdf', category: 'Database' },
  { id: 5, title: 'Applied AI Professional Certification', issuer: 'GUVI × HCL', file: '/certificates/HCL GUVI Certification - 481mhG845x876r0178 (1).png', category: 'AI', isImage: true },
  { id: 6, title: 'Programming Certification', issuer: 'Great Learning Academy', file: '/certificates/Java Programming - Great Learning Academy.pdf', category: 'Programming' },
  { id: 7, title: 'Database Certification', issuer: 'GUVI × HCL', file: '/certificates/HCL GUVI Certification - a8z41687k171j1d2e0.png', category: 'Database', isImage: true },
  { id: 8, title: 'Data Science Certification', issuer: 'Great Learning Academy', file: '/certificates/Data Science & Analytics.pdf', category: 'Data Science' },
  { id: 9, title: 'Python & AI Certification', issuer: 'Verified Issuer', file: '/certificates/4d60a4ea-f6c2-483e-b68a-aec097fbe5a3.pdf', category: 'AI' },
  { id: 10, title: 'Python DSA Certification', issuer: 'Verified Issuer', file: '/certificates/d098c35b-b500-4336-b141-b5534c7f96f9.pdf', category: 'Programming' },
  { id: 11, title: 'AI Development Certification', issuer: 'GUVI × HCL', file: '/certificates/HCL GUVI Certification - 2OB547Ig06b49M81Z0.pdf', category: 'AI' },
  { id: 12, title: 'Generative AI Certification', issuer: 'GUVI × HCL', file: '/certificates/HCL GUVI Certification - A17Z085O0a2sC9i091.pdf', category: 'AI' },
  { id: 13, title: 'AI Business Certification', issuer: 'HP LIFE', file: '/certificates/AI for Business Professionals Certification.pdf', category: 'Business' },
  { id: 14, title: 'AI Fundamentals Certification', issuer: 'HP LIFE', file: '/certificates/AI for Beginners Certification.pdf', category: 'AI' },
  { id: 15, title: 'AI Awareness Certification', issuer: 'GUVI × HCL', file: '/certificates/HCL GUVI Certification - 55r1M4681y8Xi10E78.png', category: 'AI', isImage: true },
  { id: 16, title: 'Cybersecurity Certification', issuer: 'HP LIFE', file: '/certificates/Cybersecurity Awareness Certification.pdf', category: 'Security' },
  { id: 17, title: 'Project Management Certification', issuer: 'HP LIFE', file: '/certificates/Agile Project Management Certification.pdf', category: 'Management' },
  { id: 18, title: 'Innovation & Design Certification', issuer: 'HP LIFE', file: '/certificates/Design Thinking.pdf', category: 'Soft Skills' },
  { id: 19, title: 'Critical Thinking Certification', issuer: 'HP LIFE', file: '/certificates/Critical Thinking in the AI Era Certification.pdf', category: 'Soft Skills' },
  { id: 20, title: 'Business Operations Certification', issuer: 'HP LIFE', file: '/certificates/Inventory Management.pdf', category: 'Business' },
  { id: 21, title: 'Customer Experience Certification', issuer: 'HP LIFE', file: '/certificates/Customer Experience (CX) for Business Success Certification.pdf', category: 'Business' },
  { id: 22, title: 'Professional Development Certification', issuer: 'HP LIFE', file: '/certificates/Professional Networking for Career Growth Certification.pdf', category: 'Soft Skills' },
  { id: 23, title: 'Emerging Technology Certification', issuer: 'Verified Issuer', file: '/certificates/3D Printing.pdf', category: 'Engineering' },
  { id: 24, title: 'OpenMadurAI – Deploying Open Models on GKE', issuer: 'Google Developer Groups', file: '/certificates/Credential GDG - owiehejwis.pdf', category: 'Participation' },
  { id: 25, title: 'Salem Google Developer Meet – Showing Next Level Google AI Models', issuer: 'Google Developer Groups', file: '/certificates/Credential Salem - fgasfsfas.pdf', category: 'Participation' },
  { id: 26, title: 'Python Fundamentals Certification', issuer: 'Verified Issuer', file: '/certificates/43f2d9ff-9fbb-48e7-8510-c8c1621e3d24.pdf', category: 'Programming' }
];

export default function Certifications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = ['All', ...Array.from(new Set(certData.map(c => c.category)))];

  const filteredCerts = useMemo(() => {
    return certData.filter(cert => {
      const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || cert.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className={styles.certifications}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-1">Verified <span className="text-gradient">Credentials</span></h1>
          <p className="text-lead">Professional certifications and continuous learning.</p>
        </motion.div>

        <motion.div 
          className={styles.controls}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.searchBar}>
            <Search size={20} className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Search certifications..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filters}>
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''} interactive`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div 
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`${styles.certCard} glass-panel interactive`}
                onClick={() => setSelectedCert(cert)}
              >
                <div className={styles.certPreview}>
                  <div className={styles.certIcon}>
                    {cert.isImage ? 'IMG' : 'PDF'}
                  </div>
                </div>
                <div className={styles.certInfo}>
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredCerts.length === 0 && (
            <p className={styles.noResults}>No certifications found matching your criteria.</p>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <div>
                  <h3 className={styles.modalTitle}>{selectedCert.title}</h3>
                  <p className={styles.modalIssuer}>{selectedCert.issuer}</p>
                </div>
                <button 
                  className={`${styles.closeBtn} interactive`} 
                  onClick={() => setSelectedCert(null)}
                >
                  <X size={24} />
                </button>
              </div>
              <div className={styles.modalBody}>
                {selectedCert.isImage ? (
                  <img src={selectedCert.file} alt={selectedCert.title} className={styles.modalImage} />
                ) : (
                  <iframe src={`${selectedCert.file}#toolbar=0`} className={styles.modalIframe} title={selectedCert.title} />
                )}
              </div>
              <div className={styles.modalFooter}>
                <a 
                  href={selectedCert.file} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.externalLink} interactive`}
                >
                  Open in New Tab <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
