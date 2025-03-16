import Button from '../Button/Button';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import './TodoForms.css';
import { IoClose } from "react-icons/io5";
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import FormData from '../../types/formData';



const TodoForms = () => {

    const { register, handleSubmit, control } = useForm<FormData>({
        defaultValues: {
          description: '', 
          priority: '', 
        },
      });
    const onSubmit: SubmitHandler<FormData> = (data : FormData) => {

        console.log(data);

    };

    return (

        <div  className='todoForms'>
        
            <h2>What the new task?</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                
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
                        {/* <DropDownMenu 
                        options={["Hight", "Medium","Low"]}
                        register={register}
                        name='priority'
                        >
                        </DropDownMenu> */}
                        <Controller
                            name="priority"
                            control={control}
                            render={({ field }) => (
                                <DropDownMenu 
                                    {...field}
                                    options={["Hight", "Medium","Low"]}
                                />
                            )}
                        />
                        

                    </div>

                    <div>

                        <label>Date</label>
                        <input 
                        type="date"
                        {...register('date', {required: true})} 
                        />

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