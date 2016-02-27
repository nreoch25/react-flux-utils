import React from "react";
import { Link } from 'react-router';

export default class Index extends React.Component{

    render() {
        return (
            <nav>
                <Link to={`/`}>Index</Link> { " " }
                <Link to={`/arts`}>Arts</Link> { " " }
                <Link to={`/news`}>News</Link> { " " }
                <Link to={`/sports`}>Sports</Link> { " " }
            </nav>
        );
    }
}