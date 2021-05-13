import { MOVIE_FETCH_MOVIES_FAILED, MOVIE_FETCH_MOVIES_REQUEST, MOVIE_FETCH_MOVIES_SUCCESS } from "./constants";

let initialState = {
  loading: false,
  data: null,
  error: null
};

const fetchMoviesReducers = ( state = initialState, action ) => {
  switch ( action.type ) {
    case MOVIE_FETCH_MOVIES_REQUEST:
      state.loading = true;
      state.data = [];
      state.error = null;
      return { ...state };

    case MOVIE_FETCH_MOVIES_SUCCESS:
      state.loading = false;
      state.data = action.data;
      state.error = null;
      return { ...state };

    case MOVIE_FETCH_MOVIES_FAILED:
      state.loading = false;
      state.data = [];
      state.error = action.error;
      return { ...state };

    default:
      return { ...state };
  }
};

export default fetchMoviesReducers;
