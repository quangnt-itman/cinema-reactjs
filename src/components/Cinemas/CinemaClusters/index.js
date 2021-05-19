import React, { Component } from 'react';
import { connect } from 'react-redux';
import CinemaClustersTab from './CinemaClustersTab';
import CinemaClustersTabContent from './CinemaClustersTabContent';

export class CinemaClusters extends Component {
  render () {
    return (
      <div className="cinema-clusters tab-content" id="nav-tabContent">
        <div className="row">
          <div className="col-sm-5 cinema-cluster-col-left ">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <CinemaClustersTab />
            </div>
          </div>
          <div className="col-sm-7 border-left cinema-cluster-col-right">
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

