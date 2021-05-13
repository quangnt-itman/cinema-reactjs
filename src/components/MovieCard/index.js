import React, { Component } from 'react';
import { connect } from 'react-redux';

export class MovieCard extends Component {


  render () {
    return (
      <>
        {/* <h3>MovieCard</h3> */ }
        <div className="movie-card" >
          <div className="card" >
            <aside>
              <div>
                <a
                  href="https://www.youtube.com/watch?v=Ws-QlpSltr8"
                  // type="button"
                  className="play "
                  data-fancybox="video"
                  data-caption="Trailler"
                // data-toggle="modal"
                // data-target="#movie-card-modal"
                >
                  <i className="material-icons" >play_arrow</i>
                </a>
                <a href="#" className="read-more">read more</a>
              </div>
            </aside>
            <div className="card-img">
              <img src="./assets/images/movie-1.jpg" className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <p className="card-text">movie name</p>
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

