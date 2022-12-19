import React from "react";
import { Link } from "react-router-dom";
import style from "./cardChapter.module.css"

function CardChapter({title, id, pubDate, duration, collectionId }){

    return(
        <div className={style.all}>
          <Link to={`/detailPodcast/${collectionId}/detailChapter/${id}`} >
            <h2 className={style.text1}>{title}</h2>
          </Link>
          <div>
            <h2 className={style.text2}>{pubDate}</h2>
            <h2 className={style.text3}>{duration}</h2>
          </div>
        </div>
    )} 

export default CardChapter;