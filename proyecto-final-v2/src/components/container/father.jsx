//  ************************************************************
//  **********  /src/components/container/father.jsx  **********
//  ************************************************************

import React, { useState } from 'react'
import Child from '../pure/child'


//  **********  Componente Padre  **********
const Father = () => {

    const [name, setName] = useState('Antonio');

    const showMessage = (text) => {
        alert(`Message received: ${text}`)
    }

    const updateName = (newName) => {
        setName(newName)
    }


    return (

        <div style={{
            backgroundColor: 'tomato',
            padding: '10px'
        }}>

            <Child name={name} send={showMessage} update={updateName}> </Child>

        </div>
    )
}

export default Father
