import { combineReducers } from "redux";
import { fetchCinemaSystemsReducers } from "../../services/QuanLyRap/LayThongTinHeThongRap/reducers";
import fetchCinemaClustersReducers from '../../services/QuanLyRap/LayThongTinCumRapTheoHeThong/reducers';
import layThongTinLichChieuHeThongRapReducers from './../../services/QuanLyRap/LayThongTinLichChieuHeThongRap/reducers';


const cinemaReducers = combineReducers( {
  fetchCinemaSystemsReducers,
  fetchCinemaClustersReducers,
  layThongTinLichChieuHeThongRapReducers,
} );

export default cinemaReducers;
