import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDetailsPodcast } from "../../actions/index"
import style from "./cardDetail.module.css"

const Podcast = () => {

    const dispatch = useDispatch()

    useEffect(() =>{ 
      dispatch(getDetailsPodcast(1633466636));
    },[])
    
    const detail = useSelector(state => state.detailPdoscast)
    console.log(detail, "detail")

  return (
    <div className={style.all}>
        
    </div>
  );
};

export default Podcast;