import React, { useState } from 'react';
import ActorModel from '../../model/ActorModel';

function ActorsPage() {
    const [actors,seActors] = useState([
        new ActorModel("Jackie","Chan","","fff","https://www.imdb.com/name/nm0000329/?ref_=nv_sr_srsg_0")
    ]);
    console.log(actors);
    return (
        <div>
            {actors[0]}
        </div>
    );
}

export default ActorsPage;