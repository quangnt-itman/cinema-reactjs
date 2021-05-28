import { CINEMA_LAY_CUM_RAP_CLICKED, CINEMA_L, CINEMA_LAY_CUM_RAP_THEO_HE_THONG } from "../constants";

let initialState = {
  cumRapClicked: null,
  lstCumRapTheoHeThong: [],
};

const cinemaStoreReducers = ( state = initialState, action ) => {
  switch ( action.type ) {
    case CINEMA_LAY_CUM_RAP_CLICKED:
      state.cumRapClicked = action.cumRapClicked;
      return { ...state };

    case CINEMA_LAY_CUM_RAP_THEO_HE_THONG:
      let lstCumRapTheoHeThong = [ ...state.lstCumRapTheoHeThong ];
      lstCumRapTheoHeThong.push( action.cumRapTheoHeThong );
      state.lstCumRapTheoHeThong = lstCumRapTheoHeThong;
      return { ...state };

    default:
      return { ...state };
  }
};

export default cinemaStoreReducers;
