import React from "react";
import styles from "@/styles/home/areaTitle.module.css";
import { BsCarFrontFill } from "react-icons/bs";
import { ImAirplane } from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";

export default function AreaTitle({ icon, title, inline }) {
    const selectedIcon = () => {
        if (icon === "car") {
            return (
                <BsCarFrontFill style={{ fontSize: 23, marginTop: "5px" }} />
            );
        } else if (icon === "airplane") {
            return <ImAirplane style={{ fontSize: 23, marginTop: "5px" }} />;
        } else if (icon === "people") {
            return <FaPeopleGroup style={{ fontSize: 23, marginTop: "5px" }} />;
        } else {
            return null;
        }
    };

    return (
        <div className={styles.areaBody}>
            <div className={styles.areaTitle}>
                {selectedIcon()}
                {title}
                {selectedIcon()}
            </div>
            <p className={styles.areaInline}>{inline}</p>
        </div>
    );
}
