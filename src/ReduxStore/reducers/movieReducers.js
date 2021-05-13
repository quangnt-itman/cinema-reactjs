import { combineReducers } from "redux";
import fetchMoviesReducers from "../../components/Movies/modules/reducers";

const movieReducers = combineReducers( {
  fetchMoviesReducers
} );

export default movieReducers;
