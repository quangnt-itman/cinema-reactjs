import { combineReducers } from "redux";
import cinemaReducers from "./cinemaReducers";
import movieReducers from './movieReducers';
// import { movieReducers } from './modules/movieReducers';

const rootReducers = combineReducers( {
  movieReducers,
  cinemaReducers,
  // movieReducers
} );
export default rootReducers;
