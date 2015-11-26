/**
 * Created by liuhuijuan on 15/11/23.
 */
import React, { PropTypes, Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
            <span className="todo-count">
                <strong>{this.props.activeCount}</strong> items left
            </span>
        <button className="clear-completed" onClick={this.props.onClearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
