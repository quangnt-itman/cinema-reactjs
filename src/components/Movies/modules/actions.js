import axios from "axios";
import { MOVIE_FETCH_MOVIES_FAILED, MOVIE_FETCH_MOVIES_REQUEST, MOVIE_FETCH_MOVIES_SUCCESS } from "./constants";

const actFetchMoviesRequest = () => ( {
  type: MOVIE_FETCH_MOVIES_REQUEST
} );

const actFetchMoviesSuccess = ( data ) => ( {
  type: MOVIE_FETCH_MOVIES_SUCCESS,
  data
} );

const actFetchMoviesFailed = ( error ) => ( {
  type: MOVIE_FETCH_MOVIES_FAILED,
  error
} );


const actFetchMovies = () => dispatch => {
  dispatch( actFetchMoviesRequest );

  axios( {
    url:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    method: "GET"
  } )
    .then( result => {
      dispatch( actFetchMoviesSuccess( result.data ) );
    } )
    .catch( error => {
      dispatch( actFetchMoviesFailed( error ) );
    } );
};

export { actFetchMovies };
