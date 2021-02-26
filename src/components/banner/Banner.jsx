import React from 'react'
import {Banner,TextArea,MainText,SecondaryText} from './style'



export default function banner() {
    return (
        <Banner>
           <TextArea>
           <MainText>Dados Marvel</MainText>
            <SecondaryText> Obtenha dados sobre personagens e HQs de forma simples.</SecondaryText>
           </TextArea>
        </Banner>
    )
}

