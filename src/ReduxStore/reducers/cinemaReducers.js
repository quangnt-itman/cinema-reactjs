import { combineReducers } from "redux";
import fetchCinemaSystemsReducers from "../../services/QuanLyRap/LayHeThongRap/reducers";
import fetchCinemaClustersReducers from '../../services/QuanLyRap/LayCumRapTheoHeThong/reducers';
import layLichChieuHeThongRapReducers from '../../services/QuanLyRap/LayLichChieuHeThongRap/reducers';
import layLichChieuPhimReducers from "../../services/QuanLyRap/LayLichChieuPhim/reducers";
import cinemaStoreReducers from "../../services/QuanLyRap/CinemaStore/reducers";

const cinemaReducers = combineReducers( {
  cinemaStoreReducers,
  fetchCinemaSystemsReducers,
  fetchCinemaClustersReducers,
  layLichChieuHeThongRapReducers,
  layLichChieuPhimReducers,
} );

export default cinemaReducers;
