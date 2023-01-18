import baseLayer from '../img/home page/base layer.png';
import bulletinBoard from '../img/home page/bulletin board.png';
import calendar from '../img/home page/calendar.png';
import garbageCan from '../img/home page/garbage can.png';
import paperAirplane from '../img/home page/paper airplane.png';
import pottedPlant from '../img/home page/potted plant.png';
import todoList from '../img/home page/todo list.png';
import {Link} from "react-router-dom";
import '../App.css';


const homePage = (props) => {
    if(window.innerWidth > window.innerHeight){
        return(
            <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
        );
    }
    else{
        return(
            <>
                <nav>
                    <div className="view">
                        <Link to="/baseLayer"><img src={baseLayer} className="baseLayer"/></Link>
                        <Link to="/bulletinBoard"><img src={bulletinBoard} className="bulletinBoard item"/></Link>
                        <Link to="/calendar"><img src={calendar} className="calendar item"/></Link>
                        <Link to="/garbageCan"><img src={garbageCan} className="garbageCan item"/></Link>
                        <Link to="/paperAirplane"><img src={paperAirplane} className="paperAirplane item"/></Link>
                        <Link to="/pottedPlant"><img src={pottedPlant} className="pottedPlant item"/></Link>
                        <Link to="/todoList"><img src={todoList} className="todoList item"/></Link>
                    </div>
                </nav> 
                { props.children }
            </>
        );
    }
}