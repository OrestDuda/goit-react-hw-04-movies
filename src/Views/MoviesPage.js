import { Component } from "react";
import queryString from "query-string";
import API from "../Components/Services/API";
import MovieList from "../Components/MovieList/MovieList";

const getQuery = (props) => queryString.parse(props.location.search).query;

class MoviesPage extends Component {
  state = {
    input: "",
    search: [],
  };

  handleChange = (e) => {
    this.setState({ input: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.input}`,
    });
    this.setState({ input: "" });
  };

  componentDidMount() {
    const query = getQuery(this.props);
    if (query) {
      API.getSearch(query).then((results) => {
        this.setState({ search: results });
      });
    }
  }

  componentDidUpdate(prevProps) {
    const prevQuery = getQuery(prevProps);
    const nextQuery = getQuery(this.props);
    if (prevQuery !== nextQuery) {
      API.getSearch(nextQuery).then((results) => {
        this.setState({ search: results });
      });
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.input}
          />
          <button type="submit">Search</button>
        </form>
        {!this.state.search ? null : (
          <MovieList
            list={this.state.search}
            historyLocation={this.props.location}
          />
        )}
      </>
    );
  }
}

export default MoviesPage;
