import { useEffect, useState } from 'react'
import './App.css'
import Button from './component/Button/Button'
import DropDownMenu from './component/DropDownMenu/DropDownMenu'
import TaskList from './component/TaskList/TaskList'
import TodoForms from './component/TodoForms.tsx/TodoForms'
import FormData from './types/formData'
import { SubmitHandler } from 'react-hook-form'
import task from './types/Task'

function App() {

  const [tasks, setTasks] = useState<task[]>(JSON.parse(localStorage.getItem("tasks") || '[]'));
  const [renderAddForms, setRenderAddForms] = useState<boolean>(false);
  const [priorityFilterValue, setPriorityFilterValue] = useState<string>('All');

  useEffect(() => {

    localStorage.setItem("tasks", JSON.stringify(tasks)); 

  }, [tasks]);

  useEffect(() => {

    if (priorityFilterValue == "Finished") {

      setTasks(tasks.filter((t) => t.completed == true))
      
    }else if (priorityFilterValue == "Unfinished") {

      setTasks(tasks.filter((t) => t.completed == false))

    }

  }, [setPriorityFilterValue]);

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

    setRenderAddForms(!renderAddForms);

  };

  const handleDeleteTask = (taskId : number) => {

    setTasks(tasks.filter((task) => task.id != taskId))

  };

  const handleRenderAddTask = () => {

    setRenderAddForms(!renderAddForms); 

  }


  return (
    <div className='app'>

      <h1>GET THINGS DONE</h1>

      <div className='menu'>

          <Button content='Add Task' handleClick={handleRenderAddTask}></Button>
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

      <TaskList tasks={tasks} onDelete={handleDeleteTask} setTask={setTasks}></TaskList>

      {renderAddForms && <TodoForms title="What the new task ?!" handleOnSubmit={handleAddTask} handleRenderForms={handleRenderAddTask}></TodoForms>}

      {/* <TodoForms title="What the new task ?!" handleOnSubmit={handleAddTask}></TodoForms> */}

    </div>


  )
}

export default App
