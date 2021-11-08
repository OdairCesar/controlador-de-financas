import React, { Component } from 'react'
import ContentHeader from '../../template/contentHeader'
import Content from '../../template/content'

class BillingCycles extends Component{
    render(){
        return(
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    Ciclo de Pagamento
                </Content>
            </div>
        )
    }
}
export default BillingCycles