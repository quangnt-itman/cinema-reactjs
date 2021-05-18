import React, { Component } from 'react';
import { connect } from 'react-redux';
import CinemaClustersTab from '../CinemaClusters/CinemaClustersTab';
import CinemaClustersTabContent from '../CinemaClusters/CinemaClustersTabContent';

export class CinemaSystemsTabContent extends Component {
  render () {
    let { cinemaSystem, index } = this.props;

    if ( index === 0 ) {
      return (
        <div
          className="tab-pane fade active show "
          id={ `v-pills-${ cinemaSystem.maHeThongRap }` }
          role="tabpanel"
          aria-labelledby={ `v-pills-${ cinemaSystem.maHeThongRap }-tab` }>
          {/* {cinemaSystem.tenHeThongRap } */ }
          <div className="cinema-clusters">
            <div class="row">
              <div class="col-5">
                <div class="nav flex-column nav-pills" id={ `v-pills-tab-${ index }` } role="tablist" aria-orientation="vertical">
                  {/* { cinemaSystem.tenHeThongRap } */ }
                  <CinemaClustersTab />
                </div>
              </div>
              <div class="col-7">
                <div class="tab-content" id={ `v-pills-tabContent-${ index }` }>
                  {/* { cinemaSystem.tenHeThongRap } */ }
                  <CinemaClustersTabContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div
          className="tab-pane fade "
          id={ `v-pills-${ cinemaSystem.maHeThongRap }` }
          role="tabpanel"
          aria-labelledby={ `v-pills-${ cinemaSystem.maHeThongRap }-tab` }>
          {/* {cinemaSystem.tenHeThongRap } */ }
          <div className="cinema-clusters">
            <div class="row">
              <div class="col-5">
                <div class="nav flex-column nav-pills" id={ `v-pills-tab-${ index }` } role="tablist" aria-orientation="vertical">
                  {/* { cinemaSystem.tenHeThongRap } */ }
                  <CinemaClustersTab />
                </div>
              </div>
              <div class="col-7">
                <div class="tab-content" id={ `v-pills-tabContent-${ index }` }>
                  {/* { cinemaSystem.tenHeThongRap } */}
                  <CinemaClustersTabContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = ( state ) => ( {

} );

const mapDispatchToProps = {

};

export default connect( mapStateToProps, mapDispatchToProps )( CinemaSystemsTabContent );
