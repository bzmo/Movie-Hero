import React from 'react';

let MovieListItem = ({ movie, onMovieSelect }) => {
  return (
    <li onClick= { () => { onMovieSelect(movie.title) }} > {movie.title} </li>
  );
}

export default MovieListItem;
