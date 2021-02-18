import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {signOut} from '../reducks/users/operations'
import {GreenButton} from '../components/Uikit/index'
import {push} from 'connected-react-router'

const Home = ()=>{
	const selector = useSelector(state => state)
	const dispatch = useDispatch()

	console.log(selector.users)

	return (
	<div>	
		<div className="module-spacer--small"/>
		<div className="home-heading" >
			<h2>This is Home</h2>
			<h3>ユーザーネーム:{selector.users.username}</h3>
			<h3>id:{selector.users.uid}</h3>
		</div>
		<div className="module-spacer--small"/>
		<div className="center" >
			<GreenButton
				text={"MyToDoを見る"}
				onClick={()=> dispatch(push('/mytodos'))}
			/>
			<div className="module-spacer--small"/>
			<Button variant="contained" color="secondary" onClick={ ()=> dispatch(signOut())}>
				ログアウトする
			</Button>
		</div>
	</div>
)
}

export default Home