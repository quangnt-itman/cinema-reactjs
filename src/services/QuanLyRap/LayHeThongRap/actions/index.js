import axios from "axios";
import { CINEMA_FETCH_CINEMA_SYSTEMS_FAILED, CINEMA_FETCH_CINEMA_SYSTEMS_REQUEST, CINEMA_FETCH_CINEMA_SYSTEMS_SUCCESS } from "./../constants";

const actFetchCinemaSystemsRequest = () => ( {
  type: CINEMA_FETCH_CINEMA_SYSTEMS_REQUEST,
} );
const actFetchCinamaSystemsSuccess = ( data ) => ( {
  type: CINEMA_FETCH_CINEMA_SYSTEMS_SUCCESS,
  data
} );
const actFetchCinemaSystemsFailed = ( error ) => ( {
  type: CINEMA_FETCH_CINEMA_SYSTEMS_FAILED,
  error
} );

const actFetchCinemaSystems = () => dispatch => {
  dispatch( actFetchCinemaSystemsRequest() );

  axios( {
    url:
      "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
    method: "GET"
  } )
    .then( result => {
      dispatch( actFetchCinamaSystemsSuccess( result.data ) );
    } )
    .catch( error => {
      dispatch( actFetchCinemaSystemsFailed( error ) );
    } );
};

export { actFetchCinemaSystems };
