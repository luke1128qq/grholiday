import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "@/styles/home/carousel1.module.css";

export default function Carousel1() {
    const carouselList = [
        {
            src: "/traveling/japan01.jpg",
            alt: "slide",
        },
        {
            src: "/traveling/japan02.jpg",
            alt: "slide",
        },
        {
            src: "/traveling/japan03.jpg",
            alt: "slide",
        },
    ];
    return (
        <>
            <Carousel className={styles.carousel}>
                {carouselList.map((v, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <img src={v.src} alt={v.alt} />
                            <div className={styles.carouselTextBox}>
                                <div className={styles.carouselTitle}>
                                    來一場令人難忘的旅行
                                </div>
                                <div className={styles.carouselText}>
                                    好人你幫幫人民的啦
                                    為基金福利會設護叫天主善的啦
                                    聯合國把雞爆加你們聯合國
                                    洨敬白布雞使喚唷際甘草精華雄沒醉不女人
                                </div>
                            </div>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </>
    );
}
