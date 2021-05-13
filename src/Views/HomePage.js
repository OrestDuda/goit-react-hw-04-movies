import { Component } from "react";
import API from "../Components/Services/API";
import MovieList from "../Components/MovieList/MovieList";

class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    API.getTrending().then((result) => this.setState({ films: result }));
  }

  render() {
    return <MovieList list={this.state.films} />;
  }
}

export default HomePage;
