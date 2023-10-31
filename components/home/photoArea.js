import React from "react";
import styles from "@/styles/home/photoArea.module.css";

export default function PhotoArea() {
    return (
        <div className={styles.photoArea}>
            <div className={styles.card}>
                <div className={styles.cardImg}>
                    <img src="/traveling/man01.jpg" alt="image"/>
                </div>
                <div className={styles.cardText}>好棒好棒好棒</div>
            </div>
        </div>
    );
}
