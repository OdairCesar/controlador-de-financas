import '../common/template/dependencies'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import React from 'react'

export default function App(props){
    return(
        <div className='wrapper'>
            <Header />
            <SideBar/>
        </div>
    )
}