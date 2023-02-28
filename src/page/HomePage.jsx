import baseLayer from '../img/HomePage/BaseLayer.png';
import bulletinBoard from '../img/HomePage/BulletinBoard.png';
import calendar from '../img/HomePage/Calendar.png';
import garbageCan from '../img/HomePage/GarbageCan.png';
import paperAirplane from '../img/HomePage/PaperAirplane.png';
import pottedPlant from '../img/HomePage/PottedPlant.png';
import todoList from '../img/HomePage/TodoList.png';
import {Link} from "react-router-dom";
import './HomePage.css';


const HomePage = () => {
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
                <img alt='' src={baseLayer} className="baseLayer"/>
                <Link to="/bulletinBoard"><img alt='' src={bulletinBoard} className="bulletinBoard"/></Link>
                <Link to="/calendar"><img alt='' src={calendar} className="calendar item"/></Link>
                <Link to="/garbageCan"><img alt='' src={garbageCan} className="garbageCan item"/></Link>
                <Link to="/paperAirplane"><img alt='' src={paperAirplane} className="paperAirplane item"/></Link>
                <img alt='' src={pottedPlant} className="pottedPlant1 item"/>
                <Link to="/TodoList"><img alt='' src={todoList} className="todoList item"/></Link>
            </div>
        );
    }
}

export default HomePage;