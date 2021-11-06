import '../components/template/dependencies'
import Header from '../components/template/header'
import SideBar from '../components/template/sideBar'
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