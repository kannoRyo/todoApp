import React, {useCallback, useState} from 'react'
import { useDispatch } from 'react-redux'
import {
    TextInput,
    GreenButton
} from '../components/Uikit/index'
import { signUp } from '../reducks/users/operations'

const SignUp = ()=>{
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const inputUsername = useCallback((e)=>{
        setUsername(e.target.value)
    },[username])

    const inputEmail = useCallback((e)=>{
        setEmail(e.target.value)
    },[email])

    const inputPassword = useCallback((e)=>{
        setPassword(e.target.value)
    },[password])

    const inputConfirmPassword = useCallback((e)=>{
        setConfirmPassword(e.target.value)
    },[confirmPassword])

	return (
	<section className="c-section-wrapin">
        <h2>アカウント登録</h2>
        <TextInput 
            fullWidth={true}
            label={"ユーザーネーム"}
            multiline={false}
            rows={1}
            type={"text"}
            value={username}
            onChange={inputUsername}
        />
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
        <TextInput 
            fullWidth={true}
            label={"パスワードをもう一度入力してください"}
            multiline={false}
            rows={1}
            type={"text"}
            value={confirmPassword}
            onChange={inputConfirmPassword}
        />
        <GreenButton 
            text={"アカウントを登録する"}
            onClick={()=> dispatch(signUp(username, email,password,confirmPassword))}
        />
    </section>
)
}

export default SignUp