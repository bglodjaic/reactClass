import React, {Component} from 'react';
import dom from './search_bar.jsx';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onSearch = this.onSearch.bind(this);
    }

    render() {
        return dom(this);
    }

    onSearch(e) {
        const term = e.target.value;
        this.setState({term: term});
        this.props.onSearch(this.state.term);
    }
}
