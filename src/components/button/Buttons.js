import styles from './Buttons.module.scss';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Buttons() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
    setTimeout(() => {
      const section = document.getElementById('project-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10);
  }

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight)
        setShowButtons(true);
      else setShowButtons(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  return (
    <div className={`${styles.buttons} ${showButtons ? styles.show : ''}`}>
      <button onClick={handleTop}>top</button>
      <button onClick={handleBack}>back</button>
    </div>
  )
}