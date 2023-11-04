import React, { useState, useEffect } from "react";
import styles from "@/styles/home/home.module.css";
import Image from "next/image";
import Head from "next/head";
import Carousel1 from "../../components/home/carousel1";
import Card from "../../components/home/card";
import Service from "../../components/home/service";
import AreaTitle from "../../components/home/areaTitle";
import PhotoArea from "../../components/home/photoArea";

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

    const serviceList = [
        { title: "專人代訂機票", src: "/traveling/service01.jpg" },
        { title: "快速申辦台胞證", src: "/traveling/service02.jpg" },
        { title: "客製化尊榮行程", src: "/traveling/service03.jpg" },
    ];

    return (
        <>
            <Head>
                <title>川流旅行社</title>
            </Head>
            <Carousel1 />

            <div className={styles.middleArea}>
                <AreaTitle
                    icon={"car"}
                    title={"熱門行程推薦"}
                    inline={"2023精選特賣會,獨家安排意想不到的專屬行程"}
                />

                <div className="container">
                    <div className="d-flex row justify-content-center">
                        {cardList.map((v, i) => {
                            return (
                                <Card
                                    src={v.src}
                                    alt={v.alt}
                                    key={`card${i}`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <AreaTitle
                icon={"airplane"}
                title={"票券簽證服務"}
                inline={"在國際情勢與兩岸關係不停變動之際為您整理好最新資訊"}
            />

            <div className={styles.serviceArea}>
                {serviceList.map((v, i) => {
                    return (
                        <Service
                            title={v.title}
                            src={v.src}
                            key={`service${i}`}
                        />
                    );
                })}
            </div>

            <div className={styles.buttomArea}>
                <AreaTitle
                    icon={"people"}
                    title={"值得您信賴的好夥伴"}
                    inline={"資深旅遊從業人員幫您解決各項疑難雜症"}
                />
                <PhotoArea />
            </div>
        </>
    );
}
