import check from '../../img/GarbageCan/Check2.png';
import line from '../../img/GarbageCan/line2.png';
import checkBox from '../../img/GarbageCan/CheckBox2.png';

import {getRecycleBin} from "../../api/fetch";
import {useState} from "react";
import './GarbageCanContentBox.css';


function pastTodolistItem(props){
    const todo = props

    return(
        <div className="pastItemBox" >
            <div className="pastCheckBox">
                <img src={check} alt="" className={`pastCheck ${todo.Done? "a" : "b"}`}/>
                <label className="pastCheckLabel" htmlFor={todo.SchId}>
                    <img src={checkBox} alt="" />
                </label>
            </div>
            <div className="pastInputBox">
                <input type="text" className={`pastTodo pastDescriptionInput ${todo.Done? "done":""}`} defaultValue={todo.Content}/>
                <div className="pastLine">
                    <img src={line} alt="" />
                </div>
            </div>
        </div>
    );
}


const GarbageCanContentBox = (monthF, dateF) => {
    const [pastTodos, setPastTodos] = useState([]);
    let date = new Date();
    getRecycleBin("crash", date.getFullYear(), monthF, dateF)
        .then((res) => {setPastTodos(res.schedule);});    

    return(
        <div className="GarbageCanContentBox">
            <div className="GarbageCanContent">
                {pastTodos.map(todo => {
                    return(
                        <pastTodolistItem todo={todo}/>
                    );
                })}
            </div>
        </div>
    );
}

export default GarbageCanContentBox;