import React from "react";
import styles from "@/styles/home/areaTitle.module.css";
import { BsCarFrontFill } from "react-icons/bs";
import { ImAirplane } from "react-icons/im";

export default function AreaTitle({ icon, title, inline }) {
    const selectedIcon =
        icon === "car" ? (
            <BsCarFrontFill style={{ fontSize: 23, marginTop: "5px" }} />
        ) : (
            <ImAirplane style={{ fontSize: 23, marginTop: "5px" }} />
        );

    return (
        <div className={styles.areaBody}>
            <div className={styles.areaTitle}>
                {selectedIcon}
                {title}
                {selectedIcon}
            </div>
            <p className={styles.areaInline}>{inline}</p>
        </div>
    );
}
