//  ***********************************************
//  **********  /src/hooks/ejemplo3.jsx  **********
//  ***********************************************

/*
    **********  Ejemplo de uso de los siguientes hooks  **********

    -  useState().
    -  useContext(),  utiliza el contexto o datos y se le pasa a componentes inferiores.

*/

import React, {useState, useContext} from 'react';



//  Inicializamos un estado vacio que va a rellenarse con los datos
//  del contexto del padre.
const miContexto = React.createContext(null)


//  **********  Componente 1  **********  
//      -  dispone de un contexto que va a tener un valor que recibe desde el padre.

const Componente1 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h1> El Token es: {state.token} </h1>     

            { /* Pintamos el Componente2 */}      
            <Componente2> </Componente2>

        </div>
    );
}


//  **********  Componente 2  **********  
//      -  dispone de un contexto que va a tener un valor que recibe desde el padre.

const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2> La sesión es: {state.sesion} </h2>

        </div>
    );
}


//  **********  MiComponenteContexto  **********  
export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //  Creamos el estado de este componente.
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {
        
        setSessionData({
            token: 'JWT123456789',
            sesion: sessionData.sesion + 1
        })
    }

    return (
        <miContexto.Provider value={sessionData}>
            
            {/* Todo lo que esta aqui dentro puede leer los datos de sessionData */}
            {/* Ademas, si se actualiza, los componentes de aqui, tambien lo actualizan */}

            <h1>  ***  Ejemplo de useState() y useContext()  *** </h1>
            <Componente1> </Componente1>
            <button onClick={actualizarSesion}> Actualizar Sesión </button>

        </miContexto.Provider>
    )
}



