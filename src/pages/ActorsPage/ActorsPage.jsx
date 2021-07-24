import React, { useState } from 'react';
import CardComponent from '../../components/CardComponent/CardComponent';
import ActorModel from '../../model/ActorModel';

function ActorsPage() {
    const [actors, setActors] = useState([
        new ActorModel("Jackie", "Chan", new Date(1954, 4, 7), "https://m.media-amazon.com/images/M/MV5BMTk4MDM0MDUzM15BMl5BanBnXkFtZTcwOTI4MzU1Mw@@._V1_UY317_CR7,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000329/?ref_=nv_sr_srsg_0"),
        new ActorModel("Adam", "Sandler", new Date(1966, 9, 9), "https://m.media-amazon.com/images/M/MV5BMjQyNzM2MjM1Ml5BMl5BanBnXkFtZTcwMDE5NjI3Mg@@._V1_UY317_CR7,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0001191/"),
        new ActorModel("Jennifer", "Aniston", new Date(1969, 2, 11), "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000098/?ref_=tt_cl_t_1"),
        new ActorModel("Sacha", "Baron Cohen", new Date(1971, 10, 13), "https://m.media-amazon.com/images/M/MV5BMTkzMTY4Nzc2NF5BMl5BanBnXkFtZTgwODc3MDI2MDE@._V1_UY317_CR11,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0056187/")
    ]);
    // const names = actors.map(actor =><p>{ actor.firstName+ " "+ actor.age()}</p>);
    // const date = new Date("October 13,1996");
    const cards = actors.map(actor =><div className="col"> <CardComponent actor={actor} /> </div>)
    // console.log(date);

    //  console.log(actors);
    return (
        <div className="container">
            {/* <h1>Actors</h1> */}
            <div className="row">
            {cards}
            </div>
        </div>
    );
}

export default ActorsPage;