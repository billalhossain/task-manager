import React, { useContext, useEffect, useState } from 'react'
import {TaskListContext} from '../Context/TaskListProvider'
function TaskForm() {
    const {taskList, addTask, clearAll, editableItem, editTask, filterTaskList} = useContext(TaskListContext)
    const [title, setTitle] = useState('')
    const [selectedList, setSelectedList] = useState('all')
    // const [editTask, setEditTask] = useState('')
    const handleSubmitForm = e  => {
        e.preventDefault()
        if(editableItem === null){
            if(title.trim()){
                addTask(title)
            }
            setTitle('')
        }else{
            const index = taskList.indexOf(editableItem)
            editTask(title, index)
            setTitle('')
        }
    }
    const handleAllClear = e =>{
        e.preventDefault()
        clearAll()
    }
    const handleChangeSelect = e => {
        e.preventDefault()
        setSelectedList(e.target.value)
        filterTaskList(e.target.value)
    }
    useEffect( () => {
        if(editableItem === null){
            setTitle('')
        }else{
            setTitle(editableItem.title)
        }
    },[editableItem])
    return (
        <div>
            <form className="taskForm">
                <input 
                    className="form-control"
                    type="text"
                    value={title}
                    placeholder= 'Type your task'
                    onChange={ (e) => setTitle(e.target.value)}
                />
                <button onClick={handleSubmitForm} className="btn">Add Task</button>
                <button onClick={handleAllClear} className="btn">Clear All</button>
                <select value={selectedList} onChange={ handleChangeSelect}>
                    <option value="all">All</option>
                    <option value="complate">Complate</option>
                    <option value="incomplete">Incomplate</option>
                </select>
            </form>
        </div>
    )
}

export default TaskForm
