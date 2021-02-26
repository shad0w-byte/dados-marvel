import React from 'react'
import {useState,useEffect} from 'react'



import InputArea from '../styles/input'
import FlexDiv from '../patterns/FlexDiv'
import Div from '../patterns/Div'

import SeriesCard from '../cards/seriesCard/SeriesCard'
import ErrorCard from '../cards/ErrorCard'



export default function CharacterData() {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    const hash = process.env.NEXT_PUBLIC_HASH
    const [serieData, setSerieData] = useState([])


    async  function getData(){

        let serieName = document.querySelector('#serieName').value

       serieName === "" ? serieName = "Age of X: Universe" : serieName

        let url = `https://gateway.marvel.com:443/v1/public/series?title=${serieName}&ts=1&&apikey=${apiKey}&hash=${hash}`

        try {

        const response = await fetch(url)
        const data = await response.json()  
        setSerieData([data])
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
        <h4>Informe o nome da série</h4>
        <h5>(Sem incluir o ano)</h5>
        <input placeholder="informe o nome da série..." type="text" id="serieName"/>
        <button type="button" onClick={getData}>Pesquisar</button>
        </InputArea>
               {
                    serieData.map((data) => data.data.count === 0 ? <ErrorCard/> :  <SeriesCard key={data.code} data={data}/>
                    )
               }
            </Div>
        </FlexDiv>
    )
}
