import DropDownMenuProps from '../../types/DropDownMenuProps';
import './DropDownMenu.css'

const DropDownMenu = ({options}: DropDownMenuProps) => {

    return (

        <form className='DropDownMenu'>
            <select name="" id="">
                {options.map((item) => {
                    return <option value="">{item}</option>;
                })}
            </select>
        </form>

    );

};


export default DropDownMenu; 