import React from 'react'
import Content from '../../template/content'
import ContentHeader from '../../template/contentHeader'
import ValueBox from '../../widget/valueBox'
import Row from '../../layout/row'


export default function Dashboard(props){
    return(
        <div>
            <ContentHeader 
                title='Dashboard' 
                small='Versão 1'/>
            <Content>
                <Row>
                    <ValueBox 
                        cols='12 4' 
                        color='green' 
                        icon='bank' 
                        value='R$ 10' 
                        text='Total de Creditos' />
                    <ValueBox 
                        cols='12 4' 
                        color='red' 
                        icon='credit-card' 
                        value='R$ 10' 
                        text='Total de Débitos' />
                    <ValueBox 
                        cols='12 4' 
                        color='blue' 
                        icon='money' 
                        value='R$ 10' 
                        text='Valor Consolidado' />
                </Row>
            </Content>
        </div>
    )
}