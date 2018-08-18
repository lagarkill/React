import React, {
    Component
} from 'react';
import Movie from './Movies';
import { movies } from './movies.json';
import MoviesForm from './MoviesForm';

class SetMovies extends Component {
    constructor() {
        super();
        this.state = {
            movies
        }
        this.handleAddMovie = this.handleAddMovie.bind(this)
        this.handleSaveMovie = this.handleSaveMovie.bind(this)
    };

    handleAddMovie(movie) {
        this.setState({
            movies: [...this.state.movies, movie]
        })
    }

    handleSaveMovie(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div>
                <MoviesForm addMovie={this.handleAddMovie} saveMovie={this.handleSaveMovie} />
            </div>
        );
    }
}

export default SetMovies