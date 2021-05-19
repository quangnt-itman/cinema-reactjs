import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                  {item.tenCumRap }
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
                  <ul className="list-unstyled">
                    <li className="media">
                      <img src="..." className="mr-3" alt="..." />
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
                    </li>
                    <li className="media my-4">
                      <img src="..." className="mr-3" alt="..." />
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
                    </li>
                    <li className="media">
                      <img src="..." className="mr-3" alt="..." />
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
                    </li>
                    <li className="media">
                      <img src="..." className="mr-3" alt="..." />
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
                    </li>
                    <li className="media">
                      <img src="..." className="mr-3" alt="..." />
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
                    </li>
                    <li className="media">
                      <img src="..." className="mr-3" alt="..." />
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
                    </li>
                  </ul>

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

