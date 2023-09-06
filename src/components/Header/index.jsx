import React, { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Input from 'rsuite/Input'
import { Link, useNavigate } from 'react-router-dom'
import { PokemonContext } from '../../context/PokemonContext'
import useDebounce from '../../hook/useDebaunce'

function Header() {
   const { onInputChange, valueSearch } = useContext(PokemonContext)

   const navigate = useNavigate()

   const debouncedSearchTerm = useDebounce(valueSearch, 500)

   useEffect(() => {
      if (debouncedSearchTerm) {
         navigate('/search', {
            state: debouncedSearchTerm,
         })
      }
   }, [debouncedSearchTerm])
   return (
      <Container>
         <div>
            <Link to="/">
               <Logo
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
                  alt="pokeball"
               />
            </Link>
         </div>
         <form>
            <Input
               placeholder="Search pokemons..."
               type="search"
               name="valueSearch"
               value={valueSearch}
               onChange={onInputChange}
            />
         </form>
      </Container>
   )
}

export default Header

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const Logo = styled.img`
   width: 50px;
   height: 50px;
`
