import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import { fetchNewsItem} from "../../actions/actions";

class NewsItemDetail extends Component {
    render(){
        return(
            <div>
                <div className="card-title h4">{this.props.data.title}</div>
                <div className="card-text">{this.props.data.body}</div>
            </div>
        )
    }

}

NewsItemDetail.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })
}

export default NewsItemDetail