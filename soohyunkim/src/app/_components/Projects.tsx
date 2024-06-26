'use client';

import { useEffect, useRef } from 'react';
import ProjectCard from '@/app/_components/ProjectCard';
import { Portfolio, SchoolLog } from '../../../public/svgs';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleWheel = (e: WheelEvent) => {
      if (scrollContainer) {
        e.preventDefault(); //기본스크롤동작방지
        scrollContainer.scrollLeft += e.deltaY + e.deltaX;
      }
    };
    scrollContainer?.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      scrollContainer?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const projects = [
    {
      title: 'Portfolio',
      date: '2024.03',
      itemContent: (
        <Link href="/project/portfolio">
          <Portfolio className="item" />
        </Link>
      ),
    },
    {
      title: 'SchoolLog',
      date: '2023.03-2023.10',
      itemContent: (
        <Link href="/project/schoollog">
          <SchoolLog className="item" />
        </Link>
      ),
    },
    {
      title: 'AllerGenie',
      date: '2023.11',
      itemContent: (
        <Image
          src="/images/allergenie.png" // 절대 경로 사용
          alt="AllerGenie"
          className="item"
          width={500} // 적절한 값으로 설정
          height={300} // 적절한 값으로 설정
        />
      ),
    },
  ];

  return (
    <div className="projects">
      <div className="scrollContainer" ref={scrollContainerRef}>
        <div className="horizontalScroll">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
