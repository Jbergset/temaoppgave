import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Motivasjon from './components/Motivasjon';
import Meme from './components/Meme';
import Art from './components/Art';
import Home from './components/Home'
import Search from './components/Search'
import Favoritter from './components/Favoritter'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path='/' component={Home} />
        <Route exact path='/art' component={Art} />
        <Route exact path='/meme' component={Meme} />
        <Route exact path='/motivasjon' component={Motivasjon} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/favoritter' component={Favoritter} />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;
