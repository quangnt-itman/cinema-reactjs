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
                  className="nav-link border-bottom active"
                  id={ `v-pills-${ item.maCumRap }-tab` }
                  data-toggle="pill"
                  href={ `#v-pills-${ item.maCumRap }` }
                  role="tab"
                  aria-controls={ `v-pills-${ item.maCumRap }` }
                  aria-selected="true"
                  key={ i }
                >
                  {/* {item.tenCumRap } */ }
                  <div className="media">
                    <img src="..." className="mr-3 align-self-center" alt="..." />
                    <div className="media-body">
                      <h5 className="mt-0">{ item.tenCumRap }</h5>
                      <p>Address: { item.diaChi }</p>
                    </div>
                  </div>

                </a>
              );
            }
            else {
              return (
                <a
                  className="nav-link border-bottom "
                  id={ `v-pills-${ item.maCumRap }-tab` }
                  data-toggle="pill"
                  href={ `#v-pills-${ item.maCumRap }` }
                  role="tab"
                  aria-controls={ `v-pills-${ item.maCumRap }` }
                  aria-selected="false"
                  key={ i }
                >
                  {/* {item.tenCumRap } */ }
                  <div className="media">
                    <img src="..." className="mr-3 align-self-center" alt="..." />
                    <div className="media-body">
                      <h5 className="mt-0">{ item.tenCumRap }</h5>
                      <p>Address: { item.diaChi }</p>
                    </div>
                  </div>
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
