import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './MovieCard.css'
function MovieCard({movieName ,lengthInMinutes,poster,director,mainStars }) {
    return (
        <Container className="movie-container">

          <Row>
              <Col>
                <div className="poster-container">
                    <img src={poster} alt="" />
                </div>
              </Col>
            <Col>
            <h5>Move name:{movieName} </h5>
            <h5>Length of movie: {lengthInMinutes}</h5>
                <h5>Main stars: {mainStars.map(star=><p>{star}</p>)}</h5>
                <h5>Director: {director}</h5>
            </Col>
          </Row>
        </Container>
    );
}

export default MovieCard;