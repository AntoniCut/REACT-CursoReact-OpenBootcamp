//  *********************************************************
//  **********  /src/components/pure/greeting.jsx  **********
//  *********************************************************


import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Greeting extends Component {
  
    static propTypes = {
        name: PropTypes.string,
    }

    constructor(props) {

        super(props);
        this.state = {
            age: 29
        }
    }

  render() {
    return (
      <div>
      <h1> ----- Componentes de Clase ----- </h1>
        <h2> ¡ Hola ! {this.props.name} desde componente de clase</h2>
        <h2> Tu edad es de: {this.state.age} </h2>
        <div>
            <button onClick={this.birthday}> Cumplir Años </button>
        </div>
      </div>
    )
  }

  birthday = () => {
    
    this.setState( (prevState) => ({
                age: prevState.age + 1
            })
    )
    
  }

}

























