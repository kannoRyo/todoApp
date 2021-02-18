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
            <h2 className="auth-heading" >ログイン</h2>
            <div className="auth-input" >
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
            </div>
            <GreenButton 
                text={"ログインする"}
                onClick={()=> dispatch(signIn(email,password))}
            />
            <div className="module-spacer--small" />
            <p>
                サンプルアカウント <br/>
                mail: kannoryo@icloud.com <br/>
                pass: kanno926
            </p>
            <div className="module-spacer--small" />
            <h3 onClick={()=> dispatch(push("/signup"))}>アカウント作成はこちら</h3>
        </section>
)
}

export default SignUp