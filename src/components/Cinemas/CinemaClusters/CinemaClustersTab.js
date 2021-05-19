import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CinemaClustersTab extends Component {
  render () {
    console.log( this.props );
    let { cinemaClusters } = this.props;
    return (
      <>
        {
          cinemaClusters && cinemaClusters.map( ( item, i ) => {
            if ( i === 0 ) {
              return (
                <a
                  className="nav-link active"
                  id={ `v-pills-${ item.maCumRap }-tab` }
                  data-toggle="pill"
                  href={ `#v-pills-${ item.maCumRap }` }
                  role="tab"
                  aria-controls={ `v-pills-${ item.maCumRap }` }
                  aria-selected="true"
                  key={ i }
                >
                  {item.tenCumRap }
                </a>
              );
            }
            else {
              return (
                <a
                  className="nav-link "
                  id={ `v-pills-${ item.maCumRap }-tab` }
                  data-toggle="pill"
                  href={ `#v-pills-${ item.maCumRap }` }
                  role="tab"
                  aria-controls={ `v-pills-${ item.maCumRap }` }
                  aria-selected="false"
                  key={ i }
                >
                  {item.tenCumRap }
                </a>
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

const mapDispatchToProps = dispatch => ( {
} );

export default connect( mapStateToProps, mapDispatchToProps )( CinemaClustersTab );;
