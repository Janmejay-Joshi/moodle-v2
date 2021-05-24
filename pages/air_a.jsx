import { useState, useEffect } from "react";

import Header from "../components/Header";
import CardGrid from "../components/CardGrid";

import styles from "../styles/Home.module.scss";

export default function Home({ initialData }) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(initialData);

    const fetchData = async () => {
        setIsLoading(true);
        const res = await fetch("http://127.0.0.1:5000/fetch/AIR_A")
            .then((res) => res.json())
            .catch((rejected) => {
                console.log(rejected);
            });

        setData(res);
        setIsLoading(false);
    };
    const handleClick = async () => {
        event.preventDefault();
        fetchData();
    };
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.head}>
                    <button onClick={handleClick}>
                        {isLoading ? "Loading ..." : data.last_updated}
                    </button>
                </div>
                <main className={styles.main}>
                    <CardGrid details={data.data.assignments} />
                </main>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch("http://127.0.0.1:5000/AIR_A");
    const initialData = await res.json();
    return {
        props: {
            initialData,
        },
    };
}
