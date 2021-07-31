import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';

import './MoviesPage.css'
function MoviesPage({movies}) {
    const movieCards = movies.map(movie => <MovieCard
        movieName={movie.movieName}
        lengthInMinutes={movie.lengthInMinutes}
        poster={movie.poster}
        director={movie.director}
        mainStars={movie.mainStars} />);
  
    return (
        <div>{movieCards}</div>
    );
}
    export default MoviesPage;

