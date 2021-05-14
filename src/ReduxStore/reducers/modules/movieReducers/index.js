import axios from 'axios';
import * as types from './constants';

let initialState = {
  loading: false,
  data: null,
  error: null,
};

const movieReducers = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.R_MOVIE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case types.R_MOVIE_SUCCESS:
      state.loading = false;
      state.data = action.data;
      state.error = null;
      return { ...state };

    case types.R_MOVIE_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.error;
      return { ...state };

    default:
      return { ...state };
  }
};

const actFetchMovies = () => dispatch => {
  dispatch( {
    type: types.R_MOVIE_REQUEST,
  } );

  axios( {
    url:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    method: "GET"
  } )
    .then( result => {
      dispatch( {
        type: types.R_MOVIE_SUCCESS,
        data: result.data
      } );
    } )
    .catch( error => {
      dispatch( {
        type: types.R_MOVIE_FAILED,
        error
      } );
    } );
};


export { movieReducers, actFetchMovies };
