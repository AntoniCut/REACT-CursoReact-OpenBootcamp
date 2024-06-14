//  ***********************************************************************
//  **********  /src/components/pure/forms/registerForm.jsx  **************
//  ***********************************************************************

//  Componente que va ha contener un formulario para autenticacion de usuarios.

import React, {useState} from 'react';

const Registerform = ()=> {
    
    const initialData = [
        {
            user:     '',
            name:     '',
            email:    '',
            password: ''
        }
    ] 

    //  Estado del componente.
    const [data, setData] = useState(initialData);
        
    return (
        <div>
            
        </div>
    );
}

export default Registerform