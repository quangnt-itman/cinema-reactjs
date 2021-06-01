import { CINEMA_LAY_CUM_RAP_CLICKED,  CINEMA_LAY_CUM_RAP_THEO_HE_THONG } from '../constants';

export const actLayCumRapClicked = ( cumRapClicked ) => ( {
  type: CINEMA_LAY_CUM_RAP_CLICKED,
  cumRapClicked
} );

export const actLayCumRapTheoHeThong = ( cumRapTheoHeThong ) => ( {
  type: CINEMA_LAY_CUM_RAP_THEO_HE_THONG,
  cumRapTheoHeThong
} );
