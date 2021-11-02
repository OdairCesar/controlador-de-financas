import React from 'react'

export default function MenuItem(props){
    return(
        <li>
            <a href={props.path}>
                <i className={`fa fa-${props.icon}`}></i> {props.label}
            </a>
        </li>
    )
}