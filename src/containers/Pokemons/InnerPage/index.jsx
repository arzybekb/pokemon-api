import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { useParams } from 'react-router-dom'
import { Loader } from 'rsuite'
import { getPokemonByID } from '../../../api/getPokemonById'
import { getClassName } from '../../../utils/helpers/getClassname'
import About from '../../../components/Pokemon/InnerPage/About'
import { POKEMON_DEFAULT_VALUE } from '../../../utils/constants/constants'
import BaseStats from '../../../components/Pokemon/InnerPage/BaseStats'

function PokemonInnerPage() {
   const [pokemon, setPokemon] = useState(POKEMON_DEFAULT_VALUE)
   const [loading, setLoading] = useState(false)
   const { id } = useParams()
   const className = getClassName(pokemon.types)

   useEffect(() => {
      setLoading(true)
      const fetchData = async () => {
         const data = await getPokemonByID(id)
         setPokemon(data)
         setLoading(false)
      }
      fetchData()
   }, [])

   if (loading) return <Loader center size="lg" />
   return (
      <Container>
         <ImageContainer className={className}>
            <Name>{pokemon?.name}</Name>
            <Type>
               {pokemon.types.map(({ type }) => (
                  <span key={type.name}>{type.name}</span>
               ))}
            </Type>
            <Number>#{pokemon.id}</Number>
            <Image
               src={pokemon.sprites.other.dream_world.front_default}
               alt={pokemon.name}
            />
         </ImageContainer>
         <Flexer>
            <About pokemon={pokemon} />
            <BaseStats stats={pokemon.stats} />
         </Flexer>
      </Container>
   )
}

export default PokemonInnerPage

const Container = styled.div``

const Flexer = styled.div`
   display: flex;
   background-color: #fff;
   color: #333;
   box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
   padding: 2rem;
   position: relative;
   z-index: 2;
   margin-top: -10px;
   & h3 {
      margin: 0;
   }
   @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
   }
`

const ImageContainer = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   background-color: var(--color);
   border-radius: 10px;
   padding-bottom: 2rem;
   & img {
      max-width: 20%;
   }
`

const Name = styled.p`
   font-size: 3rem;
   font-weight: 600;
   margin: 0;
   color: #fff;
   text-transform: capitalize;
`
const Type = styled.div`
   & span {
      display: inline-block;
      margin-right: 5px;
      border-radius: 100rem;
      background-color: hsla(0, 0%, 100%, 0.2);
      padding: 0.3rem 0.7rem;
      text-align: center;
      margin-bottom: 0.5rem;
      text-transform: capitalize;
      color: #fff;
   }
`
const Image = styled.img`
   max-width: 100%;
`
const Number = styled.h1`
   margin: 0;
   position: absolute;
   top: 0;
   right: 40px;
   font-size: 3rem;
   color: rgba(255, 255, 255, 0.2);
`
