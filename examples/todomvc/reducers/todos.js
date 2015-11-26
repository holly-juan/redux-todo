const ADD_TODO = 'todo/ADD_TODO';
const DELETE_TODO = 'todo/DELETE_TODO';
const EDIT_TODO = 'todo/EDIT_TODO';
const COMPLETE_TODO = 'todo/COMPLETE_TODO';
const COMPLETE_ALL = 'todo/COMPLETE_ALL';
const CLEAR_COMPLETED = 'todo/CLEAR_COMPLETED';
//const CHANGE_EDIT = 'todo/CLEAR_COMPLETED';

const initialState = [{
  text: 'hello world',
  completed: false,
  id: 0,
  //editing:false
}];

export default function todos(state = initialState, action) {
  switch (action.type) {
      case ADD_TODO:
        return [{
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text,
          //editing:false
        }, ...state];

      case DELETE_TODO:
        return state.filter(todo =>
          todo.id !== action.id
        );
      //case CHANGE_EDIT:
      //  return state.map(todo =>
      //      todo.id === action.id ?
      //        Object.assign({}, todo, { editing: !todo.editing }) :
      //        todo
      //  );

      case EDIT_TODO:
        return state.map(todo =>
          todo.id === action.id ?
            Object.assign({}, todo, { text: action.text }) :
            todo
        );

      case COMPLETE_TODO:
        return state.map(todo =>
          todo.id === action.id ?
            Object.assign({}, todo, { completed: !todo.completed }) :
            todo
        );
      case COMPLETE_ALL:
        const areAllMarked = state.every(todo => todo.completed);
        return state.map(todo => Object.assign({}, todo, {
          completed: !areAllMarked
        }));
      case CLEAR_COMPLETED:
        return state.filter(todo => todo.completed === false);

      default:
        return state;
      }
}

export function addTodo(text) {
  return {
      type: ADD_TODO,
      text
  }
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id }
}

export function editTodo(id, text) {
  return { type: EDIT_TODO, id, text }
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id }
}

export function completeAll() {
  return { type: COMPLETE_ALL }
}

export function clearCompleted() {
  return { type: CLEAR_COMPLETED }
}
//export function changeEdit(id) {
//    return { type: CHANGE_EDIT, id }
//}

