import React from 'react'

import '../components/template/dependencies'
import Header from '../components/template/header'
import SideBar from '../components/template/sideBar'
import Routers from './Routers'
import Footer from '../components/template/footer'
import Messages from '../components/template/messages'

export default function App(props){
    return(
        <div className='wrapper'>
            <Header />
            <SideBar/>
            <main className='content-wrapper'>
                <Routers />
            </main>
            <Footer />
            <Messages />
        </div>
    )
}