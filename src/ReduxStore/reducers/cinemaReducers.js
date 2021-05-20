import { combineReducers } from "redux";
import { fetchCinemaSystemsReducers } from "../../services/QuanLyRap/LayThongTinHeThongRap/reducers";
import fetchCinemaClustersReducers from '../../services/QuanLyRap/LayThongTinCumRapTheoHeThong/reducers';
import layThongTinLichChieuHeThongRapReducers from './../../services/QuanLyRap/LayThongTinLichChieuHeThongRap/reducers';
import layThongTinLichChieuPhimReducers from "../../services/QuanLyRap/LayThongTinLichChieuPhim/reducers";


const cinemaReducers = combineReducers( {
  fetchCinemaSystemsReducers,
  fetchCinemaClustersReducers,
  layThongTinLichChieuHeThongRapReducers,
  layThongTinLichChieuPhimReducers,
} );

export default cinemaReducers;
