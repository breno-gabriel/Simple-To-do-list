import taskProps from '../../types/TaskProps';
import './TaskCard.css'
import { TiPencil } from "react-icons/ti";
import { FaTrashCan } from "react-icons/fa6";


const TaskCard = () => {

    return (

        <div className='taskCard'>

            <div className='taskCard-left'>

                <input type="checkbox"/>
                
                <div className='taskCard-left__content'>

                    <div>Descrição tarefa</div>
                    <div>Alta</div>

                </div>

            </div>

            <div className='taskCard-right'>

                <div className='taskCard-right__icons'>

                    <TiPencil className='pencil'/>
                    <FaTrashCan className='trash_can'/>

                </div>


                <div>20/03/2024</div>

            </div>

        </div>

    );

};

export default TaskCard; 