import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DetailedPage() {
  let [detail, setDetail] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  return (
    <>
      {detail ? (
        <div className="detail-page">
          <div className="bg-poster">
            <img
              src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
              alt="poster"
            />
            <div className="poster-about">
              <div className="poster">
                <img
                  src={`https://image.tmdb.org/t/p/original${detail.poster_path}`}
                  alt="poster"
                />
              </div>
              <div className="right-poster">
                <h1>
                  {detail.original_title} ({detail.origin_country})
                </h1>

                <div>
                  <p>
                    <p>
                      {" "}
                      {detail.runtime} min ({detail.vote_count}) Votes
                    </p>
                    <p>Release Data: {detail.release_date} </p>
                  </p>
                </div>
                <div className="genres">
                  {detail.genres
                    ? detail.genres.map((data) => (
                        <span key={data.id}>{data.name}</span>
                      ))
                    : ""}
                </div>

                <div className="overview">
                  <strong>overview:</strong>
                  <p>{detail.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "dklfjas;d"
      )}
    </>
  );
}

export default DetailedPage;
