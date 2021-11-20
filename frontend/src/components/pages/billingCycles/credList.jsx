import React, { Component } from 'react'
import { Field } from 'redux-form'

import Grid from '../../layout/grid'
import Input from '../../layout/input'

class CredList extends Component{

    renderRows(){
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field 
                        name={`credits[${index}].name`}
                        component={Input}
                        placeholder='Digite o nome'
                        readOnly={this.props.readOnly}
                        type='text'/>
                </td>
                <td>
                    <Field 
                        name={`credits[${index}].value`}
                        component={Input}
                        placeholder='Digite o valor'
                        readOnly={this.props.readOnly}
                        type='number'/>
                </td>
            </tr>
        ))
    }

    render(){
        return(
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}
export default CredList