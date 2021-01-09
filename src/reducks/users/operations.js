import { signInAction, signUpAction} from './action'
import {auth, db, FirebaseTimestamp} from '../../firebase/index'
import{push} from 'connected-react-router'

const userRef = db.collection('users')

export const signUp = (username, email, password, confirmPassword) =>{
    return async (dispatch)=>{
        // Validation 
        if(username === "" || email === "" || password === "" || confirmPassword === "" ){
            window.alert('未入力項目がございます。')
            return false
        }
        if(password !== confirmPassword){
            window.alert('パスワードが一致しません。')
            return false
        }
    
        return auth.createUserWithEmailAndPassword(email, password)
            .then((result)=>{
                const user = result.user
                if(user){
                    const uid = user.uid
                    const timestamp = FirebaseTimestamp.now()

                    const userInitialData = {
                        uid: uid,
                        emal: email,
                        created_at: timestamp,
                        updated_at: timestamp,
                        username: username,
                        team: ''
                    }
                    
                    userRef.doc(uid).set(userInitialData)
                        .then(()=>{
                            dispatch(signUpAction(userInitialData))
                            dispatch(push('/'))
                        })
                }
            }).catch(()=>{
                console.log('fail')
            })
    }
}