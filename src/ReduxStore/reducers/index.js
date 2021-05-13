import { combineReducers } from "redux";
import movieReducers from './movieReducers';

const rootReducers = combineReducers( {
  movieReducers
} );
export default rootReducers;
