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
            <div className="card">
                <div className="card-header">
                    Добавить
                </div>
                <div className="form-group">
                    <label for="title">
                        Название
                    </label>
                    <input className="form-control" onChange={this.updateSubmission.bind(this)} id="title" type="text" placeholder="Название"/>
                </div>
                <div className="form-group">
                    <label for="teaser">
                Представление
                    </label>
                    <input className="form-control" onChange={this.updateSubmission.bind(this)} id="teaser" type="text" placeholder="Представление"/>
                </div>
                <div className="form-group">
                    <label for="body">
                        Содержание
                    </label>

                    <textarea className="form-control" onChange={this.updateSubmission.bind(this)} id="body" type="text"></textarea><br/>
                </div>
                <button className="btn btn-block btn-outline-primary" onClick={this.submitSubmission.bind(this)}>Опубликовать</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default withRouter(connect(mapStateToProps)(NewsSubmit))