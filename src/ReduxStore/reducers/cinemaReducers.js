import { combineReducers } from "redux";
import { fetchCinemaSystemsReducers } from "../../components/Cinemas/CinemaSystems/modules/reducers";
const cinemaReducers = combineReducers( {
  fetchCinemaSystemsReducers,
} );

export default cinemaReducers;
