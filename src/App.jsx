
import axios from 'axios';
import { useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBarComp from './components/NavBarComp/NavBarComp';
import MovieModel from './model/MovieModel';
import ActorsPage from './pages/ActorsPage/ActorsPage';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';


//import TestComp from './TestComp/TestComp';

function App() {
  
  const [movies, setMovies] = useState([]);
 useEffect(()=>{
        axios.get("movies.json").then(response =>
            setMovies(response.data.map(movie=> new MovieModel(movie.movieName,movie.lengthInMinutes,movie.poster,movie.director,movie.mainStars))));
    },[]);

  return (
    <div>
      <NavBarComp homePage={"/"}/>
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage movies={movies}/></Route>
          <Route exact path="/actors"> <ActorsPage /></Route>
          <Route exact path="/movies"><MoviesPage movies={movies}/></Route>
        </Switch>
      </HashRouter>



    </div>
  );
}

export default App;
