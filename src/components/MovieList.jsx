import React from "react";
import "../styles/MovieList.css";
import MovieDetail from './MovieDetail';

const MovieList = ({ movies, selectedMovie, onMovieSelect, onBack }) => {
  return (
    <div className="movie-list">
      {!selectedMovie ? (
        movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-item"
            onClick={() => onMovieSelect(movie)} 
          >
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))
      ) : (
        <MovieDetail movie={selectedMovie} onBack={onBack} /> 
      )}
    </div>
  );
};

export default MovieList;
