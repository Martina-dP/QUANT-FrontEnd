import React from "react";
import Nav from "../../nav/nav";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDetailsChapter } from "../../../actions/index"

const Chapter = () => {

  const dispatch = useDispatch()

  useEffect(() =>{ 
    dispatch(getDetailsChapter(1460157002, 1523));
  },[dispatch])
  
  const detailChapter = useSelector(state => state.detailChapter)
  console.log(detailChapter, "detailChapter")

//  const prueba = detailChapter[0]
//  console.log(prueba, "prueba")

  return (
    <div >
      <Nav/>
      <h1> DETAILS CHAPTER </h1>
      <br/>
      <h2> Nombre: </h2>
    </div>
  );
};
export default Chapter;