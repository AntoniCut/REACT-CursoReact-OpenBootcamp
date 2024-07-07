//  *******************************************************************
//  **********  /src/components/container/task_list.jsx  **************
//  *******************************************************************

//  *****  Componente 'task_list' para Listar todas las Tareas  **********


import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

//  Importamos la hoja de estilos task.scss.
import '../../styles/task.css'
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Descripcion1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Descripcion2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'Descripcion3', true, LEVELS.BLOCKING)

    //  Estado del componente.
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
    const [loading, setLoading] = useState(true)

    //  Control del ciclo de vida del componente.
    useEffect(() => {

        console.log('Tasks State has been modified')
        setLoading(false)

        return () => {
            console.log('TaskList component is going to unmount')
        }
    }, [tasks])


    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea');
    }


    return (

        <div>

            <div className='col-12'>

                <div className='card'>

                    {/*  **********  Cabecera  **********  */}
                    <div className='card-header p-3'>
                        <h5> Your Task: </h5>
                    </div>

                    {/*  **********  Contenido  **********  */}
                    <div className='card-body p-3' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        
                        <table>
                            
                            <thead>
                                <tr>
                                    <th scope='col'> Title </th>
                                    <th scope='col'> Description </th>
                                    <th scope='col'> Prioridad </th>
                                    <th scope='col'> Actions </th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                
                                {/*  -----  Iterar sobre una lista de tareas  -----  */}
                                { /* Aplicar un For/Map para renderizar una Lista */}

                                { tasks.map((task, index) => {
                                    return( <TaskComponent key={index} task={task}> </TaskComponent> )
                                  })
                                }
                                               
                            </tbody>

                        </table>
                    </div>

                    <TaskForm> </TaskForm>
                </div>

            </div>

            { /* Aplicar un For/Map para renderizar una Lista */}
            {/*  <TaskComponent task={defaultTask}> </TaskComponent>  */}


        </div>
    );
};


export default TaskListComponent;
