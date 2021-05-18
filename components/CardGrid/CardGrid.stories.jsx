import React from "react";

import CardGrid from "./CardGrid"

    const details = [
        {
            title: "Something",
            cover: "https://external-preview.redd.it/HGIQhnYk7AwKaZX5MGNHHGZulQACcDzrHdnii5wGfoA.jpg?auto=webp&s=2e4c995a50b5df491fd9464148a1dd4e63517295",
            description: "asdsdsads das das das d as das das da"
        },
        {
            title: "Something",
            cover: "https://images-na.ssl-images-amazon.com/images/I/51S6jRDsn8L.jpg",
            description: "asdsdsads das das das d as das das da"
        },
        {
            title: "Something",
            cover: "https://images-na.ssl-images-amazon.com/images/I/51S6jRDsn8L.jpg",
            description: "asdsdsads das das das d as das das da"
        },
        {
            title: "Something",
            cover: "https://external-preview.redd.it/HGIQhnYk7AwKaZX5MGNHHGZulQACcDzrHdnii5wGfoA.jpg?auto=webp&s=2e4c995a50b5df491fd9464148a1dd4e63517295",
            description: "asdsdsads das das das d as das das da"
        },
        {
            title: "Something",
            cover: "https://images-na.ssl-images-amazon.com/images/I/51S6jRDsn8L.jpg",
            description: "asdsdsads das das das d as das das da"
        },
        {
            title: "Something",
            cover: "https://images-na.ssl-images-amazon.com/images/I/51S6jRDsn8L.jpg",
            description: "asdsdsads das das das d as das das da"
        },
        {
            title: "Something",
            cover: "https://external-preview.redd.it/HGIQhnYk7AwKaZX5MGNHHGZulQACcDzrHdnii5wGfoA.jpg?auto=webp&s=2e4c995a50b5df491fd9464148a1dd4e63517295",
            description: "asdsdsads das das das d as das das da"
        },
        {
            title: "Something",
            cover: "https://images-na.ssl-images-amazon.com/images/I/51S6jRDsn8L.jpg",
            description: "asdsdsads das das das d as das das da"
        },
        {
            title: "Something",
            cover: "https://images-na.ssl-images-amazon.com/images/I/51S6jRDsn8L.jpg",
            description: "asdsdsads das das das d as das das da"
        },
    ];

export default {
    title: "Cards/CardGrid",
    component: CardGrid,
};

const Template = (args) => <CardGrid details={details} {...args}/>;

export const Default = Template.bind({});

