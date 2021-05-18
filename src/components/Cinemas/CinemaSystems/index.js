import React, { Component } from 'react';
import { connect } from 'react-redux';
import CinemaClusters from '../CinemaClusters';
import { actFetchCinemaClusters } from '../CinemaClusters/modules/actions';
import { actFetchCinemaSystems } from './modules/actions';

export class CinemaSystems extends Component {
  componentDidMount () {
    this.props.fetchCinemaSystems();
  }

  render () {
    console.log( this );
    let { cinemaSystems, cinemaClusters } = this.props;
    return (
      <>
        <div className="container" id="cinemaSystems">
          <div className="row">
            <div className="col-1">
              <div className="nav flex-column nav-pills" id="v-pills-cinema-systems-tab" role="tablist" aria-orientation="vertical">

                { cinemaSystems && cinemaSystems.map( ( item, index ) => {
                  if ( index === 0 ) {
                    return (
                      <a className="nav-link active" key={ index } id={ `v-pills-${ item.maHeThongRap }-tab` } data-toggle="pill" href={ `#v-pills-${ item.maHeThongRap }` } role="tab" aria-controls={ `v-pills-${ item.maHeThongRap }` } aria-selected="true" onClick={ () => this.props.fetchCinemaClusters( item.maHeThongRap ) } >
                        <img src={ item.logo } width="50px" height="50px" alt={ item.biDanh } />
                      </a>
                    );
                  }
                  else {
                    return (
                      <a className="nav-link " key={ index } id={ `v-pills-${ item.maHeThongRap }-tab` } data-toggle="pill" href={ `#v-pills-${ item.maHeThongRap }` } role="tab" aria-controls={ `v-pills-${ item.maHeThongRap }` } aria-selected="true" onClick={ () => this.props.fetchCinemaClusters( item.maHeThongRap ) } >
                        <img src={ item.logo } width="50px" height="50px" alt={ item.biDanh } />
                      </a>
                    );
                  }
                } ) }

              </div>
            </div>
            <div className="col-11">
              <div className="tab-content" id="v-pills-cinema-systems-tabContent">

                { cinemaSystems && cinemaSystems.map( ( item, index ) => {
                  if ( index === 0 ) {
                    return (
                      <div key={ index } className="tab-pane fade show active" id={ `v-pills-${ item.maHeThongRap }` } role="tabpanel" aria-labelledby={ `v-pills-${ item.maHeThongRap }-tab` }>
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="nav flex-column nav-pills" id={ `v-pills-cinema-${ item.maHeThongRap }-clusters-tab` } role="tablist" aria-orientation="vertical">
                              { cinemaClusters && cinemaClusters.map( ( item, index ) => {
                                if ( index === 0 ) {
                                  return (
                                    <a className="nav-link active" key={ index } id={ `v-pills-${ item.maCumRap }-tab` } data-toggle="pill" href={ `#v-pills-${ item.maCumRap }` } role="tab" aria-controls={ `v-pills-${ item.maCumRap }` } aria-selected="true">
                                      <p>{ item.tenCumRap }</p>
                                    </a>
                                  );
                                }
                                else {
                                  return (
                                    <a className="nav-link " key={ index } id={ `v-pills-${ item.maCumRap }-tab` } data-toggle="pill" href={ `#v-pills-${ item.maCumRap }` } role="tab" aria-controls={ `v-pills-${ item.maCumRap }` } aria-selected="false">
                                      <p>{ item.tenCumRap }</p>
                                    </a>
                                  );
                                }
                              } ) }
                            </div>
                          </div>

                          <div className="col-sm-9">
                            <div className="tab-content" id={ `v-pills-cinema-${ item.maHeThongRap }-clusters-tabContent` }>
                              { cinemaClusters && cinemaClusters.map( ( item, index ) => {
                                if ( index === 0 ) {
                                  return (
                                    <div key={ index } className="tab-pane fade show active" id={ `v-pills-${ item.maCumRap }` } role="tabpanel" aria-labelledby={ `v-pills-${ item.maCumRap }-tab` }>
                                      <p>{ item.tenCumRap }</p>
                                    </div>
                                  );
                                }
                                else {
                                  return (
                                    <div key={ index } className="tab-pane fade " id={ `v-pills-${ item.maCumRap }` } role="tabpanel" aria-labelledby={ `v-pills-${ item.maCumRap }-tab` }>
                                      <p>{ item.tenCumRap }</p>
                                    </div>
                                  );
                                }
                              } ) }
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  else {
                    return (
                      <div key={ index } className="tab-pane fade " id={ `v-pills-${ item.maHeThongRap }` } role="tabpanel" aria-labelledby={ `v-pills-${ item.maHeThongRap }-tab` }>
                        {/* // */ }
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="nav flex-column nav-pills" id={ `v-pills-cinema-${ item.maHeThongRap }-clusters-tab` } role="tablist" aria-orientation="vertical">

                              { cinemaClusters && cinemaClusters.map( ( item, index ) => {
                                if ( index === 0 ) {
                                  return (
                                    <a className="nav-link active" key={ index } id={ `v-pills-${ item.maCumRap }-tab` } data-toggle="pill" href={ `#v-pills-${ item.maCumRap }` } role="tab" aria-controls={ `v-pills-${ item.maCumRap }` } aria-selected="true">
                                      <p>{ item.tenCumRap }</p>
                                    </a>
                                  );
                                }
                                else {
                                  return (
                                    <a className="nav-link" key={ index } id={ `v-pills-${ item.maCumRap }-tab` } data-toggle="pill" href={ `#v-pills-${ item.maCumRap }` } role="tab" aria-controls={ `v-pills-${ item.maCumRap }` } aria-selected="false">
                                      <p>{ item.tenCumRap }</p>
                                    </a>
                                  );
                                }
                              } ) }

                            </div>
                          </div>
                          <div className="col-sm-9">
                            <div className="tab-content" id={ `v-pills-cinema-${ item.maHeThongRap }-clusters-tabContent` }>

                              { cinemaClusters && cinemaClusters.map( ( item, index ) => {
                                if ( index === 0 ) {
                                  return (
                                    <div key={ index } className="tab-pane fade show active" id={ `v-pills-${ item.maCumRap }` } role="tabpanel" aria-labelledby={ `v-pills-${ item.maCumRap }-tab` }>
                                      <p>{ item.tenCumRap }</p>
                                    </div>
                                  );
                                }
                                else {
                                  return (
                                    <div key={ index } className="tab-pane fade " id={ `v-pills-${ item.maCumRap }` } role="tabpanel" aria-labelledby={ `v-pills-${ item.maCumRap }-tab` }>
                                      <p>{ item.tenCumRap }</p>
                                    </div>
                                  );
                                }
                              } ) }

                            </div>
                          </div>
                        </div>
                        {/* // */ }
                      </div>
                    );
                  }
                } ) }
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ( state ) => ( {
  cinemaSystems: state.cinemaReducers.fetchCinemaSystemsReducers.data,
  cinemaClusters: state.cinemaReducers.fetchCinemaClustersReducers.data
} );

const mapDispatchToProps = ( dispatch ) => ( {
  fetchCinemaSystems: () => dispatch( actFetchCinemaSystems() ),
  fetchCinemaClusters: ( maHeThongRap ) => dispatch( actFetchCinemaClusters( maHeThongRap ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( CinemaSystems );

