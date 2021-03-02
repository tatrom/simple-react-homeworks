import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import HW12 from "../p2-homeworks/h12/HW12";
import {ThemeSwitcherDecorator} from "./decorators/ThemeSwitcherDecorator";


export default {
    title: 'HW12',
    component: HW12,
    decorators: [ThemeSwitcherDecorator],
} as Meta;

const Template: Story = (args) => <HW12/>

export const ThemeSwitcherDarExample = Template.bind({})
ThemeSwitcherDarExample.args = {};

