import { useState } from 'react';
import { connect } from 'react-redux';
import PhimCard from './PhimCard';

export const LichChieuPhim = ( props ) => {

  let { cumRapClicked, lstCumRapTheoHeThong } = props;
  let danhSachPhim;
  if ( cumRapClicked && lstCumRapTheoHeThong ) {
    let cumRapHeThong = lstCumRapTheoHeThong.find( item => item.maCumRap === cumRapClicked.maCumRap );
    danhSachPhim = cumRapHeThong.danhSachPhim;
  }

  console.log( 'danhSachPhim', danhSachPhim );



  return (

    <div className="tab-content lich-chieu-phim" id="nav-tabContent">
      {
        danhSachPhim ?
          danhSachPhim.map( ( phim, index ) => (
            <div
              key={ index }
              className="tab-pane fade show active"
              id={ `list-${ cumRapClicked.maCumRap }` } role="tabpanel"
              aria-labelledby={ `list-${ cumRapClicked.maCumRap }-list` }
            >
              {/* {phim.tenPhim } */ }
              <PhimCard phim={ phim } index={ index } />
            </div>
          ) ) : 'khong co lich chieu phim'
      }
    </div>
  );
};

const mapStateToProps = ( state ) => ( {
  cumRapClicked: state.cinemaReducers.cinemaStoreReducers.cumRapClicked,
  lstCumRapTheoHeThong: state.cinemaReducers.cinemaStoreReducers.lstCumRapTheoHeThong,
} );

const mapDispatchToProps = dispatch => ( {

} );

export default connect( mapStateToProps, mapDispatchToProps )( LichChieuPhim );

