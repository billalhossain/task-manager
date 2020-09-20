import React from 'react'
import TaskHeader from './TaskHeader'
import TaskList from './TaskList'
import TaskForm from './TaskForm'

function TaskManager() {
    return (
        <div className="task-container">
            <TaskHeader />
            <TaskForm />
            <TaskList />
        </div>
    )
}

export default TaskManager
