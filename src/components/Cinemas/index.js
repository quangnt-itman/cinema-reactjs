import React, { Component } from 'react';
import { connect } from 'react-redux';
import CinemaSystemsTab from './CinemaSystems/CinemaSystemsTab';
import CinemaSystemsTabContent  from './CinemaSystems/CinemaSystemsTabContent';
import { actFetchCinemaSystems } from './CinemaSystems/modules/actions';

export class Cinemas extends Component {
  componentDidMount () {
    this.props.fetchCinemaSystems();
  }
  render () {
    console.log( this.props );
    let { cinemaSystems } = this.props;
    return (
      <div id="cinemas">
        <h3>cinemas</h3>

        <div className="cinema-systems container">
          <div className="row">
            <div className="col-3">
              <div className="nav flex-column nav-pills" id="v-pills-cinema-systems-tab" role="tablist" aria-orientation="vertical">
                {
                  cinemaSystems && cinemaSystems.map( ( item, index ) =>
                    <CinemaSystemsTab cinemaSystem={ item } key={ item.maHeThongRap } index={ index } />
                  )
                }
              </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-cinema-systems-tabContent">
                {
                  cinemaSystems && cinemaSystems.map( ( item, index ) =>
                    <CinemaSystemsTabContent cinemaSystem={ item } key={ item.maHeThongRap } index={ index } />
                  )
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
  cinemaSystems: state.cinemaReducers.fetchCinemaSystemsReducers.data,
  cinemaClusters: state.cinemaReducers.fetchCinemaClustersReducers.data
} );

const mapDispatchToProps = dispatch => ( {
  fetchCinemaSystems: () => dispatch( actFetchCinemaSystems() ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( Cinemas );

