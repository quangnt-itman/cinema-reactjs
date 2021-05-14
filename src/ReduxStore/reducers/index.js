import { combineReducers } from "redux";
// import movieReducers from './movieReducers';
import { movieReducers } from './modules/movieReducers';

const rootReducers = combineReducers( {
  // movieReducers,
  movieReducers
} );
export default rootReducers;
