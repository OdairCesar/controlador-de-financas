import React from 'react'
import { HashRouter } from 'react-router-dom'

import '../components/template/dependencies'
import Header from '../components/template/header'
import SideBar from '../components/template/sideBar'
import Footer from '../components/template/footer'
import Messages from '../components/template/messages'

import Routers from './Routers'

export default function App(props){
    return(
        <HashRouter>
            <div className='wrapper'>
                <Header />
                <SideBar/>
                <Routers />
                <Footer />
                <Messages />
            </div>
        </HashRouter>
    )
}