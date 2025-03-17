type DropDownMenuProps = {

    options: string[],
    value?: string, 
    onChange?: (value: string) => void,
    onBlur?: () => void;


}

export default DropDownMenuProps;