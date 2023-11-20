import { Component } from 'react';
import './SearchPanel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    setSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input
                value={this.state.term}
                onChange={this.setSearch}
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
            />
        )
    }
}

export default SearchPanel;
