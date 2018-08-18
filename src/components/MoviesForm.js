import React, {
    Component
} from 'react';
import Movie from './Movies';

class MoviesForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            year: '',
            duration: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddMovie(this.state)
    }
    handleInput(e) {
        e.preventDefault();
        const { id, value } = e.target;
        this.setState({
            [id]: value
        })
    }
    handleEditMovie(e) {
        e.preventDefault();
        const change = e.target.value;
        const edit = e.target.id;
        this.setState({
            [edit]: change
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="" >
                <input placeholder="title" id="title" type="text" onChange={this.handleInput}></input>
                <input placeholder="year" id="year" type="text" onChange={this.handleInput}></input>
                <input placeholder="duration" id="duration" type="text" onChange={this.handleInput}></input>
                <button>Save</button>
            </form>
        );
    }
}

export default MoviesForm