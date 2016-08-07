import React, { Component, PropTypes } from 'react';
 
// Question component - represents a single Question item
export default class Question extends Component {
  render() {
    return (
      <li>{this.props.question.text}</li>
    );
  }
}
 
Question.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};