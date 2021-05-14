import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard';
// import { actFetchMovies } from './modules/actions';
import { slickConfigure } from '../../assets/js/libs-control';

import { actFetchMovies } from '../../ReduxStore/reducers/modules/movieReducers';

export class Movies extends Component {
  componentDidMount () {
    this.props.fetchMovies();
  }
  componentDidUpdate ( prevProps, prevState ) {
    !this.props.loading && slickConfigure();
  }

  render () {
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
  loading: state.movieReducers.loading,
  movies: state.movieReducers.data
} );

const mapDispatchToProps = dispatch => ( {
  fetchMovies: () => dispatch( actFetchMovies() )
  // fetchMovies: () => dispatch(  )
} );

export default connect( mapStateToProps, mapDispatchToProps )( Movies );

