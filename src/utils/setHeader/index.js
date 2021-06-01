import axios from "axios";

export const setHeaders = ( token ) => {
  if ( token ) {
    axios.defaults.headers.common[ 'token' ] = token;
  } else {
    delete axios.defaults.headers.common[ 'token' ];
  }
};
