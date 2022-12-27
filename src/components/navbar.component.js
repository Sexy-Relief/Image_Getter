import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-green bg-white navbar-expand-lg">
                <Link to="/" className="navbar-brand">Image Getter</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Search main</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/myimage" className="nav-link">My photo</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}