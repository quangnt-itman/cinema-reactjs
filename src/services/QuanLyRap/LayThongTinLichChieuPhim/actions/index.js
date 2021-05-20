import axios from "axios";
import { CINEMA_LAY_THONG_TIN_LICH_CHIEU_PHIM_FAILED, CINEMA_LAY_THONG_TIN_LICH_CHIEU_PHIM_REQUEST, CINEMA_LAY_THONG_TIN_LICH_CHIEU_PHIM_SUCCESS } from "../constants";

const actLayThongTinLichChieuPhimRequest = () => ( {
  type: CINEMA_LAY_THONG_TIN_LICH_CHIEU_PHIM_REQUEST
} );

const actLayThongTinLichChieuPhimSuccess = ( data ) => ( {
  type: CINEMA_LAY_THONG_TIN_LICH_CHIEU_PHIM_SUCCESS,
  data
} );

const actLayThongTinLichChieuPhimFailed = ( error ) => ( {
  type: CINEMA_LAY_THONG_TIN_LICH_CHIEU_PHIM_FAILED,
  error
} );

export const actLayThongTinLichChieuPhim = ( maPhim ) => dispatch => {
  dispatch( actLayThongTinLichChieuPhimRequest );

  axios( {
    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${ maPhim }`,
    method: 'GET'
  } )
    .then( result => {
      dispatch( actLayThongTinLichChieuPhimSuccess( result.data ) );
    } )
    .catch( error => {
      dispatch( actLayThongTinLichChieuPhimFailed( error ) );
    } );
};
