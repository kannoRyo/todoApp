import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getIsSignedIn } from './reducks/users/selector';
import {listenAuthState} from './reducks/users/operations'

const Auth = ({children})=>{
        const dispatch = useDispatch()
        const selecotor = useSelector(state=> state)
        const isSignedIn = getIsSignedIn(selecotor)
        
        useEffect(()=>{
                if(!isSignedIn){
                        dispatch(listenAuthState())
                }

        },[])

        if(!isSignedIn){
                return <></>
        }else{
                return children
        }
}

export default Auth