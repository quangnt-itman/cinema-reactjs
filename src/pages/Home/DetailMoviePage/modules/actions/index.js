import axios from "axios";
import {
  MOVIE_FETCH_DETAIL_REQUEST,
  MOVIE_FETCH_DETAIL_SUCCESS,
  MOVIE_FETCH_DETAIL_FAILED,
} from "./../constants";

const actFetchDetailRequest = () => {
  return {
    type: MOVIE_FETCH_DETAIL_REQUEST,
  };
};

const actFetchDetailSuccess = (data) => {
  return {
    type: MOVIE_FETCH_DETAIL_SUCCESS,
    data,
  };
};

const actFetchDetailFailed = (error) => {
  return {
    type: MOVIE_FETCH_DETAIL_FAILED,
    error,
  };
};

export const actFetchMovies = () => (dispatch) => {
  dispatch(actFetchDetailRequest());
  axios
    .get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    )
    .then((result) => {
      console.log(result);
      dispatch(actFetchDetailSuccess(result.data));
    })
    .catch((error) => {
      dispatch(actFetchDetailFailed(error));
    });
};
