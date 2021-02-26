import NextHead from '../components/head/Head'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner'

import Div from '../patterns/Div'
import GridDiv from '../patterns/GridDiv'
import Section from '../patterns/Section'

import MarvelImage1 from '../assets/images/marvel/marvelImage1.webp'
import MarvelImage2 from '../assets/images/marvel/marvelImage2.webp'

import CharacterCard from '../data/CharacterData'
import EventsData from '../data/EventsData'
import SeriesData from '../data/SeriesData'
import HqsData from '../data/HqsData'

export default function Home() {
 
  return (
  <>
      <NextHead title="Dados Marvel"/>
      <Div>
       <header>
          <Navbar/>
          <Banner/>
       </header>

          <Div margin="0 0 40px">
          <GridDiv>
              <Section padding="20px">
                  <h3>Bem vindo!</h3>

                  <p>Se você procura um site com dados sobre seus heróis favoritos e HQs juntamente de uma vasta biblioteca, você chegou no lugar certo!!</p>

                  <p>Na <b>Dados Marvel</b> você tem a sua disposição uma aba de pesquisa para obter os mais diversos dados, dentre esses dados está incluso uma descrição breve, imagem para visualização , identificação e muito mais!!</p>

                  <p>Os dados são vindos diretamente da API oficial da Marvel, ou seja, os dados são totalmente confiáveis e de fontes seguras, aproveite.</p>
                  
                  <p><b>Por dia só é possivel fazer 3000 requisições a api, caso o sistema de buscas não esteja funcionando corretamente espere até o outro dia ou até as 00:00</b></p>
              </Section>
                 <img src={MarvelImage2} alt="Marvel Image" className="image"/>
          </GridDiv>
          </Div>

      
          <Div margin="0 0 40px">
          <GridDiv mediaFlexDisplay="column-reverse">
          <img src={MarvelImage1} alt="Marvel Image" className="image"/>
               <Section padding="20px">
                <h3>Instruções para uso.</h3>

                <p>Para que se obtenha a melhor experiência de busca de dados, é necessário seguir algumas instruções para um bom aproveitamento da ferramenta de busca:</p>

                <ol>
                <li>
                    O nome dos personagens devem ser pesquisados em inglês;
                  </li>
                  <li>
                    Não é aceito números na pesquisa;
                  </li>
                  <li>
                      É aceito letras maiúsculas e minúsculas na pesquisa;
                  </li>
                  <li>
                        Caso o nome digitado esteja errado ou o dado digitado não seja válido, o conteúdo não irá atualizar e o card não aparecerá.
                  </li>
                </ol>

                <p>Essas são as instruções. Dados super interessantes te esperam!!.</p>
                </Section>
            </GridDiv>
          <CharacterCard/>
        <EventsData/>
      <SeriesData/>
      <HqsData/>
    </Div>
  <Footer/>
</Div>
  </>
  )
}
