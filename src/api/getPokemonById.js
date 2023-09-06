import axios from '../config/api'

export const getPokemonByID = async (id) => {
   try {
      const { data } = await axios.get(`pokemon/${id}`)
      return data
   } catch (error) {
      return error
   }
}
