import React from "react";
import { Link } from "react-router-dom";
import style from "./cardPodcast.module.css"

function CardPodcast({artist, name, image, collectionId}){

    return(
        <div className={style.all}>
            <div className={style.all2}>
                <Link to={`/detailPodcast/${collectionId}`} >
                    <img className={style.img} src={image} alt="img not found" />
                </Link>
                <h2 className={style.title}>{name}</h2>
                <h2 className={style.title2}>{artist}</h2>
            </div>
        </div>
    )} 

export default CardPodcast;