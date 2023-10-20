import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "@/styles/carousel1.module.css";

export default function Carousel1() {
    const carouselList = [
        {
            src: "/travelImg/japan01.jpg",
            alt: "slide",
            text: "好人你幫幫人民的啦",
        },
        {
            src: "/travelImg/japan02.jpg",
            alt: "slide",
            text: "為基金福利會設護教天主善的啦",
        },
        {
            src: "/travelImg/japan03.jpg",
            alt: "slide",
            text: "聯合國把雞爆家你們聯合國",
        },
    ];
    return (
        <>
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
        </>
    );
}
