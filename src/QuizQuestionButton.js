import React, { Component } from 'react'

class QuizQuestionButton extends Component{
    render(){
        return(<li>
                <button>{this.props.quiz_question.answer_options[0]}</button></li>)
    }
}