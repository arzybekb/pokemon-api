import axios from '../config/api'
import { BASE_URL } from '../utils/constants/constants'

export const getAllPokemons = async ({ currentPage = 1, limit = 20 }) => {
   try {
      const response = await axios.get(
         `${BASE_URL}/pokemon?limit=${limit}&offset=${(currentPage - 1) * 20}`
      )
      const { results } = response.data
      // Что бы получить данные о каждом покемоне, сделал еще один запрос
      const pokemonData = await Promise.all(
         results.map(async (pokemon) => {
            const response = await axios.get(pokemon.url)
            return {
               name: pokemon.name,
               imageUrl: response.data.sprites.other.dream_world.front_default,
               id: response.data.id,
               types: response.data.types,
            }
         })
      )
      return { data: pokemonData, count: response.data.count }
   } catch (error) {
      return error
   }
}
