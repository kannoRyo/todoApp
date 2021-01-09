import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = ()=>{
	const selector = useSelector(state => state)


	return (
	<div>
		<h2>This is Home</h2>
		<h3>ユーザーネーム:{selector.users.username}</h3>
		<h3>id:{selector.users.uid}</h3>
	</div>
)
}

export default Home