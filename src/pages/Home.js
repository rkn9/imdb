import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MovieList from "../components/MovieList";

function Home() {
  const [popularMovies, setPopulatMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => {
        setPopulatMovies(data.results);
      });
  }, []);

  return (
    <>
      <div className="home-poster">
        <Carousel
          showArrows={true}
          autoFocus={true}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
        >
          {popularMovies
            ? popularMovies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.backdrop_path
                    }`}
                    alt="poster"
                  />

                  <div className="home-poster-overlay">
                    <h1>{movie.original_title}</h1>
                    <span>{movie.release_date}</span>
                    <em>{movie.overview}</em>
                  </div>
                </Link>
              ))
            : ""}
        </Carousel>
      </div>

      <section className="popular-section">
        <MovieList />
      </section>
    </>
  );
}

export default Home;
