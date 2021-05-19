import { combineReducers } from "redux";
import { fetchCinemaSystemsReducers } from "../../services/QuanLyRap/LayThongTinHeThongRap/reducers";
import fetchCinemaClustersReducers from '../../services/QuanLyRap/LayThongTinCumRapTheoHeThong/reducers';
import layThongTinLichChieuHeThongReducers from './../../services/QuanLyRap/LayThongTinLichChieuHeThongRap/reducers';


const cinemaReducers = combineReducers( {
  fetchCinemaSystemsReducers,
  fetchCinemaClustersReducers,
  layThongTinLichChieuHeThongReducers,
} );

export default cinemaReducers;
