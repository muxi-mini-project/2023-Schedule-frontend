import { Link } from 'react-router-dom';
import BGM from 'react-awesome-snippets-bgm';
import TodolistBGM from '../../assets/bgm/TodoList.mp3';
import TodolistOuterContent from "../../components/TodolistOuterContent/TodolistOuterContent";
import LoadingAnimetion from '../../components/LoadingAnimation/LoadingAnimation';
import "./TodoList.css";


const TodoList = () => {
    if (window.innerWidth > window.innerHeight) {
        return (
            <div className="hint"><h2>请将萤幕转为纵向或使用手机检视并重整页面</h2></div>
        );
    }
    else {
        return (
            <div className="base">
                <BGM src={TodolistBGM} loop={true} autoplay={true}></BGM>
                <div className="view">
                    <div className="view-box">
                        <div className="view-content">
                            <img alt='' src={"https://s2.loli.net/2023/03/17/Wmx9ACG6g7cUjBP.png"} className="baseMap" />
                            <img alt='' src={"https://s2.loli.net/2023/03/17/p5CSDjWPfwLBt6o.png"} className="paper" />
                            <TodolistOuterContent />
                            <img alt='' src={"https://s2.loli.net/2023/03/17/HXISFte58bDVmPj.png"} className="greenBook" />
                            <h2 className="todo-hint">hint: 编辑完日程记得按回车键噢</h2>
                        </div>
                    </div>
                    <Link to='/HomePage'><img src="https://s2.loli.net/2023/03/19/ub3vaky7ULtnH9E.png" className='turnback2' alt="返回" /></Link>
                </div>
                <LoadingAnimetion />
            </div>
        );
    }
}

export default TodoList;