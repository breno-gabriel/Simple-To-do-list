import React from 'react';
import './DropDownMenu.css';
import DropDownMenuProps from '../../types/DropDownMenuProps';

const DropDownMenu = ({ options, value, onChange, onBlur } : DropDownMenuProps) => {
    return (
        <select
            className='DropDownMenu'
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            onBlur={onBlur}
        >
            {options.map((item) => (
                <option value={item} key={item}>
                    {item}
                </option>
            ))}
        </select>
    );
};

export default DropDownMenu;