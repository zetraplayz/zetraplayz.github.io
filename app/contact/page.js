'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, Phone, Code, Briefcase, Camera } from 'lucide-react';
import styles from './page.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.createElement;
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    
    // Simulating form submission for static export
    // In production, user can replace this with Formspree, EmailJS, or Web3Forms action URL.
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-1">Establish <span className="text-gradient">Connection</span></h1>
          <p className="text-lead">Reach out for collaborations, inquiries, or system architecture discussions.</p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Direct Transmission</h3>
              <a href="mailto:zetraofficial2023@gmail.com" className={`${styles.infoLink} interactive`}>
                <Mail size={20} /> zetraofficial2023@gmail.com
              </a>
              <a href="mailto:953625243068@ritrjpm.ac.in" className={`${styles.infoLink} interactive`}>
                <Mail size={20} /> 953625243068@ritrjpm.ac.in
              </a>
              <a href="tel:+919047010303" className={`${styles.infoLink} interactive`}>
                <Phone size={20} /> +91 90470 10303
              </a>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Digital Footprint</h3>
              <div className={styles.socialGrid}>
                <a href="https://github.com/zetraplayz" target="_blank" rel="noopener noreferrer" className={`${styles.socialCard} interactive`}>
                  <Code size={24} />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/mushi-dharun-5927743a4" target="_blank" rel="noopener noreferrer" className={`${styles.socialCard} interactive`}>
                  <Briefcase size={24} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/_mr_zetra_/" target="_blank" rel="noopener noreferrer" className={`${styles.socialCard} interactive`}>
                  <Camera size={24} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Learning & Community Profiles</h3>
              <div className={styles.socialGrid}>
                <a href="https://www.guvi.in/rracman077592" target="_blank" rel="noopener noreferrer" className={`${styles.socialCard} interactive`}>
                  <Code size={24} />
                  <span>HCL x GUVI</span>
                </a>
                <a href="https://www.skills.google/public_profiles/c02aa9bb-1e44-4096-adbc-f3bca40595fa" target="_blank" rel="noopener noreferrer" className={`${styles.socialCard} interactive`}>
                  <Briefcase size={24} />
                  <span>Google Skills</span>
                </a>
                <a href="https://me.developers.google.com/u/101303928363716291724" target="_blank" rel="noopener noreferrer" className={`${styles.socialCard} interactive`}>
                  <Code size={24} />
                  <span>Google Dev</span>
                </a>
                <a href="https://web.mybharat.gov.in/youth-public-profile/details/zetra_x" target="_blank" rel="noopener noreferrer" className={`${styles.socialCard} interactive`}>
                  <Briefcase size={24} />
                  <span>My Bharat</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.formContainer}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <h2 className={styles.formTitle}>Initialize Contact Protocol</h2>
              
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Identifier / Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className={styles.input} 
                  placeholder="Enter your name"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Return Node / Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className={styles.input} 
                  placeholder="Enter your email"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Payload / Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className={styles.textarea} 
                  placeholder="Enter your transmission payload..."
                  rows={5}
                />
              </div>

              {status === 'error' && (
                <div className={styles.errorMessage}>
                  <AlertCircle size={16} /> All fields are required for transmission.
                </div>
              )}

              <button 
                type="submit" 
                className={`${styles.submitBtn} interactive`}
                disabled={status === 'submitting' || status === 'success'}
              >
                {status === 'idle' && <><Send size={18} /> Transmit Payload</>}
                {status === 'submitting' && <div className={styles.spinner}></div>}
                {status === 'success' && <><CheckCircle size={18} /> Transmission Successful</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
