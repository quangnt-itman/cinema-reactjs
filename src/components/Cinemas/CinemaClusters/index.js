import React, { Component } from 'react';
import { connect } from 'react-redux';
import CinemaClustersTab from './CinemaClustersTab';
import CinemaClustersTabContent from './CinemaClustersTabContent';

export class CinemaClusters extends Component {
  render () {
    return (
      <div className="cinema-cluster">
        <div className="row">
          <div className="col-5">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <CinemaClustersTab />
            </div>
          </div>
          <div className="col-7">
            <div className="tab-content" id="v-pills-tabContent">
              <CinemaClustersTabContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {

} );

const mapDispatchToProps = {

};

export default connect( mapStateToProps, mapDispatchToProps )( CinemaClusters );

