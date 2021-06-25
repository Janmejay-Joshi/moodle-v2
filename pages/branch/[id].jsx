//import { useRouter } from 'next/router';
//import { useState } from 'react';

import Header from '../../components/Header';
import CardGrid from '../../components/CardGrid';

import styles from '../../styles/Home.module.scss';

const Post = ({ initialData }) => {
    const data = initialData;

    /*
    const router = useRouter();
    const { id } = router.query;

    //    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(initialData);
    const fetchData = async () => {
        setIsLoading(true);
        const res = await fetch(`https://7qoju2.deta.dev/fetch/${id}`)
            .then((res) => res.json())
            .catch((rejected) => {
                console.log(rejected);
            });

        setData(res);
        setIsLoading(false);
    };
    const handleClick = async () => {
        fetchData();
    };
    */

    const today = new Date();
    const old = new Date(data.last_updated);
    let difference = Math.round((today.getTime() - old.getTime()) / (1000 * 60));
    difference =
        difference > 60 ? `${Math.round(difference / 60)} Hours ${difference % 60} minutes` : `${difference} minutes`;

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.update}>
                        Last Fetched Assignments <span>{difference}</span> ago.
                    </div>
                </div>
                <main className={styles.main}>
                    <CardGrid details={data.data.assignments} />
                </main>
            </div>
        </>
    );
};

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://7qoju2.deta.dev/cached/${params.id}`);
    const initialData = await res.json();
    return {
        props: {
            initialData,
        },
    };
}
export default Post;
