import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getItems } from "../../actions/index"

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() =>{ 
    dispatch(getItems());
  },[dispatch])

  return (
    <div >
      <h1> HOLA </h1>
    </div>
  );
};
export default Home;