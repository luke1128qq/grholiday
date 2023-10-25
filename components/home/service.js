import React from "react";
import styles from "@/styles/home/service.module.css";

export default function Service({ title, src }) {
    return (
        <div className={styles.box}>
            <div className={styles.circle} style={{ backgroundImage: `url(${src})` }}>
            </div>
            <div className={styles.text}>{title}</div>
        </div>
    );
}
