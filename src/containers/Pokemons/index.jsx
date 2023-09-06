import React, { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Loader, InputPicker } from 'rsuite'
import { getAllPokemons } from '../../api/getAllPokemons'
import PokeCard from '../../components/Card'
import Pagination from '../../components/UI/Pagination'
import useLocationQuery from '../../hook/useLocationQuerry'
import { POKEMON_TYPES } from '../../utils/constants/constants'
import { PokemonContext } from '../../context/PokemonContext'

function AllPokemons() {
   const query = useLocationQuery()
   const [pokemons, setPokemons] = useState([])
   const [currentPage, setCurrentPage] = useState(1)
   const [totalPages, setTotalPages] = useState(1)
   const [loading, setLoading] = useState(false)
   const [selectedType, setSelectedType] = useState('')
   const { globalPokemons } = useContext(PokemonContext)

   const handlePageChange = (newPage) => {
      setCurrentPage(newPage)
      query.set('page', newPage)
   }

   const handleTypeChange = (value) => {
      setSelectedType(value)
   }

   const fetchData = async () => {
      setLoading(true)
      const { data, count } = await getAllPokemons({ currentPage })
      setTotalPages(Math.ceil(count / 20))
      setPokemons(data)
      setLoading(false)
   }
   useEffect(() => {
      fetchData()
   }, [currentPage])
   // Было бы круто если API позволяло фильтровать покемонов по типу с помощью query параметра
   useEffect(() => {
      if (selectedType === 'all' || selectedType === null) {
         fetchData()
      } else {
         const filteredResults = globalPokemons.filter((pokemon) =>
            pokemon.types.map((type) => type.type.name).includes(selectedType)
         )
         setPokemons(filteredResults)
      }
   }, [selectedType])

   useEffect(() => {
      if (query.get('page')) {
         setCurrentPage(+query.get('page'))
      }
   }, [query])

   const modifiedTypes = POKEMON_TYPES.map((t) => ({
      label: t.label,
      value: t.value,
   }))

   if (loading) return <Loader center size="lg" />
   return (
      <Container>
         <InputPicker data={modifiedTypes} onChange={handleTypeChange} />
         <PokemonCardContainer>
            {pokemons.map((pokemon) => (
               <PokeCard key={pokemon.id} pokemon={pokemon} />
            ))}
         </PokemonCardContainer>
         {globalPokemons.length !== 0 && (
            <Flexer>
               <Pagination
                  totalPages={totalPages}
                  activePage={currentPage}
                  onChange={handlePageChange}
               />
            </Flexer>
         )}
      </Container>
   )
}

export default AllPokemons

const Container = styled.div``

const Flexer = styled.div`
   display: flex;
   justify-content: center;
`

const PokemonCardContainer = styled.div`
   display: grid;
   margin: 1rem 0;
   align-items: center;
   justify-content: center;
   gap: 1.5rem;
   grid-template-columns: repeat(4, 1fr);
   @media screen and (max-width: 1920px) {
      grid-template-columns: repeat(4, 1fr);
   }
   @media screen and (max-width: 1440px) {
      grid-template-columns: repeat(3, 1fr);
   }
   @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media screen and (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
   }
`
