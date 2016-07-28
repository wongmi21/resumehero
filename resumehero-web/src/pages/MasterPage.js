import React from "react";
import Header from "./Header";

export default class MasterPage extends React.Component {
    render() {
        return (
            <div className='MasterPage'>
                <Header />
                { this.props.children }
            </div>
        );
    }
}