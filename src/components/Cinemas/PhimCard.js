import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

let current = moment( "2020-09-02T11:13:13" ).format( 'a' );
console.log( current );

export class PhimCard extends Component {
  render () {
    let { phim } = this.props;
    return (
      <div>
        {
          <div className="card mb-3" style={ { maxWidth: 540 } }>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={ phim.hinhAnh } className="card-img" alt={ phim.maPhim } />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{ phim.tenPhim }</h5>
                  <p className="card-text">
                    <b>
                      <i class="fa fa-clock"></i> Thời lượng :{ " " }
                    </b>
                    <span>120 phút</span>
                  </p>
                  <div className="lich-chieu-phim row">
                    {
                      phim.lstLichChieuTheoPhim.map( ( item, index ) => {
                        if ( moment( item.ngayChieuGioChieu ).format( "DD.MM" ) === "01.01" ) {
                          return (
                            <a
                              key={ index }
                              href={ `/booking/${ item.maLichChieu }` }
                              className="btn btn-outline-warning mb-2"
                            >
                              <small className="text_Green">
                                <b>
                                  { moment( item.ngayChieuGioChieu ).format(
                                    "hh:mm A"
                                  ) }
                                </b>
                              </small>
                              {"~" }
                              <span style={ { fontSize: "12px" } }>
                                { moment( item.ngayChieuGioChieu )
                                  .add( 2, "hours" )
                                  .format( "hh:mm A" ) }
                              </span>
                            </a>
                          );
                        }
                      } )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}


const mapStateToProps = ( state ) => ( {

} );

const mapDispatchToProps = {

};

export default connect( mapStateToProps, mapDispatchToProps )( PhimCard );
