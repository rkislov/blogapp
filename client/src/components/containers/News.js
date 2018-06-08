import React, { Component } from 'react'
import NewsItemListing from '../presentation/NewsItemListing'
import { connect } from 'react-redux'
import { fetchNews } from "../../actions/actions";

class News extends Component{
    componentDidMount(){
        var fakeNews = [{
            id: '1',
            title: 'Первая новость',
            teaser: 'Первая тестовая запись'
        },{
            id: '2',
            title: 'Вторая новость',
            teaser: 'Вторая тестовая запись'
        }]

        this.props.dispatch(fetchNews(fakeNews))
    }
    render() {
        const newsItems  = this.props.news.map((news, i) => {
            return(<li key={i}><NewsItemListing data = {news}/></li>)
        })
        return (
            <div>
            <h2>Список Новостей</h2>
                {(this.props.news.length>0)? <ul>{newsItems}</ul> : <div>Простите но пока нет новостей</div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        news: state.news.news
    }
}
export default connect(mapStateToProps)(News)