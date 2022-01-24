import React from 'react'
import Grid from './grid'

export default function LabelAndInput(props){
    return(
        <Grid cols={props.cols}>
            <div className='form-group'>
                <label 
                    htmlFor={props.nome}>
                    {props.label}
                </label>
                <input 
                    {...props.input} 
                    className='form-control'
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                    type={props.type}/>
            </div>
        </Grid>
    )
}