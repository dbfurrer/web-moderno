import Cabecalho from "@/components/Cabecalho"
import Layout from "@/components/Layout"

// JSX Fragment e props
export default function Exemplo() {
  return (
    <Layout titulo="Usando componentes">
      <Cabecalho titulo="React"/>
      <Cabecalho titulo="JSX"/>
    </Layout>
    

  )
}