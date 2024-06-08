//  *******************************************************************
//  **********  /src/components/container/task_list.jsx  **************
//  *******************************************************************

//  *****  Componente 'task_list' para Listar todas las Tareas  **********


import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    
    const defaultTask = new Task('Example', 'Default descripcion', true, LEVELS.NORMAL);
    
    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea');
    }

    return (
        <div>
            
            <div>
               <h1> Your Tasks: </h1>
            </div>
            
            { /* Aplicar un For/Map para renderizar una Lista */}
            <TaskComponent task = {defaultTask}> </TaskComponent>

        </div>
    );
};


/*
TaskList.propTypes = {

};
*/

export default TaskListComponent;
