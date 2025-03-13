import taskProps from '../../types/TaskProps';
import TaskCard from '../TaskCard/TaskCard';
import './TaskList.css'

const TaskList = (tasks : taskProps[]) => {

    return (

        <div className='taskContainer'>
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
        </div>

    );

};


export default TaskList; 