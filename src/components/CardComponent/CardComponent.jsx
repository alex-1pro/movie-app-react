import React from 'react';
import './CardComponent.css'
function CardComponent({actor}) {
    const age=actor.age();
    return (
        <div>
            <div className="card actor-card" style={{width: "18rem"}}>
                <img src={actor.img} className="card-img-top" alt={actor.firstName} />
                <div className="card-body">
                   <a href={actor.imdbLink} target="_blank"> <h5 className="card-title">{actor.firstName+" "+actor.lastName} </h5></a>
                    <h5 className="card-title">Age: {age}</h5>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;