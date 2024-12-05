import React from "react";
import Rating from "./Rating";
import "../styles/MovieDetail.css";

const MovieDetail = ({ movie , onBack }) => {
    return (
        <div className="movie-detail">
            <button className="back-button" onClick={onBack}>뒤로가기</button>
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <Rating movieId={movie.id} />
        </div>
    );
};

export default MovieDetail;
