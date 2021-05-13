import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard';
import { actFetchMovies } from './modules/actions';
import $ from 'jquery/dist/jquery';




export class Movies extends Component {
  componentDidMount () {
    this.props.fetchMovies();

  }

  componentDidUpdate ( prevProps, prevState ) {
    $( document ).ready( function () {
      $( '#movies-slide' ).slick( {
        // autoplay: true,
        // autoplaySpeed: 1000,
        className: 'movies-slick',
        dots: false,
        infinite: true,
        rows: 2,
        slidesToScroll: 1,
        slidesToShow: 4,
        speed: 1000,
        nextArrow: '<i class="material-icons right slick-arrow" style="display: flex;">keyboard_arrow_right</i>',
        prevArrow: '<i class="material-icons left slick-arrow" style="display: flex;">keyboard_arrow_left</i>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 3,
              dots: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 2,
              dots: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              // vertical: true,
              // verticalSwiping: true,
            }// slickを削除
          }
        ]
      } );
    } );
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

