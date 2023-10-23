import Head from "next/head";
import Image from "next/image";
import Carousel1 from "../../components/home/carousel1";
import CardArea from "../../components/home/cardArea";
import NavbarBS from "../../components/layout/navbarBS";
import Footer from "../../components/layout/footer";
import styles from "@/styles/home/home.module.css";
import { BsCarFrontFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";

export default function Home() {
    const [FS, setFS] = useState(28);

    const changeFontSize = () => {
        setFS((prev) => (prev == 28 ? 36 : 28));
        setTimeout(changeFontSize, 1000);
    };

    useEffect(() => {
        changeFontSize();
    }, []);

    return (
        <>
            <Head>
                <title>川流旅行社</title>
            </Head>
            <NavbarBS />
            <Carousel1 />

            <div className={styles.cardTitle}>
                <BsCarFrontFill style={{ fontSize: FS, marginTop: "5px" }} />
                熱門行程推薦
                <BsCarFrontFill style={{ fontSize: FS, marginTop: "5px" }} />
            </div>

            <div className={`container ${styles.cardArea}`}>
                <CardArea />
            </div>
            <Footer />
        </>
    );
}
