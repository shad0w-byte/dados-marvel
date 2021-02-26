import React from 'react'
import {useState,useEffect} from 'react'

import EventsCard from '../cards/eventsCard/EventCard'


import InputArea from '../styles/input'
 
import FlexDiv from '../patterns/FlexDiv'
import Div from '../patterns/Div'

import ErrorCard from '../cards/ErrorCard'



export default function CharacterData() {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    const hash = process.env.NEXT_PUBLIC_HASH

    const [eventData, setEventData] = useState([])


    async  function getData(){

        let eventName = document.querySelector('#eventName').value

       eventName === "" ? eventName = "age of X" : eventName

        let url = `https://gateway.marvel.com:443/v1/public/events?name=${eventName}&ts=1&apikey=${apiKey}&hash=${hash}
        `
       try {

        const response = await fetch(url)
        const data = await response.json()
        setEventData([data])
       }
       catch (error) {
           console.error('error')
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
        <h4>Informe o nome do evento</h4>
        <input placeholder="informe o nome do evento..." type="text" id="eventName"/>

        <button type="button" onClick={getData}>Pesquisar</button>
        </InputArea>
            {
                eventData.map((data) =>data.data.count === 0 ? <ErrorCard/> :  <EventsCard key={data.code} data={data}/>
                    )
            }
            </Div>
        </FlexDiv>
    )
}
