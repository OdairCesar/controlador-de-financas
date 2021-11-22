import React from 'react'
import Grid from '../layout/grid'
import Row from '../layout/row'
import ValueBox from '../widget/valueBox'

export default function Summary({ credit, debt}){
    return(
        <Grid>
            <fieldset>
                <legend>Resumo</legend>
                <Row>
                    <ValueBox 
                        cols='12 4' 
                        color='green' 
                        icon='bank' 
                        value={`R$ ${credit.toFixed(2)}`}
                        text='Total de Creditos'/>
                    <ValueBox 
                        cols='12 4' 
                        color='red' 
                        icon='bank' 
                        value={`R$ ${debt.toFixed(2)}`}
                        text='Total de Debitos'/>
                    <ValueBox 
                        cols='12 4' 
                        color='blue' 
                        icon='bank' 
                        value={`R$ ${(credit - debt).toFixed(2)}`}
                        text='Valor Consolidado'/>
                </Row>
            </fieldset>
        </Grid>
    )
}

