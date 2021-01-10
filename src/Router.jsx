import React from 'react'
import {Route, Switch} from 'react-router-dom';
import {
    Home,
    SignIn ,
    SignUp
} from './templates/index'
import Auth from './Auth'

const Router = ()=>{

	return (
        <Switch>
            <Route exact path="/signin" component={SignIn}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <Auth>
                <Route exact path="/" component={Home}></Route>
            </Auth>
        </Switch>
)
}

export default Router