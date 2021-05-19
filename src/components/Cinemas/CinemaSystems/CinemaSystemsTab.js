import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchCinemaClusters } from '../../../services/QuanLyRap/LayThongTinCumRapTheoHeThong/actions';
import { actLayThongTinLichChieuHeThongRap } from '../../../services/QuanLyRap/LayThongTinLichChieuHeThongRap/actions';

export class CinemaSystemsTab extends Component {
  render () {
    console.log( this.props );
    let { cinemaSystem, index, fetchCinemaClusters, layThongTinLichChieuHeThongRap } = this.props;

    if ( index === 0 ) {
      return (
        <a
          className="list-group-item list-group-item-action border-bottom active"
          id={ `list-${ cinemaSystem.maHeThongRap }-list` }
          data-toggle="list"
          href={ `#v-list-${ cinemaSystem.maHeThongRap }` }
          role="tab"
          aria-controls={ cinemaSystem.maHeThongRap }
          aria-selected="true"
          onClick={ () => {
            fetchCinemaClusters( cinemaSystem.maHeThongRap );
            layThongTinLichChieuHeThongRap( cinemaSystem.maHeThongRap, "GP01" );

          } }
        >
          <img src={ cinemaSystem.logo } alt={ cinemaSystem.biDanh } />
        </a>
      );
    }
    else {
      return (
        <a
          className="list-group-item list-group-item-action border-bottom "
          id={ `list-${ cinemaSystem.maHeThongRap }-list` }
          data-toggle="list"
          href={ `#v-list-${ cinemaSystem.maHeThongRap }` }
          role="tab"
          aria-controls={ cinemaSystem.maHeThongRap }
          aria-selected="false"
          onClick={ () => fetchCinemaClusters( cinemaSystem.maHeThongRap ) }
        >
          <img src={ cinemaSystem.logo } alt={ cinemaSystem.biDanh } />
        </a>
      );
    }
  }
}

const mapStateToProps = ( state ) => ( {

} );

const mapDispatchToProps = dispatch => ( {
  fetchCinemaClusters: ( maHeThongRap ) => dispatch( actFetchCinemaClusters( maHeThongRap ) ),
  layThongTinLichChieuHeThongRap: ( maHeThongRap, maNhom ) => dispatch( actLayThongTinLichChieuHeThongRap( maHeThongRap, maNhom ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( CinemaSystemsTab );
