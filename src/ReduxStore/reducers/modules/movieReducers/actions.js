import * as types from './constants';
import axios from 'axios';

export const actFetchMovies = () => dispatch => {
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
