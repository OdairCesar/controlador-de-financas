import '../components/layout/dependencies'
import Header from '../components/layout/header'
import SideBar from '../components/layout/sideBar'
import React from 'react'
import Routers from './Routers'

export default function App(props){
    return(
        <div className='wrapper'>
            <Header />
            <SideBar/>
            <div className='content-wrapper'>
                <Routers />
            </div>
        </div>
    )
}