import { useState } from "react";
import Link from "next/link";

import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import CardGrid from "../components/CardGrid";

import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.head}>
                    <Link href="/branch/air_a">
                        <div className={styles.branch}>
                            <a>AIR Group A</a>
                        </div>
                    </Link>
                    <Link href="/branch/air_b">
                        <div className={styles.branch}>
                            <a>AIR Group B</a>
                        </div>
                    </Link>
                    <Link href="/branch/ece">
                        <div className={styles.branch}>
                            <a>ECE</a>
                        </div>
                    </Link>
                </div>
                <main className={styles.main}></main>
            </div>
        </>
    );
}
