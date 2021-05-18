import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchCinemaClusters } from './modules/actions';

export class CinemaClusters extends Component {
  componentDidMount () {
    this.props.fetchCinemaClusters( this.props.cinemaSystem.maHeThongRap );
  }

  // componentWillReceiveProps(nextProps, nextContext){
  //   this.props.fetchCinemaClusters( this.props.cinemaSystem.maHeThongRap );
  // }

  render () {
    console.log( this.props.cinemaSystem );
    let { cinemaClusters } = this.props;
    return (
      <>

        <div className="cinemaClusters">
          <div className="row">
            <div className="col-sm-3">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
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
                    <a className="nav-link" key={ index } id={ `v-pills-${ item.maCumRap }-tab` } data-toggle="pill" href={ `#v-pills-${ item.maCumRap }` } role="tab" aria-controls={ `v-pills-${ item.maCumRap }` } aria-selected="true">
                      <p>{ item.tenCumRap }</p>
                    </a>
                  );
                } ) }
              </div>
            </div>
            <div className="col-sm-9">
              <div className="tab-content" id="v-pills-tabContent">
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
                    <div key={ index } className="tab-pane fade " id={ `v-pills-${ item.maCumRap }` } role="tabpanel" aria-labelledby={ `v-pills-${ item.maCumRap }-tab` }>
                      <p>{ item.tenCumRap }</p>
                    </div>
                  );
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
  cinemaClusters: state.cinemaReducers.fetchCinemaClustersReducers.data,
} );

const mapDispatchToProps = dispatch => ( {
  fetchCinemaClusters: ( maHeThongRap ) => dispatch( actFetchCinemaClusters( maHeThongRap ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( CinemaClusters );
//

// !


export class CinemaSystems extends Component {
  componentDidMount () {
    this.props.fetchCinemaSystems();
  }

  render () {
    console.log( this );
    let { cinemaSystems } = this.props;
    return (
      <>
        <div className="container" id="cinemaSystems">
          <div className="row">
            <div className="col-1">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                { cinemaSystems && cinemaSystems.map( ( item, index ) => {
                  // if ( index === 0 ) {
                  //   return (
                  //     <a className="nav-link active" key={ index } id={ `v-pills-${ item.maHeThongRap }-tab` } data-toggle="pill" href={ `#v-pills-${ item.maHeThongRap }` } role="tab" aria-controls={ `v-pills-${ item.maHeThongRap }` } aria-selected="true">
                  //       <img src={ item.logo } width="50px" height="50px" alt={ item.biDanh } />
                  //     </a>
                  //   );
                  // }
                  // else {
                  //   return (
                  //     <a className="nav-link " key={ index } id={ `v-pills-${ item.maHeThongRap }-tab` } data-toggle="pill" href={ `#v-pills-${ item.maHeThongRap }` } role="tab" aria-controls={ `v-pills-${ item.maHeThongRap }` } aria-selected="true">
                  //       <img src={ item.logo } width="50px" height="50px" alt={ item.biDanh } />
                  //     </a>
                  //   );
                  // }
                  return (
                    <a className="nav-link " key={ index } id={ `v-pills-${ item.maHeThongRap }-tab` } data-toggle="pill" href={ `#v-pills-${ item.maHeThongRap }` } role="tab" aria-controls={ `v-pills-${ item.maHeThongRap }` } aria-selected="true">
                      <img src={ item.logo } width="50px" height="50px" alt={ item.biDanh } />
                    </a>
                  );
                } ) }
              </div>
            </div>
            <div className="col-11">
              <div className="tab-content" id="v-pills-tabContent">
                { cinemaSystems && cinemaSystems.map( ( item, index ) => {
                  // if ( index === 0 ) {
                  //   return (
                  //     <div key={ index } className="tab-pane fade show active" id={ `v-pills-${ item.maHeThongRap }` } role="tabpanel" aria-labelledby={ `v-pills-${ item.maHeThongRap }-tab` }>
                  //       <CinemaClusters cinemaSystem={ item } />
                  //     </div>
                  //   );
                  // }
                  // else {
                  //   return (
                  //     <div key={ index } className="tab-pane fade " id={ `v-pills-${ item.maHeThongRap }` } role="tabpanel" aria-labelledby={ `v-pills-${ item.maHeThongRap }-tab` }>
                  //       <CinemaClusters cinemaSystem={ item } />
                  //     </div>
                  //   );
                  // }
                  return (
                    <div key={ index } className="tab-pane fade " id={ `v-pills-${ item.maHeThongRap }` } role="tabpanel" aria-labelledby={ `v-pills-${ item.maHeThongRap }-tab` }>
                      <CinemaClusters cinemaSystem={ item } />

                    </div>
                  );
                } ) }
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


//
                  // return (
                  //   <a className="nav-link " key={ index } id={ `v-pills-${ item.maHeThongRap }-tab` } data-toggle="pill" href={ `#v-pills-${ item.maHeThongRap }` } role="tab" aria-controls={ `v-pills-${ item.maHeThongRap }` } aria-selected="true" onClick={ () => this.props.fetchCinemaClusters( item.maHeThongRap ) }>
                  //     <img src={ item.logo } width="50px" height="50px" alt={ item.biDanh } />
                  //   </a>
                  // );

                  //

                  
                                   // return (
                  //   <div key={ index } className="tab-pane fade " id={ `v-pills-${ item.maHeThongRap }` } role="tabpanel" aria-labelledby={ `v-pills-${ item.maHeThongRap }-tab` }>
                  //     {item.tenHeThongRap}
                  //     {/* <CinemaClusters cinemaSystem={ item } /> */}
                  //   </div>
                  // );
