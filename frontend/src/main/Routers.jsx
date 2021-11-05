import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../components/dashboard/dashboard'
import BillingCycles from '../components/billingCycles/billingCycles'

export default function Routers(props){
    return(
        <Router history={hashHistory}>
            <Route path='/' component={Dashboard}/>
            <Route path='/billingCycles' component={BillingCycles}/>
            <Redirect from='*' to='/'/>
        </Router>
    )
}