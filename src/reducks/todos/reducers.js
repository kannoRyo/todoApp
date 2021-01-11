import  initialState  from '../store/initialState'
import * as Actions from './action'

export const todosReducers = (state= initialState.todos, action)=>{
    switch(action.type){
            case Actions.FETCH_TODOS :
                return{
                    ...state,
                    list: [...action.payload]
                }
        default:
            return state 
    }
}