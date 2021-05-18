import React from "react";

import Card from "./Card";

export default {
    title: "Cards/Card",
    component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
