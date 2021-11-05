import React from 'react'
import Menu from './menu'

export default function sideBar(props){
    return(
        <aside className="main-sidebar">
            <section className="sidebar">
                <Menu></Menu>
            </section>
        </aside>
    )
}