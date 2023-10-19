import React, { useState } from "react";
import styles from "@/styles/dropdown.module.css";

export default function Dropdown({ title }) {
    const [show, setShow] = useState(false);

    return (
        <div
            className={styles.ulContainer}
            onMouseOver={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {title}
            {show ? (
                <ul
                    className={styles.ul}
                    onMouseOver={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                >
                    <li>
                        <a>1</a>
                    </li>
                    <li>
                        <a>2</a>
                    </li>
                    <li>
                        <a>3</a>
                    </li>
                    <li>
                        <a>4</a>
                    </li>
                    <li>
                        <a>5</a>
                    </li>
                </ul>
            ) : (
                <></>
            )}
        </div>
    );
}
