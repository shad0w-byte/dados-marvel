import styled from 'styled-components'

const InputArea = styled.div`
    display:block;
    width:auto;
    margin:10px 0;
    padding:5px;

    @media(max-width:576px){
        margin:15px;
    }

   
    h4{
        font-size:1.6em;
        text-align:center;
        font-weight:600;
    }
    h5{
        font-size:1.45em;
        text-align:center;
        font-weight:600;
    }
    input{
        position:relative;
        width:100%;
        color:#000;
        padding:5px;
        margin:5px 0;
        transform:skew(-11deg);
        border:2px solid #000;
    }
    
    button{
        background-color:#b71c1c;
        border:none;
        padding:4px 0;
        margin:5px -8px;
        transform:skew(-11deg);
        width:100%;
        color:#fff;
        font-size:1.2em;

        &:hover{
            background-color:#800000;
            transition:.3s ease-in;
        }
        i.bi-search{
            margin:0 6px;
            } 

        @media(max-width:576px){
            margin:5px -6px;
        }
    }
`
export default InputArea