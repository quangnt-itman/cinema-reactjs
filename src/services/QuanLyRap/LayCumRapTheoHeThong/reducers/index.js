import { CINEMA_FETCH_CINEMA_CLUSTERS_FAILED, CINEMA_FETCH_CINEMA_CLUSTERS_REQUEST, CINEMA_FETCH_CINEMA_CLUSTERS_SUCCESS } from "./../constants";

const initialState = {
  loading: false,
  data: null,
  error: null
};

const fetchCinemaClustersReducers = ( state = initialState, action ) => {
  switch ( action.type ) {
    case CINEMA_FETCH_CINEMA_CLUSTERS_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case CINEMA_FETCH_CINEMA_CLUSTERS_SUCCESS:
      state.loading = false;
      state.data = action.data;
      state.error = null;
      return { ...state };

    case CINEMA_FETCH_CINEMA_CLUSTERS_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.error;
      return { ...state };

    default:
      return { ...state };
  }
};

export default fetchCinemaClustersReducers;
