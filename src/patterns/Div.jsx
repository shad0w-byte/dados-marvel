import React from 'react'
import styled from 'styled-components'



const Div = styled.div`
    position:${props => props.position || "relative"};
    background-color:${props => props.bgColor || "none"};
    width:${props => props.width || "auto"};
    height:${props => props.height || "auto"};
    margin:${props => props.margin || "0"};
    padding:${props => props.padding || "0"};

    @media(max-width:576px){
        display:block;
        margin:0;
    }
`

export default function div(props) {
    return (
        <Div
         position={props.position}
         bgColor={props.bgColor}
         width={props.width}
         heigth={props.height}
         margin={props.margin}
         padding={props.padding}>
            {props.children}
        </Div>
    )
}
