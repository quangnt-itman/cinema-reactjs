import axios from "axios";
import { CINEMA_LAY_LICH_CHIEU_HE_THONG_RAP_FAILED, CINEMA_LAY_LICH_CHIEU_HE_THONG_RAP_REQUEST, CINEMA_LAY_LICH_CHIEU_HE_THONG_RAP_SUCCESS } from "../constants";

const actLayLichChieuHeThongRapRequest = () => ( {
  type: CINEMA_LAY_LICH_CHIEU_HE_THONG_RAP_REQUEST
} );
const actLayLichChieuHeThongRapSuccess = ( data ) => ( {
  type: CINEMA_LAY_LICH_CHIEU_HE_THONG_RAP_SUCCESS,
  data
} );
const actLayLichChieuHeThongRapFailed = ( error ) => ( {
  type: CINEMA_LAY_LICH_CHIEU_HE_THONG_RAP_FAILED,
  error
} );

export const actLayLichChieuHeThongRap = ( maHeThongRap, maNhom = "GP01" ) => dispatch => {
  dispatch( actLayLichChieuHeThongRapRequest() );

  axios( {
    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${ maHeThongRap }&maNhom=${ maNhom }`,
    method: 'GET'
  } )
    .then( result => {
      dispatch( actLayLichChieuHeThongRapSuccess( result.data ) );
    } )
    .catch( error => {
      dispatch( actLayLichChieuHeThongRapFailed( error ) );
    } );
};
