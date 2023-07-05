import React from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./detail.module.css"

const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(
        <div className={style.card}>
        <div className={style.content}>
          <div className={style.text}>
            <h1>PERSONAJE</h1>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={character?.image} alt={character?.name} />
          </div>
        </div>
      </div>
    )
}

export default Detail;