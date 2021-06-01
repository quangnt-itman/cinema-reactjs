import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actDangXuat } from '../../services/Auth/actions';

export class Navbar extends Component {
  render () {
    // console.log( this.props );
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

            {
              this.props.user ?
                ( <form className="form-inline my-2 my-lg-0">
                  <div className="d-flex align-items-center">
                    <small>{ this.props.user.hoTen }</small>
                    <span className="logined-user btn-outline-light border rounded-circle mx-sm-2">
                      <a href="#">
                        <img src="/logo192.png" width="30px" height="30px" alt="user" />
                      </a>
                    </span>
                    <button className="btn btn-outline-dark my-2 my-sm-0 mx-sm-1" type="button" onClick={ () => this.props.dangXuat() }> Dang Xuat</button>
                  </div>
                </form> ) :
                ( <form className="form-inline my-2 my-lg-0">
                  <NavLink to="/auth" className="btn my-2 my-sm-0" > Dang Nhap </NavLink>
                  <NavLink to="/" className="btn btn-outline-success my-2 my-sm-0" >Dang Ky</NavLink>
                </form>
                )
            }

          </div>
        </nav>
      </>
    );
  }
}

const mapStateToProps = ( state ) => ( {
  user: state.authReducers.user
} );

const mapDispatchToProps = dispatch => ( {
  dangXuat: () => dispatch( actDangXuat() )
} );

export default connect( mapStateToProps, mapDispatchToProps )( Navbar );

