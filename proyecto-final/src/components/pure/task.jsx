//  *********************************************************
//  **********  /src/components/pure/task.jsx  **************
//  *********************************************************

//  *****  Componente 'Task' para pintar una Tarea  *****

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

//  Importamos la hoja de estilos task.scss.
import '../../styles/task.css'

const TaskComponent = ({ task }) => {


    useEffect(() => {

        console.log('Create Task')

        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task])


    //  Función que devuelve un Badge depende del nivel de la tarea.
    function taskLevelBadge() {

        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'> {task.level} </span>
                    </h6>
                )
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'> {task.level} </span>
                    </h6>
                )
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'> {task.level} </span>
                    </h6>
                )
            default:
                break;
        }
    }


    //  Función que retorna el icono dependiendo del nivel de la tarea.
    function taskCompletedIcon() {

        if(task.completed) {
            return (<i className='bi-toggle-on' style={{ color: 'green', fontSize: '25px' }}> </i>)
        }
        else {
            return(<i className='bi-toggle-off' style={{ color: 'brown' }}> </i>)
        }
    }

    return (

        <tr className='fw-normal'>
            <th className='ms-2'> <span> {task.name}  </span> </th>
            <td className='align-middle'> <span> {task.description}  </span> </td>
            <td className='align-middle'> <span> {taskLevelBadge()}  </span> </td>
            <td className='align-middle'>
                {taskCompletedIcon()}
                
                {/*{task.completed ?
                    (<i className='bi-toggle-on' style={{ color: 'green', fontSize: '25px' }}> </i>)
                    : (<i className='bi-toggle-off' style={{ color: 'brown' }}> </i>)
                }
                */}
                <i className='bi-trash' style={{ color: 'tomato', fontSize: '25px' }}> </i>
                
            </td>
        </tr>
    )
}


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}


export default TaskComponent
