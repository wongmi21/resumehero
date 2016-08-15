import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class SearchResult extends React.Component {

    render() {
        return (
            <Row>
                <Col md={8}>
                    <div>
                        <a target="_blank" href={this.props.result.url}><strong>{this.props.result.title}</strong></a>
                        <div>{this.props.result.company} - {this.props.result.location}</div>
                        <span>{this.props.result.snippet}</span>
                    </div>
                    <p/>
                </Col>
            </Row>
        );
    }
}