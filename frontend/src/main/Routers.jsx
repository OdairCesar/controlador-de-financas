import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'

import Dashboard from '../components/pages/dashboard/dashboard'
import BillingCycle from '../components/pages/billingCycles/billingCycle'

export default function Routers(props){
    return(
        <div className='content-wrapper'>
            <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route path='/billingCycles' component={BillingCycle}/>
                <Redirect from='*' to='/' />
            </Switch>
        </div>
    )
}