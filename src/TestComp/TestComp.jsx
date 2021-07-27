import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ActorModel from '../model/ActorModel';
function TestComp() {
    const [actors,setActors] =useState([]);
    useEffect(()=>{
        axios.get("actorsdemo.json").then(response => {
         setActors(response.data.map(plainActor => new ActorModel(plainActor.firstName,plainActor.lastName,new Date ( plainActor.birthday),plainActor.img,plainActor.imdbLink)));
       // setFilterNames(response.data.map(plainActor => new ActorModel(plainActor.firstName,plainActor.lastName,plainActor.birthday,plainActor.img,plainActor.imdbLink)));
         //console.log(actors[0].age());
           //console.log(response.data.map(plainActor => new ActorModel(plainActor.firstName,plainActor.lastName,plainActor.birthday,plainActor.img,plainActor.imdbLink)));
         
        });
    },[]);
     console.log(actors[0].birthday.getFullYear());
    return (
        <div>
            {/* {actors[0].lastName} */}
            hi
        
        </div>
    );
}

export default TestComp;