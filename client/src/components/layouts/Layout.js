import React, { Component } from 'react'

class Layout extends Component {
    render () {
        return (
            <div>
                <div>
                    <h1>Тестовый сайт - React & Redux</h1>
                </div>
                <div>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default Layout