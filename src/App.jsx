import { Col, Container, Row } from "react-grid-system";
import { Card } from "./components/Card/Card"
import { Cabecalho } from "./components/Cabecalho/Cabecalho"
import { Estilos } from "./components/EstilosGlobais/Estilos"
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema"

import { Tipografia } from "./components/Tipografia/Tipografia"
import { CampoTexto } from "./components/CampoTexto/CampoTexto"
import { Rodape } from "./components/Rodape/Rodape"
import { Botao } from "./components/Botao/Botao";
import { ListaSuspensa } from "./components/ListaSuspensa/ListaSuspensa";

const estadosBrasileiros = [
  { "text": "Acre", "value": "AC" },
  { "text": "Alagoas", "value": "AL" },
  { "text": "Amapá", "value": "AP" },
  { "text": "Amazonas", "value": "AM" },
  { "text": "Bahia", "value": "BA" },
  { "text": "Ceará", "value": "CE" },
  { "text": "Distrito Federal", "value": "DF" },
  { "text": "Espírito Santo", "value": "ES" },
  { "text": "Goiás", "value": "GO" },
  { "text": "Maranhão", "value": "MA" },
  { "text": "Mato Grosso", "value": "MT" },
  { "text": "Mato Grosso do Sul", "value": "MS" },
  { "text": "Minas Gerais", "value": "MG" },
  { "text": "Pará", "value": "PA" },
  { "text": "Paraíba", "value": "PB" },
  { "text": "Paraná", "value": "PR" },
  { "text": "Pernambuco", "value": "PE" },
  { "text": "Piauí", "value": "PI" },
  { "text": "Rio de Janeiro", "value": "RJ" },
  { "text": "Rio Grande do Norte", "value": "RN" },
  { "text": "Rio Grande do Sul", "value": "RS" },
  { "text": "Rondônia", "value": "RO" },
  { "text": "Roraima", "value": "RR" },
  { "text": "Santa Catarina", "value": "SC" },
  { "text": "São Paulo", "value": "SP" },
  { "text": "Sergipe", "value": "SE" },
  { "text": "Tocantins", "value": "TO" }
]

function App() {
  return (
    <ProvedorTema>

      <Estilos />

      <Cabecalho />

      <Container style={{margin: '80px auto'}}>

        <Row justify="center">
          <Col lg={6} md={8} sm={12}>

            <Card>

              <Tipografia variante="h1" componente="h1">
                Crie seu cadastro
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>

              <Row>
                <Col lg={12} md={12} sm={12}>
                  <CampoTexto label={'Nome Completo'} />
                </Col>
              </Row>

              <Row>
                <Col lg={4} md={4} sm={4}>
                  <ListaSuspensa label={'Estado'} opcoes={estadosBrasileiros}/>
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <CampoTexto label={'Cidade'} />
                </Col>
              </Row>

              <Row>
                <Col lg={12} md={12} sm={12}>
                  <CampoTexto label={'Email'} />
                </Col>
              </Row>

              <Row>
                <Col lg={4} md={4} sm={4}>
                  <CampoTexto label={'Senha'} />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <CampoTexto label={'Repita a senha'} />
                </Col>
              </Row>

              <Row>

                <Col lg={6} md={6} sm={6}>
                  <Botao variante="secundario">
                    Anterior
                  </Botao>
                </Col>

                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: 'right' }}>
                    <Botao variante="primaria">
                      Próximo
                    </Botao>
                  </div>
                </Col>

              </Row>



            </Card>


          </Col>
        </Row>



      </Container>

      <Rodape />

    </ProvedorTema>
  )
}

export default App
