import styled from 'styled-components'


const Footer = styled.footer`
    height:auto;
    width:100%;
    display:block;
    background-color:#0e1013;
    color:#fff;

    @media(max-width:576px){
        position:relative;
        bottom:0;
        left:0;
    }
    @media(width:768px){
        position:fixed;
        bottom:0;
        left:0;
    }
    @media(width:1024px){
        position:fixed;
        bottom:0;
        left:0;
    }
    .fa-heart{
        vertical-align:middle;
        color:#d32f2f;
        font-size:33px;
    }
    span{
        font-size:1.08em;
    }
    a{
        text-decoration:none;
        font-size:1.2em;
        color:#e53935;
        padding:5px 0;
    }
    i.bi-heart-fill{
        color:#e53935;
    }
`

export {Footer}