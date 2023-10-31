import React from "react";
import styles from "@/styles/layout/footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div>川流國際旅行社</div>
            <div className="my-auto">
                <div>聯絡地址：104 台北市中山北路二段102號4樓之1</div>
                <div>聯絡電話：02-2508-2888 / 傳真：02-2500-0777</div>
                <div>客服信箱：service@grholiday.com.tw </div>
            </div>

            <div className="my-auto">
                <div>代表人：游文章 </div>
                <div> 交觀甲 6181號</div>
                <div>品保北 1188號</div>
            </div>

            <div className={styles.line}>
                <div className=" my-auto p-2">Line@：@ojk7760f</div>
                <img src="/traveling/line.jpg" alt="image" />
            </div>
        </div>
    );
}
