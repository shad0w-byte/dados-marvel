import React from 'react'

import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {NavbarBrand} from 'react-bootstrap'


import FlexDiv from '../../patterns/FlexDiv'

import {NavbarStyle,BarStyle} from './style'

import MarvelLogo from '../../assets/images/marvel/marvelLogo.svg'






export default function navbar() {
    return (
        <>
        <FlexDiv bgColor="#0e1013" align="center" justify="center">
          <MarvelLogo className="marvel-logo"/>
        </FlexDiv>
        <NavbarStyle>
            <Navbar expand="lg">
            <NavbarBrand href="/index">Início</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
              <BarStyle>
               <i className="bi bi-list"></i>
              </BarStyle>
          </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
                <Nav.Link href="https://developer.marvel.com/" target="_blank" rel="noreferrer">API</Nav.Link>
                <Nav.Link href="https://github.com/victor-kiss/dados-marvel" rel="noreferrer" target="_blank">Reposiório</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </NavbarStyle>
    </>
    )
}
