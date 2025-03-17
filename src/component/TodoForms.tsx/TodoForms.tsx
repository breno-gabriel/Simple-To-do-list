import Button from '../Button/Button';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import './TodoForms.css';
import { IoClose } from "react-icons/io5";
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import FormData from '../../types/formData';

type FormProps = {
    title: string;
    handleOnSubmit: (data: FormData) => void;
    handleRenderForms: () => void;
};

const TodoForms = ({ title, handleOnSubmit, handleRenderForms }: FormProps) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            description: '',
            priority: 'High',
        },
    });

    return (
        <div className='todoForms'>
            <h2>{title}</h2>

            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <div className='todoForms-description'>
                    <label htmlFor="description">Type the description</label>
                    <input
                        type="text"
                        {...register('description', { required: 'Description is required' })}
                    />
                    {errors.description && (
                        <span className="error-message">{errors.description.message}</span>
                    )}
                </div>

                <div className='todoForms-options'>
                    <div>
                        <label>Priority</label>
                        <Controller
                            name="priority"
                            control={control}
                            render={({ field }) => (
                                <DropDownMenu
                                    {...field}
                                    options={["High", "Medium", "Low"]}
                                />
                            )}
                        />
                        {errors.priority && (
                            <span className="error-message">{errors.priority.message}</span>
                        )}
                    </div>

                    <div>
                        <label>Date</label>
                        <input
                            type="date"
                            {...register('date', { required: 'Date is required' })}
                        />
                        {errors.date && (
                            <span className="error-message">{errors.date.message}</span>
                        )}
                    </div>
                </div>

                <Button content="Submit" />
            </form>

            <button className='closeButton' onClick={handleRenderForms}>
                <IoClose />
            </button>
        </div>
    );
};

export default TodoForms;