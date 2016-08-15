import React from 'react';
import { Grid } from 'react-bootstrap';
import request from 'superagent';
import SearchResults from '../components/SearchResults';

export default class SearchPage extends React.Component {

    constructor() {
        super();
        this.state = {
            jobs: [],
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
        request
            .get('/jobs')
            .query({
                q: query
            })
            .end(function (err, res) {
                if (res.ok) {
                    this.setState({ jobs: res.body.jobs });
                }
            }.bind(this));
    }

    render() {

        return (
            <Grid>
                <h3>Search Results: {this.state.query}</h3>
                <hr />
                <SearchResults jobs={this.state.jobs} />
            </Grid>
        );
    }
}

SearchPage.contextTypes = {
    user: React.PropTypes.object,
    hookChangeSearchResults: React.PropTypes.func
};