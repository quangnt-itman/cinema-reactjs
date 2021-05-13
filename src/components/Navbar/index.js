import React, { Component } from 'react';

export class Navbar extends Component {
  render () {
    return (
      <>
        <nav id="navbar-home" className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="./assets/img/logo.png" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              {/* <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#home-movies">Movies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#home-cinemas">Cinemas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#home-news">News</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button className="btn my-2 my-sm-0" type="submit">Sign in</button>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign up</button>
            </form>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

