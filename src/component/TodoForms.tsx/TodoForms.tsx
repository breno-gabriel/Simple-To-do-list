import Button from '../Button/Button';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import './TodoForms.css';
import { IoClose } from "react-icons/io5";
import { useForm } from 'react-hook-form';

type FormData = {

    description: string, 
    date: Date, 
    priority: string 

}

const TodoForms = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

    const onSubmit = (data : FormData) => {

        console.log(data);

    };

    return (

        <div  className='todoForms'>
        
            <h2>What the new task?</h2>

            <form>
                
                <div className='todoForms-description'>

                    <label htmlFor="">Type the description</label>
                    <input 
                    type="text"
                    {...register('description', {required: true})} 
                    />

                </div>

                <div className='todoForms-options'>

                    <div>

                        <label>Priority</label>
                        <DropDownMenu 
                        options={["Hight", "Medium","Low"]}
                        register={register}
                        name='priority'
                        >
                        </DropDownMenu>

                    </div>

                    <div>

                        <label>Date</label>
                        <input 
                        type="date"
                        {...register('date', {required: true})} 
                        />

                    </div>

                </div>


                <Button content="Submit" handleClick={handleSubmit(onSubmit)}></Button>

            </form>

            <button className='closeButton'>

                <IoClose />

            </button>

        </div>


    );

};


export default TodoForms;