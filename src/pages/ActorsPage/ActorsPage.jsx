import React, { useState } from 'react';
import './ActorsPage.css'
import CardComponent from '../../components/CardComponent/CardComponent';
import ActorModel from '../../model/ActorModel';


function ActorsPage() {
    const [actors, setActors] = useState([
        new ActorModel("Jackie", "Chan", new Date(1954, 4, 7), "https://m.media-amazon.com/images/M/MV5BMTk4MDM0MDUzM15BMl5BanBnXkFtZTcwOTI4MzU1Mw@@._V1_UY317_CR7,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000329/?ref_=nv_sr_srsg_0"),
        new ActorModel("Adam", "Sandler", new Date(1966, 9, 9), "https://m.media-amazon.com/images/M/MV5BMjQyNzM2MjM1Ml5BMl5BanBnXkFtZTcwMDE5NjI3Mg@@._V1_UY317_CR7,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0001191/"),
        new ActorModel("Jennifer", "Aniston", new Date(1969, 2, 11), "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000098/?ref_=tt_cl_t_1"),
        new ActorModel("Sacha", "Baron Cohen", new Date(1971, 10, 13), "https://m.media-amazon.com/images/M/MV5BMTkzMTY4Nzc2NF5BMl5BanBnXkFtZTgwODc3MDI2MDE@._V1_UY317_CR11,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0056187/"),
        new ActorModel("Angelina", "Jolie", new Date(1975, 6, 4), "https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_UY317_CR22,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0001401/"),
        new ActorModel("Seann", "William Scott", new Date(1976, 10, 3), "https://m.media-amazon.com/images/M/MV5BMjEzMjk1NTA1Ml5BMl5BanBnXkFtZTcwNjQyNjAwOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0005405/?ref_=ttfc_fc_cl_t13"),
        new ActorModel("Gal", "Gadot", new Date(1985, 4, 30), "https://m.media-amazon.com/images/M/MV5BYThjM2NlOTItYTUzMC00ODE3LTk1MTItM2I3MDViY2U3MThlXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR20,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm2933757/"),
        new ActorModel("Margot", "Robbie", new Date(1990, 7, 2), "https://m.media-amazon.com/images/M/MV5BMTgxNDcwMzU2Nl5BMl5BanBnXkFtZTcwNDc4NzkzOQ@@._V1_UY317_CR12,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm3053338/?ref_=nmls_hd")
    ]);
    const [filteredNames, setFilterNames] = useState(actors);
    const [sortBy, setSortBy] = useState("firstName");

    function filteredActors(e) {
        if (e.target.value) {
            setFilterNames(actors.filter(actor => {
                if (sortBy === "firstName") {
                    return actor.firstName.toLowerCase().startsWith(e.target.value.toLowerCase());
                } else if (sortBy === "lastName") {
                    return actor.lastName.toLowerCase().startsWith(e.target.value.toLowerCase());
                } else if (sortBy === "age") {
                    console.log(parseInt(e.target.value));
                    return (actor.age() === parseInt(e.target.value));
                }
            }));
        }
        else setFilterNames(actors);
    }

    const cards = filteredNames.map(actor => <div className="col-12 col-md-6 col-lg-3"> <CardComponent actor={actor} /> </div>)

    return (
        <div className="actors-page">
            <h1>Actors Page</h1>
            <div className="container">
            <div className="row">
                    <div className="col-sm-8 input">
                        <input type="text" className="form-control filter-input" placeholder="Filter by first and last name" onChange={filteredActors}></input>
                    </div>
                    <div className="col-sm-4 select-sort">
                        <select className="form-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                            <option value="lastName">last name</option>
                            <option value="age">age</option>
                            <option value="firstName">first name</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    {cards}
                </div>
            </div>
        </div>
    );
}

export default ActorsPage;