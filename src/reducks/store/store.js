import { 
    applyMiddleware, 
    combineReducers, 
    createStore as reduxCreateStore
 } from "redux";

 import {connectRouter, routerMiddleware} from 'connected-react-router'

 import thunk from 'redux-thunk'

 import{usersReducers} from '../users/reducers'
 import{todosReducers} from '../todos/reducers'

 export function createStore(history){
     return reduxCreateStore(
         combineReducers({
            router: connectRouter(history),
            users: usersReducers,
            todos: todosReducers
         }),    
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
     )
 }