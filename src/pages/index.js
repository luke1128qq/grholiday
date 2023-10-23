import React, { useState, useEffect } from "react";
import { BsCarFrontFill } from "react-icons/bs";
import { ImAirplane } from "react-icons/im";
import styles from "@/styles/home/home.module.css";
import Image from "next/image";
import Head from "next/head";
import NavbarBS from "../../components/layout/navbarBS";
import Footer from "../../components/layout/footer";
import Carousel1 from "../../components/home/carousel1";
import Card from "../../components/home/card";
import Service from "../../components/home/service";
import AreaTitle from "../../components/home/areaTitle";

export default function Home() {
    const cardList = [
        {
            src: "/traveling/card1.jpg",
            alt: "【日本】北海道5日遊：破冰船體驗 三大蟹吃到飽 日式溫泉五星級飯店",
        },
        {
            src: "/traveling/card2.jpg",
            alt: "【印度】印北7日遊：泰姬瑪哈陵參訪 恆河聖水自助吧 水療三溫暖",
        },
        {
            src: "/traveling/card3.jpg",
            alt: "【台灣】媽祖環島3日遊：北港朝天宮 台中鎮瀾宮 南投紫南宮",
        },
        {
            src: "/traveling/card4.jpg",
            alt: "【台灣】媽祖環島3日遊：北港朝天宮 台中鎮瀾宮 南投紫南宮",
        },
        {
            src: "/traveling/card5.jpeg",
            alt: "【台灣】媽祖環島3日遊：北港朝天宮 台中鎮瀾宮 南投紫南宮",
        },
        {
            src: "/traveling/card6.jpg",
            alt: "【台灣】媽祖環島3日遊：北港朝天宮 台中鎮瀾宮 南投紫南宮",
        },
        {
            src: "/traveling/card5.jpeg",
            alt: "【台灣】媽祖環島3日遊：北港朝天宮 台中鎮瀾宮 南投紫南宮",
        },
        {
            src: "/traveling/card6.jpg",
            alt: "【台灣】媽祖環島3日遊：北港朝天宮 台中鎮瀾宮 南投紫南宮",
        },
    ];

    return (
        <>
            <Head>
                <title>川流旅行社</title>
            </Head>
            <NavbarBS />
            <Carousel1 />

            <AreaTitle
                icon={"car"}
                title={"熱門行程推薦"}
                inline={"2023精選特賣會,獨家安排意想不到的專屬行程"}
            />

            <div className={`container ${styles.cardArea}`}>
                <div className="d-flex row justify-content-center">
                    {cardList.map((v, i) => {
                        return (
                            <Card src={v.src} alt={v.alt} key={`card${i}`} />
                        );
                    })}
                </div>
            </div>

            <AreaTitle
                icon={"airplane"}
                title={"機票簽證服務"}
                inline={"資深旅遊從業人員為您提供專業且親切的服務"}
            />
            <Service />

            <Footer />
        </>
    );
}
