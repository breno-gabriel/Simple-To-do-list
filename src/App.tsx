import { useState } from 'react'
import './App.css'
import Button from './component/Button/Button'
import DropDownMenu from './component/DropDownMenu/DropDownMenu'
import TaskList from './component/TaskList/TaskList'
import TodoForms from './component/TodoForms.tsx/TodoForms'
import taskProps from './types/TaskProps'
import FormData from './types/formData'

function App() {

  const [tasks, setTasks] = useState<taskProps[]>([]);

  const handleAddTask = (data: FormData) => {

    setTasks([
      ...tasks, 
      {
        id: Math.random(),
        description: data.description, 
        date: data.date, 
        priority: data.priority,
        completed: false 
      }
    ]);

  };

  return (
    <div className='app'>

      <h1>GET THINGS DONE</h1>

      <div className='menu'>

          <Button content='Add Task'></Button>
          <div className='menu-filter'>

            <div>

              <span>Filter</span>
              <DropDownMenu options={["All", "Finished", "Unfinished"]}></DropDownMenu>

            </div>

            <div>

              <span>Sort</span>
              <DropDownMenu options={["Date", "Priority"]}></DropDownMenu>

            </div>

          </div>

      </div>

      <TaskList tasks={tasks}></TaskList>

      <TodoForms></TodoForms>

    </div>


  )
}

export default App
