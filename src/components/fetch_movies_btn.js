import React from 'react';

let FetchMoviesBtn = ({onFetchMoviesClick}) => {
  return (
    <input className="fetch-movies-btn" type="button" onClick={ () => { onFetchMoviesClick() }} value="Fetch" />
  );
}

export default FetchMoviesBtn;
