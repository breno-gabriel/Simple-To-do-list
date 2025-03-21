import { useEffect, useState } from 'react';
import taskProps from '../../types/Task';
import TaskCard from '../TaskCard/TaskCard';
import './TaskList.css';
import TodoForms from '../TodoForms.tsx/TodoForms';
import FormData from '../../types/formData';
import task from '../../types/Task';

interface TaskListProps {
  tasks: taskProps[]; 
  onDelete: (id : number) => void; 
  setTask: React.Dispatch<React.SetStateAction<task[]>>,

}

const TaskList = ({ tasks, onDelete, setTask }: TaskListProps) => {

  const [renderUpdateForms, setRenderUpdateForms] = useState<boolean>(false);
  const [cuurentId, setCurrentId] = useState<number | null>(null);
  const [completed, setCompleted] = useState<boolean>(false); 

  useEffect(() => {


    setTask(tasks.map((task) => {
      if (task.id === cuurentId) {
        return { ...task, completed: completed };
      }
      return task;
    }));

    console.log(tasks);

  }, [completed]);

  const handleRenderUpdateForms = () => {
    

    setRenderUpdateForms(!renderUpdateForms); 

  }

  const handleUpdateTask = (data: FormData) => {

    setTask(tasks.map((task) => {
      if (task.id === cuurentId) {
        return { ...task, ...data };
      }
      return task;
    }));

    handleRenderUpdateForms();

  };

  return (
    <div className='taskContainer'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={onDelete} setRenderUpdateForms={setRenderUpdateForms} setCurrentId={setCurrentId} tasks={tasks} setTask = {setTask}/>
      ))}
      {renderUpdateForms && <TodoForms title="What you will update ?!" handleOnSubmit={handleUpdateTask} handleRenderForms={handleRenderUpdateForms}></TodoForms>}
    </div>
  );
};

export default TaskList;