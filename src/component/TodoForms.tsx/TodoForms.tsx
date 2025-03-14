import Button from '../Button/Button';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import './TodoForms.css';
import { IoClose } from "react-icons/io5";

const TodoForms = () => {

    return (

        <div  className='todoForms'>
        
            <h2>What the new task?</h2>

            <form>
                
                <div className='todoForms-description'>

                    <label htmlFor="">Type the description</label>
                    <input type="text" />

                </div>

                <div className='todoForms-options'>

                    <div>

                        <label>Priority</label>
                        <DropDownMenu options={["Hight", "Medium","Low"]}></DropDownMenu>

                    </div>

                    <div>

                        <label>Date</label>
                        <input type="date" />

                    </div>

                </div>


                <Button content="Submit"></Button>

            </form>

            <button className='closeButton'>

                <IoClose />

            </button>

        </div>


    );

};


export default TodoForms;