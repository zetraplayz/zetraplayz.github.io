'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Cursor.module.css';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports hover
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      border: '1px solid var(--text-primary)',
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 35,
      }
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: 'var(--text-primary)',
      border: '1px solid var(--text-primary)',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 35,
      }
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 1,
      transition: {
        type: 'spring',
        mass: 0.05,
        stiffness: 1000,
        damping: 25,
      }
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 0,
    }
  };

  return (
    <>
      <motion.div
        className={styles.cursor}
        variants={variants}
        animate={isHovered ? "hover" : "default"}
      />
      <motion.div
        className={styles.cursorDot}
        variants={dotVariants}
        animate={isHovered ? "hover" : "default"}
      />
    </>
  );
}
