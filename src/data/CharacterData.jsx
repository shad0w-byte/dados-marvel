import React from 'react'
import {useState,useEffect} from 'react'

import CharacterCard from '../cards/characterCard/characterCard'


import InputArea from '../styles/input'

import FlexDiv from '../patterns/FlexDiv'

import Div from '../patterns/Div'

import ErrorCard from '../cards/ErrorCard'



export default function CharacterData() {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY


    const hash = process.env.NEXT_PUBLIC_HASH

    const [characterData, setCharacterData] = useState([])


    async  function getData(){

        let character = document.querySelector('#characterName').value

       character === "" ? character = "Iron Man" : character

        let url = `https://gateway.marvel.com:443/v1/public/characters?name=${character}&ts=1&&apikey=${apiKey}&hash=${hash}`
       try {
        const response = await fetch(url)
        const data = await response.json()  
        setCharacterData([data])
       }
       catch (error) {
           console.error(error)
       }
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <FlexDiv
        direction="column" 
        align="center" 
        justify="center" 
        width="100%"  
        padding="10px 0"
        margin="20px 20px">
        <Div display="block">
        <InputArea>
        <h4>Informe o nome do personagem</h4>
        <input placeholder="informe o nome do personagem..." type="text" id="characterName"/>
        <button type="button" onClick={getData}>Pesquisar</button>
        </InputArea>
                {
                    characterData.map((data) => data.data.count === 0 ? <ErrorCard key={data.status}/> :  <CharacterCard key={data.code} data={data}/>
                    )
                }
            </Div>
        </FlexDiv>
    )
}

