import { UseFormRegister } from "react-hook-form";

type DropDownMenuProps = {

    options: string[],
    register?: UseFormRegister<any>,
    name : string

}

export default DropDownMenuProps;