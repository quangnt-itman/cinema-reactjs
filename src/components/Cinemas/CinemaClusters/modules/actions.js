import axios from "axios";
import { CINEMA_FETCH_CINEMA_CLUSTERS_FAILED, CINEMA_FETCH_CINEMA_CLUSTERS_REQUEST, CINEMA_FETCH_CINEMA_CLUSTERS_SUCCESS } from "./constants";

const actFetchCinemaClustersRequest = () => ( {
  type: CINEMA_FETCH_CINEMA_CLUSTERS_REQUEST,
} );
const actFetchCinemaClustersSuccess = ( data ) => ( {
  type: CINEMA_FETCH_CINEMA_CLUSTERS_SUCCESS,
  data
} );
const actFetchCinemaClustersFailded = ( error ) => ( {
  type: CINEMA_FETCH_CINEMA_CLUSTERS_FAILED,
  error
} );

export const actFetchCinemaClusters = ( maHeThongRap ) => dispatch => {
  dispatch( actFetchCinemaClustersRequest() );

  axios( {
    url:
      `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${ maHeThongRap }`,
    method: "GET"
  } )
    .then( result => {
      dispatch( actFetchCinemaClustersSuccess( result.data ) );
    } )
    .catch( error => {
      dispatch( actFetchCinemaClustersFailded( error ) );
    } );
};
