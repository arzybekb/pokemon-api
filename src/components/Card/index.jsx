import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import NoImage from '../../assets/images/images.png'

function PokeCard({ pokemon }) {
   const { id, name, types, imageUrl } = pokemon
   const cardColor = types.map(({ type }) => `type-${type.name}`).join(' ')
   return (
      <CardContainer>
         <Link to={`/pokemon/${id}`}>
            <Card className={cardColor}>
               <span className="pokemon-id">#{id}</span>
               <div className="card-title">
                  <h2>{name}</h2>

                  <div className="pokemon-types">
                     {types.map(({ type }) => (
                        <span className="type" key={type.name}>
                           {type.name}
                        </span>
                     ))}
                  </div>
               </div>
               <div className="pokemon-image">
                  <img src={imageUrl ?? NoImage} alt={name} />
               </div>
            </Card>
         </Link>
      </CardContainer>
   )
}

export default memo(PokeCard)

const CardContainer = styled.div`
   height: 100%;
   cursor: pointer;
   & .pokemon-id {
      position: absolute;
      top: 20px;
      right: 40px;
      font-size: 2.5rem;
      color: rgba(255, 255, 255, 0.2);
   }
`
const Card = styled.div`
   background: var(--color);
   color: #fff;
   box-shadow: 0 0 20px 0 var(--color);
   border-radius: 3rem;
   overflow: hidden;
   height: 100%;
   padding: 3rem 1rem 3rem 3rem;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: space-between;
   transition: 0.3s all;
   & .card-title h2 {
      align-self: flex-start;
      text-transform: capitalize;
      margin: 0;
      font-size: 2rem;
   }
   & .card-title .pokemon-types {
      margin-top: 1rem;
   }

   & .card-title span.type {
      border-radius: 100rem;
      display: table;
      background-color: rgba(255, 255, 255, 0.2);
      padding: 0.3rem 0.7rem;
      text-align: center;
      margin-bottom: 0.5rem;
      text-transform: capitalize;
   }
   & .pokemon-image {
      align-self: flex-end;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      max-width: 50%;
   }
   & img {
      width: 100%;
      filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
   }
`
