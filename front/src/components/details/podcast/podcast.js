import React, { useState }  from "react";
import Nav from "../../nav/nav";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {getDetailsPodcast, getList } from "../../../actions/index";
import style from "./podcast.module.css";

const CardDetail = () => {

  const dispatch = useDispatch();
  const {collectionId} = useParams();

  useEffect(() => {
    dispatch(getDetailsPodcast(collectionId));
    dispatch(getList(collectionId));
  },[dispatch]);

  const detailChapter = useSelector(state => state.detailChapter);
  console.log(detailChapter, "DETAIL CHAPTER")
  const listCahpet = useSelector(state => state.listChapters);
  console.log(listCahpet, "LIST CHAPTER")
  const detail = useSelector(state => state.detailPodscast);
  const data = useSelector(state => state.data);
  console.log(detail, "DETAIL PODCAST ")
  console.log(data, "DATA")

  const filter = listCahpet.filter(s => s.name === "item")
  console.log(filter, "filter ")

  return (
    <div>
      <Nav />
      <div className={style.all}>
        {detail && (
          <div className={style.card}>
            <img
              className={style.img}
              src={detail.artworkUrl600 ? detail.artworkUrl600 : data.artworkUrl600}
              alt="not found"
            />
            <h2 className={style.text2}> {detail.collectionName ? detail.collectionName : data.collectionName}</h2>
            <h2 className={style.text1}> By {detail.artistName ? detail.artistName : data.artistName}</h2>
            <h2 className={style.text3}> Description :</h2>
            <h2 className={style.text4}> {data.shortDescription ? data.shortDescription : "-"}</h2>
          </div>
        )}
        <div className={style.info}>
          <div className={style.title}>
            <h2 className={style.list}> Episodios : {detail.trackCount} </h2>
          </div>
          </div>
        </div>
    </div>
  );
};
export default CardDetail;
