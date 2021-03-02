import {Meta, Story} from "@storybook/react";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import SuperDoubleRange from "../p2-homeworks/h11/common/c8-SuperDoubleRange/SuperDoubleRange";

export default {
    title: 'sliders/SuperDoubleRange'
} as Meta



export const SuperDoubleRangeExample = () => {
    const [value1, setValue1] = useState(0)
    const [value2,setValue2] = useState(10)
    function onChangeRange(value: [number, number]) {
        setValue1(value[0])
        setValue2(value[1])
    }
    return <SuperDoubleRange value={[value1, value2] as string & [number, number]} onChangeRange={onChangeRange} min={0} max={100}/>
}
