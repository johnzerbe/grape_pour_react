import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            // query: '',
            // results: [],
        }
    }


    handleChange(string) {
        this.props.onSearchChange(string)
    }




    render() {
        return (
            <form>
                <input type="text" placeholder="search..." onChange={e => this.handleChange(e.target.value)} />
            </form>
            
        )
    }
}

export default SearchBar