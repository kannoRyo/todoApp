import React from 'react'
import {Route, Switch} from 'react-router-dom';
import {
    Home,
    SignIn ,
    SignUp
} from './templates/index'

const Router = ()=>{

	return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signin" component={SignIn}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
        </Switch>
)
}

export default Router