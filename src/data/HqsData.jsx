import React from 'react'
import {useState,useEffect} from 'react'



import InputArea from '../styles/input'
import FlexDiv from '../patterns/FlexDiv'
import Div from '../patterns/Div'

import HqsCard from '../cards/hqsCard/HqsCard'
import ErrorCard from '../cards/ErrorCard'



export default function hqsData() {
    const apiKey =process.env.NEXT_PUBLIC_API_KEY
    const hash = process.env.NEXT_PUBLIC_HASH
    const [hqsData, setHqsData] = useState([])

    async  function getData(){

        let hqName = document.querySelector('#hqName').value

       hqName === "" ? hqName = "Age of X: Universe" : hqName

        let url = `https://gateway.marvel.com:443/v1/public/comics?title=${hqName}&ts=1&apikey=${apiKey}&hash=${hash}`

        try {

        const response = await fetch(url)
        const data = await response.json()  
        setHqsData([data])
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
        <h4>Informe o nome da história em quadrinho</h4>
        <h5>(Sem incluir o ano)</h5>
        <input placeholder="informe o nome da história em quadrinho..." type="text" id="hqName"/>
        <button type="button" onClick={getData}>Pesquisar</button>
        </InputArea>
                {
                    hqsData.map((data) =>
                    data.data.count === 0 ? <ErrorCard key={data.status}/> :  
                    <HqsCard key={data.code} data={data}/>
                    )
                }
            </Div>
        </FlexDiv>
    )
}
/*

*/