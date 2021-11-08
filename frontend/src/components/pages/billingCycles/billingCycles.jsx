import React, { Component } from 'react'
import ContentHeader from '../../template/contentHeader'
import Content from '../../template/content'
import Tabs from '../../layout/tab/tabs'
import TabsHeader from '../../layout/tab/tabsHeader'
import TabsContent from '../../layout/tab/tabsContent'
import TabHeader from '../../layout/tab/tabHeader'

class BillingCycles extends Component{
    render(){
        return(
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList'/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
export default BillingCycles