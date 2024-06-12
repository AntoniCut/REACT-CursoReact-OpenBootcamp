//  ****************************************************
//  **********  /src/hooks/ejemplo2Caso1.jsx  **********
//  ****************************************************

/*
    **********  Ejemplo de uso de los siguientes hooks  **********

    -  useState().
    -  useRef(),     Identificar o referenciar elementos o valores dentro de la vista.
    -  useEffect(),  Nos ayuda a controlar los cambios en la vista.

*/


import React, { useState, useRef, useEffect } from 'react';


const Ejemplo2Caso1 = () => {

    //  Crear dos contadores distintos, cada uno en un estado diferente.
    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)

    //  Vamos a crear una referencia con useRef() para asociar una variable
    //  con un elemento del DOM del componente (vista HTML).
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }


    //  Trabajando con UseEffect().

    //  -----  Caso 1: Ejecutar SIEMPRE un snippet de código  -----

    //    Cada vez que haya yn cambio en el estado del componente
    //    se ejecuta aquello que este dentro del useEffect.

    useEffect(() => {
        console.log("*****  ejemplo2Caso1  *****")
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
        console.log('Mostrando referencia a elemento del DOM')
        console.log({ miRef })
    });


    return (
        <div>

            <h1> *** Ejemplo 2 - Caso 1 - de useState(), useRef() y useEffect() *** </h1>
            <h2> Contador 1: {contador1} </h2>
            <h2> Contador 2: {contador2} </h2>
            
            { /*  Elemento Referenciado */ }
            <h4 ref={miRef}> Ejemplo de elemento referenciado </h4>
            
                        { /*  Bloque de botones para actualizar el estado del componente  */}
            <button onClick={incrementar1}> Incrementar Contador 1 </button>
            <button onClick={incrementar2}> Incrementar Contador 2 </button>
            <br></br> <br></br>

        </div>
    );
}

export default Ejemplo2Caso1;
