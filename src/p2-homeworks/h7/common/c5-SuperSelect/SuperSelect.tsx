import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import s from './SuperSelect.module.css'
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    className?: string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        className,
        ...restProps
    }
) => {
    const mappedOptions: any[] =  options ? options.map((option, i) => <option key={i} >{option}</option>):[]; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
         const newValue = e.currentTarget.value
            if (onChangeOption) {
                onChangeOption(newValue)
            }
    }
    let finalStyles: string;
    className ? finalStyles = `${className} ${s.select}` : finalStyles = s.select
    return (
        <select className={finalStyles} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
