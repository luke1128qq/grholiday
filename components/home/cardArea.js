import React from "react";
import styles from "@/styles/home/cardArea.module.css";
import { useRouter } from "next/router";

export default function CardArea() {
    const router = useRouter();

    const cardList = [
        {
            src: "/traveling/card1.jpg",
            alt: "【日本】北海道5日遊：破冰船體驗 三大蟹吃到飽 日式溫泉五星級飯店",
        },
        {
            src: "/traveling/card2.jpg",
            alt: "【印度】印北7日遊：泰姬瑪哈陵參訪 恆河聖水自助吧 水療三溫暖",
        },
        {
            src: "/traveling/card3.jpg",
            alt: "【台灣】媽祖環島3日遊：北港朝天宮 台中鎮瀾宮 南投紫南宮",
        },
        {
            src: "/traveling/card4.jpg",
            alt: "【台灣】媽祖環島3日遊：北港朝天宮 台中鎮瀾宮 南投紫南宮",
        },
        {
            src: "/traveling/card5.jpeg",
            alt: "【台灣】媽祖環島3日遊：北港朝天宮 台中鎮瀾宮 南投紫南宮",
        },
        {
            src: "/traveling/card6.jpg",
            alt: "【台灣】媽祖環島3日遊：北港朝天宮 台中鎮瀾宮 南投紫南宮",
        },
    ];

    return (
        <div className="d-flex row justify-content-center">
            {cardList.map((v, i) => {
                return (
                    <>
                        <button
                            className={`card col-4 m-4 ${styles.card}`}
                            key={i}
                            onClick={() => {
                                router.push("/");
                            }}
                        >
                            <img
                                src={v.src}
                                className={`card-img-top ${styles.cardImg}`}
                                alt="..."
                            />
                            <div
                                className={`card-body d-flex justify-content-center ${styles.cardText}`}
                            >
                                <p className="card-text me-2 ms-3">
                                    {v.alt.length > 26
                                        ? v.alt.slice(0, 26) + "..."
                                        : v.alt}
                                </p>
                            </div>
                        </button>
                    </>
                );
            })}{" "}
        </div>
    );
}
