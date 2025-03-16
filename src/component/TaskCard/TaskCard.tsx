import './TaskCard.css'
import { TiPencil } from "react-icons/ti";
import { FaTrashCan } from "react-icons/fa6";
import task from '../../types/Task';
import { useState } from 'react';


interface taskProps {

    task: task,
    onDelete: (id: number) => void,
    setRenderUpdateForms : React.Dispatch<React.SetStateAction<boolean>> ,
    tasks: task[], 
    setTask: React.Dispatch<React.SetStateAction<task[]>>,
    setCurrentId: React.Dispatch<React.SetStateAction<number | null>>,
 

}

const TaskCard = ({task, onDelete, setRenderUpdateForms, setCurrentId, tasks, setTask} : taskProps) => {

    const [taskCompleted, setTaskCompleted] = useState<boolean>(false);

    return (

        
        <div className={`taskCard ${ taskCompleted && 'completed-task'}`}>

            <div className='taskCard-left'>

                <input type="checkbox" onChange={() => {
                setTask(tasks.map((t) => {
                    if (t.id === task.id) {
                        return { ...t, completed: !t.completed };
                    }
                    return t;
                }));
                setTaskCompleted(!taskCompleted);
                }}/>
                
                <div className='taskCard-left__content'>

                    <div>{task.description}</div>
                    <div>{task.priority}</div>

                </div>

            </div>

            <div className='taskCard-right'>

                <div className='taskCard-right__icons'>

                    <TiPencil className='pencil' onClick={() => {
                        setRenderUpdateForms(true);
                        setCurrentId(task.id)}}/>
                    <FaTrashCan className='trash_can' onClick={() => onDelete(task.id)}/>

                </div>


                <div>{task.date}</div>

            </div>

        </div>

    );

};

export default TaskCard; 