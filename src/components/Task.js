import React, { useContext, useState } from 'react'
import {TaskListContext} from '../Context/TaskListProvider'

function Task({task, index}) {
    const {deleteTask, findEditableItem, complateTask} = useContext(TaskListContext)
    const handleDltTask = () => {
        deleteTask(index)
    }
    const handleComplateTask =(e) => {
        task.complate ? task.complate = false: task.complate = true
        complateTask(task, index)
    }
    const handleEditTask = () => {
        findEditableItem(index)
    }
    
    return (
        <li className={`task-row ${ task.complate ? 'complate': ''}`} >
            <span> {task.title}</span>
            <button onClick={ handleComplateTask } className="btn complate-btn task-btn"><i className="fa fa-check" aria-hidden="true"></i></button>
            <button onClick={handleEditTask} className="btn edit-btn task-btn"><i className="fa fa-pencil-alt" aria-hidden="true"></i></button>
            <button onClick={handleDltTask} className="btn delete-btn task-btn"><i className="fa fa-trash-alt" aria-hidden="true"></i></button>
            
        </li>
    )
}

export default Task
