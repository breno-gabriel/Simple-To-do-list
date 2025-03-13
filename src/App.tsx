import './App.css'
import Button from './component/Button/Button'
import DropDownMenu from './component/DropDownMenu/DropDownMenu'

function App() {

  return (
    <>
      <h1>GET THINGS DONE</h1>
      <DropDownMenu options={['All', "Finished", "Unfinished"]}></DropDownMenu>
    </>
  )
}

export default App
