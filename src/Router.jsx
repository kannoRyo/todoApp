import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {
    Home,
    SignIn 
} from './templates/index'

const Router = ()=>{

	return (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signin" component={SignIn}></Route>
        </Switch>
    </BrowserRouter>
)
}

export default Router