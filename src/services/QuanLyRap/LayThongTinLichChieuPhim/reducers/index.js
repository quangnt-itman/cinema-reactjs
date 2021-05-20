import { CINEMA_LAY_THONG_TIN_LICH_CHIEU_PHIM_FAILED, CINEMA_LAY_THONG_TIN_LICH_CHIEU_PHIM_REQUEST, CINEMA_LAY_THONG_TIN_LICH_CHIEU_PHIM_SUCCESS } from "../constants";

let initialState = {
  loading: false,
  data: null,
  error: null
};

const layThongTinLichChieuPhimReducers = ( state = initialState, action ) => {
  switch ( action.type ) {
    case CINEMA_LAY_THONG_TIN_LICH_CHIEU_PHIM_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case CINEMA_LAY_THONG_TIN_LICH_CHIEU_PHIM_SUCCESS:
      state.loading = false;
      state.data = action.data;
      state.error = null;
      return { ...state };

    case CINEMA_LAY_THONG_TIN_LICH_CHIEU_PHIM_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.error;
      return { ...state };

    default:
      return { ...state };
  }
};

export default layThongTinLichChieuPhimReducers;
