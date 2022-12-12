import Movieinfo from "../../../components/Movieinfo"
import { useRouter } from 'next/router'




const Movie = () => {
    const router = useRouter()

  return (

    <div><Movieinfo id ={router.query.id}  /></div>
  )
}

export default Movie