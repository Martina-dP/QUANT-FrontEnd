import React, { useState } from "react";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPodcast } from "../../actions/index"
import style from "./search.module.css"

const Search = () => {

  const [filter, setFilter] = new useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const datos = useSelector(state => state.podcast);
  const title = datos?.map(e => e.name.label)
  const artist = datos?.map(e => e.artist.label)

  const datosFiltrados = []
  datosFiltrados.push(title)
  datosFiltrados.push(artist)
  console.log(datosFiltrados, "datosFiltrados")

  const handleChange = event => {
    setFilter(event.target.value);
    console.log(event.target.value)
  };

  useEffect(() => {
    const results = title.filter(person =>
      person.toLowerCase().includes(filter)
    );
    setSearchResults(results);
  }, [filter]);

  return (
    <div >
      <form className={style.all}>
        <input
          className={style.input}
          value={filter}
          onChange={handleChange}
          type="text"
          placeholder="Filter podcast"
        />
        <button className={style.btn}  type="submit">
            Search
          </button>
      </form>
      <ul>
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Search;