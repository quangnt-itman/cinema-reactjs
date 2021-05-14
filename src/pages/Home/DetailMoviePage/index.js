import React, { Component } from "react";
import { actFetchMovies } from "./modules/actions";
import { connect } from "react-redux";

class DetailMoviePage extends Component {
  componentDidMount() {
    this.props.fetchDetail();
  }
  render() {
    // console.log(this.props.movies);
    let movie;
    if (this.props.movies) {
      let index = this.props.movies.findIndex(
        (item) => item.maPhim == this.props.match.params.id
      );
      movie = this.props.movies[index];
    }

    return (
      <div id="detail-movie">
        <h1>Detail Movie</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-4" id="moviephoto">
              <img src={movie && movie.hinhAnh} alt="" />
            </div>
            <div className="col-sm-8" id="moviedetail">
              <h2 id="tenphim">{movie && movie.tenPhim}</h2>
              <div className="mota">{movie && movie.moTa}</div>
              <div className="ngayKhoiChieu">
                {movie && movie.ngayKhoiChieu}
              </div>
              <div className="danhgia">{movie && movie.danhGia}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movieReducers.fetchMovieDetail.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetail: () => dispatch(actFetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
