import React from 'react'

export default function Header(props){
    return(
        <header className="main-header">
            <a href="/#/" className="logo">
                <span className="logo-mini">
                    <b> M</b> F
                </span>
                <span className="logo-lg">
                    <i className="fa fa-money"></i>
                    <b> Minha</b> Finança
                </span>
            </a>
            <nav className="navbar navbar-static-top">
                <a href="/#/" className="sidebar-toggle" data-toggle="offcanvas"></a>
            </nav>
        </header>
    )
}