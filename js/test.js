const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://rawg-video-games-database.p.rapidapi.com/games',
  headers: {
    'X-RapidAPI-Key': 'e9dd5c505bmsh10af0feb62c21f6p157c6ejsna7ce1a3e1469',
    'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
  }
};

const doReq = async () => {

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

doReq()