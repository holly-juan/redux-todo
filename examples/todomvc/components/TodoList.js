import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../reducers/todos'

@connect(
    state => ({}),
    dispatch => ({
    ...bindActionCreators({
    ...TodoActions
  }, dispatch)
})
)
export default class TodoList extends Component {
  completeTodo(id){
    const {completeTodo} = this.props;
    completeTodo(id);
  }
  handleEdit(id,text) {
    const {editTodo} = this.props;
    editTodo(id,text);
  }
  deleteTodo(id){
    const {deleteTodo} = this.props;
    deleteTodo(id);
  }
  render() {
    var that = this;
    var todolist = this.props.todos.map(function(todo){
       return (
         <li key={todo.id}>
             <div className="view">
                 <input className="toggle"
                        type="checkbox"
                        checked={todo.completed}
                        onClick={() => that.completeTodo(todo.id)} />

                 <input style={{fontSize: "24px",
                                            padding: "16px 16px 16px 60px",
                                            border: "none",
                                            background: "rgba(0, 0, 0, 0.003)",
                                            boxShadow: "inset 0 -2px 1px rgba(0,0,0,0.03)"}}
                        type="text"
                        defaultValue={todo.text}
                        onChange={() => that.handleEdit(todo.id,todo.text)}
                   />
                 <button className="destroy"
                         onClick={() => that.deleteTodo(todo.id)} />
             </div>
         </li>
       )
    });
    return (
      <ul className="todo-list">
          {todolist}
      </ul>
      );
  }
}

