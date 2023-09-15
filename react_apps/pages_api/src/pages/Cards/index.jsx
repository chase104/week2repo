import axios from 'axios';
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Cards = ({data}) => {



  return (
    <div>
        {data.map((object) => {
            return (
              <Link to={`/one_card?cardId=${object.cardId}`} key={object.cardId}>
                <div key={object.cardId} style={{padding: "8px"}}>
                    <div>Card Name: {object.name}</div>
                    <div>By: {object.artist}</div>

                </div>
              </Link>
            )
        })}
    </div>
  )
}

export default Cards


