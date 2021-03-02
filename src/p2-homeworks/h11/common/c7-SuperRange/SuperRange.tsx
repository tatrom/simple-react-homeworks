import React, { DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./SuperRange.module.css";
import Slider from '@material-ui/core/Slider';


// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
export type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    // const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     onChange && onChange(e); // сохраняем старую функциональность
    //
    //     onChangeRange && onChangeRange(+e.currentTarget.value);
    // }

    // const finalRangeClassName = `${s.range} ${className ? className : ""}`;
    const onChangeCallback = (event: any, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number);
    };
    return (
        <>{
            <div className={s.slider}>
                <Slider value={restProps.value} onChange={onChangeCallback}
                        aria-labelledby="aria-label"/>
            </div>
        }

        </>
    );
}

export default SuperRange;
