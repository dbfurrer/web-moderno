import React, { Component } from 'react'

export default class Saudacao extends Component {

  state = {
    tipo: this.props.tipo,
    nome: this.props.nome
  }
  
  constructor(props) {
    super(props)

    this.setTipo = this.setTipo.bind(this) //bind atribui a mesma função à instância atual da classe criada
  }

  setTipo(e) {
    this.setState({ tipo: e.target.value })    
  }

  setNome(e) {
    this.setState({ nome: e.target.value })
  }

  render() {
    const { tipo, nome } = this.state
    return (
      <div>
        <h1>{tipo} {nome}!</h1>
        <input type="text" placeholder="Tipo..." 
          value={tipo} onChange={this.setTipo} />
        <input type="text" placeholder= "Nome..." // nesse caso o this passado a função é chamada no onchange
          value={nome} onChange={e => this.setNome(e)} /> 
      </div>
    )
  }
}