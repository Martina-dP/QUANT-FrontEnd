import React from "react";
import style from "./cardChapter.module.css"

function CardChapter({title, guid, pubDate, itunes:duration }){

    return(
        <div className={style.all}>
          <h2>{title}</h2>
          <h2>{pubDate}</h2>
          <h2>{title}</h2>
        </div>
    )} 

export default CardChapter;