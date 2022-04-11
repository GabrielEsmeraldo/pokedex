import Image from 'next/image'
import Styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={Styles.about}>
        <h1>Sobre o Projeto</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, eaque impedit pariatur error eius, nesciunt quasi excepturi beatae, voluptates laudantium sapiente praesentium est minima dignissimos odit atque. Culpa, ipsum quam!</p>
        <Image src='/images/charizard.png' width='300px' height='300px' alt='charizard'></Image>
    </div>
  )
}