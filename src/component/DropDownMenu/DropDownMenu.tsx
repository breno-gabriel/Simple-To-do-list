import DropDownMenuProps from '../../types/DropDownMenuProps';
import './DropDownMenu.css'


const DropDownMenu = ({options, register, name}: DropDownMenuProps) => {

    return (

            <select className='DropDownMenu' {...(register ? register(name) : {})}>
                {options.map((item) => {
                    return <option 
                    value={item}
                    key={item}
                    >{item}</option>;
                })}
            </select>

    );

};


export default DropDownMenu; 