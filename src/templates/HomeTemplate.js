import React from 'react';
import { Route } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomeLayout ( props ) {
  // console.log( props );
  return (
    <>
      <Header />
      {props.children }
      <Footer />
    </>
  );
}

export default function HomeTemplate ( { Component, ...props } ) {
  return (
    <Route
      { ...props }
      render={ propsComponent => ( <HomeLayout><Component { ...propsComponent } /></HomeLayout> ) }
    />
  );
}

