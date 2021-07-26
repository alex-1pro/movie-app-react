import React from 'react';
import { Card } from 'react-bootstrap';
import './CardComponent.css'
function CardComponent({ actor }) {
    const age = actor.age();
    return (
        // <div>
        //     <div className="card actor-card" style={{width: "18rem"}}>
        //         <img src={actor.img} className="card-img-top" alt={actor.firstName} />
        //         <div className="card-body">
        //            <a href={actor.imdbLink} target="_blank"> <h5 className="card-title">{actor.firstName+" "+actor.lastName} </h5></a>
        //             <h5 className="card-title">Age: {age}</h5>
        //         </div>
        //     </div>
        // </div>

        <div className="actor-card">
            <Card >
                <Card.Img variant="top" src={actor.img} />
                <Card.Body>
                   <a href={actor.imdbLink} target="_blank"> <Card.Title>{actor.firstName+" "+actor.lastName} </Card.Title></a>
                    <Card.Title>Age: {age}</Card.Title>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardComponent;