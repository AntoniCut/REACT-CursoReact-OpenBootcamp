//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************


import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting.jsx'
import GreetingF from './components/pure/greetingF.jsx'
import TaskListComponent from './components/container/task_list.jsx';


function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">

        <h1> ¡ Proyecto Final ! </h1>
        <img src={logo} className="App-logo" alt="logo" />
        
        { /* Componente de Listado de Tareas */}
        <TaskListComponent> </TaskListComponent>

      </header>

    </div>

  );
}

export default App;
