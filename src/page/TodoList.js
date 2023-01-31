import baseMap from "../img/todo list/basemap.png";
import check from "../img/todo list/check.png";
import checkBox from "../img/todo list/CheckBox.png";
import paper from "../img/todo list/paper.png";
import "./TodoList.css";


const todoList = () => {
    return(
        <div className="view">
            <img alt='' src={baseMap} className="baseMap"/>
            <img alt='' src={paper} className="paper"/>
            <img alt='' src={checkBox} className="checkBox"/>
            <img alt='' src={check} className="check1"/>
            <img alt='' src={check} className="check2"/>
            <img alt='' src={check} className="check3"/>
            <img alt='' src={check} className="check4"/>
            <img alt='' src={check} className="check5"/>
            <input className="todo1 todo"></input>
            <input className="todo2 todo"></input>
            <input className="todo3 todo"></input>
            <input className="todo4 todo"></input>
            <input className="todo5 todo"></input>
        </div>
    );
}

export default todoList;