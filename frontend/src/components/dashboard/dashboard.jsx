import React from 'react'
import Content from '../layout/content'
import ContentHeader from '../layout/contentHeader'


export default function Dashboard(props){
    return(
        <div>
            <ContentHeader title='Dashboard' small='Versão 1'/>
            <Content>
                Dashboard
            </Content>
        </div>
    )
}