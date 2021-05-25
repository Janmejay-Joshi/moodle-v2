import { useRouter } from "next/router";
import { useState } from "react";

import Header from "../../components/Header";
import CardGrid from "../../components/CardGrid";

import styles from "../../styles/Home.module.scss";

const Post = ({ initialData }) => {
    const router = useRouter();
    const { id } = router.query;

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(initialData);

    const fetchData = async () => {
        setIsLoading(true);
        const res = await fetch(`https://moodle-api.vercel.app/fetch/${id}`)
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
};

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: "air_a" } },
            { params: { id: "air_b" } },
            { params: { id: "ece" } },
        ],
        fallback: false, // See the "fallback" section below
    };
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://moodle-api.vercel.app/cached/${params.id}`);
    const initialData = await res.json();
    return {
        props: {
            initialData,
        },
    };
}
export default Post;
