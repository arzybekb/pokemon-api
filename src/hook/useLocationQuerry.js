import { useNavigate, useLocation } from 'react-router-dom'

export default function useLocationQuery() {
   const navigate = useNavigate()
   const location = useLocation()
   const searchParams = new URLSearchParams(location.search)

   return {
      get: (key) => searchParams.get(key),
      set: (key, value) => {
         searchParams.set(key, value)
         navigate(`?${searchParams.toString()}`, { replace: true })
      },
      delete: (key) => {
         searchParams.delete(key)
         navigate(`?${searchParams.toString()}`, { replace: true })
      },
      toString: () => searchParams.toString(),
   }
}
