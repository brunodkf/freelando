import React from 'react'
import styled from '@emotion/styled'
import LogoBranco from '../../assets/Logobranco.svg'

const CabecalhoStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding:${props => props.theme.espacamentos.m};
    background-color: ${props => props.theme.cores.primarias.a};
    color: ${props => props.theme.cores.branco};
`

const CabecalhoContainer = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:${props => props.theme.espacamentos.m};
    color: ${props => props.theme.cores.branco};
`

export const Cabecalho = () => {
    return (
        <CabecalhoStyle>
            <CabecalhoContainer>
                <img src={LogoBranco} alt="Logo" />

                <p>Login</p>
            </CabecalhoContainer>
        </CabecalhoStyle>
    )
}
