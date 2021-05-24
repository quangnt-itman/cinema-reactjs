import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PhimCard extends Component {
  lstPhimLichChieuTheoCumRap = [];
  render () {

    let { lichChieuHeThongRap, phimLichChieu, cumRap } = this.props;
    let maHeThongRap = lichChieuHeThongRap && lichChieuHeThongRap[ 0 ].maHeThongRap;
    let isValid = false;
    // console.log( 'lichChieuHeThongRap', lichChieuHeThongRap );
    // console.log( 'maHeThongRap', maHeThongRap );
    // console.log( 'phimLichChieu', phimLichChieu );
    // console.log( 'cumRap', cumRap );

    if ( phimLichChieu?.heThongRapChieu ) {
      let heThongRapChieu = phimLichChieu.heThongRapChieu.find( item => item.maHeThongRap === maHeThongRap );
      // console.log( 'heThongRapChieu', heThongRapChieu );
      if ( heThongRapChieu?.cumRapChieu ) {
        // let cumRapChieu = heThongRapChieu.cumRapChieu;
        // cumRapChieu.forEach( item => {
        //   if ( item.maCumRap === cumRap.maCumRap ) {
        //     this.lstPhimLichChieuTheoCumRap.push( phimLichChieu );
        //     console.log( this.lstPhimLichChieuTheoCumRap );
        //   }
        // } );
        // console.log( 'cumRapChieu', cumRapChieu );

        isValid = heThongRapChieu.cumRapChieu.some( item => item.maCumRap === cumRap.maCumRap );
        // console.log( isValid );
        if ( isValid ) this.lstPhimLichChieuTheoCumRap.push( phimLichChieu );
        // console.log( this.lstPhimLichChieuTheoCumRap );
      }
    }


    return (
      <div>
        {
          this.lstPhimLichChieuTheoCumRap ?
            ( this.lstPhimLichChieuTheoCumRap.map( ( phim, index ) => (
              <div className="card mb-3" style={ { maxWidth: 540 } } key={ index }>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={ phim ? phim.hinhAnh : 'none' } className="card-img" alt={ phim ? phim.maPhim : 'none' } />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{ phim ? phim.tenPhim : 'none' }</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            ) ) )
            : 'khong co lich chieu phim'
        }
      </div>
    );
  }
}


const mapStateToProps = ( state ) => ( {
  phimLichChieu: state.cinemaReducers.layLichChieuPhimReducers.data,
  lichChieuHeThongRap: state.cinemaReducers.layLichChieuHeThongRapReducers.data
} );

const mapDispatchToProps = {

};

export default connect( mapStateToProps, mapDispatchToProps )( PhimCard );
