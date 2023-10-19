import React from "react";
import styles from "@/styles/dashboard.module.css";
import Dropdown from "./dropdown.js";

export default function Dashboard() {
    const option = [
        {
            title: "海外旅遊",
        },
        {
            title: "國內旅遊",
        },
        {
            title: "航空訂票",
        },
        {
            title: "代辦台胞證",
        },
        {
            title: "自由行專區",
        },
    ];
    return (
        <>
            <div className="d-flex w-100" style={{ height: "350px" }}>
                <div className={styles.dashboard}>
                    {option.map((v, i) => {
                        return <Dropdown title={v.title} key={`option-${i}`} />;
                    })}
                </div>
                <div style={{ margin: "auto" }}>
                    <img src="/travelImg/title.png" alt="title"></img>
                </div>
            </div>
        </>
    );
}
