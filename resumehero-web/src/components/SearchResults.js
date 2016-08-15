import React from 'react';
import { Grid } from 'react-bootstrap';
import SearchResult from './SearchResult';

export default class SearchResults extends React.Component {

    render() {

        return (
           <Grid>
               {this.props.jobs.map(function(result) {
                   return <SearchResult result={result}/>;
               })}
           </Grid>
        );
    }
}