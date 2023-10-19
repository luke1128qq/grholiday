import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/home.module.css";
import Dashboard from "../../components/layout/dashboard";
import { Carousel } from "react-bootstrap";

export default function Home() {
    const carouselList = [
        { src: "/travelImg/japan01.jpg", alt: "slide", text: "First Slide" },
        { src: "/travelImg/japan02.jpg", alt: "slide", text: "Second Slide" },
        { src: "/travelImg/japan03.jpg", alt: "slide", text: "Third Slide" },
    ];
    return (
        <>
            <Head>
                <title>川流旅行社</title>
            </Head>
            <Dashboard />

            {/* bootstrap輪播牆 */}
            <Carousel className={`${styles.carousel}`}>
                {carouselList.map((v, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <img src={v.src} alt={v.alt} />
                            <Carousel.Caption>
                                <h3>{v.text}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>

            <div className={`${styles.container} container`}>
                <div>23</div>
            </div>
        </>
    );
}
