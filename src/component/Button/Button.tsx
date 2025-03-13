import ButtonProps from '../../types/ButtonProps';
import './Button.css'

const Button = ({content, handleClick}: ButtonProps) => {

    return (

        <>
            <button className='button'>{content}</button>
        </>

    )

};

export default Button; 