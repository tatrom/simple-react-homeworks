import {Meta, Story} from "@storybook/react";
import React, {useState} from "react";
import SuperRange, {SuperRangePropsType} from "../p2-homeworks/h11/common/c7-SuperRange/SuperRange";
import {action} from "@storybook/addon-actions";

export default {
    title: 'sliders/SuperRange'
} as Meta


export const SuperRangeExample = () => {
    const [value, setValue] = useState(0)
    return <SuperRange value={value} onChangeRange={setValue}/>
}
