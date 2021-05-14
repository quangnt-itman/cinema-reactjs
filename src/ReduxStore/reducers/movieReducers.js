import { combineReducers } from "redux";
import fetchMoviesReducers from "../../components/Movies/modules/reducers";
import fetchMovieDetail from "../../pages/Home/DetailMoviePage/modules/reducers";

const movieReducers = combineReducers({
  fetchMoviesReducers,
  fetchMovieDetail,
});

export default movieReducers;
