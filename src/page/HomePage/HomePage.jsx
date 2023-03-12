import baseLayer from '../../img/HomePage/BaseLayer.png';
import bulletinBoard from '../../img/HomePage/BulletinBoard.png';
import calendar from '../../img/HomePage/Calendar.png';
import garbageCan from '../../img/HomePage/GarbageCan.png';
import paperAirplane from '../../img/HomePage/PaperAirplane.png';
import pottedPlant from '../../img/HomePage/PottedPlant.png';
import todoList from '../../img/HomePage/TodoList.png';

import {getJSON} from '../../api/fetch';
import {Link, useNavigate} from "react-router-dom";
import './HomePage.css';


const HomePage = () => {
    let navigate = useNavigate();

    if(window.innerWidth > window.innerHeight){
        return(
            <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
        );
    }
    else{
        let bodyStyle = document.body.style;
        bodyStyle.zoom = window.innerWidth/750;

        getJSON("index", 0).then((res) => {if(res.code !== 200) navigate("/");});

        let time = new Date();
        let month = time.getMonth()+1;
        let date = time.getDate();
        let timing = month + '.' + date;

        return(
            <div className="view">
                <img alt='' src={baseLayer} className="baseLayer"/>
                <Link to="/BulletinBoard"><img alt='' src={bulletinBoard} className="bulletinBoard"/></Link>
                <Link to="/Calendar">
                    <img alt='' src={calendar} className="calendar item"/>
                    <input type="text" className="timing" defaultValue={timing}></input>
                </Link>
                <Link to="/GarbageCan"><img alt='' src={garbageCan} className="garbageCan item"/></Link>
                <img alt='' src={paperAirplane} className="paperAirplane item"/>
                <img alt='' src={pottedPlant} className="pottedPlant1 item"/>
                <Link to="/TodoList"><img alt='' src={todoList} className="todoList item"/></Link>
            </div>
        );
    }
}

export default HomePage;