import { combineReducers } from 'redux'
import DashboardReducer from '../components/pages/dashboard/dashboardReducer'
import TabReducer from '../components/pages/billingCycles/tab/tabReducer'
import BillingCycleReducer from '../components/pages/billingCycles/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducer