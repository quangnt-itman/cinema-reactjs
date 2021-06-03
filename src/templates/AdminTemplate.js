
import React from 'react';

import { Redirect, Route } from 'react-router';
import { Sidebar } from '../components/Sidebar';

function AdminLayout ( props ) {
  return (
    <div className="wrapper">
      <Sidebar />
      {props.children }
    </div>
  );
}


export default function AdminTemplate ( { Component, ...props } ) {
  return (
    <Route
      { ...props }
      render={
        ( propsComponent ) => {
          if ( localStorage.getItem( 'decode' ) && JSON.parse( localStorage.getItem( 'decode' ) ).maLoaiNguoiDung === "QuanTri" ) {
            return (
              <AdminLayout>
                <Component { ...propsComponent } />
              </AdminLayout>
            );
          } else {
            return <Redirect to="/auth-admin" />;
          }
        }
      }
    />
  );
}

