import React, { useState } from 'react'
import styled from '@emotion/styled'



const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    position: relative;

`

const BotaoEstilizado = styled.button`
    cursor: pointer;
    display: block;
    height: 40px;
    width: 100%;
    font-size: 18px;
    outline: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    border-radius: 18px;
    border-bottom-left-radius: ${props => props.estaAberta ? '0' : '18px'};
    border-bottom-right-radius: ${props => props.estaAberta ? '0' : '18px'};
    margin-top: ${props => props.theme.espacamentos.xs};
    padding: ${props => props.theme.espacamentos.s};
    background: ${props => props.theme.cores.branco};
    border: 1px solid ${props => props.theme.cores.neutras.a};
    &:focus {
        border-color: ${props => props.theme.cores.focus};
    }
`


export const ListaSuspensa = ({ label, opcoes }) => {

    const [estaAberta, alternarVisibilidade] = useState(false);
    const [opcaoFocada, setOpcaoFocada] = useState(null);

    const manipularTeclaDoTeclado = (evento) => {
        alternarVisibilidade(true)
        switch (evento.key) {
            case value = 'ArrowDown':
                evento.preventDefault()
                setOpcaoFocada(focoAntigo => {
                    if (!focoAntigo) {
                        return 0;
                    }

                    return focoAntigo +=1
                })
                break;

            default:
                break;
        }

    }

    return (
        <LabelEstilizada>

            {label}

            <BotaoEstilizado 
                onClick={() => alternarVisibilidade(!estaAberta)} 
                estaAberta={estaAberta} 
                onKeyDown={manipularTeclaDoTeclado} >

                Selecione <span>{estaAberta ? '▲' : '▼'}</span> 

            </BotaoEstilizado>

            {
                estaAberta &&
                <ul>
                    {opcoes.map(opcao =>
                        <li key={opcao.value} >
                            {opcao.text}
                        </li>)}
                </ul>
            }
        </LabelEstilizada>
    )
}
