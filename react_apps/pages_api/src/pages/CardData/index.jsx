import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const CardData = ({data}) => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
  
    // Get a specific query parameter by name
    const paramValue = queryParams.get('cardId');

    console.log(paramValue);

    useEffect(() => {
        let correctObject = data.find((obj) => obj.cardId === paramValue)
        console.log(correctObject);
    }, [])



    console.log("I have the data, looking for my card!", data);
  return (
    <div>CardData</div>
  )
}

export default CardData