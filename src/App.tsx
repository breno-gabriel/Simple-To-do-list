import { useState } from 'react'
import './App.css'
import Button from './component/Button/Button'
import DropDownMenu from './component/DropDownMenu/DropDownMenu'
import TaskList from './component/TaskList/TaskList'
import TodoForms from './component/TodoForms.tsx/TodoForms'
import FormData from './types/formData'
import { SubmitHandler } from 'react-hook-form'
import task from './types/Task'

function App() {

  const [tasks, setTasks] = useState<task[]>([]);

  const handleAddTask: SubmitHandler<FormData> = (data: FormData) => {

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

  const handleDeleteTask = (taskId : number) => {

    setTasks(tasks.filter((task) => task.id != taskId))

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

      <TaskList tasks={tasks} onDelete={handleDeleteTask}></TaskList>

      <TodoForms handleOnSubmit={handleAddTask}></TodoForms>

    </div>


  )
}

export default App
