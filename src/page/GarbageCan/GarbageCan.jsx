// import baseLayer from '../../img/GarbageCan/BaseLayer.png';
// import crumpledPaper from '../../img/GarbageCan/CrumpledPaper.png';

//import LoadingAnimetion from '../../components/LoadingAnimation/LoadingAnimation';
import GarbageCanContentOuterBox from '../../components/GarbageCanContentOuterBox/GarbageCanContentOuterBox';
import {getRecycleBin} from "../../api/fetch";
import { useState, useEffect } from "react";
import './GarbageCan.css';


const GarbageCan = () => {
    const [monthT, setMonthT] = useState(0);
    const [monthD, setMonthD] = useState(0);
    const [dateT, setDateT] = useState(0);
    const [dateD, setDateD] = useState(0);
    const [month, setMonth] = useState(0);
    const [date, setDate] = useState(0);

    const [pastTodos, setPastTodos] = useState([]);


    useEffect(() => {
        let time = new Date();
        if (time.getMonth() + 1 < 10) {
            setMonthT(0); 
            setMonthD(time.getMonth() + 1);
            setMonth(0 * 10 + time.getMonth() + 1)
        }
        else if (time.getMonth() + 1 >= 10) { 
            setMonthT(1); 
            setMonthD(time.getMonth() + 1 - 10); 
            setMonth(1 * 10 + time.getMonth() + 1 - 10)
        }
        if (time.getDate() < 10) { 
            setDateT(0); 
            setDateD(time.getDate()); 
            setDate(0 * 10 + time.getDate())
        }
        else if (time.getDate() + 1 >= 10) { 
            setDateT(parseInt(time.getDate() / 10)); 
            setDateD(time.getDate() % 10); 
            setDate(parseInt(time.getDate() / 10) * 10 + time.getDate() % 10)
        }
    }, []);

    useEffect(() => {
        const time = new Date();
        if(monthD!==''||monthT!==''||dateD!==''||dateT !== ''){
            getRecycleBin("calendar", time.getFullYear(), month, date)
                .then((res) => {setPastTodos(res.schedule);});
        }
    }, [month,date])
    
    const changeMonth1 = (e) => {
        if(e.target.value !== ''){
            setMonthT(parseInt(e.target.value))
            setDate(parseInt(e.target.value) * 10 + monthD)
        }
        else setMonthT(e.target.value)
    }
    const changeMonth2 = (e) => {
        if(e.target.value !== ''){
            setMonthD(parseInt(e.target.value))
            setDate(monthD * 10 + parseInt(e.target.value))
        }
        else setMonthD(e.target.value)
    }
    const changeDay1 = (e) => {
        if(e.target.value !== ''){
            setDateT(parseInt(e.target.value))
            setDate(parseInt(e.target.value) * 10 + dateD)
        }
        else setDateT(e.target.value)
    }
    const changeDay2 = (e) => {
        if(e.target.value !== ''){
            setDateD(parseInt(e.target.value))
            setDate(dateT * 10 + parseInt(e.target.value))
        }
        else setDateD(e.target.value)
    }

    if(window.innerWidth > window.innerHeight){
        return(
            <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
        );
    }
    else{
        return(
            <div className="view">
                <div className="view-box">
                    <div className="view-content">
                        <img alt='' src={"https://s2.loli.net/2023/03/17/oPcgSR1I9fOq8ZJ.png"} className="baseLayer2" />
                        <img alt='' src={"https://s2.loli.net/2023/03/17/yrUk1sm3JNp8Id7.png"} className="crumpledPaper" />
                        <img alt='' src={"https://s2.loli.net/2023/03/17/V2kFoedr5wmfHix.png"} className="NewDate" />
                        <GarbageCanContentOuterBox pastTodos={pastTodos}/>
                        <input type="text"  className="tenDigitsOfTheMonth pastTime" value={monthT} onChange={changeMonth1}></input>
                        <input type="text"  className="singleDigitOfTheMonth pastTime" value={monthD} onChange={changeMonth2}></input>
                        <input type="text" className="tenDigitsOfTheDate pastTime" value={dateT} onChange={changeDay1}></input>
                        <input type="text" className="singleDigitOfTheDate pastTime" value={dateD} onChange={changeDay2}></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default GarbageCan;