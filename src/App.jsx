import baseLayer from './img/home page/base layer.png';
import bulletinBoard from './img/home page/bulletin board.png';
import calendar from './img/home page/calendar.png';
import garbageCan from './img/home page/garbage can.png';
import paperAirplane from './img/home page/paper airplane.png';
import pottedPlant from './img/home page/potted plant.png';
import todoList from './img/home page/todo list.png';
import './App.css';


export default function App(){
    if(window.innerWidth > window.innerHeight){
        return(
            <div className="hint"><h2>請將螢幕轉為縱向或使用手機檢視並重整頁面</h2></div>
        );
    }
    else{
        return(
            <div className="view">
                <img src={baseLayer} className="baseLayer"/>
                <img src={bulletinBoard} className="bulletinBoard item"/>
                <img src={calendar} className="calendar item"/>
                <img src={garbageCan} className="garbageCan item"/>
                <img src={paperAirplane} className="paperAirplane item"/>
                <img src={pottedPlant} className="pottedPlant item"/>
                <img src={todoList} className="todoList item"/>
            </div>
        );
    }    
}