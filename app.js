import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Nav from './apps/Nav';
import Root from './apps/Root';
import Repos from './apps/Repos';
import About from './apps/About'
import './statics/app.css';

export default class App extends Component {

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Nav}>
                    <Route path="/root" component={Root}/>
                    <Route path="/repos" component={Repos}/>
                    <Route path="/about" component={About}/>
                </Route>
            </Router>
        );
    }
}