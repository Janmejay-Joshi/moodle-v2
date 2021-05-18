import { useState } from "react";
import Link from "next/link";

import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import CardGrid from "../components/CardGrid";

import styles from "../styles/Home.module.scss";

export default function Home({ initialData }) {
    const [data, setData] = useState(initialData);

    const fetchData = async () => {
        const req = await fetch("http://127.0.0.1:5000/");
        console.log(req);
        const newData = await req.json();
        setData(newData);
    };

    const handleClick = (event) => {
        event.preventDefault();
        fetchData();
    };
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.head}>
                    <Link href="/air_a">
                        <div className={styles.branch}>
                            <a>AIR Group A</a>
                        </div>
                    </Link>
                    <Link href="/air_b">
                        <div className={styles.branch}>
                            <a>AIR Group B</a>
                        </div>
                    </Link>
                </div>
                <main className={styles.main}></main>
            </div>
        </>
    );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch("http://127.0.0.1:5000/");
    const initialData = await res.json();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            initialData,
        },
    };
}
