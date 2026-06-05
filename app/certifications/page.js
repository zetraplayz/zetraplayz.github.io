'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ExternalLink } from 'lucide-react';
import styles from './page.module.css';

const certData = [
  { id: 1, title: 'Python for Data Science (Elite)', issuer: 'NPTEL / IIT Madras', file: '/certificates/NOC26CS80S47190018303193042.pdf', category: 'Data Science' },
  { id: 2, title: 'Generate Reports with AI Research Agents', issuer: 'Microsoft', file: '/certificates/Credentials - mushidharuna-4042 _ Microsoft Learn.pdf', category: 'AI' },
  { id: 3, title: 'Streamline Business Workflows with AI Chat', issuer: 'Microsoft', file: '/certificates/Credentials - mushidharuna-4042 _ Microsoft Learn_2.pdf', category: 'AI' },
  { id: 4, title: 'Building AI-Powered Search with Vector Search', issuer: 'MongoDB', file: '/certificates/SkillsCert20260604-31-ndosfb.pdf', category: 'Database' },
  { id: 5, title: 'Build & Deploy Apps with Google AI Studio', issuer: 'GUVI × HCL', file: '/certificates/HCL GUVI Certification - A17Z085O0a2sC9i091.pdf', category: 'AI' },
  { id: 6, title: 'ChatGPT for Everyone', issuer: 'GUVI × HCL', file: '/certificates/HCL GUVI Certification - 2OB547Ig06b49M81Z0.pdf', category: 'AI' },
  { id: 7, title: 'Introduction to Cybersecurity Awareness', issuer: 'HP LIFE', file: '/certificates/Cybersecurity Awareness Certification.pdf', category: 'Security' },
  { id: 8, title: 'Agile Project Management', issuer: 'HP LIFE', file: '/certificates/Agile Project Management Certification.pdf', category: 'Management' },
  { id: 9, title: 'AI for Business Professionals', issuer: 'HP LIFE', file: '/certificates/AI for Business Professionals Certification.pdf', category: 'AI' },
  { id: 10, title: 'AI for Beginners', issuer: 'HP LIFE', file: '/certificates/AI for Beginners Certification.pdf', category: 'AI' },
  { id: 11, title: 'Critical Thinking in the AI Era', issuer: 'HP LIFE', file: '/certificates/Critical Thinking in the AI Era Certification.pdf', category: 'Soft Skills' },
  { id: 12, title: 'Professional Networking for Career Growth', issuer: 'HP LIFE', file: '/certificates/Professional Networking for Career Growth Certification.pdf', category: 'Soft Skills' },
  { id: 13, title: 'Customer Experience (CX) for Business Success', issuer: 'HP LIFE', file: '/certificates/Customer Experience (CX) for Business Success Certification.pdf', category: 'Business' },
  { id: 14, title: 'GUVI Participation', issuer: 'GUVI', file: '/certificates/HCL GUVI Certification - 55r1M4681y8Xi10E78.png', category: 'Participation', isImage: true }
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
