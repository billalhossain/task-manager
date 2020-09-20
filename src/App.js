import React from 'react';
import TaskListProvider from './Context/TaskListProvider'
import TaskManager from './components/TaskManager'

function App() {
  return (
    <div className="App">
      <TaskListProvider>
        <TaskManager></TaskManager>
      </TaskListProvider>
    </div>
  );
}

export default App;
