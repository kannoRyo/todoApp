import  initialState  from '../store/initialState'
import * as Actions from './action'

export const usersReducers = (state= initialState.users, action)=>{
    switch(action.type){
        case Actions.SIGN_IN_ACTION:
            return{
                ...state,
                ...action.payload
            }
        case Actions.SIGN_UP_ACTION:
            return{
                ...action.payload
            }
        case Actions.SIGN_OUT_ACTION:
            return{
                ...action.payload
            }
        default:
            return state 
    }
}