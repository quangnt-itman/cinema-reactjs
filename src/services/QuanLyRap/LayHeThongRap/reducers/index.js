import { CINEMA_FETCH_CINEMA_SYSTEMS_FAILED, CINEMA_FETCH_CINEMA_SYSTEMS_REQUEST, CINEMA_FETCH_CINEMA_SYSTEMS_SUCCESS } from "./../constants";

const initialState = {
  loading: false,
  data: null,
  error: null
};

const fetchCinemaSystemsReducers = ( state = initialState, action ) => {
  switch ( action.type ) {
    case CINEMA_FETCH_CINEMA_SYSTEMS_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case CINEMA_FETCH_CINEMA_SYSTEMS_SUCCESS:
      state.loading = false;
      state.data = action.data;
      state.error = null;
      return { ...state };

    case CINEMA_FETCH_CINEMA_SYSTEMS_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.error;
      return { ...state };

    default:
      return { ...state };
  }
};

export default fetchCinemaSystemsReducers ;
