import DropDownMenuProps from '../../types/DropDownMenuProps';
import './DropDownMenu.css'

const DropDownMenu = ({options}: DropDownMenuProps) => {

    return (

            <select className='DropDownMenu' name="" id="">
                {options.map((item) => {
                    return <option value="">{item}</option>;
                })}
            </select>

    );

};


export default DropDownMenu; 