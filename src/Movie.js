import React from "react";
import "./Movie.css";

function Movie(props) {
  return props.movie.media_type === "movie" ? (
    <div className="movie">
      <img
        src={`https://www.themoviedb.org/t/p/w500/${props.movie.poster_path}`}
        alt=""
      />
      <p>{props.movie.original_title}</p>
    </div>
  ) : (
    <div className="movie">
      <img
        src={`https://www.themoviedb.org/t/p/w500/${props.movie.poster_path}`}
        alt=""
      />
      <p className="title">{props.movie.name}</p>
    </div>
  );
}

export default Movie;
