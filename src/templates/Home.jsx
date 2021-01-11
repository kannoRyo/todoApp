import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {signOut} from '../reducks/users/operations'

const Home = ()=>{
	const selector = useSelector(state => state)
	const dispatch = useDispatch()

	console.log(selector.users)

	return (
	<div>
		<h2>This is Home</h2>
		<h3>ユーザーネーム:{selector.users.username}</h3>
		<h3>id:{selector.users.uid}</h3>

		<Button variant="contained" color="secondary" onClick={ ()=> dispatch(signOut())}>
			ログアウトする
		</Button>
	</div>
)
}

export default Home