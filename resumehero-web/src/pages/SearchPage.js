import React from 'react';
import { Grid, Pagination } from 'react-bootstrap';
import request from 'superagent';
import SearchResults from '../components/SearchResults';

export default class SearchPage extends React.Component {

    constructor() {
        super();
        this.state = {
            jobs: [],
            query: "",
            page: 1,
            totalResults: 0
        }
    }

    componentWillMount() {
        if (this.context.user === undefined) {
            this.render = function () {
                return null;
            };
        }
    }

    componentDidMount() {
        this.context.hookChangeSearchResults(this.changeSearchResults.bind(this));
        this.search();
    }

    changeSearchResults(query) {
        this.setState({query: query}, function() {
            this.setState({page: 1}, function() {
                this.search();
            });
        });
    }

    handlePageChange(e) {
        this.setState({page: e}, function() {
            this.search();
        });
    }

    search() {
        request
            .get('/jobs')
            .query({
                q: this.state.query,
                page: this.state.page
            })
            .end(function (err, res) {
                if (res.ok) {
                    this.setState({totalResults: res.body.totalResults});
                    this.setState({jobs: res.body.jobs}, function () {
                        scrollTo(0, 0);
                    });
                }
            }.bind(this));
    }

    render() {

        return (
            <Grid>
                <h3>Search Results: {this.state.query}</h3>
                <hr />
                <SearchResults jobs={this.state.jobs}/>
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    items={Math.floor(this.state.totalResults / 10)}
                    maxButtons={5}
                    activePage={this.state.page}
                    onSelect={this.handlePageChange.bind(this)} />
            </Grid>
        );
    }
}

SearchPage.contextTypes = {
    user: React.PropTypes.object,
    hookChangeSearchResults: React.PropTypes.func
};