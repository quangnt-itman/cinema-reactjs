import { CINEMA_LAY_LICH_CHIEU_HE_THONG_RAP_FAILED, CINEMA_LAY_LICH_CHIEU_HE_THONG_RAP_REQUEST, CINEMA_LAY_LICH_CHIEU_HE_THONG_RAP_SUCCESS } from "../constants";

let initialState = {
  loading: false,
  data: null,
  error: null
};

const layLichChieuHeThongRapReducers = ( state = initialState, action ) => {
  switch ( action.type ) {
    case CINEMA_LAY_LICH_CHIEU_HE_THONG_RAP_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case CINEMA_LAY_LICH_CHIEU_HE_THONG_RAP_SUCCESS:
      state.loading = false;
      state.data = action.data;
      state.error = null;
      return { ...state };

    case CINEMA_LAY_LICH_CHIEU_HE_THONG_RAP_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.error;
    default:
      return { ...state };
  }
};

export default layLichChieuHeThongRapReducers;
