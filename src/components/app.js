import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio/portfolio-container';

export default class App extends Component {
    render() {
        return ( <
            div className = 'app' >
            <h1> React Portfolio by @allharuty </h1>
            <h2> For DevCamp FullStack Bootcamp </h2>
            <div class="my_date">
            <h3> This portfolio has been created: </h3>{moment("20240702", "YYYYMMDD").fromNow()}
            </div>
            <PortfolioContainer />
            </div>
        );
    }
}