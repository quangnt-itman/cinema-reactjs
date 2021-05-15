import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard';
// import { actFetchMovies } from './modules/actions';
import { slickConfigure } from '../../assets/js/libs-control';

import { actFetchMovies } from '../../ReduxStore/reducers/modules/movieReducers/actions';
// import '@fancyapps/fancybox/dist/jquery.fancybox';

export class Movies extends Component {
  componentDidMount () {
    this.props.fetchMovies();
  }
  componentDidUpdate ( prevProps, prevState ) {
    let fancy = () => import( '@fancyapps/fancybox/dist/jquery.fancybox' ).then( result => result );

    !this.props.loading && slickConfigure();
    !this.props.loading && fancy();
  }

  render () {
    return (
      <div id="movies">
        <h3>Movies</h3>

        <div className="row mx-0 mx-sm-0 ">
          <div className="col-xs-12 col-sm-12 mx-0 ">
            <nav id="nav-movies-home" >
              <div className="nav nav-tabs" id="nav-movies-home-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-playing-movies-tab" data-toggle="tab" href="#nav-playing-movies" role="tab" aria-controls="nav-playing-movies" aria-selected="true">Playing Movies</a>
                <a className="nav-item nav-link" id="nav-coming-soon-movies-tab" data-toggle="tab" href="#nav-coming-soon-movies" role="tab" aria-controls="nav-coming-soon-movies" aria-selected="false">Coming Soon Movies</a>
                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-playing-movies" role="tabpanel" aria-labelledby="nav-playing-movies-tab">
                {/* <MultipleRows movies={ movies } /> */ }
                <div className="movie-cards p-sm-5">
                  <div id="movies-slide">
                    {
                      this.props.movies &&
                      this.props.movies.map( movie => <MovieCard movie={ movie } key={ movie.maPhim } /> )
                    }
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-coming-soon-movies" role="tabpanel" aria-labelledby="nav-coming-soon-movies-tab">Comming Soon Movies</div>
              <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
            </div>
          </div>
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

