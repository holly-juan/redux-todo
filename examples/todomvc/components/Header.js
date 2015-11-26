import React, { PropTypes, Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" id="newdata"
               type="text"
               placeholder="What needs to be done?"
               autoFocus="true"
               defaultValue=""
               onKeyDown={this.props.handleSubmit} />
      </header>
    );
  }
}
