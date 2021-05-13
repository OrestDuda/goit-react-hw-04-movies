import { Component } from "react";
import API from "../Services/API";
import styles from "./Cast.module.css";
import PropTypes from "prop-types";
import placeholder from "./placeholder.png";

class Cast extends Component {
  state = {
    characters: [],
  };
  componentDidMount() {
    API.getCastById(this.props.match.params.movieId).then((response) =>
      this.setState({ characters: response })
    );
  }

  render() {
    return (
      <>
        <ul className={styles.castList}>
          {this.state.characters.map((character) => {
            return (
              <li key={character.id}>
                {character.profile_path ? (
                  <img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${character.profile_path}`}
                    alt=""
                  />
                ) : (
                  <img
                    src={placeholder}
                    alt=""
                    className={styles.placeholder}
                  />
                )}
                <h4>{character.name}</h4>
                <h5 className={styles.roles}>Playing: {character.character}</h5>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
Cast.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.exact({
      movieId: PropTypes.string.isRequired,
    }),
  }),
};
export default Cast;
