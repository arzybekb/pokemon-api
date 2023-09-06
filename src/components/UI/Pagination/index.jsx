import React from 'react'
import { styled } from 'styled-components'
import RsuiPagination from 'rsuite/Pagination'

function Pagination({ totalPages, activePage, onChange }) {
   return (
      <Flexer>
         <RsuiPagination
            limit={1}
            maxButtons={5}
            total={totalPages}
            activePage={activePage}
            onChangePage={onChange}
            prev
            ellipsis
            last
            next
            first
            size="lg"
         />
      </Flexer>
   )
}

export default Pagination

const Flexer = styled.div`
   display: flex;
   justify-content: center;
   @media screen and (max-width: 600px) {
      max-width: 100%;
      width: 5rem;
   }
`
