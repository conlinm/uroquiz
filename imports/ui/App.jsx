import React, { Component } from 'react';

import Question from './Question.jsx';

export default class App extends Component{
  getQuestions() {
    return [
      {_id: 1, text: 'Question 1'},
      {_id: 2, text: 'Question 2'},
      {_id: 3, text: 'Question 3'},
    ];
  }

  renderQuestions() {
    return this.getQuestions().map((question) => (
      <Question key={question._id} question={question} />
      ));
  }
  render() {
    return (
      <div className="container">
        <header>
          <h1>Questions</h1>
        </header>
 
        <ul>
          {this.renderQuestions()}
        </ul>
      </div>
    );
  }
}