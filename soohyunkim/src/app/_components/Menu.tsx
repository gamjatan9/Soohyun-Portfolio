'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MenuBtn, MenuBtnL } from '../../../public/svgs';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const menuLinks = [
  { path: '/', label: 'HOME' },
  { path: '/about', label: 'ABOUT' },
  { path: '/projects', label: 'PROJECTS' },
  { path: '/contact', label: 'CONTACT' },
];

export default function Menu() {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef<any>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set('.menu-link-item-holder', { y: 150 });

      tl.current = gsap
        .timeline({ paused: true })
        .to('.menu-overlay', {
          duration: 1.3,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: 'power4.inOut',
        })
        .to('.menu-link-item-holder', {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power4.inOut',
          delay: -0.75,
        });
    },
    { scope: container },
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-name">
          <p>SoohyunKim Frontend</p>
          <p>Portfolio 2024</p>
        </div>
        <button className="menu-btn">
          <MenuBtn onClick={toggleMenu} className="pointer" />
        </button>
      </div>
      <div className="menu-overlay">
        <div className="menu-bar">
          <Link href="/" onClick={toggleMenu}>
            <p>SoohyunKim Frontend</p>
            <p>Portfolio 2024</p>
          </Link>
          <button className="menu-close-icon">
            <MenuBtnL onClick={toggleMenu} className="pointer" />
          </button>
        </div>
        <div className="menu-links">
          {menuLinks.map((link, index) => (
            <div className="menu-link-item" key={index}>
              <div className="menu-link-item-holder">
                <Link
                  href={link.path}
                  className="menu-link"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
