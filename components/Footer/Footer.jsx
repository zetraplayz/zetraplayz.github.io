'use client';

import Link from 'next/link';
import { Code, Briefcase, Mail, Camera } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>ZETRA</h2>
            <p className={styles.tagline}>Mushi Dharun | Founder of Zetra & Co.</p>
          </div>
          
          <div className={styles.socials}>
            <a href="https://github.com/zetraplayz" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} interactive`}>
              <Code size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mushi-dharun-5927743a4" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} interactive`}>
              <Briefcase size={20} />
            </a>
            <a href="mailto:zetraplayz472@gmail.com" className={`${styles.socialIcon} interactive`}>
              <Mail size={20} />
            </a>
            <a href="https://www.instagram.com/_mr_zetra_/" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} interactive`}>
              <Camera size={20} />
            </a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {currentYear} ZETRA & Co. All rights reserved.</p>
          <div className={styles.links}>
            <Link href="/contact" className={`${styles.bottomLink} interactive`}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
