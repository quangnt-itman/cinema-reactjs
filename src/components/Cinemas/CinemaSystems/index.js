import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchCinemaClusters } from '../CinemaClusters/modules/actions';
import CinemaSystemsTab  from './CinemaSystemsTab';
import { actFetchCinemaSystems } from './modules/actions';

export class CinemaSystems extends Component {
  componentDidMount () {
    this.props.fetchCinemaSystems();
  }
  render () {
    let { cinemaSystems,  } = this.props;

    return (
      <div className="cinema-systems">
        <div className="list-group" id="list-tab" role="tablist">
          {
            cinemaSystems && cinemaSystems.map( ( item, index ) => (
              <CinemaSystemsTab cinemaSystem={ item } key={ index } />
            )
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
  cinemaSystems: state.cinemaReducers.fetchCinemaSystemsReducers.data,
} );

const mapDispatchToProps = dispatch => ( {
  fetchCinemaSystems: () => dispatch( actFetchCinemaSystems() ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( CinemaSystems );
