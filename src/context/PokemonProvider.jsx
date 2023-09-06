import { useEffect, useMemo, useState } from 'react'
import { PokemonContext } from './PokemonContext'
import { getAllPokemons } from '../api/getAllPokemons'

export const PokemonProvider = ({ children }) => {
   const [globalPokemons, setGlobalPokemons] = useState([])
   const [page] = useState(1)
   const [limit] = useState(200)
   const [valueSearch, setValueSearch] = useState('')

   const onInputChange = (e) => {
      setValueSearch(e)
   }

   const [loading, setLoading] = useState(true)

   const getGlobalPokemons = async () => {
      const { data } = await getAllPokemons({ page, limit })
      setGlobalPokemons(data)
      setLoading(false)
   }

   useEffect(() => {
      getGlobalPokemons()
   }, [])

   const providerValues = useMemo(() => {
      return {
         globalPokemons,
         valueSearch,
         onInputChange,
         loading,
      }
   }, [globalPokemons, valueSearch, onInputChange, loading])
   return (
      <PokemonContext.Provider value={providerValues}>
         {children}
      </PokemonContext.Provider>
   )
}
