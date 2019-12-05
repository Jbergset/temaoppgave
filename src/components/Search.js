import React, { useEffect,useState } from 'react'

const Search = () => {
    const favoritter = []
    const [searching, setSearching] = useState([])
    const [q, setQ] = useState("")
    const [favourites, setFavourites] = useState(favoritter)

    useEffect(() => {
        console.log("Use effect")
      fetch(`https://www.reddit.com/r/${q}.json`)
    .then(response => response.json())
      .then((jsonData) => {
        setSearching(jsonData.data.children)
        console.log(searching)
      })
      .catch((error) => {
        console.log(error)
      })
    }, [q])

    // Logger det som blir skrevet i 
    const inputSearch = (e) => {
        if(e.keyCode === 13) {
            // setSearching( [...searching, e.target.value])
            setQ(e.target.value)
            console.log(e.target.value)
            e.target.value = ''
        } 
    }
    // Søker i URL etter "jpg"
    const urlChecker = (url) => {
        return url.slice(url.length-3, url.length) === 'jpg'
      }
    
    const addFavourites = (indeks) => {
      let kopi = [...favourites]
      kopi.push(indeks)
      setFavourites(kopi)
    }
/*
    const slett = (indeks) => {
      let kopi = [...searching]
      kopi.splice(indeks, 1)
      setSearching(kopi)
    }
*/
    return(
    <div className="App">
        <h1>Søk på subreddit her!</h1>
        {
          
          favourites.map(
            (url,indeks) =>
            <img className="FavorittBilder" src={url} key={indeks} /*onClick={ () => slett(indeks)} *//>
          )
        }
        <br />
        <input className="InputSearch" type="text" placeholde="Write subreddit" onKeyDown={inputSearch}></input>
        <div className="Motivasjoner">
            { 
            searching.map( (search, i) => {
                return(
                    urlChecker(search.data.url) 
                    ?
                    <div className="konteiner" key={i} onClick={ () => addFavourites(search.data.url)}>
                        <p>{search.data.title}</p>
                        <img src={search.data.url} alt="bilde"/>  
                    </div>

                    : '' 
                    )}
                )
            }
            
            </div>
    </div>
    )
}

export default Search