import React from 'react'
import { styled } from 'styled-components'

function About({ pokemon }) {
   const types = pokemon?.types?.map(({ type }) => type.name).join(', ')
   const abilities = pokemon?.abilities
      .map(({ ability }) => {
         return ability.name.replace('-', ' ')
      })
      .join(', ')

   const height = pokemon ? pokemon.height * 10 : 0
   const weight = pokemon ? pokemon.height / 10 : 0
   return (
      <div>
         <h3>About</h3>
         <Table>
            <tbody>
               <tr>
                  <td>Species</td>
                  <td>{types}</td>
               </tr>
               <tr>
                  <td>Abilities</td>
                  <td>{abilities} </td>
               </tr>
               <tr>
                  <td>Height</td>
                  <td>{height} cm</td>
               </tr>
               <tr>
                  <td>Weight</td>
                  <td>{weight} kg</td>
               </tr>
            </tbody>
         </Table>
      </div>
   )
}

export default About

const Table = styled.table`
   & td {
      padding: 0.5rem;
      text-transform: capitalize;
   }
   & td:first-child {
      width: 20%;
   }
   & td:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 700;
   }
`
