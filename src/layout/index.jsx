import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import Header from '../components/Header'

function Layout() {
   return (
      <Container>
         <Header />
         <Outlet />
      </Container>
   )
}

export default Layout

const Container = styled.div`
   padding: 20px 6%;
`
