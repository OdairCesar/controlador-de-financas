import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import Content from '../../template/content'
import ContentHeader from '../../template/contentHeader'
import ValueBox from '../../widget/valueBox'
import Row from '../../layout/row'


class Dashboard extends Component{

    componentWillMount(){
        this.props.getSummary()
    }
    
    render(){
        const { credit, debt } = this.props.summary
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
                            value={`R$ ${credit}`}
                            text='Total de Creditos' />
                        <ValueBox 
                            cols='12 4' 
                            color='red' 
                            icon='credit-card' 
                            value={`R$ ${debt}`} 
                            text='Total de Débitos' />
                        <ValueBox 
                            cols='12 4' 
                            color='blue' 
                            icon='money' 
                            value={`R$ ${credit - debt}`} 
                            text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state =>({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators( {getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard)