//  ************************************************************
//  **********  /src/components/container/child.jsx  **********
//  ************************************************************

import React, { useRef } from 'react'
import '../../App.css'


//  **********  Componente Hijo  **********
const Child = ({ name, send, update }) => {

    //  creamos Referencias.
    const messageRef = useRef('')
    const nameRef = useRef('')


    const pressButton = () => {

        const text = messageRef.current.value       //  para acceder al valor del elemento.
        alert(`Text in Input: ${text}`)
    }

    const pressButtonParam = (text) => {
        alert(`Text: ${text}`)
    }

    const submitName = (e) => {
        e.preventDefault()
        update( nameRef.current.value)
    }

    
    return (

        <div style={{
            backgroundColor: 'cyan'
            
        }}>

            <p onMouseOver={() => alert('onMouseOver')}> Hello <strong> {name} </strong> </p>

            <button onClick={() => alert('Botón 1 pulsado')}
                    className='btnMargin'>
                Button 1
            </button>

            <button onClick={pressButton}
                    className='btnMargin'>
                Button 2
            </button>

            <button onClick={() => pressButtonParam('Hello')}>
                Button 3
            </button>

            <br /> <br />

            <input placeholder='Send a text to your father'
                onFocus={() => console.log('input focused')}
                onBlur={() => console.log('input blured')}
                onChange={(e) => console.log('input changed', e.target.value)}
                onCopy={() => console.log('copied text from Input')}
                ref={messageRef}
                style={{marginRight: '20px'}}
            />

            

            {/* ejecuta una función de orden superior */}
            <button onClick={() => send( messageRef.current.value )} >
                Send Message
            </button>

            <div>
                
                <form onSubmit={submitName}>
                    <input 
                        ref={nameRef}
                        placeholder='New Name' 
                        style={{margin: '20px'}} 
                    />

                    <button type="submit"> Update Name </button>

                </form>
            </div>

        </div>
    )
}


export default Child


