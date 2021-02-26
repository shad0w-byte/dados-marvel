import styled from 'styled-components'

const Card = styled.div`
    position:relative;
    display:block;
    width:35em;
    margin:10px 10px;
    @media(max-width:576px){
        position:relative;
        width:auto;
        margin: 4% 8px;
        margin-bottom: 6%;
    }

`
const NameArea = styled.div`
    background-color:#0E1013;
    padding:10px;
`

const Name = styled.h1`
    font-size:1.8em;
    font-weight:600;
    line-height:1.5;
    color:#fff;
    text-transform:uppercase;
`
const Id = styled.span`
    display:block;
    margin:5px 0;
    font-size:1.15em;
    font-weight:600;
    color:#e53935;
`
const Image = styled.img`
    position:relative;
    width:100%;
    padding:10px;
  
    background-color:black;

`
const DescriptionArea = styled.div`
    padding:10px;
    background-color:#17181B;
    color:#fff;
    line-height:1.15;
    font-size:1.2em;
`

// dropdown data (react-bootstrap)
// styled using bootstrap's class

const DropdownDataStyle = styled.div`

    div.card{
        background-color:${props => props.bgColor ||"#202124"};
        border-radius:0;
        color:#fff;
    }

    div.card-header{
        padding:10px;
    }

    button.btn-link{
        display:flex;
        justify-content:space-between;
        width:100%;
        text-align:left;
        color:#FFF;
        font-size:1.2em;

        &:hover{
            text-decoration:none;
            background-color:#17181B;
            transition: .2s ease;
        }
        &:focus{
            box-shadow:none;
            text-decoration:none;
            border:2px solid #e53935;
            box-shadow:none;
            outline:none;
        }
    }

    li{
        list-style:none;
        font-size:1.2em;
        color:#FFF;
    }

    i.bi-eye{
        font-size:1.2em;
    }

`

export{
    Card,
    NameArea,
    Name,
    Id,
    Image,
    DescriptionArea,
    DropdownDataStyle
}