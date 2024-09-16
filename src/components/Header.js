import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt=""
          />
        </Link>
        <Link to="/movies/popular">Popular</Link>
        <Link to="/movies/top_rated">Top rated</Link>
        <Link to="/movies/upcoming">Upcoming</Link>
      </header>
    </>
  );
}

export default Header;
