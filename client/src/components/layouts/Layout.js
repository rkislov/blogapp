import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Layout extends Component {
    render () {
        return (
            <div>
                <div>
                    <h1>Тестовый сайт - React & Redux</h1>
                </div>
                <div>
                    <ul>
                        <li><Link to={'/'}>Главная</Link></li>
                        <li><Link to={'/about'}>О сайте</Link></li>
                    </ul>
                </div>
                <div>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default Layout