import './App.css'
import Button from './component/Button/Button'
import DropDownMenu from './component/DropDownMenu/DropDownMenu'
import TaskList from './component/TaskList/TaskList'

function App() {

  return (
    <div className='app'>
      <h1>GET THINGS DONE</h1>
      <TaskList></TaskList>
    </div>
  )
}

export default App
