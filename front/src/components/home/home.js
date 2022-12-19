import React, { useState }  from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPodcast} from "../../actions/index";
import Nav from "../nav/nav";
import CardPodcast from "../cardHome/cardHome";
import style from "./home.module.css";

const Home = () => {

  const [search, setNewSearch] = useState("");
  
  const datos = useSelector(state => state.podcast);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPodcast());
  },[dispatch]);

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? datos
    : datos.filter((item) =>
        item.name.label.toLowerCase().includes(search.toLowerCase())
        ||  item.artist.label.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div>
      <Nav />
      <div className={style.all}>
        <input className={style.input} type="text" value={search} onChange={handleSearchChange} />
        <button className={style.btn}  type="submit"> Search </button>
      </div>
      <div className={style.cardPodcast}>
        {filtered?.map(e => {
          return (
            <CardPodcast
              key={e.collectionId}
              image={e.image.label}
              name={e.name.label}
              artist={e.artist.label}
              collectionId={e.collectionId}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Home;
