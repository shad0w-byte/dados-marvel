import React from 'react'

import FlexDiv from '../../patterns/FlexDiv'
import DropdownData from './DropdownData'

import {Card,NameArea,Name,Id, Image, DescriptionArea} from '../style'


export default function seriesCard({data}) {

    return (
        <FlexDiv direction="column" justify="center" align="center">
            {
                data.data.results.map(data =>
                    <Card key={data.title}>
                        <NameArea>
                        <Name>Nome: {data.title}</Name>
                        <Id>Identificação: {data.id}</Id>
                        <Id>tipo de dado: séries</Id>
                        </NameArea>
                        <Image src={data.thumbnail.path+"."+data.thumbnail.extension} alt="character image"/>
                        <DescriptionArea>
                            {
                            data.description === "" || data.description === null ? "Oh não, parece que estamos sendo atacados, alguns dos nossos dados sobre nossos heróis estão desaparecendo! Aposto que isso é obra da Hidra..." : data.description
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
                        <DropdownData title="Histórias"
                        bgColor="#2E3134"
                        data={
                           data.stories.items
                        }
                        />
                        
                        <DropdownData title="Histórias em Quadrinhos"
                        bgColor="#3C4043"
                        data={
                           data.comics.items
                        }
                        />
                    </Card>    
                )
            }
        </FlexDiv>
    )
}