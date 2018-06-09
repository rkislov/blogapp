import React, { Component } from 'react'
import NewsItemListing from '../presentation/NewsItemListing'
import { connect } from 'react-redux'
import { fetchNews } from "../../actions/actions";
import { Link } from 'react-router-dom'

class News extends Component{
    componentDidMount(){

        this.props.dispatch(fetchNews())
    }
    render() {
        const newsItems  = this.props.news.map((news, i) => {
            return(<li className="list-group-item" key={i}><NewsItemListing data = {news}/></li>)
        })
        return (
            <div className="card-body">
            <div className="card-title h4 align-content-center">Список Новостей</div>
                <div className="alert alert-light">
                <Link to={'/submit'} class="alert-link">Добавить</Link>
                </div>
                {(this.props.news.length>0)? <ul className="list-group-flush">{newsItems}</ul> : <div>Простите но пока нет новостей</div>}
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