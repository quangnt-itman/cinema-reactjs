import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard';
import { actFetchMovies } from './modules/actions';
import { slickConfigure } from '../../assets/js/libs-control';

export class Movies extends Component {
  componentDidMount () {
    this.props.fetchMovies();

  }

  componentDidUpdate ( prevProps, prevState ) {
    // console.log( { prevProps, prevState } );
    slickConfigure();
  }
  render () {
    // console.log( this );
    return (
      <div id="movies">
        <h3>Movies</h3>
        <div id="movies-slide">
          {
            this.props.movies &&
            this.props.movies.map( movie => <MovieCard movie={ movie } key={ movie.maPhim } /> )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
  movies: state.movieReducers.fetchMoviesReducers.data
} );

const mapDispatchToProps = dispatch => ( {
  fetchMovies: () => dispatch( actFetchMovies() )
} );

export default connect( mapStateToProps, mapDispatchToProps )( Movies );

