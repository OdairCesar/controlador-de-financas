import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../components/pages/dashboard/dashboard'
import BillingCycles from '../components/pages/billingCycles/billingCycles'

export default function Routers(props){
    return(
        <Router history={hashHistory}>
            <Route path='/' component={Dashboard}/>
            <Route path='/billingCycles' component={BillingCycles}/>
            <Redirect from='*' to='/'/>
        </Router>
    )
}