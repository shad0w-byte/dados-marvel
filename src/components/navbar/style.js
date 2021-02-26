import styled from 'styled-components'

//styled using bootstrap's class

const NavbarStyle = styled.nav`

  nav.navbar{
    background-color: #17181B;

}
nav.navbar a.nav-link{
    background-color:#17181B;
    color:#fff;
    font-size:1.2em;
    margin:50px 5px;
}
.navbar-brand{
    color:#fff;
    font-size:1.3em;
}
.navbar-brand:hover{
    color:#e53935;
    font-size:1.3em;
}
div.navbar-nav a.nav-link.active{
    color:white;
}
div.navbar-nav a.nav-link:hover{
    color:#e53935;
}
div.navbar-nav a.nav-link:focus{
    color:#e53935;
}
div.navbar-nav a.nav-link{
    margin:0px 5px;
    padding:5px;
    @media(max-width:768px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center; 
    }

    button.navbar-toggler{
        &:focus,:active{
            outline:1px solid #e53935;
            border:1px solid #e53935;
        }
    }
}
`
const BarStyle = styled.i`
    color:#d32f2f;
    font-size:1.65em;
`


export {NavbarStyle,BarStyle}