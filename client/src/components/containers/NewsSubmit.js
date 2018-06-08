import React, { Component } from 'react'
//import NewsItemDetail from '../presentation/NewsItemDetail'
import { connect } from 'react-redux'
import { submitNewStory } from "../../actions/actions";
import { withRouter } from 'react-router-dom'


class NewsSubmit extends Component{
    constructor(){
        super()

        this.state = {
            submission: {}
        }
    }
    componentDidMount(){

    }
    updateSubmission(e){
        const updateSubmission = Object.assign({}, this.state.submission)

        updateSubmission[e.target.id] = e.target.value
        this.setState({
            submission: updateSubmission
        })
    }
    submitSubmission(){
        this.props.dispatch(submitNewStory(this.state.submission))
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                Название <input onChange={this.updateSubmission.bind(this)} id="title" type="text" placeholder="Название"/><br/>
                Представление <input onChange={this.updateSubmission.bind(this)} id="teaser" type="text" placeholder="Представление"/><br/>
                Содержание<br/>
                <textarea onChange={this.updateSubmission.bind(this)} id="body" type="text"></textarea><br/>

                <button onClick={this.submitSubmission.bind(this)}>Опубликовать</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default withRouter(connect(mapStateToProps)(NewsSubmit))