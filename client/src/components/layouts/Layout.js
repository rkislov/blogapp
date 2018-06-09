import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Layout extends Component {
    render () {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg nabar-light bg-light">
                    <Link to={'/'}>Тестовый сайт - React & Redux</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to={'/'} class="nav-link">Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/about'} class="nav-link">О сайте</Link>
                            </li>
                        </ul>
                    </div>







                </nav>
                <div>
                { this.props.children }
                </div>
            </div>
        )
    }
}

export default Layout