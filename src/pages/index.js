import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/home.module.css";
import Dashboard from "../../components/layout/dashboard";
import Carousel1 from "../../components/home/carousel1";
import CardArea from "../../components/home/cardArea";

export default function Home() {
    return (
        <>
            <Head>
                <title>川流旅行社</title>
            </Head>
            <Dashboard />
            <Carousel1 />

            <div className="container">
                <CardArea />
            </div>
            <div>2023優惠行程</div>
            <div className="d-flex"></div>
            <div>23</div>
        </>
    );
}
