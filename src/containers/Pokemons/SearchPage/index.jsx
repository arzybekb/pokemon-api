import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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
      <div>
         <p>
            Found <span>{filteredPokemons.length}</span> results:
         </p>
         <div>
            {filteredPokemons.map((pokemon) => (
               <PokeCard key={pokemon.id} pokemon={pokemon} />
            ))}
         </div>
      </div>
   )
}
export default SearchPage
