import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {Slider} from "@material-ui/core";
import s from './SuperDoubleRange.module.css'


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number
    max: number

    // disable: () => void
    // min, max, step, disable, ...
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        max, min,
        // min, max, step, disable, ...
    }
) => {

    const handleSliderChange = (event: any, newValue: number | number[]) => {
        if (typeof (newValue) !== 'number') {
            onChangeRange && onChangeRange([newValue[0], newValue[1]]);
        }

    };

    function valuetext(value: number) {
        return `${value}`;
    }

    // сделать самому, можно подключать библиотеки

    return (
        <div className={s.superDoubleRange}>
            DoubleRange
            <Slider
                value={value}
                onChange={handleSliderChange}
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
            />
        </div>
    );
}

export default SuperDoubleRange;
