import { useContext } from 'react'
import { primaryContext } from '../../contexts/primaryContext'

const Home = () => {

    const { user } = useContext(primaryContext)

  return (
    <div>
        <h1>Home Page</h1>
        <p>The User's name is: {user.name}</p>
    </div>
  )
}

export default Home