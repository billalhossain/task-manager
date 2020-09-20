import React, {useState, createContext, useEffect } from 'react'
import '../App.css'
export const TaskListContext = createContext()
function TaskListProvider(props) {
    const initialValue = JSON.parse(localStorage.getItem('taskList')) || []
    const [taskList, setTaskList] = useState(initialValue)
    
    const [editableItem, setEditableItem] = useState(null)
    const [filterSelected, setFilterSelected] = useState('all')
    const addTask = (title) => {
        setTaskList([...taskList, { 
            title: title,
            complate: false
         }])
    }
    const clearAll = () => {
        setTaskList([])
    }
    const deleteTask = (CurrentIndex) => {
        setTaskList( taskList.filter( (task, index) => index !== CurrentIndex))
    }
    const findEditableItem = ( CurrentIndex) => {
        const editItem = taskList.find( (task, index) => index === CurrentIndex)
        setEditableItem(editItem)
    }
    const editTask = (title, CurrentIndex) => {
        const newTask = taskList.map( (task, index) =>{
            return index === CurrentIndex ? {title: title, complate: task.complate} : task
        })
        setTaskList(newTask)
        setEditableItem(null)
    }
    

    const complateTask = (task, CurrentIndex) => {
        var complateTask = taskList.map((task, index) => {
            return index === CurrentIndex ? {title: task.title, complate: task.complate} : task
        })
        setTaskList(complateTask)
    }

    const filterTaskList = (selectedList) => {
        setFilterSelected(selectedList)
    }

    useEffect( () => {
        localStorage.setItem('taskList', JSON.stringify(taskList))
    }, [taskList])
    
    return (
        <TaskListContext.Provider value={{
            taskList,
            addTask,
            clearAll, 
            deleteTask,
            findEditableItem,
            filterTaskList,
            editTask,
            complateTask,
            editableItem,
            filterSelected
        }}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListProvider
