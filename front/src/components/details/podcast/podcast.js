import React from "react";
import Nav from "../../nav/nav";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailsPodcast, getPodcast } from "../../../actions/index"
import style from "./podcast.module.css"
import CardPodcast from "../../cardHome/cardHome";

const CardDetail = () => {

  const dispatch = useDispatch()
  const { collectionId } = useParams();

  useEffect(() =>{ 
    dispatch(getDetailsPodcast(collectionId));
  },[])
  
  const detail = useSelector(state => state.detailPodscast)
  console.log(detail, "detail")

  return (
    <div>
      <Nav/>
      <div className={style.all}>
        <div className={style.card}>
          {/* <img className={style.img} src={detail[0].artworkUrl600} alt="not found"/>
          <h2 className={style.text2}> {detail[0].collectionName}</h2>
          <h2 className={style.text1}> By {detail[0].artistName}</h2>
          <h2 className={style.text3}> Description </h2> */}
        </div>
        <div className={style.info}>
          <div className={style.title}>
            <h2 className={style.amount}> Cantidad de episodios </h2>
          </div>
          <div className={style.listado}>
            <h2 className={style.list}> Listado de episodios </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardDetail;
