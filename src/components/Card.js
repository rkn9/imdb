import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Card({ movie }) {
  console.log(movie);

  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  return (
    <>
      {isloading ? (
        <div className="card">
          <SkeletonTheme baseColor="#fff" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original${
              movie && movie.poster_path
            }`}
            alt="poster"
          />
        </Link>
      )}
    </>
  );
}

export default Card;
