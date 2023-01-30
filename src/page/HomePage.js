import baseLayer from '../img/home page/BaseLayer.png';
import bulletinBoard from '../img/home page/BulletinBoard.png';
import calendar from '../img/home page/Calendar.png';
import garbageCan from '../img/home page/GarbageCan.png';
import paperAirplane from '../img/home page/PaperAirplane.png';
import pottedPlant from '../img/home page/PottedPlant.png';
import todoList from '../img/home page/TodoList.png';
import {Link} from "react-router-dom";
import '../App.css';


const HomePage = () => {
    if(window.innerWidth > window.innerHeight){
        return(
            <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
        );
    }
    else{
        return(
            <div className="view">
                <Link to="/baseLayer"><img alt='' src={baseLayer} className="baseLayer"/></Link>
                <Link to="/bulletinBoard"><img alt='' src={bulletinBoard} className="bulletinBoard item"/></Link>
                <Link to="/calendar"><img alt='' src={calendar} className="calendar item"/></Link>
                <Link to="/garbageCan"><img alt='' src={garbageCan} className="garbageCan item"/></Link>
                <Link to="/paperAirplane"><img alt='' src={paperAirplane} className="paperAirplane item"/></Link>
                <Link to="/pottedPlant"><img alt='' src={pottedPlant} className="pottedPlant item"/></Link>
                <Link to="/TodoList"><img alt='' src={todoList} className="todoList item"/></Link>
            </div>
        );
    }
}

export default HomePage;