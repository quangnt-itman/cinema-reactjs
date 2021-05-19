import { combineReducers } from "redux";
import fetchMoviesReducers from './../../services/QuanLyPhim/LayDanhSachPhim/reducers'

const movieReducers = combineReducers( {
  fetchMoviesReducers
} );

export default movieReducers;
