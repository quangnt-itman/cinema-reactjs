import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BoxPhim extends Component {
  constructor ( props ) {
    super( props );

    this.state = {
      tenPhim: 'Phim'
    };
  }

  handlePhim = movie => {
    this.setState( { tenPhim: movie.tenPhim } );
  };

  render () {
    let { movies } = this.props;
    return (
      <div className="dropdown box-phim">
        <button className="btn button-transparent btn-block dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          { this.state.tenPhim }
        </button>
        <div className="dropdown-menu menu-phim" aria-labelledby="dropdownMenu2">
          {
            movies ? (
              movies.map( ( movie, index ) => ( <button key={ index } className="dropdown-item" type="button" onClick={ () => this.handlePhim( movie ) }>{ movie.tenPhim }</button> ) )
            ) :
              <button className="dropdown-item" type="button">khong co phim</button>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
  movies: state.movieReducers.fetchMoviesReducers.data
} );

const mapDispatchToProps = {

};

export default connect( mapStateToProps, mapDispatchToProps )( BoxPhim );

