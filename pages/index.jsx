import Styles from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '../Components/Card'

export async function getStaticProps() {

    const maxPokemons = 252
    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    data.results.forEach((item, index) => {
        item.id = index + 1
    })

    return {
        props: {
            pokemons: data.results
        }
    }
}

export default function Home({ pokemons }) {
    return (
        <>
            <div className={Styles.title_container}>
                <h1 className={Styles.title}>Poke<span>dex</span></h1>
                <Image src='/images/pokeball.png' width='50px' height='50px' alt='pokebola'></Image>
            </div>

            <div className={Styles.pokemon_container}>
                {pokemons.map((pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </>

    )
}
