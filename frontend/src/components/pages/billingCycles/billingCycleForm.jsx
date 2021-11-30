import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingCycleActions'
import LabelAndInput from '../../layout/labelAndInput'
import ItemList from './itemList'
import Summary from '../../template/summary'

class BillingCycleForm extends Component{

    calculateSummary(){
        const sum = ( t, v ) => t + v
        return {
            sumOfCredits: this.props.credits.map(cred => +cred.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(deb => +deb.value || 0).reduce(sum)
        }
    }

    render(){
        const { 
            handleSubmit, 
            readOnly, 
            submitLabel, 
            submitClass,
            credits,
            debts
        } = this.props

        const {
            sumOfCredits,
            sumOfDebts
        } = this.calculateSummary()

        return(
            <form onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field 
                        name='name' 
                        component={LabelAndInput} 
                        label='Nome' 
                        cols='12 4'
                        placeholder='Informe o nome'
                        readOnly={readOnly}/>
                    <Field 
                        name='month' 
                        component={LabelAndInput} 
                        label='Mês'
                        cols='12 4'
                        placeholder='Informe o mês'
                        readOnly={readOnly}/>
                    <Field 
                        name='year' 
                        component={LabelAndInput} 
                        label='Ano'
                        cols='12 4'
                        placeholder='Informe o ano'
                        readOnly={readOnly}/>
                    <Summary 
                        credit={sumOfCredits}
                        debt={sumOfDebts}/>
                    <ItemList 
                        cols='12 6'
                        field='credits'
                        legends='Créditos'
                        list={credits}
                        readOnly={readOnly}/>
                    <ItemList 
                        cols='12 6'
                        field='debts'
                        legends='Débitos'
                        list={debts}
                        showStatus={true}
                        readOnly={readOnly}/>
                </div>
                <div className='box-footer'>
                    <button 
                        type='submit' 
                        className={`btn btn-${submitClass}`}>
                        {submitLabel}
                    </button>
                    <button 
                        type='button'
                        className='btn btn-secondary'
                        onClick={this.props.init}>
                        Cancelar
                    </button>
                </div>
            </form>
        )
    }
}
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({ credits: selector(state, 'credits'), debts: selector(state, 'debts')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)