import React, { useEffect, useState} from 'react'


const Art = () => {
    const favoritter = []
    const [motivasjoner, setMotivasjoner] = useState([])
    const [favourites, setFavourites] = useState(favoritter)

    useEffect(() => {
    fetch(`https://www.reddit.com/r/Art.json`)
    .then(response => response.json())
      .then((jsonData) => {
        setMotivasjoner(jsonData.data.children)
        console.log(motivasjoner)
      })
      .catch((error) => {
        console.log(error)
      })
    }, 
    [])

    // Søker i url etter "jpg". 
    const amIHere = (url) => {
        return url.slice(url.length-3, url.length) === 'jpg'
      }

    const addFavourites = (indeks) => {
      let kopi = [...favourites]
      kopi.push(indeks)
      setFavourites(kopi)
    }

    return(
    <div className="App">
        <h1>Art</h1>

        { 
        favourites.map(
          (title, indeks) =>
        <li key={indeks}> {title}</li>
        )}
        <div className="Motivasjoner">
        {
          motivasjoner.map( (motivasjon, i) => 
          {
          return( 
          amIHere(motivasjon.data.url) ? 
          <div className="konteiner" key={i} onClick={ () => addFavourites(motivasjon.data.title)}> 
            <p>{motivasjon.data.title}</p>  
            <img src={motivasjon.data.url} alt='bilde' />          
          </div>
          
          : '')}
          )
          
        }
        </div>
      </div>
    );
}


export default Art