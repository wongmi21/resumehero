import React from 'react';
import { Grid } from 'react-bootstrap';
import SearchResults from '../components/SearchResults';

export default class JobsPage extends React.Component {

    constructor() {
        super();
        this.state = {
            jobs: {},
            query: ""
        }
    }

    componentWillMount() {
        if(this.context.user === undefined) {
            this.render = function () {
                return null;
            };
        }
    }

    componentDidMount() {
        this.context.hookChangeSearchResults(this.changeSearchResults.bind(this));
    }

    changeSearchResults(query) {
        this.setState({ query: query });
    }

    render() {
        return (
            <Grid>
                <h3>Search Results: {this.state.query}</h3>
                <hr />
                <SearchResults />
            </Grid>
        );
    }
}

JobsPage.contextTypes = {
    user: React.PropTypes.object,
    hookChangeSearchResults: React.PropTypes.func
};