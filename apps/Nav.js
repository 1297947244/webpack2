import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
    render() {
        return (
            <div className="container">
                <ul>
                    <li><Link to="/root" activeClassName="active">首页</Link></li>
                    <li><Link to="/repos" activeClassName="active">核心产品</Link></li>
                    <li><Link to="/about" activeClassName="active">关于我们</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}