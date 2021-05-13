import React, { Component } from 'react';

export class Carousel extends Component {
  render () {
    return (
      <>
        <div id="carousel-home" className="carousel carousel-fade slide " data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-home" data-slide-to={ 0 } className="active" />
            <li data-target="#carousel-home" data-slide-to={ 1 } />
            <li data-target="#carousel-home" data-slide-to={ 2 } />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./assets/img/banner1.jpg" className="d-block w-100" alt="banner1" />
            </div>
            <div className="carousel-item">
              <img src="./assets/img/banner2.jpg" className="d-block w-100" alt="banner2" />
            </div>
            <div className="carousel-item">
              <img src="./assets/img/banner3.jpg" className="d-block w-100" alt="banner3" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carousel-home" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel-home" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </>
    );
  }
}

export default Carousel;
