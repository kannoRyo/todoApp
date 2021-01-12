import React, {useCallback, useState} from 'react'
import { useDispatch } from 'react-redux'
import {
    TextInput,
    GreenButton
} from '../components/Uikit/index'
import { signIn } from '../reducks/users/operations'
import {push} from 'connected-react-router'

const SignUp = ()=>{
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const inputEmail = useCallback((e)=>{
        setEmail(e.target.value)
    },[email])

    const inputPassword = useCallback((e)=>{
        setPassword(e.target.value)
	},[password])
	
	return (
        <section className="c-section-wrapin">
            <h2>ログイン</h2>
            <TextInput 
                fullWidth={true}
                label={"メールアドレス"}
                multiline={false}
                rows={1}
                type={"text"}
                value={email}
                onChange={inputEmail}
            />
            <TextInput 
                fullWidth={true}
                label={"パスワード"}
                multiline={false}
                rows={1}
                type={"text"}
                value={password}
                onChange={inputPassword}
            />
            <GreenButton 
                text={"ログインする"}
                onClick={()=> dispatch(signIn(email,password))}
            />
            <div className="module-spacer--small" />
            <h3 onClick={()=> dispatch(push("/signup"))}>アカウント作成はこちら</h3>
        </section>
)
}

export default SignUp