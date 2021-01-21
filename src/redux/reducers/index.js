import { combineReducers } from 'redux';
import counterReducer from './Counter';
import todolistReducer from './Todos';

const rootReducer = combineReducers({
  counter: counterReducer,
  todolist: todolistReducer,
});

export default rootReducer;
