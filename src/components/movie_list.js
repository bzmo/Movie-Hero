import React from 'react';
import MovieListItem from './movie_list_item';

const MovieList = ({movies, onMovieSelect}) => {

  // Check if the movies have been found
  if (!movies) {
    return (
      <div>Loading Movies...</div>
    )
  }

  const movieItems = movies.map((movie) => {
    return (
        <MovieListItem
          key={ movie.id }
          onMovieSelect={ onMovieSelect }
          movie={ movie }
        />
    )
  });

  return (
    <ul className="col-md-20 list-inline">
      {movieItems}
    </ul>
  );
}

export default MovieList;
