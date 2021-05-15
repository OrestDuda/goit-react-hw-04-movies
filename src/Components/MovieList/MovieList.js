import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MovieList.module.css";

const MovieList = ({ list, historyLocation }) => {
  return (
    <ul className={styles.list}>
      {list.map((movie) => {
        if (movie.title) {
          return (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: historyLocation,
                  },
                }}
              >
                {movie.title}
              </Link>
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};
MovieList.propTypes = {
  historyLocation: PropTypes.object,
  movieData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

export default MovieList;
