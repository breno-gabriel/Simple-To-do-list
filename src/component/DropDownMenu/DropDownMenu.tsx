import DropDownMenuProps from '../../types/DropDownMenuProps';
import './DropDownMenu.css'


const DropDownMenu = ({options, value, onChange, onBlur}: DropDownMenuProps) => {

    return (

            <select 
            className='DropDownMenu'
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            onBlur={onBlur}>
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