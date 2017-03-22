import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FetchMoviesBtn from './components/fetch_movies_btn';
import MovieList from './components/movie_list';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
const YT_API_KEY = 'AIzaSyBqwl6rlY3NQ2HMjxoiAw17qHOels1FAWc';
const THEMOVIEDB_API_KEY = 'e8b0d2a71a36f80a8e6cb210f61a5fc0';
const MAX_PAGE_COUNT = 235;

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      movies : [],             // Array of Movie Objects from themoviedb
      videos : [],             // Array of Video Objects from youtube-api-search
      selectedMovie : null,
      selectedVideo : null
    };

    this.onFetchMoviesClick(); // Init with randomized movies
  }

  videoSearch(term) {
    YTSearch({key: YT_API_KEY, term : `${term} trailer`}, (videos) => {
      this.setState({
        videos : videos.slice(0, 3),  // Get only 3 videos
        selectedVideo : videos[0]     // Select only 1st video
      })
    });
  }

  onFetchMoviesClick() {
    let pageCount = Math.floor(Math.random() * MAX_PAGE_COUNT) + 1;
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${THEMOVIEDB_API_KEY}&language=en-US&page=${pageCount}`;

    // GET Request to retrieve the array of movie objects
    fetch(url).then( response => {
      response.json().then( data => {
        this.setState({
          movies : data.results,
          selectedMovie : data.results[0].title
        });

        this.videoSearch(this.state.selectedMovie); // Change state of videos
      });
    }).catch( err => {
      console.log(err);
    });
  }

  onMovieSelect (selectedMovie) {
    this.setState({ selectedMovie });
    this.videoSearch(selectedMovie);
  }

  render() {
      return (
        <div className="container">
          <FetchMoviesBtn onFetchMoviesClick={ () => this.onFetchMoviesClick() } />
          <MovieList movies={this.state.movies}
                     onMovieSelect={ selectedMovie => this.onMovieSelect(selectedMovie) } />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos = {this.state.videos}
                     onVideoSelect={ selectedVideo => this.setState({selectedVideo})} />
        </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
