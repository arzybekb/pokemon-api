import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import AllPokemons from './containers/Pokemons'
import PokemonInnerPage from './containers/Pokemons/InnerPage'
import { PokemonProvider } from './context/PokemonProvider'
import SearchPage from './containers/Pokemons/SearchPage'

function App() {
   return (
      <div className="App">
         <PokemonProvider>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<AllPokemons />} />
                  <Route path="pokemon/:id" element={<PokemonInnerPage />} />
                  <Route path="search" element={<SearchPage />} />
               </Route>

               <Route path="*" element={<Navigate to="/" />} />
            </Routes>
         </PokemonProvider>
      </div>
   )
}

export default App
