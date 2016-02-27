import React from 'react';
import Nav from './global/Nav';
import ContentActions from '../actions/ContentActions';
import ContentStore from '../stores/ContentStore';

export default React.createClass({

    render() {
        return (
            <div>
                <h1>AppContainer</h1>
                <Nav />
                {this.props.children}
            </div>
        );
    }
});