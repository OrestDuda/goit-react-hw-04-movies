import { Component } from "react";
import API from "../Services/API";
import PropTypes from "prop-types";
class Reviews extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    API.getReviewsById(this.props.match.params.movieId).then((response) =>
      this.setState({ comments: response })
    );
  }

  render() {
    return (
      <>
        <ul>
          {this.state.comments.map((comment) => {
            return (
              <li key={comment.id}>
                <h3>{comment.author}</h3>
                <p>{comment.content}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
Reviews.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.exact({
      movieId: PropTypes.string.isRequired,
    }),
  }),
};
export default Reviews;
