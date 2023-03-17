// import baseMap from "../../img/Todolist/basemap.png";
// import paper from "../../img/Todolist/paper.png";
// import greenBook from "../../img/Todolist/GreenBook.png";

import TodolistOuterContent from "../../components/TodolistOuterContent/TodolistOuterContent";
import $ from 'jquery';
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
        $(window).on("load",function(){
            $(".loader-wrapper").fadeOut("slow");
        });

        return (
            <div className="base">
                <div className="view">
                    <img alt='' src={"https://s2.loli.net/2023/03/17/Wmx9ACG6g7cUjBP.png"} className="baseMap" />
                    <img alt='' src={"https://s2.loli.net/2023/03/17/p5CSDjWPfwLBt6o.png"} className="paper" />
                    <TodolistOuterContent/>
                    <img alt='' src={"https://s2.loli.net/2023/03/17/HXISFte58bDVmPj.png"} className="greenBook" />
                </div>
                <div class="loader-wrapper">
                    <span class="loader"><span class="loader-inner"></span></span>
                </div>
            </div>
        );
    }
}

export default TodoList;