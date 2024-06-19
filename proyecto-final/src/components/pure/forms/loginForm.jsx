//  ********************************************************************
//  **********  /src/components/pure/forms/loginForm.jsx  **************
//  ********************************************************************

//  Componente que va ha contener un formulario para autenticacion de usuarios.

import React, { useState } from 'react';

const Loginform = ()=> {
    
    const initialCredentials = [
        {
            user:     '',
            password: ''
        }
    ] 

    //  Estado del componente.
    const [credentials, setCredentials] = useState(initialCredentials);
        
    return (
        <div>
            
        </div>
    )
}

export default Loginform
