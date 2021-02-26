import React from 'react'
import styled from 'styled-components'

const GridDiv = styled.div`
    display:grid;
    grid-template-columns:50% 50%;
    grid-template-rows:auto;
    margin:${props => props.margin || "0px"};
    padding:${props => props.padding || "0px"};
    overflow:hidden;
    background-color:${props => props.bgColor || "none"};

    @media(max-width:576px){
        display:flex;
        flex-direction:${props => props.mediaFlexDisplay || "column"};
    }
`


export default function gridDiv(props) {
    return (
        <GridDiv
        margin={props.margin}
        padding={props.padding}
        mediaFlexDisplay={props.mediaFlexDisplay}
        bgColor={props.bgColor}>
            {props.children}
        </GridDiv>
    )
}
