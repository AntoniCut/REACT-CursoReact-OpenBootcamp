//  **********************************************************
//  **********  /src/hooks/lifecycle/DidUpdate.jsx  **********
//  **********************************************************

//  Ejemplo de uso del metodo componentDidUpdate 'ciclo de vida en componente clase'.
//  Y el hook de              componentDidUpdate 'ciclo de vida en componente funcional'.


import React, { Component, useEffect } from 'react'


//  **********  Componente de tipo 'Clase'  **********

export class DidUpdate extends Component {
  
  componentDidUpdate() {
    console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
  }
  
  render() {
    return (
      <div>
        <h1> DidUpdate </h1>
      </div>
    )
  }
}



//  **********  Componente de tipo 'Función'  **********

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    })

    return (
        <div>
            <h1> DidMountHook </h1>
        </div>
    )
}










