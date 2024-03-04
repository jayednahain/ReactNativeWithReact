import rootReducer from "./rootReducer";
import {  applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;