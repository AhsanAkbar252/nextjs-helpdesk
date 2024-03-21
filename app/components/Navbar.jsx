import Link from 'next/link'
import Image from 'next/image'
import Logo from './next.svg'
export default function Navbar() {
  return (
    <nav>
        <Image 
            src={Logo}
            alt="Next.js Logo"
            width={70}
            quality={100}
        />
        <h1>My App</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
