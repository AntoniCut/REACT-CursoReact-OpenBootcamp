//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************


import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting.jsx'
import GreetingF from './components/pure/greetingF.jsx'
import TaskListComponent from './components/container/task_list.jsx';
import Ejemplo1                from './hooks/ejemplo1.jsx'
import Ejemplo2Caso1           from './hooks/ejemplo2Caso1.jsx'
import Ejemplo2Caso2           from './hooks/ejemplo2Caso2.jsx'
import Ejemplo2Caso3           from './hooks/ejemplo2Caso3.jsx'
import MiComponenteConContexto from './hooks/ejemplo3.jsx';
import Ejemplo4                from './hooks/ejemplo4.jsx';


function App() {
  return (

    <div className="App">

      <header className="App-header">

        <h1> ¡ Proyecto Final ! </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div className='linea'> </div>

        { /* Componente de Clase propio de Greeting.jsx */}
        { /* <Greeting name={"Antonio"}></Greeting> */}

        { /* Componente de ejemplo fncional de GreetingF.jsx */}
        { /* <GreetingF name="Antonio"> </GreetingF> */}

        { /*Componente de Listado de Tareas */}
        { /* <TaskListComponent> </TaskListComponent> */}

        
        { /* **********  Ejemplos de uso de HOOKS  ********** */}

        <Ejemplo1> </Ejemplo1>
        <div className='linea'> </div>

        <Ejemplo2Caso1> </Ejemplo2Caso1>
        <div className='linea'> </div>

        <Ejemplo2Caso2> </Ejemplo2Caso2>
        <div className='linea'> </div>

        <Ejemplo2Caso3> </Ejemplo2Caso3>
        <div className='linea'> </div>

        <MiComponenteConContexto> </MiComponenteConContexto>
        <div className='linea'> </div>

        <Ejemplo4 nombre="Antonio">
          {/* Todo lo que hay aqui dentro es tratado como props.children */}
          <h3> Contenido del props.children </h3>
         </Ejemplo4>
        <div className='linea'> </div>

      </header>

    </div>

  )
}

export default App;
