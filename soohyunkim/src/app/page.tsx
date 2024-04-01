'use client'

import Transition from '@/components/transition'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleTransition = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 9000)
  }

  return (
    <div className={`container ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
      <div className="home-name">
        <p className="home-title">Soohyun Kim</p>
        <p className="home-frontend">Frontend</p>
      </div>
    </div>
  )
}
