import { combineReducers } from "redux";
import authReducers from "../../services/Auth/reducers";
import cinemaReducers from "./cinemaReducers";
import movieReducers from './movieReducers';

const rootReducers = combineReducers( {
  movieReducers,
  cinemaReducers,
  authReducers
} );
export default rootReducers;
