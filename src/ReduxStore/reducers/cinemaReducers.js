import { combineReducers } from "redux";
import { fetchCinemaSystemsReducers } from "../../components/Cinemas/CinemaSystems/modules/reducers";
import fetchCinemaClustersReducers from '../../components/Cinemas/CinemaClusters/modules/reducers';
const cinemaReducers = combineReducers( {
  fetchCinemaSystemsReducers,
  fetchCinemaClustersReducers,
} );

export default cinemaReducers;
