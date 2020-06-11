import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/viewBooks">view All Books </NavLink></li>
                <li><NavLink to="/add-movie">Add Book</NavLink></li>
            </ul>
        )
    }
}

export class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Menu />
                {this.props.children}
                <p>Copyright 2020</p>
            </div>
        )
    }
}

