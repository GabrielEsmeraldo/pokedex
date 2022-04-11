import Image from 'next/image';
import Link from 'next/link';
import Styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={Styles.navbar}>
            <Link href="/">
                <div className={Styles.logo}>
                    <Image src='/images/pokeball.png' width='30px' height='30px'></Image>
                    <h1>Pokedex</h1>
                </div>
            </Link>

            <ul className={Styles.link_items}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/About">Sobre</Link></li>
            </ul>
        </nav>
    )
}