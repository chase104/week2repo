import React, { useState } from 'react'
import PetName from '../PetName'
import PetType from '../PetType'

const PetCard = ({pet}) => {

    const [liked, setLiked] = useState(false);

  return (
    <div className='pet-card' onClick={() => setLiked(!liked)}>
        {liked ? <span>Liked! &#128571;</span> : <span>&#128575;</span>}
        <PetName name={pet.name} />
        <PetType type={pet.type} />
    </div>
  )
}

export default PetCard