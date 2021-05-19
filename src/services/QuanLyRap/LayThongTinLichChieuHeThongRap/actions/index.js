import axios from "axios";
import { CINEMA_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_FAILED, CINEMA_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUEST, CINEMA_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_SUCCESS } from "../constants";

const actLayThongTinLichChieuHeThongRapRequest = () => ( {
  type: CINEMA_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUEST
} );
const actLayThongTinLichChieuHeThongRapSuccess = ( data ) => ( {
  type: CINEMA_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_SUCCESS,
  data
} );
const actLayThongTinLichChieuHeThongRapFailed = ( error ) => ( {
  type: CINEMA_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_FAILED,
  error
} );

export const actLayThongTinLichChieuHeThongRap = ( maHeThongRap, maNhom = "GP01" ) => dispatch => {
  dispatch( actLayThongTinLichChieuHeThongRapRequest() );

  axios( {
    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${ maHeThongRap }&maNhom=${ maNhom }`,
    method: 'GET'
  } )
    .then( result => {
      dispatch( actLayThongTinLichChieuHeThongRapSuccess( result.data ) );
    } )
    .catch( error => {
      dispatch( actLayThongTinLichChieuHeThongRapFailed( error ) );
    } );
};
