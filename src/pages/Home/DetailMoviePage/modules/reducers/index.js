import {
  MOVIE_FETCH_DETAIL_FAILED,
  MOVIE_FETCH_DETAIL_REQUEST,
  MOVIE_FETCH_DETAIL_SUCCESS,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const fetchMovieDetail = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_FETCH_DETAIL_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case MOVIE_FETCH_DETAIL_SUCCESS:
      state.loading = false;
      state.data = action.data;
      state.error = null;
      return { ...state };
    case MOVIE_FETCH_DETAIL_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.error;
      return { ...state };
    default:
      return { ...state };
  }
};

export default fetchMovieDetail;
