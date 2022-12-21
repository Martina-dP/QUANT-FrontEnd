import React, { useState } from "react";
import Nav from "../../nav/nav";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {getList, getDetailsPodcast, getChapters} from "../../../actions/index";
import style from "./chapter.module.css";
import {useSelector} from "react-redux";
import ReactAudioPlayer from 'react-audio-player';

const Chapter = () => {

  const dispatch = useDispatch();
  const {id, collectionId } = useParams();

  useEffect(() => {
    dispatch(getDetailsPodcast(collectionId));
    dispatch(getList(collectionId, id));
  },[dispatch]);


  const detail = useSelector(state => state.detailPodscast);
  const data = useSelector(state => state.data);
  const listChapter = useSelector(state => state.listChapters);
  const item = listChapter.find(e => e.collectionId === collectionId && e.id === id)

  var freeHtml = item.description.replace(/<[^>]*>?[`~!@#$%^&*()_|+\-=?;:'",.<>/]/g, '');
  const recortado = freeHtml.indexOf('http' || 'href=');
  let extraida = freeHtml.substring(0, recortado);

  return (
    <div >
      <Nav/>
      <div className={style.all}>
        <div className={style.card}>
          <Link to={`/detailPodcast/${collectionId}`}>
            <img
              className={style.img}
              src={detail.artworkUrl600 ? detail.artworkUrl600 : data.artworkUrl600}
              alt="not found"
            />
            <h2 className={style.text2}> {detail.collectionName ? detail.collectionName : data.collectionName}</h2>
            <h2 className={style.text1}> By {detail.artistName ? detail.artistName : data.artistName}</h2>
            <h2 className={style.text3}> Description :</h2>
            <h2 className={style.text4}> {data.shortDescription ? data.shortDescription : "-"}</h2>
          </Link>
        </div>
        <div className={style.detail}>
          <h2 className={style.title}> {item.title}</h2>
          <h2 className={style.description}> {extraida ? extraida : "No hay resumen"} </h2>
          <ReactAudioPlayer className={style.audio} src={item.audio} controls/>
        </div>
      </div>
    </div>
  );
};
export default Chapter;