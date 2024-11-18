import React from 'react'
import styled from '@emotion/styled'
import LogoBranco from '../../assets/Logobranco.svg'
import IconInstagram from '../../assets/icones/iconesRedesSociais/Instagram.svg'
import IconTwitch from '../../assets/icones/iconesRedesSociais/Twitch.svg'
import IconTwitter from '../../assets/icones/iconesRedesSociais/Twitter.svg'
import IconWhatsapp from '../../assets/icones/iconesRedesSociais/Whatsapp.svg'

const RodapeEstilizado = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.cores.primarias.a};
    padding:${props => props.theme.espacamentos.m};
    color: ${props => props.theme.cores.branco};
`

const RodapeContainer = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:${props => props.theme.espacamentos.m};
    color: ${props => props.theme.cores.branco};
`

const RodapeSections = styled.div`
    background-color: transparent;
`
const RodapeList = styled.ul`
    list-style: none;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Rodape = () => {
    return (
        <RodapeEstilizado>
            <RodapeContainer>
                <RodapeSections>
                    <img src={LogoBranco} alt="Logo Branca" />
                    <p>Desenvolvido por Alura. Projeto fictício sem fins comerciais.</p>
                </RodapeSections>

                <RodapeSections>
                    <p>Acesse nossas redes:</p>

                    <RodapeList>
                        <li>
                            <img src={IconInstagram} alt="Icon Social" />
                        </li>
                        <li>
                            <img src={IconTwitch} alt="Icon Social" />
                        </li>
                        <li>
                            <img src={IconTwitter} alt="Icon Social" />
                        </li>
                        <li>
                            <img src={IconWhatsapp} alt="Icon Social" />
                        </li>
                    </RodapeList>
                </RodapeSections>
            </RodapeContainer>
        </RodapeEstilizado >
    )
}
