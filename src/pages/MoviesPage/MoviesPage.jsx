import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';

import './MoviesPage.css'
function MoviesPage(props) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get("movies.json").then(response => setMovies(response.data.map(
            movie =><MovieCard
               movieName={movie.movieName}
               lengthInMinutes={movie.lengthInMinutes}
               poster={movie.poster}
               director={movie.director}
               mainStars={movie.mainStars} />
            )))
    }, []);
      
    return (
        <div>{movies}</div>
    );
}

// <div>
//     {/* <MovieCard movieName="Joker" lengthInMinutes="120" poster="https://i.pinimg.com/474x/c8/01/37/c80137783feeafccb2e7f7f46dd39000.jpg" director="Mishel" mainStars={["Phoenix Joaquin", "Daniro"]} /> */}
//     {/* <MovieCard movieName="Joker" lengthInMinutes="120" poster="https://i.pinimg.com/474x/c8/01/37/c80137783feeafccb2e7f7f46dd39000.jpg" director="Mishel" mainStars={["Phoenix Joaquin", "Daniro"]} /> */}
//     {/* <MovieCard movieName="Joker" lengthInMinutes="120" poster="https://i.pinimg.com/474x/c8/01/37/c80137783feeafccb2e7f7f46dd39000.jpg" director="Mishel" mainStars={["Phoenix Joaquin", "Daniro"]} /> */}

// </div>
export default MoviesPage;

/***
 *  <h5>Joker</h5>
            <h5>lenght movie: 120 min</h5>
                <h5>main start : Phoenix Joaquin</h5>
                <h5>Derector:Mishel</h5>*/