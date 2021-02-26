import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:sans-serif;
    }
    h1{
        font-family:sans-serif;
        font-weight:bold;
    }

    h3{
        font-family:sans-serif;
        font-weight:600; 
        font-size:2.0em;
    }
    p{
        font-family:sans-serif;
        font-size:1.2em;
    }

    img.image{
        position:relative;
        padding:10px;
        width:100%;
        height:100%;
    }
    
    svg.marvel-logo{
        margin:5px 0;
  
    }

    ol{
        padding:0 20px;
        font-size:1.3em;
    }
    li{
        margin:5px 0;
        padding:5px;
    }
`
export default GlobalStyle