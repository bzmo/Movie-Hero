import React from 'react';
const BASE_URL = 'https://image.tmdb.org/t/p/w92/'; // to retrieve poster img

const MovieListItem = ({ movie, onMovieSelect }) => {

  // Truncate movie.title if it's too long
  let title = movie.title;
  if (title.length > 15) {
    title = title.slice(0, 15) + "...";
  }

  // Slice movie.release_date to get only year
  let year = movie.release_date.slice(0,4);

  return (
    <li onClick= { () => { onMovieSelect(movie.title) }} className="list-group-item">
        <img src={ BASE_URL + movie.poster_path } />
        <ul className="movie-description">
          <li className="info"> { title } </li>
          <li className="info"> Rating: { movie.vote_average } </li>
          <li className="info"> Release: { year } </li>
        </ul>
    </li>
  );
}

export default MovieListItem;
