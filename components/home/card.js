import React from "react";
import styles from "@/styles/home/card.module.css";
import { useRouter } from "next/router";

export default function Card({ src, alt }) {
    const router = useRouter();

    return (
        <button
            className={`card col-3 m-4 ${styles.card}`}
            onClick={() => {
                router.push("/");
            }}
        >
            <img
                src={src}
                className={`card-img-top ${styles.cardImg}`}
                alt="..."
            />
            <div
                className={`card-body d-flex justify-content-center ${styles.cardText}`}
            >
                <p className="card-text me-2 ms-3">
                    {alt.length > 28 ? alt.slice(0, 28) + "..." : alt}
                </p>
            </div>
        </button>
    );
}
