import React, {
    Component
} from 'react';
import Movie from './Movies';
import { movies } from './movies.json';

class CreationMovie extends Component {
    constructor() {
        super();
        this.state = {
            movies
        }
    };

    render() {
        const todos = this.state.movies.map((todo, i) => {
            return (
                <div key={i} className="col-md-4">
                    <div className="card">
                        <div className="card-header d-flex">
                            <h4>{todo.title}</h4>
                            <div onClick={this.props.onDeleteMovie} className="ml-4" id="delete">x</div>
                        </div>
                        <div className="card-body">
                            <p>Duration: {todo.duration}</p>
                            <p>Year: {todo.year}</p>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div className="container" >
                <div className="row">
                    {todos}
                </div>
            </div>
        );
    }
}

export default CreationMovie