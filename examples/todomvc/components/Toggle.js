import React, { Component, PropTypes } from 'react'

export default class Toggle extends Component {
  render() {
    return (
      <input className="toggle-all"
             type="checkbox"
             checked={this.props.completedCount === this.props.todos.length}
             onChange={this.props.completeAll} />
    )
  }
}
