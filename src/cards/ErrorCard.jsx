import React from 'react'
import {Card,NameArea,Name,Image,DescriptionArea} from './style'

import MarvelImage3 from '../assets/images/marvel/marvelImage3.webp'
export default function ErrorCard() {
    return (
        <Card>
           <NameArea>
               <Name>Algo deu Errado!!</Name>
            </NameArea> 
                <Image src={MarvelImage3}/>
            <DescriptionArea>
                <h2>Tente alguma dessas dicas!</h2>

                <ul>
                    <li>Verifique se o nome está escrito de forma correta;</li>
                    <li>Verifique se o valor digitado é inválido;</li>
                    <li>Verifique se o dado digitado possui caractéres especiais como: "-", "!", dentre outros...</li>
                </ul>
            </DescriptionArea>
        </Card>
    )
}
