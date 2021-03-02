import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        className,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange
        let newValue = e.currentTarget.value
        if (onChangeOption) {
            onChangeOption(newValue)
        }
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + "-" + i} className={o === value ? `${s.checked} ${s.label}` : s.label}>
            <input className={s.input}
                   type={"radio"}
                   name={name} value={o} onChange={onChangeCallback}
                   checked={o === value}
            />
            {o}
        </label>
    )) : [];
    let finalStyles;
    className ? finalStyles = `${s.super_radio} ${className}` : finalStyles = s.super_radio
    return (
        <div className={finalStyles}>
            {mappedOptions}
        </div>
    );
}

export default SuperRadio;
