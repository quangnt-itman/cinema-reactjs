import axios from "axios";
import { setHeaders } from "../../../utils/setHeader";
import { AUTH_CLEAR_DATA, AUTH_DANG_NHAP_FAILED, AUTH_DANG_NHAP_REQUEST, AUTH_DANG_NHAP_SUCCESS } from "../constants";
import jwtDecode from 'jwt-decode';

const actDangNhapRequest = () => ( {
  type: AUTH_DANG_NHAP_REQUEST
} );

const actDangNhapSuccess = ( data ) => ( {
  type: AUTH_DANG_NHAP_SUCCESS,
  data
} );

const actDangNhapFailed = ( error ) => ( {
  type: AUTH_DANG_NHAP_FAILED,
  error
} );

const actClearData = () => ( {
  type: AUTH_CLEAR_DATA
} );

export const actDangXuat = () => dispatch => {
  // console.log( 'dang xuat' );
  dispatch( actClearData() );
  localStorage.removeItem( 'token' );
  localStorage.removeItem( 'decode' );

};

const actSetTimeOutLogOut = ( exp ) => {
  return dispatch => {
    // console.log( dispatch, exp );
    setTimeout( () => {
      dispatch( actDangXuat() );
    }, exp );
  };
};

export const actDangNhap = ( user, history ) => dispatch => {
  dispatch( actDangNhapRequest() );

  axios( {
    url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
    method: 'POST',
    data: user
  } )
    .then( result => {
      // console.log( result );
      dispatch( actDangNhapSuccess( result.data ) );

      // setHeaders( result.data.accessToken );
      let decode = jwtDecode( result.data.accessToken );
      let exp = ( decode.exp - decode.nbf ) * 1000;
      localStorage.setItem( 'token', JSON.stringify( result.data.accessToken ) );
      localStorage.setItem( 'decode', JSON.stringify( { ...decode, ...result.data } ) );
      history.push( "/" );
      dispatch( actSetTimeOutLogOut( exp ) );

    } )
    .catch( error => {
      // console.log( error );
      dispatch( actDangNhapFailed( error ) );
    } );
};


export const actDangNhapAdmin = ( user, history ) => dispatch => {
  dispatch( actDangNhapRequest() );

  axios( {
    url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
    method: 'POST',
    data: user
  } )
    .then( result => {
      // console.log( result );
      dispatch( actDangNhapSuccess( result.data ) );

      if ( result.data.maLoaiNguoiDung === "QuanTri" ) {
        // setHeaders( result.data.accessToken );
        let decode = jwtDecode( result.data.accessToken );
        let exp = ( decode.exp - decode.nbf ) * 1000;
        localStorage.setItem( 'token', JSON.stringify( result.data.accessToken ) );
        localStorage.setItem( 'decode', JSON.stringify( { ...decode, ...result.data } ) );
        history.push( "/admin" );
        dispatch( actSetTimeOutLogOut( exp ) );
      } else {
        alert( 'Ban khong co quyen truy cap !' );
      }

    } )
    .catch( error => {
      // console.log( error );
      dispatch( actDangNhapFailed( error ) );
    } );
};

