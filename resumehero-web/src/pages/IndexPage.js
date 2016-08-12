import React from 'react';

export default class IndexPage extends React.Component {

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Welcome to ResumeHero!</h2>
                <hr />
                <div className="jumbotron">
                    <p>
                        <strong>We help job applicants apply to hundreds of jobs in just a few mouse clicks.</strong>
                    </p>
                    <p>Here are the list of job boards currently supported.</p>
                    <ul className="lead">
                        <li><a href="http://www.indeed.com">Indeed</a></li>
                    </ul>
                    <p>For support or business enquiries, please contact:</p>
                    <ul className="lead">
                        <li>Phone: +65 98413620</li>
                        <li>Email: mi.wong.mt@gmail.com</li>
                    </ul>
                </div>
            </div>
        );
    }
}