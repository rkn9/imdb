import React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Card from "./Card";

function MovieList() {
  const [MovieList, setMovieList] = useState([]);

  const { type } = useParams();

  console.log(type);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    //
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
      });
  };

  return (
    <>
      <h2>{(type ? type : "popular").toUpperCase()}</h2>
      <div className="movie-list">
        {MovieList?.length > 0 ? (
          <div className="cards">
            {MovieList?.map((movie) => (
              <div className="card" key={movie.id}>
                <Card movie={movie} />
              </div>
            ))}
          </div>
        ) : (
          <p>This is not a valid url</p>
        )}
      </div>
    </>
  );
}

export default MovieList;
