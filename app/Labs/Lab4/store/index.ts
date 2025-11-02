import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../ReduxExamples/HelloRedux";
import counterReducer from "../ReduxExamples/CounterRedux";
import addReducer  from "../ReduxExamples/AddRedux";
import todosReducer from "../ReduxExamples/todos/todosReducer";
const store = configureStore({
  reducer: { helloReducer,
    counterReducer,
      addReducer,
      todosReducer, }});
export default store;