import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchCinemaClusters } from '../CinemaClusters/modules/actions';

export class CinemaSystemsTab extends Component {
  render () {
    console.log( this.props );
    let { cinemaSystem, index, fetchCinemaClusters } = this.props;

    if ( index == 0 ) {
      return (
        <a
          className="nav-link active"
          id={ `v-pills-${ cinemaSystem.maHeThongRap }-tab` }
          data-toggle="pill" href={ `#v-pills-${ cinemaSystem.maHeThongRap }` }
          role="tab" aria-controls={ `v-pills-${ cinemaSystem.maHeThongRap }` }
          aria-selected="true"
          onClick={ () => fetchCinemaClusters( cinemaSystem.maHeThongRap ) }
        >
          { cinemaSystem.maHeThongRap }
        </a>
      );
    }
    else {
      return (
        <a
          className="nav-link"
          id={ `v-pills-${ cinemaSystem.maHeThongRap }-tab` }
          data-toggle="pill" href={ `#v-pills-${ cinemaSystem.maHeThongRap }` }
          role="tab" aria-controls={ `v-pills-${ cinemaSystem.maHeThongRap }` }
          aria-selected="false"
          onClick={ () => fetchCinemaClusters( cinemaSystem.maHeThongRap ) }
        >
          { cinemaSystem.maHeThongRap }
        </a>
      );
    }
  }
}

const mapStateToProps = ( state ) => ( {
  
} );

const mapDispatchToProps = dispatch => ( {
  fetchCinemaClusters: ( maHeThongRap ) => dispatch( actFetchCinemaClusters( maHeThongRap ) ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( CinemaSystemsTab );
