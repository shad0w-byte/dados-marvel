import React from 'react'
import {Footer} from './style'
import FlexDiv from '../../patterns/FlexDiv'
import Section from '../../patterns/Section'



export default function footer() {
    return (
        <Footer>
            <FlexDiv direction="row" justify="baseline" align="baseline">
              <Section 
              margin="10px 10px" width="50%">
                  <h3>Criador</h3>
                  <p>Olá, me chamo Victor Kiss, tenho 16 anos e sou estudante de desenvolvimento web, no momento estou focado no frontend e estou sempre tentando melhorar, espero que goste do site e da idéia =)</p>
              </Section>
              <Section margin="10px 10px" width="50%">
                  <h3>Github</h3>
                  <p>Siga meu github para ficar por dentro de novos projetos, meu github tem dados sobre o meu primeiro site, e toda minha evolução no uso da plataforma além de vários outros sites que você vai gostar.</p>

                    <a href="https://github.com/victor-kiss"  target="_blank" rel="noreferrer">

                        <i className="bi bi-github m-1"></i>
                        Ir para GitHub
                        
                    </a>

              </Section>
            </FlexDiv>
                <FlexDiv padding="10px" aling="center" justify="center" bgColor="#17181B">
                    <span>Desenvolvido com <i className="bi bi-heart-fill red"></i> por Victor Kiss </span>
                </FlexDiv>
        </Footer>
    )
}

