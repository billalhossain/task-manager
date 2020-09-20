import React, {useContext, useEffect} from 'react'
import { TaskListContext } from '../Context/TaskListProvider'
import Task from './Task'
function TaskList() {
    const {taskList, filterSelected} = useContext(TaskListContext)
    
    return (
        <div>
            <ul className="task-list">
                {
                    taskList.length ? taskList.map( (task, index) => {
                        if(filterSelected === 'complate'){
                            if(task.complate){
                                return <Task key={index} task={task} index={index} />
                            }
                        }else if(filterSelected === 'incomplete'){
                            if(!task.complate){
                                return <Task key={index} task={task} index={index} />
                            }
                        }else{
                            return  <Task key={index} task={task} index={index} />
                        }
                        
                    }): <p style={{textAlign: 'center'}}>Task Not Available</p>
                    
                }
            </ul>
        </div>
    )
}

export default TaskList
