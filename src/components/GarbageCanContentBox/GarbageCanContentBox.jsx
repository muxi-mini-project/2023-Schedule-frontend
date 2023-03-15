import check from '../../img/GarbageCan/Check2.png';
import line from '../../img/GarbageCan/line2.png';
import checkBox from '../../img/GarbageCan/CheckBox2.png';

import {getRecycleBin} from "../../api/fetch";
import {useState} from "react";
import './GarbageCanContentBox.css';


function PastTodolistItem(todo){
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
    const [pastTodos, setPastTodos] = useState([
        {
            "Year": 2023,
            "Month": 3,
            "Day": 15,
            "UserId": "2022214207",
            "Content": "228922",
            "Done": true,
            "SchId": "0"
        }
    ]);
    let date = new Date();
    getRecycleBin("calendar", date.getFullYear(), monthF.monthF.monthF, monthF.monthF.dateF)
        .then((res) => {setPastTodos(res.schedule);});

    return(
        <div className="GarbageCanContentBox">
            <div className="GarbageCanContent">
                {pastTodos.map(todo => {
                    return(
                        <PastTodolistItem todo={todo}/>
                    );
                })}
            </div>
        </div>
    );
}

export default GarbageCanContentBox;