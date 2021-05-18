import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchCinemaClusters } from './modules/actions';

export class CinemaClusters extends Component {

  render () {
    console.log( this.props );
    let { cinemaClusters, cinemaSystem } = this.props;
    return (


        <div className="row">

          <div className="col-sm-3">
            <div className="nav flex-column nav-pills" id={ `v-pills-cinema-${ cinemaSystem.maHeThongRap }-clusters-tab` } role="tablist" aria-orientation="vertical">
              { cinemaClusters && cinemaClusters.map( ( item, index ) => {
                // if ( index === 0 ) {
                //   return (
                //     <a className="nav-link active" key={ index } id={ `v-pills-${ item.maCumRap }-tab` } data-toggle="pill" href={ `#v-pills-${ item.maCumRap }` } role="tab" aria-controls={ `v-pills-${ item.maCumRap }` } aria-selected="true">
                //       <p>{ item.tenCumRap }</p>
                //     </a>
                //   );
                // }
                // else {
                //   return (
                //     <a className="nav-link" key={ index } id={ `v-pills-${ item.maCumRap }-tab` } data-toggle="pill" href={ `#v-pills-${ item.maCumRap }` } role="tab" aria-controls={ `v-pills-${ item.maCumRap }` } aria-selected="true">
                //       <p>{ item.tenCumRap }</p>
                //     </a>
                //   );
                // }
                return (
                  <a className="nav-link " key={ index } id={ `v-pills-${ item.maCumRap }-tab` } data-toggle="pill" href={ `#v-pills-${ item.maCumRap }` } role="tab" aria-controls={ `v-pills-${ item.maCumRap }` } aria-selected="true">
                    <p>{ item.tenCumRap }</p>
                  </a>
                );
              } ) }
            </div>
          </div>
          <div className="col-sm-9">
            <div className="tab-content" id={ `v-pills-cinema-${ cinemaSystem.maHeThongRap }-clusters-tabContent` }>
              { cinemaClusters && cinemaClusters.map( ( item, index ) => {
                // if ( index === 0 ) {
                //   return (
                //     <div key={ index } className="tab-pane fade show active" id={ `v-pills-${ item.maCumRap }` } role="tabpanel" aria-labelledby={ `v-pills-${ item.maCumRap }-tab` }>
                //       <p>{ item.tenCumRap }</p>
                //     </div>
                //   );
                // }
                // else {
                //   return (
                //     <div key={ index } className="tab-pane fade " id={ `v-pills-${ item.maCumRap }` } role="tabpanel" aria-labelledby={ `v-pills-${ item.maCumRap }-tab` }>
                //       <p>{ item.tenCumRap }</p>
                //     </div>
                //   );
                // }
                return (
                  <div key={ index } className="tab-pane fade   " id={ `v-pills-${ item.maCumRap }` } role="tabpanel" aria-labelledby={ `v-pills-${ item.maCumRap }-tab` }>
                    {/* <p>{ item.tenCumRap }</p> */ }quangnt
                  </div>
                );
              } ) }
            </div>
          </div>


        </div>


      
    );
  }
}

const mapStateToProps = ( state ) => ( {
  cinemaClusters: state.cinemaReducers.fetchCinemaClustersReducers.data,
} );

const mapDispatchToProps = dispatch => ( {
  fetchCinemaClusters: ( maHeThongRap ) => dispatch( actFetchCinemaClusters( maHeThongRap ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( CinemaClusters );
