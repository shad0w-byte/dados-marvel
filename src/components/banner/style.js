import styled from 'styled-components'
import BannerImage from '../../assets/images/marvel/bannerImage.webp'

const Banner = styled.div`
    background-image:url(${BannerImage});
    background-position:center;
    background-size:cover;
    height:300px;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
`

const TextArea = styled.div`
    display:block;
    padding:4% 2%;
`

const MainText = styled.h1`
  color:#b71c1c;
  text-align:left;
  text-transform:uppercase;
`

const SecondaryText = styled.h2`
  color:#F4F4F4;
  text-align:left;

  @media(max-width:576px){
      font-size:1.45em;
  }
`

export {Banner,TextArea,MainText,SecondaryText}