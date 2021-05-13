import { Component } from "react";
import API from "../Components/Services/API";
import MovieList from "../Components/MovieList/MovieList";

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
    API.getSearch(this.state.input).then((response) => {
      this.setState({ search: response, input: " " });
    });
  };

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
        {!this.state.search ? null : <MovieList list={this.state.search} />}
      </>
    );
  }
}

export default MoviesPage;
