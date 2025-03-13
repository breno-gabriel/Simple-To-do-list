import './App.css'
import Button from './component/Button/Button'
import DropDownMenu from './component/DropDownMenu/DropDownMenu'
import TaskList from './component/TaskList/TaskList'

function App() {

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

      <TaskList></TaskList>

    </div>
  )
}

export default App
