import { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import API from "../../Components/Services/API";
import Cast from "../../Components/Cast/Cast";
import Reviews from "../../Components/Reviews/Reviews";
import styles from "./MovieDetailsPage.module.css";
import PropTypes from "prop-types";

class MovieDetailsPage extends Component {
  state = {
    movieID: null,
    title: "",
    poster: "",
    genres: [],
    overview: "",
    votes: null,
  };

  componentDidMount() {
    const movieID = this.props.match.params.movieId;
    API.getMovieById(movieID).then((response) =>
      this.setState({
        movieID: movieID,
        title: response.title,
        poster: `https://www.themoviedb.org/t/p/w220_and_h330_face/${response.poster_path}`,
        genres: response.genres.map((genre) => genre.name + ", "),
        overview: response.overview,
        votes: response.vote_average,
      })
    );
  }
  handleGoBack = () => {
    if (this?.props?.location?.state?.from) {
      this.props.history.push(this.props.location.state.from);
    } else {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Back
        </button>
        <div className={styles.container}>
          <div>
            <img src={this.state.poster} alt={this.state.title} />
          </div>
          <div className={styles.movie_info}>
            <h1>{this.state.title}</h1>
            <p>User Votes: {this.state.votes}</p>
            <h2>Overview</h2>
            <p>{this.state.overview}</p>
            <h2>Genres</h2>
            <p>{this.state.genres}</p>
          </div>
        </div>
        <div>
          <p>Additional Information</p>
          <ul className={styles.navigation}>
            <li>
              <NavLink to={this.props.match.url + "/cast"}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={this.props.match.url + "/reviews"}>Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Route
          path={this.props.match.path + "/cast"}
          render={(props) => <Cast {...props} />}
        />

        <Route
          path={this.props.match.path + "/reviews"}
          render={(props) => <Reviews {...props} />}
        />
      </>
    );
  }
}
MovieDetailsPage.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    params: PropTypes.exact({
      movieId: PropTypes.string.isRequired,
    }),
  }),
};
export default MovieDetailsPage;
