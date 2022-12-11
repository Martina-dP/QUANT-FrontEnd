import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPodcast } from "../../actions/index"
import Nav from "../nav/nav";
import CardPodcast from "../cardHome/cardHome";
import style from "./home.module.css"

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() =>{ 
    dispatch(getPodcast());
  },[dispatch])

  const datos = useSelector(state => state.podcast)
  console.log(datos, "datos") 

  return (
    <div >
      <Nav/>
      <div className={style.cardPodcast}>
        {datos?.map(e => {
          return (
            <CardPodcast
            key={e.id}
            image={e.image.label}
            name={e.name.label}
            artist={e.artist.label}
            />
          )
        })}
      </div>
    </div>
  );
};
export default Home;