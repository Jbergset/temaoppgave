import React, { useEffect, useState} from 'react'

const Meme = () => {
    const [motivasjoner, setMotivasjoner] = useState([])
    useEffect(() => {
      fetch('https://www.reddit.com/r/memes.json')
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
    
    const amIHere = (url) => {
        return url.slice(url.length-3, url.length) === 'jpg'
      }
    return(
    <div className="App">
        <h1>Memes!</h1>
        <div className="Motivasjoner">
        
        {
          motivasjoner.map( (motivasjon, i) => 
          {
          return( 
          amIHere(motivasjon.data.url) ? 
          <div className="konteiner" key={i}> 
            <p> {motivasjon.data.title} </p>  
            <img src={motivasjon.data.url} alt='hepsa' />          
          </div>
          
          : '')}
          )
          
        }
        </div>
      </div>
    );
}


export default Meme