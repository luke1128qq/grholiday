import React from "react";
import styles from "@/styles/dashboard.module.css";

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <div>海外旅遊</div>
            <div>國內旅遊</div>
            <div>航空訂票</div>
            <div>代辦台胞證</div>
            <div>自由行專區</div>
        </div>
    );
}
