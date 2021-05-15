import * as types from './constants';

let initialState = {
  loading: false,
  data: null,
  error: null,
};

const movieReducers = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.R_MOVIE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case types.R_MOVIE_SUCCESS:
      state.loading = false;
      state.data = action.data;
      state.error = null;
      return { ...state };

    case types.R_MOVIE_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.error;
      return { ...state };

    default:
      return { ...state };
  }
};



export { movieReducers };
