import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesForm from './components/MoviesForm';
import { movies } from './components/movies.json';
import CreationMovie from './components/CreationMovie';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies
    };
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
  };

  handleAddMovie(movie) {
    this.setState({
      movies: movies.push(movie)
    })
  }
  handleDeleteMovie(e) {
    const pos = e.target.indexOf;
    this.setState({
      movies: movies.splice(pos, 1)
    })
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header" >
          <img src={logo}
            className="App-logo"
            alt="logo" />
          <h1 className="App-title" > Welcome to React </h1>
        </header>
        <div className="App-intro" >
          <MoviesForm onAddMovie={this.handleAddMovie} />
          <CreationMovie onDeleteMovie={this.handleDeleteMovie} />
        </div>
      </div>
    );
  }

}

export default App;