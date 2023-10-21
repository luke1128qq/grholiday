import Head from "next/head";
import Image from "next/image";
import Carousel1 from "../../components/home/carousel1";
import CardArea from "../../components/home/cardArea";
import NavbarBS from "../../components/layout/navbarBS";

export default function Home() {
    return (
        <>
            <Head>
                <title>川流旅行社</title>
            </Head>
            <NavbarBS />
            <Carousel1 />

            <div className="container">
                <CardArea />
            </div>
        </>
    );
}
