/**
 * Created by liuhuijuan on 15/11/23.
 */
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Toggle from '../components/Toggle'
import TodoList from '../components/TodoList'
import * as TodoActions from '../reducers/todos'

@connect(
    state => ({
    todos: state.todos
  }),
    dispatch => ({
    ...bindActionCreators({
    ...TodoActions
  }, dispatch)
})
)
export default class App extends Component {
  handleSubmit(e) {
    var text = e.target.value.trim();
    const {addTodo} = this.props;
    if (e.which === 13 && text!==0) {
      e.target.value='';
      addTodo(text);
    }
  }
  completeAll(){
    const {completeAll} = this.props;
    completeAll();
  }
  onClearCompleted(){
    const {clearCompleted} = this.props;
    clearCompleted();
  }

  render() {
    const { todos } = this.props;
    const completedCount = todos.reduce((count, todo) =>
        todo.completed ? count + 1 : count,
      0
    );
    const activeCount = todos.length - completedCount;
    return (
      <div>
          <Header handleSubmit={this.handleSubmit.bind(this)}/>
          <section className="main">
              <Toggle todos={todos} completedCount={completedCount}  completeAll={this.completeAll.bind(this)} />
              <TodoList todos={todos} />
          </section>
          <Footer activeCount={activeCount} onClearCompleted={this.onClearCompleted.bind(this)}/>
      </div>
    )
  }
}
