import React, {useEffect, useState} from 'react'
import flatpickr from 'flatpickr'
import {useNavigate} from "react-router-dom";
import './SelectTime.css'

export default function SelectTime (){

    const[year,setYear]=useState('');
    const[month,setMonth]=useState('');
    const[day,setDay]=useState('')
    let navigate = useNavigate();

    const submitTime = () => {
        navigate(`/BulletinBoard?year=${year}&month=${month}&day=${day}`);
    }

    useEffect(()=>{ flatpickr("#myID",{})},[]);

    // Firefox, Google Chrome, Opera, Safari, Internet Explorer from version 9
    function onInputHandler(event){
        const newYear = event.target.value[0] + event.target.value[1] + event.target.value[2] +event.target.value[3];
        setYear(newYear);
        const newMonth = event.target.value[5] + event.target.value[6];
        setMonth(newMonth);
        const newDay = event.target.value[8] + event.target.value[9];
        setDay(newDay);
    }

    if(window.innerWidth > window.innerHeight){
        return(
            <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
        );
    }
    else{
        let bodyStyle = document.body.style;
        bodyStyle.zoom = window.innerWidth/750;

        return(
            <div className="view">
                <div className="view-box">
                    <div className="view-content">
                        <div className='body3'>
                            <div id='font'> 请输入你想查看的照片时间:</div>
                            <input id='myID' onInput={onInputHandler} /><br />
                            <button onClick={submitTime} className='button'>确认</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}