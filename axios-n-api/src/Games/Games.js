import React, { useEffect, useState } from 'react'
const getGames= () => {
    axios.get('https://rawg-video-games-database.p.rapidapi.com/games', {
        headers: {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            'x-rapidapi-key': process.env.REACT_APP_RAWG_GAMING_API_KEY
        }
    })
    .then(function (response) {
        setGameData({
           games: response.data.results
        })
        console.log(response)
    })
}

useEffect(() => {
    getGames()
})

function Games() {
    return (

<h1>Number of Games:{response.count}</h1>
    )
}