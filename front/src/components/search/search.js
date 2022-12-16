import React, { useState } from "react";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPodcast } from "../../actions/index"
import style from "./search.module.css"

const Search = () => {

  return (
    <div >
      <form className={style.all}>
        <input
          className={style.input}
          type="text"
          placeholder="Filter podcast"
        />
        <button className={style.btn}  type="submit">
            Search
          </button>
      </form>
    </div>
  );
};
export default Search;