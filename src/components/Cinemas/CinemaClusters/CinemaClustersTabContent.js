import React, { Component } from 'react';
import { connect } from 'react-redux';
import CinemaClusterMedia from './CinemaClusterMedia';

export class CinemaClustersTabContent extends Component {
  render () {
    let { cinemaClusters } = this.props;
    return (
      <>
        {
          cinemaClusters && cinemaClusters.map( ( item, i ) => {
            if ( i === 0 ) {
              return (
                <div
                  className="tab-pane fade active show"
                  id={ `v-pills-${ item.maCumRap }` }
                  role="tabpanel"
                  aria-labelledby={ `v-pills-${ item.maCumRap }-tab` }
                  key={ i }
                >
                  {/* {item.tenCumRap } */ }
                  <div className="card-list">
                    <CinemaClusterMedia cinemaCluster={ item } />
                  </div>
                </div>
              );
            }
            else {
              return (
                <div
                  className="tab-pane fade"
                  id={ `v-pills-${ item.maCumRap }` } role="tabpanel"
                  aria-labelledby={ `v-pills-${ item.maCumRap }-tab` }
                  key={ i }
                >
                  {/* {item.tenCumRap } */ }
                  <div className="card-list">
                    <CinemaClusterMedia cinemaCluster={ item } />
                  </div>
                </div>
              );
            }
          } )
        }
      </>
    );
  }
}

const mapStateToProps = ( state ) => ( {
  cinemaClusters: state.cinemaReducers.fetchCinemaClustersReducers.data
} );

const mapDispatchToProps = {

};

export default connect( mapStateToProps, mapDispatchToProps )( CinemaClustersTabContent );

