import baseMap from "../../img/Todolist/basemap.png";
import paper from "../../img/Todolist/paper.png";
import greenBook from "../../img/Todolist/GreenBook.png";

import TodolistOuterContent from "../../components/TodolistOuterContent/TodolistOuterContent";
import "./TodoList.css";


const TodoList = () => {
    if(window.innerWidth > window.innerHeight){
        return(
            <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
        );
    }
    else{
        let bodyStyle = document.body.style;
        bodyStyle.zoom = window.innerWidth/750;

        return (
            <div className="base">
                <div className="view">
                    <img alt='' src={baseMap} className="baseMap" />
                    <img alt='' src={paper} className="paper" />
                    <TodolistOuterContent/>
                    <img alt='' src={greenBook} className="greenBook" />
                </div>
            </div>
        );
    }
}

export default TodoList;