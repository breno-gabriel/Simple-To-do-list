import taskProps from '../../types/Task';
import TaskCard from '../TaskCard/TaskCard';
import './TaskList.css';

// Define a interface para as props do componente
interface TaskListProps {
  tasks: taskProps[]; // tasks é um array de taskProps
  onDelete: (id : number) => void; 
}

// Recebe as props como um objeto
const TaskList = ({ tasks, onDelete }: TaskListProps) => {
  return (
    <div className='taskContainer'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={() => onDelete(task.id)} />
      ))}
    </div>
  );
};

export default TaskList;