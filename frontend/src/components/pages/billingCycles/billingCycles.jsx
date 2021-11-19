import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../../template/contentHeader'
import Content from '../../template/content'
import BillingCycleList from './billingCycleList'
import BillingCycleForm from './billingCycleForm'
import { create, update } from './billingCycleActions'

import Tabs from './tab/tabs'
import TabsHeader from './tab/tabsHeader'
import TabHeader from './tab/tabHeader'
import TabsContent from './tab/tabsContent'
import TabContent from './tab/tabContent'
import { selectTab, showTabs } from './tab/tabActions'

class BillingCycles extends Component{

    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

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
                            <TabContent id='tabList'>
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <BillingCycleForm onSubmit={ this.props.create }/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <BillingCycleForm onSubmit={ this.props.update }/>
                            </TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({
        selectTab, 
        showTabs, 
        create,
        update
    }, dispatch)
export default connect(null, mapDispatchToProps) (BillingCycles)