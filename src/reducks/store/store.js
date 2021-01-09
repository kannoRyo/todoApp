import { 
    applyMiddleware, 
    combineReducers, 
    createStore as reduxCreateStore
 } from "redux";

 import {connectRouter, routerMiddleware} from 'connected-react-router'

 import thunk from 'redux-thunk'

 import{usersReducers} from '../users/reducers'

 export function createStore(history){
     return reduxCreateStore(
         combineReducers({
            router: connectRouter(history),
            users: usersReducers
         }),    
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
     )
 }