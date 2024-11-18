import { Container } from "react-grid-system";
import { Card } from "./components/Card/Card"
import { Cabecalho } from "./components/Cabecalho/Cabecalho"
import { Estilos } from "./components/EstilosGlobais/Estilos"
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema"

import { Tipografia } from "./components/Tipografia/Tipografia"
import { CampoTexto } from "./components/CampoTexto/CampoTexto"
import { Rodape } from "./components/Rodape/Rodape"

function App() {
  return (
    <ProvedorTema>

      <Estilos />

      <Cabecalho />

      <Container>

        <Card>
          <Tipografia variante="h1" componente="h1">
            Crie seu cadastro
          </Tipografia>
          <Tipografia variante="body" componente="body">
            Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
          </Tipografia>

          <CampoTexto label={'Nome Completo'} />
        </Card>
        
      </Container>

      <Rodape />

    </ProvedorTema>
  )
}

export default App
