import React from "react";
import Nav from "../../nav/nav";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {getChapterList} from "../../../actions/index";
import style from "./chapter.module.css";


const Chapter = () => {

  return (
    <div >
      <Nav/>
      <div className={style.all}>
        <div className={style.card}>
          {/* <img className={style.img}
                src={detail.artworkUrl600 ? detail.artworkUrl600 : data.artworkUrl600}
                alt="not found"
          /> */}
          <h2 className={style.text2}> </h2>
          <h2 className={style.text1}> By </h2>
          <h2 className={style.text3}> Description :</h2>
          <h2 className={style.text4}> </h2>
        </div>
      </div>
    </div>
  );
};
export default Chapter;