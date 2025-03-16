import './TaskCard.css'
import { TiPencil } from "react-icons/ti";
import { FaTrashCan } from "react-icons/fa6";
import taskProps from '../../types/TaskProps';


const TaskCard = (task : taskProps) => {

    return (

        <div className='taskCard'>

            <div className='taskCard-left'>

                <input type="checkbox"/>
                
                <div className='taskCard-left__content'>

                    <div>{task.description}</div>
                    <div>{task.priority}</div>

                </div>

            </div>

            <div className='taskCard-right'>

                <div className='taskCard-right__icons'>

                    <TiPencil className='pencil'/>
                    <FaTrashCan className='trash_can'/>

                </div>


                <div>{task.date}</div>

            </div>

        </div>

    );

};

export default TaskCard; 