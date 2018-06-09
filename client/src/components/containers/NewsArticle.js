import React, { Component } from 'react'
import NewsItemDetail from '../presentation/NewsItemDetail'
import { connect } from 'react-redux'
import { fetchNewsItem } from "../../actions/actions";

class NewsArticle extends Component {

    componentDidMount(){

        this.props.dispatch(fetchNewsItem(this.props.match.params.id))
    }

    render() {
        let  { newsItem }  = this.props

        return(
            <div className="card-body">
                <div className="card-header h3">Новая история</div>
                <ul>
                    {!this.props.newsItemLoading ?  <NewsItemDetail data={newsItem}/> : <div>Загрузка.....</div>}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        newsItem: state.news.newsItem,
        newsItemLoading: state.news.newsItemLoading
    }
}

export default connect(mapStateToProps)(NewsArticle)