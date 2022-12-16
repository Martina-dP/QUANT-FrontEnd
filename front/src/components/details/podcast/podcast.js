import React, { useState }  from "react";
import Nav from "../../nav/nav";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {getDetailsPodcast, getList } from "../../../actions/index";
import CardChapter from "../../cardChapter/cardChapter";
import style from "./podcast.module.css";

const CardDetail = () => {

  const dispatch = useDispatch();
  const {collectionId} = useParams();

  useEffect(() => {
    dispatch(getDetailsPodcast(collectionId));
    dispatch(getList(collectionId));
  },[dispatch]);

  // const detailChapter = useSelector(state => state.detailChapter);
  // console.log(detailChapter, "DETAIL CHAPTER")

  const listChapter = useSelector(state => state.listChapters);
  console.log(listChapter, "LIST CHAPTER")

  const detail = useSelector(state => state.detailPodscast);
  // console.log(detail, "DETAIL PODCAST ")

  const data = useSelector(state => state.data);
  // console.log(data, "DATA")

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
          <div className={style.cardChapters}>
            <div className={style.titleChapters}>
              <h2> Title </h2>
              <div className={style.infoChapters}>
                <h2 className={style.date}> Date </h2>
                <h2 className={style.duration}> Duration </h2>
              </div>
            </div>
            {listChapter.length > 1 ?
             listChapter?.map(e => {
              return (
                <CardChapter
                  key={e.id}
                  title={e.title}
                  pubDate={e.pubDate}
                  duration={e.duration}
                  id={e.id}
                />
              );
            }) : <h2>no hay datos</h2>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardDetail;
