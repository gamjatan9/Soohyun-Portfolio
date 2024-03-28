import { MenuBtn } from '../../public/svgs/index'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="home-name">
        <p className="home-title">Soohyun Kim</p>
        <p className="home-frontend">Frontend</p>
      </div>
      <Link href="/menu">
        <button>
          <MenuBtn />
        </button>
      </Link>
    </div>
  )
}
