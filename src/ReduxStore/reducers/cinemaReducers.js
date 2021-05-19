import { combineReducers } from "redux";
import { fetchCinemaSystemsReducers } from "../../services/QuanLyRap/LayThongTinHeThongRap/reducers";
import fetchCinemaClustersReducers from '../../services/QuanLyRap/LayThongTinCumRapTheoHeThong/reducers';
const cinemaReducers = combineReducers( {
  fetchCinemaSystemsReducers,
  fetchCinemaClustersReducers,
} );

export default cinemaReducers;
