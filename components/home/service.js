import React from "react";
import styles from "@/styles/home/service.module.css";

export default function Service({ title, src }) {
    return (
        <div>
            <div>{title}</div>
            <div className={styles.circle}>
                <img src={src} ale="image" className={styles.img} />
            </div>
        </div>
    );
}
