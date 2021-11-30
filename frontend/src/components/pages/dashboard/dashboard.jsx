import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import Content from '../../template/content'
import ContentHeader from '../../template/contentHeader'
import Summary from '../../template/summary'


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
                    <Summary credit={credit} debt={debt}/>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state =>({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators( {getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard)