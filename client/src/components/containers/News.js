import React, { Component } from 'react'
import NewsItemListing from '../presentation/NewsItemListing'

class News extends Component{
    render() {
        return (
            <div>
            <h2>Список Новостей</h2>
            <ul>
                <li><NewsItemListing id="1" title="Первый пост" teaser="Стартовая новость"/></li>
                <li><NewsItemListing id="2" title="Второй пост" teaser="Стартовая новость 2"/></li>
            </ul>
            </div>
        )
    }
}

export default News