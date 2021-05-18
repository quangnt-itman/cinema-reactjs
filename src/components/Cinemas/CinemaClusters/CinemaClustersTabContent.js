import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CinemaClustersTabContent extends Component {
  render () {
    let { cinemaClusters } = this.props;
    return (
      <>
        {
          cinemaClusters && cinemaClusters.map( ( item, i ) => {
            if ( i == 0 ) {
              return (
                <div
                  class="tab-pane fade show active"
                  id={ `v-pills-${ item.maCumRap }` } role="tabpanel"
                  aria-labelledby={ `v-pills-${ item.maCumRap }-tab` }
                >
                  {item.tenCumRap }
                </div>
              );
            }
            else {
              return (
                <div
                  class="tab-pane fade"
                  id={ `v-pills-${ item.maCumRap }` } role="tabpanel"
                  aria-labelledby={ `v-pills-${ item.maCumRap }-tab` }
                >
                  {item.tenCumRap }
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

