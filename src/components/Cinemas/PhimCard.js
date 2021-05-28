import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PhimCard extends Component {
  render () {
    let { phim } = this.props;
    return (
      <div>
        {
          <div className="card mb-3" style={ { maxWidth: 540 } }>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={ phim.hinhAnh } className="card-img" alt={ phim.maPhim } />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{ phim.tenPhim }</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}


const mapStateToProps = ( state ) => ( {
} );

const mapDispatchToProps = {

};

export default connect( mapStateToProps, mapDispatchToProps )( PhimCard );
