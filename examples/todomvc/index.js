import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import 'todomvc-app-css/index.css'

//import {changeEdit} from '../todomvc/reducers/todos'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

//let unsubscribe = store.subscribe(() =>
//    console.log(store.getState())
//)
//store.dispatch(changeEdit(1));
//unsubscribe();
