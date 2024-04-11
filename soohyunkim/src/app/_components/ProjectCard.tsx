import { Project } from '@/types/types';
import Link from 'next/link';

export default function ProjectCard({ title, date, itemContent }: Project) {
  return (
    <div className="project-card">
      <div className="title-box">
        <div className="title">{title}</div>
        <div className="date">{date}</div>
      </div>
      <Link href="/project/card">
        <div>{itemContent}</div>
      </Link>
    </div>
  );
}
