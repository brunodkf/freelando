import React from 'react'
import styled from '@emotion/styled'

const LabelEstilizada = styled.label`
        display: block;
        width: 100%;
        box-sizing: border-box;
        font-weight: 400;
        font-size: 20px;
        line-height: ${props => props.theme.espacamentos.m};
      
`
const InputEstilizado = styled.input`
        display: block;
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        margin-top: ${props => props.theme.espacamentos.xs};
        margin-bottom: ${props => props.theme.espacamentos.s};
        background: ${props => props.theme.cores.branco};
        border: 1px solid;
        border-color: ${props => props.theme.cores.neutras.a};
        border-radius: ${props => props.theme.espacamentos.s};
        font-weight: 400;
        font-size: 20px;
        line-height: ${props => props.theme.espacamentos.m};
`

export const CampoTexto = ({ label }) => {
    return (
        <LabelEstilizada>
            {label}
            <InputEstilizado type="text" />
        </LabelEstilizada>
    )
}
