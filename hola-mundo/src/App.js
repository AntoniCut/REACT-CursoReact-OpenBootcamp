//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************


import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting.jsx'
import GreetingF from './components/pure/greetingF.jsx'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1> ¡ Hola Mundo ! </h1>
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className='linea'> </div>

        { /*  **********  Componentes de Clase propio 'greeting.jsx'  ********** */ }
        <Greeting name = "Antonio Francisco Cutillas Garcia"> </Greeting>
        
        <div className='linea'> </div>
        
        { /*  **********  Componentes de Funcion propio 'greeting.jsx'  ********** */ }
        <GreetingF name = "Antonio Francisco Cutillas Garcia"> </GreetingF>
        
        <div className='linea'> </div>
        
        <h2> Curso de React </h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
