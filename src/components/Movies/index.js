import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard';
import { actFetchMovies } from './modules/actions';

export class Movies extends Component {
  componentDidMount () {
    this.props.fetchMovies();
  }
  render () {
    return (
      <div id="moives">
        <h3>Movies</h3>
        <MovieCard />
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
  movies: state.movieReducers.fetchMoviesReducers.movies
} );

const mapDispatchToProps = dispatch => ( {
  fetchMovies: () => dispatch( actFetchMovies() )
} );

export default connect( mapStateToProps, mapDispatchToProps )( Movies );

