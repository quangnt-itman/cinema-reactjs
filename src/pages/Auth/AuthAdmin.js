import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { actDangNhapAdmin } from '../../services/Auth/actions';

export const AuthAdmin = ( props ) => {
  // console.log( props );
  const [ hoTen, setHoTen ] = useState( '' );
  const [ matKhau, setMatKhau ] = useState( '' );

  const error = useSelector( state => {
    // console.log( state );
    return state.authReducers.error;
  } );

  const renderNotice = () => {
    if ( error ) {
      return ( <div className="alert alert-danger">{ error.response.data }</div> );
    }
  };

  const dispatch = useDispatch();
  const dispatchDangNhapAdmin = ( user, history ) => dispatch( actDangNhapAdmin( user, history ) );

  const handleChange = ( event ) => {
    const { name, value } = event.target;
    if ( name === 'hoTen' ) {
      setHoTen( value );
    }
    if ( name === 'matKhau' ) {
      setMatKhau( value );
    }
  };

  const handleLogin = ( event ) => {
    event.preventDefault();
    const user = {
      taiKhoan: hoTen,
      matKhau
    };
    dispatchDangNhapAdmin( user, props.history );
  };


  return (
    <div className="container">
      <h1 className="text-center text-success font-weight-bold">Dang Nhap Admin</h1>
      <div className="row">
        <div className="col-sm-6 mx-auto">
          { renderNotice() }
          <form onSubmit={ handleLogin }>
            <div className="form-group">
              <label>Ho Ten</label>
              <input
                type="text"
                className="form-control"
                name="hoTen"
                value={ hoTen }
                onChange={ handleChange }
              />
            </div>
            <div className="form-group">
              <label>Mat Khau</label>
              <input
                type="text"
                className="form-control"
                name="matKhau"
                value={ matKhau }
                onChange={ handleChange }
              />
            </div>
            <button type="submit" className="btn btn-success">
              Login
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ( state ) => ( {

} );

const mapDispatchToProps = {

};

export default connect( mapStateToProps, mapDispatchToProps )( AuthAdmin );

