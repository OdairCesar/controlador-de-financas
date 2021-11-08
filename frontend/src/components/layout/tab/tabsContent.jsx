import React from 'react'

export default function TabsContent(props){
    return(
        <div className="tab-content">
            {props.children}
        </div>
    )
}