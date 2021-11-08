import { combineReducers } from 'redux'
import DashboardReducer from '../components/pages/dashboard/dashboardReducer'
import TabReducer from '../components/layout/tab/tabReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer
})

export default rootReducer