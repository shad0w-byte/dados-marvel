import React from 'react'

import FlexDiv from '../../patterns/FlexDiv'
import DropdownData from './DropdownData'

import {Card,NameArea,Name,Id, Image, DescriptionArea} from '../style'

const regex = /<ul>/ig

export default function hqsCard({data}) {

    return (
        <FlexDiv direction="column" justify="center" align="center">
            {
                data.data.results.map(data =>
                    <Card key={data.title}>
                    <NameArea>
                        <Name>Nome: {data.title}</Name>
                        <Id>Identificação: {data.id}</Id>
                        <Id>tipo de dado: histórias em quadrinhos</Id>
                    </NameArea>
                    <Image src={data.thumbnail.path+"."+data.thumbnail.extension} alt="hq image"/>
                    <DescriptionArea>
                        {
                           data.description === "" ? "Oh não, parece que estamos sendo atacados, alguns dos nossos dados sobre nossos heróis estão desaparecendo! Aposto que isso é obra da Hidra..." : data.description
                        }
                    </DescriptionArea>
                        
                        <DropdownData title="Criadores"
                        data={
                           data.creators.items
                        }
                        />
                         <DropdownData title="Personagens"
                         bgColor="#282A2D"
                        data={
                           data.characters.items
                        }
                        /> 
                </Card>
                )
            }
        </FlexDiv>
    )
}
