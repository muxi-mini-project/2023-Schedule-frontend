// import baseMap from "../../img/Todolist/basemap.png";
// import paper from "../../img/Todolist/paper.png";
// import greenBook from "../../img/Todolist/GreenBook.png";

//import LoadingAnimetion from '../../components/LoadingAnimation/LoadingAnimation';
import TodolistOuterContent from "../../components/TodolistOuterContent/TodolistOuterContent";
import "./TodoList.css";


const TodoList = () => {
    if(window.innerWidth > window.innerHeight){
        return(
            <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
        );
    }
    else{
        return (
            <div className="base">
                <div className="view">
                    <div className="view-box">
                        <div className="view-content">
                            <img alt='' src={"https://s2.loli.net/2023/03/17/Wmx9ACG6g7cUjBP.png"} className="baseMap" />
                            <img alt='' src={"https://s2.loli.net/2023/03/17/p5CSDjWPfwLBt6o.png"} className="paper" />
                            <TodolistOuterContent/>
                            <img alt='' src={"https://s2.loli.net/2023/03/17/HXISFte58bDVmPj.png"} className="greenBook" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;