import Navegador from "@/components/Navegador"
import Link from "next/link"

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navegador texto="Estiloso" destino="/estiloso"/>
      <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/>
      <Navegador texto="Jsx" destino="/jsx" cor="crimson"/>
      <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
      <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="blue"/>
      <Navegador texto="Componente com estado" destino="/estado" cor="#fb5607"/>
      <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#C2847A"/>
      <Navegador texto="Conteúdo estático" destino="/estatico" cor="#d066e3"/>
      <Navegador texto="Texto" destino="/teste" cor="#05bbc6"/>
    </div>
  ) 
}