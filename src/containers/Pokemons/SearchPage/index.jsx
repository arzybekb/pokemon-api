import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { PokemonContext } from '../../../context/PokemonContext'
import PokeCard from '../../../components/Card'

const SearchPage = () => {
   const location = useLocation()
   const navigate = useNavigate()

   const { globalPokemons } = useContext(PokemonContext)
   if (!location.state) {
      return navigate('/')
   }

   const filteredPokemons = globalPokemons.filter((pokemon) =>
      pokemon.name.includes(location.state.toLowerCase())
   )

   return (
      <Container>
         <p>
            Found <span>{filteredPokemons.length}</span> results:
         </p>
         <GridContainer>
            {filteredPokemons.map((pokemon) => (
               <PokeCard key={pokemon.id} pokemon={pokemon} />
            ))}
         </GridContainer>
      </Container>
   )
}
export default SearchPage

const Container = styled.div``

const GridContainer = styled.div`
   display: grid;
   margin: 1rem 0;
   align-items: center;
   justify-content: center;
   gap: 1.5rem;
   grid-template-columns: repeat(2, 1fr);
   @media screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
   }
`
