'use client';

import { useRouter } from 'next/navigation';

export default function SideModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <>
      <div className="side-modal-overlay" onClick={() => router.back()} />
      <div className="side-modal">
        <button className="close" onClick={() => router.back()}>
          X
        </button>
        {children}
      </div>
    </>
  );
}
