import taskProps from '../../types/TaskProps';
import TaskCard from '../TaskCard/TaskCard';
import './TaskList.css';

// Define a interface para as props do componente
interface TaskListProps {
  tasks: taskProps[]; // tasks é um array de taskProps
}

// Recebe as props como um objeto
const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div className='taskContainer'>
      {tasks.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;