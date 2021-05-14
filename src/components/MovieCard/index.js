import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { slickConfigure } from '../../assets/js/libs-control';

export class MovieCard extends Component {

  render () {
    let { movie } = this.props;
    // console.log( movie );
    return (
      <>
        {/* <h3>MovieCard</h3> */ }
        <div className="movie-card" >
          <div className="card" >
            <aside>
              <div>
                <a
                  href={ movie.trailer }
                  // type="button"
                  className="play "
                  data-fancybox="video"
                  data-caption="Trailer"
                // data-toggle="modal"
                // data-target="#movie-card-modal"
                >
                  <i className="material-icons" >play_arrow</i>
                </a>
                <a href="#" className="read-more">read more</a>
              </div>
            </aside>
            <div className="card-img">
              <img src={ movie.hinhAnh } className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <p className="card-text">{ movie.tenPhim }</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ( state ) => ( {

} );

const mapDispatchToProps = {

};

export default connect( mapStateToProps, mapDispatchToProps )( MovieCard );

