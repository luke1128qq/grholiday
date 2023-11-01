import React, { useState } from "react";
import styles from "@/styles/home/photoArea.module.css";

export default function PhotoArea() {
    const photoList = [
        { src: "/traveling/man01.jpg", text: "好棒好棒好棒" },
        { src: "/traveling/man01.jpg", text: "好棒好棒好棒" },
        { src: "/traveling/man01.jpg", text: "好棒好棒好棒" },
        { src: "/traveling/man01.jpg", text: "好棒好棒好棒" },
        { src: "/traveling/man01.jpg", text: "好棒好棒好棒" },
        { src: "/traveling/man01.jpg", text: "好棒好棒好棒" },
        { src: "/traveling/man01.jpg", text: "好棒好棒好棒" },
        { src: "/traveling/man01.jpg", text: "好棒好棒好棒" },
        { src: "/traveling/man01.jpg", text: "好棒好棒好棒" },
        { src: "/traveling/man01.jpg", text: "好棒好棒好棒" },
    ];
    return (
        <div className={styles.photoArea}>
            <div className={styles.photoBox}>
                {photoList.map((v, i) => {
                    return (
                        <div className={styles.card} key={`photo${i}`}>
                            <div className={styles.cardImg}>
                                <img src={v.src} alt="image" />
                            </div>
                            <div className={styles.cardText}>{v.text}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
