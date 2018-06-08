import React, { Component } from 'react'
import NewsItemDetail from '../presentation/NewsItemDetail'
import { connect } from 'react-redux'
import { fetchNewsItem } from "../../actions/actions";

class NewsArticle extends Component {

    componentDidMount(){

        const fakeNewsItem = {
            id: '1',
            title: 'Первая новость',
            teaser: 'Первая тестовая запись',
            body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Animi aperiam debitis ducimus eligendi excepturi facere nostrum sunt veritatis voluptatem? 
             Fugiat molestias nesciunt numquam possimus tenetur. Commodi consequuntur cum enim nesciunt praesentium 
             repellat, rerum voluptatibus? Consectetur corporis cum dolorem eius harum illum molestias praesentium, 
             repellendus reprehenderit? Ab commodi doloremque expedita provident.`
        }

        this.props.dispatch(fetchNewsItem(fakeNewsItem))
    }

    render() {
        let  { newsItem }  = this.props

        return(
            <div>
                <h2>Новая история</h2>
                <ul>
                    {newsItem ? <NewsItemDetail data={newsItem}/> : null}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        newsItem: state.news.newsItem
    }
}

export default connect(mapStateToProps)(NewsArticle)