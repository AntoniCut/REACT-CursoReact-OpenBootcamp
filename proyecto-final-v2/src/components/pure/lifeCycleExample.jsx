//  *******************************************************************
//  **********  /src/components/pure/lifeCyclingExample.jsx  **********
//  *******************************************************************

//  Ejemplo de componente de tipo clase que dispone de los
//  métodos de ciclo de vida.

import React, { Component } from 'react'
//import PropTypes from 'prop-types'


//  **********  Componente de Clase  **********

class LifeCycleExample extends Component {
    
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')

    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DIDMOUNT: justo al acabar el montaje del componente, antes de renderizar la vista')
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: Si va ha recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        //  Controla si el componente debe o no actualizarse.
        //  return true / false.
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: justo antes de actualizarse')
    }
    
    componentDidUpdate(nextProps, nextState) {
        console.log('DidUpdate: justo despues de actualizarse')
    }

    componentWillUnmount() {
        console.log('WillUnmount: justo antes de desaparecer')
    }
        
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

/*
LifeCycleExample.propTypes = {

}
*/

export default LifeCycleExample
