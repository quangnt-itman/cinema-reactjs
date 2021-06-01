import { AUTH_CLEAR_DATA, AUTH_DANG_NHAP_FAILED, AUTH_DANG_NHAP_REQUEST, AUTH_DANG_NHAP_SUCCESS, AUTH_DANG_XUAT } from "../constants";

let initialState = {
  loading: false,
  user: null,
  token: null,
  error: null
};

const authReducers = ( state = initialState, action ) => {
  switch ( action.type ) {
    case AUTH_DANG_NHAP_REQUEST:
      state.loading = true;
      state.user = null;
      state.token = null;
      state.error = null;
      return { ...state };

    case AUTH_DANG_NHAP_SUCCESS:
      state.loading = false;
      state.user = action.data;
      state.token = action.data.accessToken;
      state.error = null;
      return { ...state };

    case AUTH_DANG_NHAP_FAILED:
      state.loading = false;
      state.user = null;
      state.token = null;
      state.error = action.error;
      return { ...state };

    case AUTH_CLEAR_DATA:
      // console.log( action );
      state.loading = false;
      state.user = null;
      state.token = null;
      state.error = null;
      return { ...state };

    default:
      return { ...state };
  }
};

export default authReducers;
