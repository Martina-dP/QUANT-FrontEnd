import React from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.css"

const Nav = () => {

  return (
    <div className={style.all}>
      <Link to="/">
        <h1 className={style.title}> Podcast </h1>
      </Link>
    </div>
  );
};
export default Nav;