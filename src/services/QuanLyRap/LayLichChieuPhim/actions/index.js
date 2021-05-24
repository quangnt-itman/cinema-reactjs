import axios from "axios";
import { CINEMA_LAY_LICH_CHIEU_PHIM_FAILED, CINEMA_LAY_LICH_CHIEU_PHIM_REQUEST, CINEMA_LAY_LICH_CHIEU_PHIM_SUCCESS } from "../constants";

const actLayLichChieuPhimRequest = () => ( {
  type: CINEMA_LAY_LICH_CHIEU_PHIM_REQUEST
} );

const actLayLichChieuPhimSuccess = ( data ) => ( {
  type: CINEMA_LAY_LICH_CHIEU_PHIM_SUCCESS,
  data
} );

const actLayLichChieuPhimFailed = ( error ) => ( {
  type: CINEMA_LAY_LICH_CHIEU_PHIM_FAILED,
  error
} );

export const actLayLichChieuPhim = ( maPhim ) => dispatch => {
  dispatch( actLayLichChieuPhimRequest );

  axios( {
    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${ maPhim }`,
    method: 'GET'
  } )
    .then( result => {
      dispatch( actLayLichChieuPhimSuccess( result.data ) );
    } )
    .catch( error => {
      dispatch( actLayLichChieuPhimFailed( error ) );
    } );
};
