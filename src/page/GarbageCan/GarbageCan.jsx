import baseLayer from '../../img/GarbageCan/BaseLayer.png';
import crumpledPaper from '../../img/GarbageCan/CrumpledPaper.png';
import GarbageCanContentOuterBox from '../../components/GarbageCanContentOuterBox/GarbageCanContentOuterBox';

import { useState } from "react";
import './GarbageCan.css';
import { useEffect } from 'react';


const GarbageCan = () => {
    const [monthT, setMonthT] = useState(0);
    const [monthD, setMonthD] = useState(0);
    const [dateT, setDateT] = useState(0);
    const [dateD, setDateD] = useState(0);
    useEffect(() => {
        let time = new Date();
        console.log(time.getMonth(),time.getDate())
        if (time.getMonth() + 1 < 10) { setMonthT(0); setMonthD(time.getMonth() + 1); }
        else if (time.getMonth() + 1 >= 10) { setMonthT(1); setMonthD(time.getMonth() + 1 - 10); }
        if (time.getDate() < 10) { setDateT(0); setDateD(time.getDate()); }
        else if (time.getDate() + 1 >= 10) { setDateT(parseInt(time.getDate() / 10)); setDateD(time.getDate() % 10); }
    }, []);

    if (window.innerWidth > window.innerHeight) {
        return (
            <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
        );
    }
    else {
        let bodyStyle = document.body.style;
        bodyStyle.zoom = window.innerWidth / 750;

        let monthF = monthT * 10 + monthD;
        let dateF = dateT * 10 + dateD;

        return (
            <div className="view">
                <img alt='' src={baseLayer} className="baseLayer2" />
                <img alt='' src={crumpledPaper} className="crumpledPaper" />
                <GarbageCanContentOuterBox monthF={monthF} dateF={dateF} />
                <input type="text" className="tenDigitsOfTheMonth pastTime" Value={monthT} onChange={(e) => {setMonthT(e)}}></input>
                <input type="text" className="singleDigitOfTheMonth pastTime" Value={monthD} onChange={(e) => {setMonthD(e)}}></input>
                <input type="text" className="tenDigitsOfTheDate pastTime" Value={dateT} onChange={(e) => {setDateT(e)}}></input>
                <input type="text" className="singleDigitOfTheDate pastTime" Value={dateD} onChange={(e) => {setDateD(e)}}></input>
            </div>
        );
    }
}

export default GarbageCan;