import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import MovieModel from '../../model/MovieModel';
import './HomePage.css'
function HomePage({ movies }) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };




    const release = movies.map(movie => <Carousel.Item>
        <img
            // className="d-block w-100"
            className="carousel"
            src={movie.poster}
            alt="First slide"
        />
        {/* <Carousel.Caption>
            <h3>{movie.movieName}</h3>
            <p>Main start:{movie.mainStars}</p>
        </Carousel.Caption> */}
    </Carousel.Item>)


    return (
        
            <div className="container-carousel">
                <h1 className="text-warning">New Films </h1>
                <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                    {release}
                </Carousel>
            </div>
       

    );
}

export default HomePage;